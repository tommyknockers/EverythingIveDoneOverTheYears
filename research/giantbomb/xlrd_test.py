#!/usr/bin/python

from elixir import *
from sqlalchemy import Table
import pickle
import ipdb
#metadata.bind = "mysql://sneilan_research:1ac1e956@localhost/sneilan_research"
metadata.bind = "mysql://root:root@127.0.0.1/giantbomb"
metadata.bind.echo = False


Game2Character = Table('Game2Character', metadata, autoload=True)
Game2Company = Table('Game2Company', metadata, autoload=True)
Game2Concept = Table('Game2Concept', metadata, autoload=True)
Game2Genre = Table('Game2Genre', metadata, autoload=True)
Game2Platform = Table('Game2Platform', metadata, autoload=True)
Game2SimilarGame = Table('Game2SimilarGame', metadata, autoload=True)

class Character(Entity):
    using_options(tablename="Character")
    id = Field(Integer, primary_key=True)
    name = Field(Unicode(46),required=False) # null
    last_name = Field(Unicode(50), required=False) #null
    real_name = Field(Unicode(30), required=False) # null
    gender = Field(Integer, required=False)
    birthday = Field(Date, required=False) # null
    url = Field(Unicode(60), required=False)
    game_first_appeared_in = Field(Integer, required=False)
    date_added = Field(Unicode(30), required=False)
    date_last_updated = Field(Unicode(30), required=False)
    games = ManyToMany(
            'Game',
            table=Game2Character,
            foreign_keys=lambda: [Game2Character.c.character, Game2Character.c.game],
            primaryjoin=lambda: Character.id == Game2Character.c.character,
            secondaryjoin=lambda: Game.id == Game2Character.c.game,
    )


class Company(Entity):
    using_options(tablename="Company")
    id = Field(Integer, primary_key=True)
    name = Field(Unicode(88), required=False)
    url = Field(Unicode(121), required=False)
    website = Field(Unicode(83), required=False)
    games = ManyToMany(
            'Game',
            table=Game2Company,
            foreign_keys=lambda: [Game2Company.c.game, Game2Company.c.company],
            primaryjoin=lambda: Company.id == Game2Company.c.company,
            secondaryjoin=lambda: Game.id == Game2Company.c.game,
    )


class Concept(Entity):
    using_options(tablename="Concept")
    id = Field(Integer, primary_key=True)
    name = Field(Unicode(58), required=False)
    url = Field(Unicode(92), required=False)
    games = ManyToMany(
            'Game',
            table=Game2Concept,
            foreign_keys=lambda: [Game2Concept.c.game, Game2Concept.c.concept],
            primaryjoin=lambda: Concept.id == Game2Concept.c.concept,
            secondaryjoin=lambda: Game.id == Game2Concept.c.game,
    )


class Genre(Entity):
    using_options(tablename="Genre")
    id = Field(Integer, primary_key=True)
    name = Field(Unicode(21))
    url = Field(Unicode(83))
    games = ManyToMany(
            'Game',
            table=Game2Genre,
            foreign_keys=lambda: [Game2Genre.c.game, Game2Genre.c.genre],
            primaryjoin=lambda: Genre.id == Game2Genre.c.genre,
            secondaryjoin=lambda: Game.id == Game2Genre.c.game,
    )


class Platform(Entity):
    using_options(tablename="Platform")
    id = Field(Integer, primary_key=True)
    name = Field(Unicode(18))
    abbreviation = Field(Unicode(4))
    company = Field(Integer)
    url = Field(Unicode(49))
    games = ManyToMany(
            'Game',
            table=Game2Platform,
            foreign_keys=lambda: [Game2Platform.c.game, Game2Platform.c.platform],
            primaryjoin=lambda: Platform.id == Game2Platform.c.platform,
            secondaryjoin=lambda: Game.id == Game2Platform.c.game,
    )



