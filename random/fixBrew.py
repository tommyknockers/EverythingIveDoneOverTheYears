#!/usr/bin/python


import shlex
import subprocess
import shutil
import os


def execute(command_line):
  args = shlex.split(command_line)   
  p = subprocess.Popen(args, stdin=subprocess.PIPE, stdout=subprocess.PIPE) 
  return p


p = execute("brew link libusb-freenect")
output = p.communicate()[0] # wait for end. will return a tuple. first value in tuple contains the output
while output.find("Could not symlink file") != -1:
  filename = output.split("\n")[2]
  #import ipdb
  #ipdb.set_trace()
  filename = filename.split("Check ")[1]
  filename = filename.split(" does ")[0]
  print filename
  raw_input("ok?")
  os.remove(filename)
  p = execute("brew link libjpeg")
  output = p.communicate()[0] # wait for end. will return a tuple. first value in tuple contains the output

