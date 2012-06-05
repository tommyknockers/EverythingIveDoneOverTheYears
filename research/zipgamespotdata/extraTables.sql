alter table __main___gamespotgamedata add id int(11) not null auto_increment unique;


CREATE TABLE `meta_gamespot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `upc` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `platform` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `genre` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  -- need to add more stuff here

  PRIMARY KEY (`id`),
  KEY `fk_meta_gamespot_1` (`id`),
  CONSTRAINT `fk_meta_gamespot_1` FOREIGN KEY (`id`) REFERENCES `__main___gamespotgamedata` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


-- need a gamespot review table
-- contains text of review
-- gamespot score
-- gamespot score word or whatever that is
-- a link to metacritic
-- parse whatever is in metacritic_reviews
CREATE TABLE `gamespot_review` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `review` longtext,
  `score` int(11) DEFAULT NULL,
  `score_word` varchar(255) DEFAULT NULL,
  `metacritic_link` varchar(255) DEFAULT NULL,
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_gamespot_review_1` (`id`),
  CONSTRAINT `fk_gamespot_review_1` FOREIGN KEY (`id`) REFERENCES `__main___gamespotgamedata` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=MyISAM DEFAULT CHARSET=utf8;



-- need a gamespot review comment table
-- each comment will have a username, the date it was posted
-- comment text, the number of hours played, the username
CREATE TABLE `gamespot_review_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` longtext CHARACTER SET latin1,
  `username` varchar(60) CHARACTER SET latin1 DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `hours_played` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `gs_review_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_gamespot_review_comment_1` (`gs_review_id`),
  CONSTRAINT `fk_gamespot_review_comment_1` FOREIGN KEY (`gs_review_id`) REFERENCES `gamespot_review` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=MyISAM DEFAULT CHARSET=utf8;



-- need a user reviews table
-- each user review has a username, date posted, score, review text, number of hours played
CREATE TABLE `gamespot_user_review` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `review` longtext,
  `username` varchar(255) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `score` varchar(255) DEFAULT NULL,
  `hours_played` varchar(255) DEFAULT NULL,
  `gs_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_gamespot_user_review_1` (`gs_id`),
  CONSTRAINT `fk_gamespot_user_review_1` FOREIGN KEY (`gs_id`) REFERENCES `__main___gamespotgamedata` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

