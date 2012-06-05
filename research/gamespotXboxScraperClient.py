import urllib
from lxml import html
from time import sleep
import traceback
import ipdb
import sys
import json
import gmail
from elixir import *
import pickle
import os
import datetime

import socket
socket.setdefaulttimeout(30)


"""
host = '127.0.0.1'
metadata.bind = "mysql://root:root@%s/gamespot" % (host)
metadata.bind.echo = False

#ipdb.set_trace()
class GameData(Entity):
  href = Field(Unicode(255), primary_key=True)
  filename = Field(Unicode(50))
  completed = Field(Boolean, default=False)
  in_progress = Field(Boolean, default=False)
  time_started = Field(DateTime, default=None)
  time_completed = Field(DateTime, default=None)
  page_num = Field(Integer, default=0)

setup_all()
create_all()
"""


def get_url(url, depth=0):
  if depth == 10:
    gmail.send("gamespot problems.", "8473540309@txt.att.net")
  try:
    sleep(5)
    if url.find("http://www.gamespot.com") == -1:
      url = "http://www.gamespot.com" + url
    f = urllib.urlopen(url)
    return f
  except:
    return get_url(url, depth+1)


def page_url(num):
  return "&page=" + str(num)


def return_gamespot_review(url, just_return_review=False):
  try:
    f = get_url(url)

    review = ""
    comments = ""
    gamespot_score = ""
    gamespot_score_word = ""
    metacritic_score = ""
    metacritic_reviews = ""
    metacritic_reviews_link = ""
    ret = {}

    page = html.parse(f)
    root = page.getroot()

    review = []
    review.append(html.tostring(root.cssselect("#main")[0]))
    #print review[0]

    if just_return_review:
      return review[0]

    # check if review has multiple pages
    if len(root.cssselect("#main .pageNav")) > 0:
      # get the number of pages to scrap
      review_links = root.cssselect("#main .pageNav .pages li a")
      for r in review_links:
        review.append(return_gamespot_review("http://www.gamespot.com" + r.get("href"), just_return_review=True))

    gamespot_score = root.cssselect("#side")[0].cssselect("li.editor_score span.data")[0].text_content()
    gamespot_score_word = root.cssselect("#side")[0].cssselect("li.editor_score span.scoreword")[0].text_content()
    if root.cssselect("#side")[0].cssselect("li.review_score span.more")[0].text_content() != "No Reviews":
      #print "Metacritic reviews found"
      metacritic_score = root.cssselect("#side")[0].cssselect("li.review_score span.scoreWrap a")[0].text_content()
      metacritic_reviews = root.cssselect("#side")[0].cssselect("li.review_score span.more span")[0].text_content()
      metacritic_reviews_link = root.cssselect("#side")[0].cssselect("li.review_score span.scoreWrap a")[0].get("href")
    else:
      #print "No metacritic reviews"
      metacritic_score = "No Reviews"
      metacritic_reviews = "No Reviews"
      metacritic_reviews_link = "No Reviews"


    comments = root.cssselect("ul#comments_list li.comment")
    comments = [html.tostring(c) for c in comments]
    # check to see if there are more pages of comments
    if len(root.cssselect("#post_comment .pagination")) > 0:
      # get number of comments
      nav = root.cssselect("#post_comment .pagination")[0]
      num_pages = int(nav.cssselect("ul.pages li.last a")[0].text_content())
      for i in range(num_pages-1):
        link = nav.cssselect(".page_flipper a")[0]

        # parse the parameters for the comments pagination manually
        rel = str(link.get("rel"))
        j = rel.find(" nofollow")
        rel = rel[0:j]
        rel = rel.replace("{", "")
        rel = rel.replace("}", "")
        rel = rel.replace("'", "")
        rel = rel.split(",")
        params = {}
        for r in rel:
          r = r.split(":")
          params[r[0]] = r[1]
        params = urllib.urlencode(params)

        href = "http://www.gamespot.com/pages/ajax/load_comments.php?page=" + str(i+1)
        try:
          f = urllib.urlopen(href, params)
        except:
          traceback.print_exc()
          ipdb.set_trace()

        #ipdb.set_trace()
        response = json.loads(f.read())
        new_comments = html.fromstring(response['template'])
        for c in new_comments.cssselect("ul#comments_list li.comment"):
          comments.append(html.tostring(c))

    """
    print review
    print gamespot_score
    print gamespot_score_word
    print metacritic_score
    print metacritic_reviews
    print metacritic_reviews_link
    print comments
    """

    #ipdb.set_trace()
    #gamespot_score = page.cssselect("#id.

    ret['review'] = review
    ret['comments'] = comments
    ret['gamespot_score'] = gamespot_score
    ret['gamespot_score_word'] = gamespot_score_word
    ret['metacritic_score'] = metacritic_score
    ret['metacritic_reviews'] = metacritic_reviews
    ret['metacritic_reviews_link'] = metacritic_reviews_link
    #@TODO parse gamespot review & comments

    return ret

  except:
    traceback.print_exc()
    gmail.send("exception!", "8473540309@txt.att.net")
    ipdb.set_trace()

  return ret

