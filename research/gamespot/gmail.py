#!/usr/bin/python

import os
import smtplib
import mimetypes
from email.MIMEMultipart import MIMEMultipart
from email.MIMEBase import MIMEBase
from email.MIMEText import MIMEText
from email.MIMEAudio import MIMEAudio
from email.MIMEImage import MIMEImage
from email.Encoders import encode_base64
import datetime

username = 'sean1@seanneilan.com'
password = 'shimon88'

def send(subject, recipient):
  text = ""
  gmailUser = username
  gmailPassword = password
  #recipient = '6193137831@messaging.sprintpcs.com'
  #recipient = 'sneilan1@gmail.com'
  #recipient = '8473540310@txt.att.net'
  msg = MIMEMultipart()
  msg['From'] = gmailUser
  msg['To'] = recipient
  msg['Subject'] = subject
  mailServer = smtplib.SMTP('smtp.gmail.com', 587)
  mailServer.ehlo()
  mailServer.starttls()
  mailServer.ehlo()
  mailServer.login(gmailUser, gmailPassword)
  mailServer.sendmail(gmailUser, recipient, msg.as_string())
  mailServer.close()


