#/usr/bin/python

import shlex
import subprocess
import shutil
import os

def execute(command_line):
  args = shlex.split(command_line)
  p = subprocess.Popen(args, stdin=subprocess.PIPE, stdout=subprocess.PIPE)
  return p


"composite -dissolve 10 watermark.png source.jpg output.jpg"

rootdir = "/Users/seanneilan/Downloads/simonsez/"
watermarkFile = rootdir + "../simonwatermark.png"
for subdir, dirs, files in os.walk(rootdir):
  for f in files:
    filename = os.path.join(subdir, f)
    if filename.find("jpg") != -1:
      p = execute("composite -dissolve 20 " + watermarkFile + " " + filename + " " + filename)
      p.communicate()



