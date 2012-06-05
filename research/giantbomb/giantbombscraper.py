#!/usr/bin/python


from elixir import *
from email import Encoders
from email.MIMEBase import MIMEBase
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText
import ipdb
import json
import os
import pickle
import smtplib
import time
import urllib
import ipdb
import trace


host = '127.0.0.1'
metadata.bind = "mysql://root:root@%s/giantbomb" % (host)
metadata.bind.echo = False

#ipdb.set_trace()
class GiantBombObject(Entity):
    type = Field(Unicode(50))
    filename = Field(Unicode(50))
    _id = Field(Integer)
    api_detail_url = Field(Unicode(50))


setup_all()
create_all()


gmail_user = "sean1@seanneilan.com"
gmail_pwd = "shimon88"
#gmail_pwd = raw_input('enter password')


def mail(to, subject, text, attach=None):
    msg = MIMEMultipart()

    msg['From'] = gmail_user
    msg['To'] = to
    msg['Subject'] = subject

    msg.attach(MIMEText(text))

    mailServer = smtplib.SMTP("smtp.gmail.com", 587)
    mailServer.ehlo()
    mailServer.starttls()
    mailServer.ehlo()
    mailServer.login(gmail_user, gmail_pwd)
    mailServer.sendmail(gmail_user, to, msg.as_string())
    # Should be mailServer.quit(), but that crashes...
    mailServer.close()


api_key = 'ab5ae9a773490ab3b0eae10229cb93b806352bac'


def get_results(pdatatype): # plural datatype
    return results(pdatatype)


class results:
    def __init__(self, pdatatype):
        self.pdatatype = pdatatype
        self.offset = 0
        self.index = 0
        params = urllib.urlencode({'api_key' : api_key, 'format' : 'json', 'offset' : self.offset, 'field_list' : 'api_detail_url,id'})
        self.cur_url = 'http://api.giantbomb.com/' + self.pdatatype + '/?%s' % params
        self.cur_json = urllib.urlopen(self.cur_url).read()
        self.cur_data = json.loads(self.cur_json)
        self.cur_results = self.cur_data['results']
        self.max = self.cur_data['number_of_total_results']

    def __iter__(self):
        return self

    def next(self):
        if self.offset == self.max:
            raise StopIteration
        try:
            if self.offset % 100 == 0:
                params = urllib.urlencode({'api_key' : api_key, 'format' : 'json', 'offset' : self.offset, 'field_list' : 'api_detail_url,id'})
                self.cur_url = 'http://api.giantbomb.com/' + self.pdatatype + '/?%s' % params
                self.cur_results = json.loads(urllib.urlopen(self.cur_url).read())['results']
                self.index = 0
            cur_object = self.cur_results[self.index]
            self.offset += 1
            self.index += 1
        except:
            traceback.print_exc()
            mail("8473540309@txt.att.net", "giantbomb error", "")
            ipdb.set_trace()

        return cur_object

next_id = 0
def iterate_and_save(plural_obj_name):
    global next_id
    object_results = get_results(plural_obj_name)
    i = 0
    m = object_results.max
    for object in object_results:
        #ipdb.set_trace()
        #time.sleep(1)
        _id = int(object['id'])
        api_detail_url = object['api_detail_url']
        query = GiantBombObject.query.filter_by(type=plural_obj_name, _id=_id, api_detail_url=api_detail_url)
        if query.count() == 1: # if it's in the database already continue
            continue
        # otherwise, retrieve & store the giantbomb data
        params = urllib.urlencode({'api_key' : api_key, 'format' : 'json'})
        object_url = api_detail_url + '?%s' % params
        object_results = json.loads(urllib.urlopen(object_url).read())['results'] # little bit of a one liner here

        next_id += 1
        while os.path.exists(str(next_id)+".txt") == True:
          print "incremented!"
          next_id += 1
        f = open(str(next_id) + ".txt", "wb")
        pickle.dump(object_results, f)
        f.close()

        GiantBombObject(type=plural_obj_name, filename=str(next_id)+".txt", api_detail_url=api_detail_url, _id=_id)

        session.commit()
        i += 1
        print "%d/%d done" % (i, m)

#api_detail_url = self.cur_results[self.index]['api_detail_url']
#params = urllib.urlencode({'api_key' : api_key, 'format' : 'json'})
#object_url = api_detail_url + '?%s' % params
#object_results = json.loads(urllib.urlopen(object_url).read())['results'] # little bit of a one liner here

#iterate_and_save('accessories')
#iterate_and_save('game_ratings')
#iterate_and_save('people')
#iterate_and_save('promos')
#iterate_and_save('rating_boards')
#iterate_and_save('regions')
#iterate_and_save('releases')
#iterate_and_save('reviews')
#iterate_and_save('user_reviews')
#iterate_and_save('videos')
iterate_and_save('characters')
iterate_and_save('companies')
iterate_and_save('concepts')
iterate_and_save('franchises')
iterate_and_save('games')
iterate_and_save('genres')
iterate_and_save('locations')
iterate_and_save('objects')
iterate_and_save('platforms')
iterate_and_save('themes')


mail("8473540309@txt.att.net", "processing complete", "hooray!")