#return_gamespot_review("http://www.gamespot.com/grand-theft-auto-iii-10-year-anniversary-edition/reviews/grand-theft-auto-iii-10-year-anniversary-edition-review-6347882")
#sys.exit(0)

def download_user_review(url):
  try:
    f = get_url(url)

    page = html.parse(f)
    root = page.getroot()

    if len(root.cssselect("div.error404")) > 0:
      #print url + " 404'ed"
      return {}

    meta = html.tostring(root.cssselect("#player_review div.body div.user_reviews")[0])
    #@TODO parse meta
    if len(root.cssselect("#player_score_details div.body dl.review_details")) > 0:
      score_details = html.tostring(root.cssselect("#player_score_details div.body dl.review_details")[0])
    else:
      score_details = "No Details"
    body = html.tostring(root.cssselect("#player_review_body")[0])

    ret = {}
    ret['meta'] = meta
    ret['score_details'] = score_details
    ret['body'] = body
    #@TODO parse body
    ret['url'] = url
    return ret

    #ipdb.set_trace()
  except:
    traceback.print_exc()
    gmail.send("exception!", "8473540309@txt.att.net")
    ipdb.set_trace()

def get_reviews(url):
  try:
    f = get_url(url)

    page = html.parse(f)
    root = page.getroot()

    # check for user reviews
    #ipdb.set_trace()
    #if html.tostring(page).find("Be the First to tell the world what you think of ") != -1:
    user_reviews = [] 
    if len(root.cssselect("#main .userReviewsModule")) == 0:
      #print "No user reviews!"
      user_reviews = None
    else:
      root = page.getroot()
      main = root.cssselect("#main .userReviewsModule")[0]
      review_links = main.cssselect("a.continue")
      for r in review_links:
        if r.text_content() == "Read the Review":
          # download the user review here
          #print r.get("href")
          user_reviews.append(download_user_review(r.get("href")))
          #print "User review: ", ret

      #ipdb.set_trace()
      #print "DO SOMETHING!!"

    # check for gamespot reviews
    review_box = root.cssselect(".navItem.reviewsNavItem.navItemOpen.navItemActive")[0]
    # ensure this is actually the review box
    if html.tostring(review_box).find("Reviews") == -1:
      print "Encountered wrong box for user reviews."
      ipdb.set_trace()

    gamespot_review = None
    if html.tostring(review_box).find("GameSpot Review") != -1:
      elements = review_box.cssselect("a.subNavItemAction")
      for e in elements:
        if html.tostring(e).find("GameSpot Review") != -1:
          gamespot_review_url = e.get("href")
          gamespot_review = return_gamespot_review(gamespot_review_url)
          #print "Found a gamespot review at ", gamespot_review_url, gamespot_review
          break

    #import ipdb
    #ipdb.set_trace()
    #print html.tostring(page)
    return gamespot_review, user_reviews

  except:
    traceback.print_exc()
    gmail.send("exception!", "8473540309@txt.att.net")
    ipdb.set_trace()