class Game(Entity):
    using_options(tablename="Game")
    id = Field(Integer, primary_key=True)
    name = Field(Unicode(112), required=False)
    url = Field(Unicode(147), required=False)
    review_count = Field(Integer, required=False)
    game_rating = Field(Unicode(52), required=False)
    release_date = Field(Unicode(10), required=False)
    date_added = Field(Unicode(10), required=False)
    #character_appearance = ManyToOne('Character')
    date_last_updated = Field(Unicode(10), required=False)
    characters = ManyToMany(
        'Character',
        table=Game2Character,
        foreign_keys=lambda: [Game2Character.c.character, Game2Character.c.game],
        primaryjoin=lambda: Game.id == Game2Character.c.game,
        secondaryjoin=lambda: Character.id == Game2Character.c.character,
    )
    companies = ManyToMany(
            'Company',
            table=Game2Company,
            foreign_keys=lambda: [Game2Company.c.game, Game2Company.c.company],
            primaryjoin=lambda: Game.id == Game2Company.c.game,
            secondaryjoin=lambda: Company.id == Game2Company.c.company,
    )
    genres = ManyToMany(
            'Genre',
            table=Game2Genre,
            foreign_keys=lambda: [Game2Genre.c.game, Game2Genre.c.genre],
            primaryjoin=lambda: Game.id == Game2Genre.c.game,
            secondaryjoin=lambda: Genre.id == Game2Genre.c.genre,
    )
    concepts = ManyToMany(
            'Concept',
            table=Game2Concept,
            foreign_keys=lambda: [Game2Concept.c.game, Game2Concept.c.concept],
            primaryjoin=lambda: Game.id == Game2Concept.c.game,
            secondaryjoin=lambda: Concept.id == Game2Concept.c.concept,
    )
    platforms = ManyToMany(
            'Platform',
            table=Game2Platform,
            foreign_keys=lambda: [Game2Platform.c.game, Game2Platform.c.platform],
            primaryjoin=lambda: Game.id == Game2Platform.c.game,
            secondaryjoin=lambda: Platform.id == Game2Platform.c.platform,
    )
    similar_games = ManyToMany(
            'Game',
            table=Game2SimilarGame,
            foreign_keys=lambda: [Game2SimilarGame.c.game, Game2SimilarGame.c.similar_game],
            primaryjoin=lambda: Game.id == Game2SimilarGame.c.game,
            secondaryjoin=lambda: Game.id == Game2SimilarGame.c.similar_game,
    )
    reviews = OneToMany("Review")



class GiantBombObject(Entity):
    type = Field(Unicode(50))
    filename = Field(Unicode(50))
    _id = Field(Integer)
    api_detail_url = Field(Unicode(50))


class Review(Entity):
    using_options(tablename="Review")
    user_info = Field(Unicode(90))
    review = Field(UnicodeText())
    game = ManyToOne("Game")


setup_all()
create_all()
 
def load_file(filename):
    f = open("/Volumes/GermansAreSilly/research/giantbomb/" + filename, "rb")
    data = pickle.load(f)
    f.close()
    return data


#if g.type == "locations":
#if g.type == "objects":
#if g.type == "themes":
#if g.type == "franchises":


l = []
from progressbar import ProgressBar
progress = ProgressBar()
i = 0
for g in progress(GiantBombObject.query.all()):
    i+=1
    if i % 1000 == 0:
        session.commit()
    if g.type == "companies":
        data = load_file(g.filename)
        o = Company()
        o.id = data['id']
        o.name = data['name']
        o.url = g.api_detail_url
        o.website = data['website']
        #ipdb.set_trace()
        l.append(o)

    if g.type == "concepts":
        data = load_file(g.filename)
        o = Concept()
        o.id = data['id']
        o.name = data['name']
        o.url = g.api_detail_url
        #ipdb.set_trace()
        l.append(o)

    if g.type == "games":
        data = load_file(g.filename)
        o = Game()
        o.id = data['id']
        o.name = data['name']
        o.url = g.api_detail_url
        #ipdb.set_trace()
        l.append(o)

    if g.type == "genres":
        data = load_file(g.filename)
        o = Genre()
        o.id = data['id']
        o.name = data['name']
        o.url = g.api_detail_url
        #ipdb.set_trace()
        l.append(o)

    if g.type == "platforms":
        data = load_file(g.filename)
        o = Platform()
        o.id = data['id']
        o.name = data['name']
        o.abbreviation = data['abbreviation']
        if data['company'] != None:
            o.company = data['company']['id']
        o.url = g.api_detail_url
        #ipdb.set_trace()
        l.append(o)

    if g.type == "characters":
        data = load_file(g.filename)

        o = Character()
        o.id = data['id']
        o.url = g.api_detail_url
        o.name = data['name']
        o.real_name = data['real_name']
        o.last_name = data['last_name']
        o.gender = data['gender']

        try:
            o.birthday = data['birthday']
        except:
            ipdb.set_trace()

        try:
            if data['first_appeared_in_game'] != None:
                o.game_first_appeared_in = data['first_appeared_in_game']['id']
        except:
            ipdb.set_trace()
        o.date_last_updated = data['date_last_updated']
        #ipdb.set_trace()
        l.append(o)

