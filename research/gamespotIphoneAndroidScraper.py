import urllib
from lxml import html
from time import sleep
import traceback
import ipdb
import sys
import json


def page_url(num):
  return "&page=" + str(num)

def return_gamespot_review(url, just_return_review=False):
  try:
    if url.find("http://www.gamespot.com") == -1:
      url = "http://www.gamespot.com" + url
    f = urllib.urlopen(url)
  except:
    traceback.print_exc()
    ipdb.set_trace()

  review = []
  comments = ""
  gamespot_score = ""
  gamespot_score_word = ""
  metacritic_score = ""
  metacritic_reviews = ""
  metacritic_reviews_link = ""
  ret = {}

  try:
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

  except:
    traceback.print_exc()
    ipdb.set_trace()

  return ret

#return_gamespot_review("http://www.gamespot.com/grand-theft-auto-iii-10-year-anniversary-edition/reviews/grand-theft-auto-iii-10-year-anniversary-edition-review-6347882")
#return_gamespot_review("http://www.gamespot.com/gears-of-war-3/reviews/gears-of-war-3-review-6334586")
#sys.exit(0)

def download_user_review(url):
  try:
    if url.find("http://www.gamespot.com") == -1:
      url = "http://www.gamespot.com" + url
    f = urllib.urlopen(url)
  except:
    traceback.print_exc()
    ipdb.set_trace()

  try:
    page = html.parse(f)
    root = page.getroot()

    meta = html.tostring(root.cssselect("#player_review div.body div.user_reviews")[0])
    if len(root.cssselect("#player_score_details div.body dl.review_details")) > 0:
      score_details = html.tostring(root.cssselect("#player_score_details div.body dl.review_details")[0])
    else:
      score_details = "No Details"
    body = html.tostring(root.cssselect("#player_review_body")[0])

    ret = {}
    ret['meta'] = meta
    ret['score_details'] = score_details
    ret['body'] = body
    return ret

    #ipdb.set_trace()
  except:
    traceback.print_exc()
    ipdb.set_trace()

def get_reviews(url):
  try:
    f = urllib.urlopen(url)
  except:
    traceback.print_exc()
    ipdb.set_trace()

  try:
    page = html.parse(f)
    root = page.getroot()

    # check for user reviews
    #ipdb.set_trace()
    #if html.tostring(page).find("Be the First to tell the world what you think of ") != -1:
      #print "No user reviews!"
    #else:
    if html.tostring(page).find("Be the First to tell the world what you think of ") == -1:
      root = page.getroot()
      main = root.cssselect("#main")[0]
      review_links = main.cssselect("a.continue")
      for r in review_links:
        if r.text_content() == "Read the Review":
          # download the user review here
          #print r.get("href")
          ret = download_user_review(r.get("href"))
          #print "User review: ", ret

      #ipdb.set_trace()
      #print "DO SOMETHING!!"

    # check for gamespot reviews
    review_box = root.cssselect(".navItem.reviewsNavItem.navItemOpen.navItemActive")[0]
    # ensure this is actually the review box
    if html.tostring(review_box).find("Reviews") == -1:
      print "Encountered wrong box for user reviews."
      ipdb.set_trace()

    #if html.tostring(review_box).find("GameSpot Review") == -1:
      #print "No gamespot review found."
    #else:
    if html.tostring(review_box).find("GameSpot Review") != -1:
      elements = review_box.cssselect("a.subNavItemAction")
      for e in elements:
        if html.tostring(e).find("GameSpot Review") != -1:
          gamespot_review_url = e.get("href")
          gamespot_review = return_gamespot_review(gamespot_review_url)
          #print "Found a gamespot review at ", gamespot_review_url, gamespot_review
          print "http://www.gamespot.com" + gamespot_review_url
          break

    #import ipdb
    #ipdb.set_trace()
    #print html.tostring(page)

  except:
    traceback.print_exc()
    ipdb.set_trace()

#get_reviews("http://www.gamespot.com/slot-racing-hd/user-reviews/platform/iphone")
#get_reviews("http://www.gamespot.com/fathead/user-reviews/platform/iphone")
#get_reviews("http://www.gamespot.com/cheeseman/user-reviews/platform/iphone")

#import sys
#sys.exit(0)

# get the number of pages

def get_everything(gamespot, iphone):
  try:
    f = urllib.urlopen(gamespot+iphone+page_url(0))
  except:
    traceback.print_exc()
    ipdb.set_trace()
  page = html.parse(f)
  root = page.getroot()
  num_pages = int(root.cssselect("ul.pages li.last a")[0].text_content())

  for page_num in range(num_pages):
    try:
      f = urllib.urlopen(gamespot + iphone + page_url(page_num))
    except:
      traceback.print_exc()
      ipdb.set_trace()
    page = html.parse(f)
    games = page.getroot().cssselect('.game')

    for game in games:
      try:
        title = game.cssselect('td.game_title')[0].cssselect('div.game_title a')[0].text_content()
        href = game.cssselect('td.game_title')[0].cssselect('div.game_title a')[0].get('href')

        publisher = ""
        publisher_url = ""
        if len(game.cssselect('div.publisher')) > 0:
          publisher = game.cssselect('div.publisher a')[0].text_content()
          publisher_url = game.cssselect('div.publisher a')[0].get('href')
        else:
          publisher = "No publisher."

        genre = game.cssselect('td.genre a')[0].text_content()
        genre_url = game.cssselect('td.genre a')[0].get('href')

        price = game.cssselect('td.price')[0].text_content()
        if str(price).strip() == "":
          price = "Free"

        #print title, publisher, genre

        rated = False
        rating = ""
        voting_users = 0
        reviews_url = ""
        if len(game.cssselect('span.unrated')) > 0:
          rating = "Not yet rated."
        else:
          rated = True
          rating = game.cssselect('span.numeric')[0].text_content()
          voting_users = game.cssselect('span.users')[0].text_content()
          reviews_url = game.cssselect('div.score_wrap a')[0].get('href')

          # nested try catch block to 

          get_reviews(reviews_url)

        #print title, href, publisher, publisher_url, genre, genre_url, price, rated
        #if rated:
          #print rating, voting_users, reviews_url
      except Exception as e:
        traceback.print_exc()
        ipdb.set_trace()

    #sleep(5)

gamespot = "http://www.gamespot.com/"
iphone = "iphone/index.html?games=popular"
#iphone = "android/index.html?tag=masthead%3Bandroid%3Btop"
#iphone = "android/index.html?games=popular"
#iphone = "android/index.html?games=user_rating"

get_everything(gamespot, iphone)