#get_reviews("http://www.gamespot.com/slot-racing-hd/user-reviews/platform/iphone")
#get_reviews("http://www.gamespot.com/fathead/user-reviews/platform/iphone")
#get_reviews("http://www.gamespot.com/cheeseman/user-reviews/platform/iphone")

#import sys
#sys.exit(0)

# get the number of pages

def get_metadata_and_reviews(url):
  try:
    f = get_url(url)

    page = html.parse(f)
    root = page.getroot()

    if html.tostring(root).find("404 - Page Not Found") != -1:
      #print "Gamespot gave a 404 for this page."
      return None, None, None

    # get list of platforms
    platforms = [e.text_content() for e in root.cssselect("#main ul.platformFilter li") if e.text_content() != 'All Platforms']

    # scrape the game details
    details_url = "http://www.gamespot.com" + root.cssselect("#mini .mini_col_wrap div.contentNav ul.contentNav .summaryNavItem ul.contentSubNav li.techinfoSubNavItem div.subNavItemWrap a")[0].get("href")
    f = urllib.urlopen(details_url)
    details_page = html.parse(f)
    details_root = details_page.getroot()
    details = html.tostring(details_root.cssselect("#techInfo dl.game_info")[0])
    # @TODO parse publisher, developer, release date, ESRB, ESRB descriptors, official site
    metadata = {}
    metadata['details'] = details
    metadata['platforms'] = platforms

    # get reviews link, pass to get_reviews to see what happens
    reviews_url = "http://www.gamespot.com" + root.cssselect("#mini .mini_col_wrap div.contentNav ul.contentNav li.reviewsNavItem div.navItemWrap a")[0].get("href")
    gamespot_review, user_reviews = get_reviews(reviews_url)

    # get related games under category related games, might need to iterate through pages of related games
    related_games_url = "http://www.gamespot.com" + root.cssselect("#mini .mini_col_wrap div.contentNav ul.contentNav .summaryNavItem ul.contentSubNav li.relatedSubNavItem div.subNavItemWrap a")[0].get("href")
    f = get_url(related_games_url)
    page = html.parse(f)
    root = page.getroot()
    related_games = [html.tostring(l) for l in root.cssselect("#main .listModule.gamesModule .body div.games ol.games li")]
    metadata['related_games'] = related_games

    same_universe_url = "http://www.gamespot.com" + root.cssselect("#main div.relatedGamesNav div.relatedGamesNavWrap div.navItems ol.navItems li.universeNavItem a")[0].get('href')
    f = get_url(same_universe_url)
    page = html.parse(f)
    root = page.getroot()
    same_universe = [html.tostring(l) for l in root.cssselect("#main .listModule.gamesModule .body div.games ol.games li")]
    metadata['same_universe'] = same_universe
    
    whatnot = {}
    whatnot['metadata'] = metadata
    whatnot['gamespot_review'] = gamespot_review
    whatnot['user_reviews'] = user_reviews

    return metadata, gamespot_review, user_reviews

  except Exception as e:
    traceback.print_exc()
    gmail.send("exception!", "8473540309@txt.att.net")
    ipdb.set_trace()


#metadata, gamespot_review, user_reviews = get_metadata_and_reviews(href)

#gamespot = "http://www.gamespot.com/"

# this is going to run on the client
import xmlrpclib
proxy = xmlrpclib.ServerProxy("http://research.seanneilan.com:80/")

global_password = "JalvOcGik"

next_url = proxy.get_a_url(global_password) # loop and a half! hooray!
while next_url != False:
  print "Next url is: " + next_url
  whatnot = get_metadata_and_reviews(next_url)
  p = pickle.dumps(whatnot)
  b = xmlrpclib.Binary(p)
  proxy.commit_data(global_password, next_url, b)
  print "Completed " + next_url
  next_url = proxy.get_a_url(global_password)