session.commit()

sys.exit(0)

from progressbar import ProgressBar

l = []
progress = ProgressBar()
ipdb.set_trace()

for g in progress(GiantBombObject.query.filter_by(type="games")):
    if g.type == "games":
        similar = data['similar_games']
        game = Game.query.filter(id=g._id)
        for s in similar:
            ipdb.set_trace()
            #game.game

        #print "get the list of similar games"
        #ipdb.set_trace()
"""
    loaded_game = load_file(g.filename)
    for game in loaded_game['games']:
        data = load_file(g.filename)

        o = object()
        if g.type == "companies":
            o = Game2Company()
            o.company = g.id
        if g.type == "concepts":
            o = Game2Concept()
            o.concept = g.id
        if g.type == "genres":
            o = Game2Genre()
            o.genre = g.id
        if g.type == "platforms":
            o = Game2Platform()
            o.platform = g.id
        if g.type == "characters":
            o = Game2Character()
            o.character = g.id

        o.game = game['id']
        #l.append(o)
"""
#sdf

"""
class GamespotAdditionalData(Entity):
    using_options(tablename='GamespotAdditionalData')
    giantbomb_game_id = Field(Integer, primary_key=True)
    gamespot_game_id = Field(Integer)
    gamespot_url = Field(Unicode(100))
    gamespot_the_good = Field(UnicodeText())
    gamespot_the_bad = Field(UnicodeText())
    gamespot_date = Field(Unicode(90))
    gamespot_scores = Field(Unicode(90))
    gamespot_addition = Field(Unicode(200))
    gamespot_platform = Field(Unicode(90))


class GamespotGame(Entity):
    using_options(tablename="__main___game")
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
    using_options(tablename="Review")
    user_info = Field(Unicode(90))
    review = Field(UnicodeText())
    #game = ManyToOne("GamespotGame")
"""




import ipdb
good = 0
multiple = 0
notfound = 0
import sys
sys.exit()


#for every game in __main___game (games from gamespot)
for gamespotgame in GamespotGame.query.all():
    #find corresponding game in Game (games from giantbomb)
    # if there are two of the same game in the gamespot table
    print gamespotgame.id
    other_gamespot_game_query = GamespotGame.query.filter_by(game_name=gamespotgame.game_name, platform=gamespotgame.platform)
    if other_gamespot_game_query.count() > 1:
        print "oh fuck"
        ipdb.set_trace()

    # if we found the game, 
    giantbomb_gamequery = Game.query.filter_by(name=gamespotgame.game_name)
    if giantbomb_gamequery.count() == 1:
        good += 1
        giantbombgame = giantbomb_gamequery.one()
        #platform_query = giantbombgame.platforms.filter_by(plat

        # take gamespot url, the_good, the_bad, gamespot_date_released, gamespot_scores, gamespot_addition from
        #   gamespot games table and insert them into the giantbomb game table
        gad = GamespotAdditionalData()
        gad.gamespot_game_id = gamespotgame.id
        gad.giantbomb_game_id = giantbombgame.id
        #asdf = giantbombgame.id
        continue
        gad.gamespot_url = gamespotgame.game_url
        gad.gamespot_the_good = gamespotgame.the_good
        gad.gamespot_the_bad = gamespotgame.the_bad
        gad.gamespot_date = gamespotgame.date
        gad.gamespot_scores = gamespotgame.scores
        gad.gamespot_addition = gamespotgame.addition
        gad.gamespot_platform = gamespotgame.platform
        #gamespotgame.delete()
        try:
            session.commit()
        except:
            ipdb.set_trace()

        """
        # get all reviews from the TempReview table that correspond to the gamespot game
        # 

    elif gamequery.count() > 1:
        multiple += 1
    else:
        notfound += 1

        #select reviews from Review that correspond to game. add something about schmidt. change review to point to Game. insert into new review table


ipdb.set_trace()
"""


