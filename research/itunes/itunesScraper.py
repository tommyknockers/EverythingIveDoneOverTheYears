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
from urllib import FancyURLopener

import socket
socket.setdefaulttimeout(30)

host = '127.0.0.1'
metadata.bind = "mysql://root:root@%s/itunes" % (host)
metadata.bind.echo = False

class ItunesGame(Entity):
  href = Field(Unicode(255), primary_key=True)
  filename = Field(Unicode(50), default=None)
  completed = Field(Boolean, default=False)
  in_progress = Field(Boolean, default=False)
  time_started = Field(DateTime, default=None)
  time_completed = Field(DateTime, default=None)

setup_all()
create_all()

class ItunesOpener(FancyURLopener):
  version = 'iTunes/9.0.3 (Macintosh; U; Intel Mac OS X 10_6_2; en-ca)'

itunesopener = ItunesOpener()


def get_url(url):
  sleep(3)
  try:
    f = urllib.urlopen(url)
    return f
  except:
    gmail.send("couldn't open the url", "8473540309@txt.att.net")
    return get_url(url)

def itunes_get_url(url):
  sleep(3)
  global itunesopener
  try:
    f = itunesopener.open(url)
    return f
  except:
    gmail.send("couldn't open the url", "8473540309@txt.att.net")
    return itunes_get_url(url)

next_id = 0

def get_everything(url):
  try:
    for c in [chr(i) for i in range(ord('A'), ord('Z')+1)] + ['*']: # for every letter from A to Z & the asterisk
      def get_games(url):
        f = get_url(url)
        page = html.parse(f)
        root = page.getroot()
        games_list = root.cssselect("#selectedcontent div.column li a")
        genre = root.cssselect("#title ul.breadcrumb li a")
        genre = unicode(genre[-1].text_content())
        for g in games_list:
          title = unicode(g.text_content())
          href = g.get("href")
          num_existing = ItunesGame.query.filter_by(href=href)
          if num_existing.count() == 0:
            # store data about this game to a file
            global next_id
            next_id += 1
            while os.path.exists(str(next_id)+".txt") == True:
              next_id += 1
            f = open(str(next_id) + ".txt", "wb")
            s = {}
            s['title'] = title
            s['genre'] = genre
            pickle.dump(s, f)
            f.close()
            i = ItunesGame(href=href, filename=str(next_id)+".txt")
            session.commit()
            print "saved " + title
          else:
            # add data about this game to the file
            i = num_existing.first()
            f = open(i.filename, "rb")
            data = pickle.load(f)
            f.close()

            old_title = data['title']
            titles = []
            if type(old_title) in [str, unicode]:
              if old_title != title:
                titles.append(old_title)
                titles.append(title)
            if type(old_title) == list:
              titles = old_title
              if title not in titles:
                titles.append(title)
            if len(titles) == 0:
              titles = old_title
            data['title'] = titles

            old_genre = data['genre']
            genres = []
            if type(old_genre) in [str, unicode]:
              if old_genre != genre:
                genres.append(old_genre)
                genres.append(genre)
            if type(old_genre) == list:
              genres = old_genre
              if genre not in genres:
                genres.append(genre)
            if len(genres) == 0:
              genres = old_genre
            data['genre'] = genres

            f = open(i.filename, "wb")
            pickle.dump(data, f)
            f.close()

            print "saved " + title + " twice."

        next_link = root.cssselect("#selectedgenre ul.paginate a.paginate-more")
        if len(next_link) > 0:
          get_games(next_link[0].get("href"))

      get_games(url + "&letter=" + c)

  except:
    traceback.print_exc()
    gmail.send("exception!", "8473540309@txt.att.net")
    ipdb.set_trace()



urls = []
urls.append("http://itunes.apple.com/us/genre/ios-games/id6014?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-action/id7001?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-adventure/id7002?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-arcade/id7003?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-board/id7004?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-card/id7005?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-casino/id7006?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-dice/id7007?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-educational/id7008?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-family/id7009?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-kids/id7010?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-music/id7011?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-puzzle/id7012?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-racing/id7013?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-role-playing/id7014?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-simulation/id7015?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-sports/id7016?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-strategy/id7017?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-trivia/id7018?mt=8")
urls.append("http://itunes.apple.com/us/genre/ios-games-word/id7019?mt=8")


[get_everything(u) for u in urls]


"""
http://itunes.apple.com/us/genre/ios-games/id6014?mt=8
http://itunes.apple.com/us/genre/ios-games/id6014?mt=8&letter=
http://itunes.apple.com/us/genre/ios-games/id6014?mt=8&letter=A&page=2#page
"""

