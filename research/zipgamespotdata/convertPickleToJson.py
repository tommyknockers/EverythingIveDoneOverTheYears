#!/usr/bin/python

import pickle
import simplejson
import os
import ipdb

# need lxml to run this on the gamespotdata
# sudo apt-get install python-dev libxml2-dev libxslt1-dev build-essential
# sudo easy_intall lxml

rootdir='/Users/seanneilan/gamespotData/'
for subdir, dirs, files in os.walk(rootdir): 
  for file in files: 
    if file.find(".txt") > 0:
      filename = os.path.join(subdir, file)
      try:
        f=open(filename, 'rb') 
        stuff = pickle.loads(f.read())
        f.close() 
        f = open(filename, "w")
        simplejson.dump(stuff, f)
        f.close()
      except:
        try:
          simplejson.load(open(filename))
        except:
          print "there's an error"
          #ipdb.set_trace()
          #pass

