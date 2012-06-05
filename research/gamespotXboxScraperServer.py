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


host = '127.0.0.1'
metadata.bind = "mysql://root:root@%s/gamespot" % (host)
metadata.bind.echo = False

#ipdb.set_trace()
class GameData(Entity):
  href = Field(Unicode(255), primary_key=True)
  filename = Field(Unicode(50))
  completed = Field(Boolean, default=False)

  # don't really need this field, whatever
  in_progress = Field(Boolean, default=False)

  time_started = Field(DateTime, default=None)
  time_completed = Field(DateTime, default=None)
  page_num = Field(Integer, default=0)


setup_all()
create_all()


# this is going to run on the server
from SimpleXMLRPCServer import SimpleXMLRPCServer

def get_a_url():
  # return a url for a video game that hasn't been scraped yet
  games = GameData.query.filter_by(in_progress=False, completed=False, time_started=None)
  if games.count() > 0:
    game = games.first()
    href = game.href
    game.in_progress = True
    game.time_started = datetime.datetime.now()
    session.commit()
    return href
  else:
    return False

def commit_data(href, response):
  ipdb.set_trace()
  game = GameData.query.filter_by(href=href, in_progress=True, completed=False)
  if game.count() == 0:
    return False # this one was already completed by somebody else
  game = game.first()
  game.in_progress = False
  game.completed = True
  game.time_completed = datetime.datetime.now()

  f = open(game.filename, "rb")
  data = pickle.load(f)
  data['reviews_and_whatnot'] = pickle.loads(response.data)
  f.close()
  f = open(game.filename, "wb")
  pickle.dump(data, f)
  f.close()

  session.commit()
  print "Completed " + href

  return True

server = SimpleXMLRPCServer(("0.0.0.0", 8000))
server.register_function(get_a_url, "get_a_url")
server.register_function(commit_data, "commit_data")

print "listening on port 8000"

server.serve_forever()

# first need to scrape all pages, get the meta data & urls for each game
# then, create two functions that will run on the server

