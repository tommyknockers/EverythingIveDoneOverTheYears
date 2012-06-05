import os
import codecs
import ipdb

# this program goes through every game review file in the 
#  /home/sneilan/Machinez/gockie/GamespotAllSentences/DS/MegaManBattleNetwork5DoubleTeam.txt and extracts data from each file and stores it in an sqlite db


# initial setup of db
from elixir import *
#metadata.bind = "sqlite:///reviews.sqlite"
metadata.bind = "mysql://root:password@localhost/reviews"
metadata.bind.echo = False


# create tables
class Game(Entity):
    game_name = Field(Unicode(90))
    game_url = Field(Unicode(100))
    the_good = Field(UnicodeText())
    the_bad = Field(UnicodeText())
    date = Field(Unicode(90))
    scores = Field(Unicode(90))
    addition = Field(Unicode(200))
    reviews = OneToMany("Review")
    platform = Field(Unicode(90))
    filename = Field(Unicode(90))

class Review(Entity):
    user_info = Field(Unicode(90))
    review = Field(UnicodeText())
    game = ManyToOne("Game")

setup_all(True)


# extract data from file using a state machine
#  each line in file is a label then a string of text
#  the reviews are on multiple lines
#  if you can't read, then, go watch 300 or something. God help you.
#filepath = "/home/sneilan/Machinez/gockie/GamespotAllSentences/DS/MegaManBattleNetwork5DoubleTeam.txt"
rootpath = "/home/sneilan/Machinez/gockie/GamespotAllSentences"

for subdir, dirs, files in os.walk(rootpath):
    for file in files:
        # vars to store data from file
        game_name = ""
        game_url = ""
        the_good = ""
        the_bad = ""
        date = "" # is this the date released?
        scores = ""
        addition = ""
        giantbomb_review = ""
        user_reviews = []

        # temp vars used to cache user reviews
        user_review = ""
        user_info = ""

        filepath = subdir + '/' + file
        if filepath.count('.svn') != 0:
            continue
        platform = subdir.replace(rootpath,'').replace('/', '')
        print filepath
        f = codecs.open(filepath, encoding='utf-8', errors='replace')

        state = "blank_first_line"
        for line in f:
            if state=="blank_first_line":
                state = "label game_name"
                continue

            if state=="label game_name":
                state = "game_name"
                continue
            if state=="game_name":
                if not line.startswith('GAME URL'):
                    game_name += line.strip() + ' '
                else:
                    state = "game_url"
                continue

            if state=="game_url":
                game_url = line.strip()
                state = "label the_good"
                continue
            
            # state not used anymore
            if state=="label the_good":
                state = "the_good readline"
                continue
            if state=="the_good readline":
                if not line.startswith('The Bad'):
                    the_good += line.strip() + '\n'
                else:
                    state = "the_bad readline"
                continue
            
            if state=="the_bad readline":
                if not line.startswith("Date"):
                    the_bad += line.strip() + '\n'
                else:
                    state = "date"
                continue

            if state=="date":
                date = line.strip()
                state = "label scores"
                continue

            if state=="label scores":
                state = "scores"
                continue
            if state=="scores":
                scores = line.strip()
                state = "label addition"
                continue

            if state=="label addition":
                state = "addition"
                continue
            if state=="addition":
                addition = line.strip()
                state = "label giantbomb_review"
                continue
            
            # states to read lines from giantbomb review
            if state=="label giantbomb_review":
                state = "review read_line"
                continue
            if state=="review read_line":
                if not line.startswith('User Reviews'): # if not beginning of next section
                    giantbomb_review += line
                else: # otherwise, switch to user reviews section
                    state = "label num_user_reviews"
                continue

            if state=="label num_user_reviews":
                state = "user_review read_line"
                continue
            if state=="user_review read_line":
                if not line.startswith('UserName:'):
                    user_review += line
                else:
                    if (user_review != "" and user_info != "") or line.isspace():
                        user_reviews.append({'user_review':user_review, 'user_info':user_info})
                    user_review = ""
                    user_info = line
                continue
        f.close()

        #### save data into db
        game = Game(game_name=game_name, 
                        game_url=game_url, 
                        the_good=the_good, 
                        the_bad=the_bad, 
                        date=date,
                        scores=scores, 
                        addition=addition,
                        platform=platform,
                        filename=unicode(filepath))

        review = Review(user_info=u"GiantBomb", review=giantbomb_review)
        game.reviews.append(review)

        for user_review in user_reviews:
            user_info = user_review['user_info']
            review = user_review['user_review']
            review = Review(user_info=user_info, review=review)
            game.reviews.append(review)

        session.commit()

