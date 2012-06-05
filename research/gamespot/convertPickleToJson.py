import pickle
import simplejson
import os

rootdir='/home/sneilan/BucketsOfNantucket/research/gamespotData/'
for subdir, dirs, files in os.walk(rootdir): 
  for file in files: 
    if file.find(".txt") > 0:
      filename = os.path.join(subdir, file)
      f=open(filename, 'rb') 
      stuff = pickle.loads(f.read())
      f.close() 
      f = open(filename, "wb")
      simplejson.dump(stuff, f)
      f.close()

