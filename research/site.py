import urllib
from lxml import html
from time import sleep
import traceback
import ipdb
import sys
import json
#import gmail
from elixir import *
import pickle
import os
import datetime
import time

import cherrypy
from cherrypy import wsgiserver
import signal


#host = 'localhost'
host = '127.0.0.1'
#metadata.bind = "mysql://sneilan_research:1ac1e956@%s/sneilan_research" % (host)
#metadata.bind = "mysql://root:root@%s/sneilan_research" % (host)
metadata.bind = open("metadata.bind").read()
metadata.bind.echo = False



class Client(Entity):
  ip = Field(Unicode(15))
  last_message = Field(Integer, default=None)
  name = Field(Unicode(50), default=None)
  last_updated = Field(Numeric, default=0)
  identifier = Field(Unicode(36), default=None)


class GamespotGameData(Entity):
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

global_password = "JalvOcGik"

#sys.exit(0)

#codebase_filename = "/home/sneilan/webapps/research/scraperCode.clj"
#codebase_last_updated = os.path.getmtime(codebase_filename)


def get_client(environ, identifier):
  client_ip = environ['REMOTE_ADDR']
  client = Client.query.filter_by(ip=client_ip, identifier=identifier)
  if client.count() == 0:
    client = Client()
    client.ip = client_ip
    client.identifier = identifier
    client.last_updated = 0
  else:
    client = client.first()
  client.last_message = time.time()
  session.commit()
  return client


def get_latest_code(environ, password, identifier):
  global global_password
  if global_password != password:
    return False

  client = get_client(environ, identifier)

  code_last_updated = os.path.getmtime("scraperCode.clj")

  #ipdb.set_trace()
  if client.last_updated < code_last_updated:
    client.last_updated = time.time()
    session.commit()
    return open("scraperCode.clj").read()

  return False


def get_a_url(environ, password, identifier):
  # return a url for a video game that hasn't been scraped yet

  global global_password
  if global_password != password:
    return False

  client = get_client(environ, identifier)

  games = GamespotGameData.query.filter_by(in_progress=False, completed=False, time_started=None)
  if games.count() > 0:
    game = games.first()
    href = game.href
    game.in_progress = True
    game.time_started = datetime.datetime.now()
    session.commit()
    return href
  else:
    return False

# should functions return additional data if the clojure library changes?
# No. they should return the new code with a flag. The client can then determine what to do.


def commit_data(environ, password, identifier, href, response):
  global global_password
  if global_password != password:
    return False

  client = get_client(environ, identifier)

  game = GamespotGameData.query.filter_by(href=href, in_progress=True, completed=False)
  if game.count() == 0:
    return False # this one was already completed by somebody else
  game = game.first()
  game.in_progress = False
  game.completed = True
  game.time_completed = datetime.datetime.now()
  #ipdb.set_trace()

  directory = "/home/sneilan/webapps/research/gamespotData/"
  f = open(directory+game.filename, "rb")
  data = pickle.load(f)
  data['reviews_and_whatnot'] = json.loads(str(response))
  f.close()
  f = open(directory+game.filename, "w")
  json.dump(data, f)
  f.close()

  session.commit()
  print "Completed " + href

  return True

from SeanSimpleXMLRPCServer import CGIXMLRPCRequestHandler

handler = CGIXMLRPCRequestHandler()
handler.register_function(get_a_url)
handler.register_function(commit_data)
handler.register_function(get_latest_code)

cherrypy.config.update({
'environment': 'production',
'log.screen': False,
'server.socket_host': '127.0.0.1',
'server.socket_port': 49979,
})

def my_crazy_app(environ, start_response):
  status = '200 OK'
  client_input = environ['wsgi.input'].read()
  response_headers = [('Content-type','text/xml')]
  start_response(status, response_headers)

  return [handler.handle_request(client_input, environ)]

server = wsgiserver.CherryPyWSGIServer(
            ('127.0.0.1', 49979), my_crazy_app,
            server_name='research.seanneilan.com')
server.start()

#import sys
#import cherrypy

#class Root:
    #@cherrypy.expose(slash=True)
    #def index(self):
            #return 'Hello, this is your default site.'

#cherrypy.quickstart(Root())
#cherrypy.quickstart(my_crazy_app)

