(ns gamespot.core
  (:use
    [korma.db]
    [korma.core]
    ;[clojure.contrib.json]
    [clojure.data.json :only (json-str write-json read-json)]
    ;[alex-and-georges.debug-repl]
    )
  (:require
    [net.cgrand.enlive-html :as html]
    [necessary-evil.core :as xml-rpc]
    [clojure.set :as clojure.set])
  (:import
    [java.io
      FileOutputStream
      FileInputStream
      FileNotFoundException
      IOException
      BufferedInputStream
      BufferedOutputStream
      File
      FileReader]
    [java.util.zip
      ZipFile
      ZipEntry
      ZipInputStream
      ZipOutputStream])
  (:gen-class))

;(use 'alex-and-georges.debug-repl)
;(use 'clojure.contrib.json)
;(use 'clojure.contrib.sql)
;(use 'korma.db)
;(use 'korma.core)

;(import [java.io
;  FileOutputStream
;  FileInputStream
;  FileNotFoundException
;  IOException
;  BufferedInputStream
;  BufferedOutputStream
;  File
;  FileReader])
;(import [java.util.zip
;  ZipFile
;  ZipEntry
;  ZipInputStream
;  ZipOutputStream])


(defdb prod (mysql {:db "sneilan_research"
                    ;:host "localhost" ;; optional
                    :host "localhost" ;; optional
                    ;:host "169.254.86.98" ;; optional
                    :port "3306" ;; optional
                    ;:user "sneilan_research"
                    ;:password "1ac1e956"}))
                    :user "root"
                    :password "root"}))


(defn as-file [^String s]
  "Return whatever string we have as a file object"
  (cond
    (instance? File s) s; already have a file, return unchanged
    (string? s) (File. s) ; return java file object for path s
    :else (throw (FileNotFoundException. (str s)))))


(defn walk [^File dir]
  (let [children (.listFiles dir)
        subdirs (filter #(.isDirectory ^File %) children)
        files (filter #(.isFile ^File %) children)]
    (concat files (mapcat walk subdirs))))

;(walk as-file "/home/sneilan/BucketsOfNantucket/research")


(defentity meta_gamespot
  (has-one '__main___gamespotgamedata))

(defentity gamespot_review
  (has-many 'gamespot_review_comment))

(defentity gamespot_review_comment
  (has-one gamespot_review))

(defentity gamespot_user_review
  (has-one '__main___gamespotgamedata))

(defentity __main___gamespotgamedata
  (has-one meta_gamespot)
  (has-one gamespot_review)
  (has-many gamespot_user_review))


(defn != [a b]
  (not (= a b)))

; wrap java.io.StringReader in a function to make it compatible with
; sequence style programming
(defn read-it [x]
  (if (nil? x)
    '()
    (java.io.StringReader. x)))

; need a meta gamespot table
; ties back to __main___gamespotgamedata
; contains title, release_date, upc, platform, score, genre

;CREATE TABLE `meta_gamespot` (
;  `id` int(11) NOT NULL AUTO_INCREMENT,
;  `title` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
;  `release_date` date DEFAULT NULL,
;  `upc` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
;  `platform` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
;  `genre` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
;  PRIMARY KEY (`id`),
;  KEY `fk_meta_gamespot_1` (`id`),
;  CONSTRAINT `fk_meta_gamespot_1` FOREIGN KEY (`id`) REFERENCES `__main___gamespotgamedata` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
;) ENGINE=MyISAM DEFAULT CHARSET=utf8;


; need a gamespot review table
; contains text of review
; gamespot score
; gamespot score word or whatever that is
; a link to metacritic
; parse whatever is in metacritic_reviews
;CREATE TABLE `gamespot_review` (
;  `id` int(11) NOT NULL AUTO_INCREMENT,
;  `review` longtext,
;  `score` int(11) DEFAULT NULL,
;  `score_word` varchar(255) DEFAULT NULL,
;  `metacritic_link` varchar(255) DEFAULT NULL,
;  UNIQUE KEY `id_UNIQUE` (`id`),
;  KEY `fk_gamespot_review_1` (`id`),
;  CONSTRAINT `fk_gamespot_review_1` FOREIGN KEY (`id`) REFERENCES `__main___gamespotgamedata` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
;) ENGINE=MyISAM DEFAULT CHARSET=utf8;



; need a gamespot review comment table
; each comment will have a username, the date it was posted
; comment text, the number of hours played, the username
;CREATE TABLE `gamespot_review_comment` (
;  `id` int(11) NOT NULL AUTO_INCREMENT,
;  `comment` longtext CHARACTER SET latin1,
;  `username` varchar(60) CHARACTER SET latin1 DEFAULT NULL,
;  `datetime` datetime DEFAULT NULL,
;  `hours_played` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
;  `gs_review_id` int(11) NOT NULL,
;  PRIMARY KEY (`id`),
;  KEY `fk_gamespot_review_comment_1` (`gs_review_id`),
;  CONSTRAINT `fk_gamespot_review_comment_1` FOREIGN KEY (`gs_review_id`) REFERENCES `gamespot_review` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
;) ENGINE=MyISAM DEFAULT CHARSET=utf8;



; need a user reviews table
; each user review has a username, date posted, score, review text, number of hours played
;CREATE TABLE `gamespot_user_review` (
;  `id` int(11) NOT NULL AUTO_INCREMENT,
;  `review` longtext,
;  `username` varchar(255) DEFAULT NULL,
;  `datetime` datetime DEFAULT NULL,
;  `score` varchar(255) DEFAULT NULL,
;  `hours_played` varchar(255) DEFAULT NULL,
;  `gs_id` int(11) NOT NULL,
;  PRIMARY KEY (`id`),
;  KEY `fk_gamespot_user_review_1` (`gs_id`),
;  CONSTRAINT `fk_gamespot_user_review_1` FOREIGN KEY (`gs_id`) REFERENCES `__main___gamespotgamedata` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
;) ENGINE=MyISAM DEFAULT CHARSET=utf8;


;(take 5 (get-completed-games))

; read in all the files of these games into one big zip file


(defn get-completed-games []
  (let [game __main___gamespotgamedata]
    (select game
      (where {:completed true
              :in_progress false
              :time_completed [not= nil]
              ;:href [like "%skyrim%xbox%"]
              })
      )))




  ;(:title :href :release_date :upc :reviews_and_whatnot :platform :score :genre)


   ; store as a string
   ; store only if it contains numbers
   ; pray it's not blank each and every time
   ; store as text?
   ; not sure


  ; if game gave a 404, gamespot_review, user_reviews and metadata will all be null
  ; these lines here will crash if metadata is nil
  ;(def ) ; returns a list (I think)

  ; todo parse this
  ;(def ) ; returns a string
  ;(def ) ; returns a string or an empty list
  ;(def ) ; returns a string

  ;(def ) ; can be nil

;    ret['review'] = review
;    ret['comments'] = comments
;    ret['gamespot_score'] = gamespot_score
;    ret['gamespot_score_word'] = gamespot_score_word
;    ret['metacritic_score'] = metacritic_score
;    ret['metacritic_reviews'] = metacritic_reviews
;    ret['metacritic_reviews_link'] = metacritic_reviews_link

; if no reviews
;      metacritic_score = "No Reviews"
;      metacritic_reviews = "No Reviews"
;      metacritic_reviews_link = "No Reviews"

   ; a list. will only be nil if we have no data at all about this video game.


(defn sean-replace [^String string & replacements]
 (loop [p replacements
        s string]
   (if (not-empty p)
     (recur
       (-> p rest rest)
       (.replace ^String s ^String (first p) ^String (second p)))
     s)))


(defn istype? [obj t]
  (= (type obj) t))


(defn render [html-tree]
  (cond
    (istype? html-tree clojure.lang.LazySeq) (apply str (html/emit* (:content (first html-tree))))    true (apply str (html/emit* html-tree))))

  (defn ensure-string [x]
    (type x))

(comment
  (def broken "/Users/seanneilan/gamespotData/79280.txt")
  (use '[clojure.data.json :only (json-str write-json read-json)])
  (def data (read-json (slurp broken)))
  (def reviews-and-whatnot (:reviews_and_whatnot data))
  (def meta- (first reviews-and-whatnot))
  (use '[net.cgrand.enlive-html :as html])
  (def  related-games-gather-platforms (fn [x]
                                         (map #(.trim %)
                                              (.split
                                               (apply str
                                                      (.split
                                                       (sean-replace
                                                        (apply str
                                                               (map html/text x))
                                                        "Platforms:" "" "\n" "")
                                                       "  "))
                                               "\\|"))))


             (map #(.trim %)
                            (mapcat
                             #(-> %
                                  read-it
                                  html/html-resource
                                  (html/select #{[:.gameTitle :a html/text-node]})
                                  )
                             (:related_games meta-)))

  (def  related-games (zipmap
                       (map #(.trim %)
                            (mapcat
                             #(-> %
                                  read-it
                                  html/html-resource
                                  (html/select #{[:.gameTitle :a html/text-node]})
                                  )
                             (:related_games meta-)))
                       (map
                        #(-> %
                             read-it
                             html/html-resource
                             (html/select #{[:li.platforms]})
                             first
                             :content
                             related-games-gather-platforms)
                        (:related_games meta-))))

  (def reviews-and-whatnot (:reviews_and_whatnot data)))
                                        ;(def gs-data (nth
                 ;reviews-and-whatnot 1))


(def directory "/Volumes/ramdisk/")
(def directory "/Users/seanneilan/gamespotData/")
(def directory "/home/sneilan/gamespotData/")

(def newDirectory "/home/sneilan/newGamespotData")

(defn load-gs [x]
  (let [f (str directory (:filename x))
        id (:id x)]
    (println f)
    (let [data (read-json (slurp f))
          title (:title data)
          href (:href data)
          release-date (:release_date data)
          upc (:upc data)
          platform (:platform data)
          score (:score data)
          genre (:genre data)
          reviews-and-whatnot (:reviews_and_whatnot data)
          meta- (if (istype? reviews-and-whatnot clojure.lang.PersistentArrayMap)
                  (:metadata reviews-and-whatnot)
                  (first reviews-and-whatnot))
          platforms (:platforms meta-)
          more-details  (zipmap
                         (map #(sean-replace % ":" "")
                              (mapcat :content (html/select
                                                (html/html-resource (read-it (:details meta-)))
                                                #{[:.game_info :dt]})))
                         (map #(if (istype? % clojure.lang.PersistentStructMap)
                               (-> % :content first render)
                               (render %))
                            (mapcat :content
                                    (html/select
                                     (html/html-resource (read-it (:details meta-)))
                                     #{[:.game_info :dd]}))))
          related-games-gather-platforms (fn [x]
                                           (map #(.trim ^String %)
                                                (.split ^String
                                                 (apply str
                                                        (.split ^String
                                                         (sean-replace
                                                          (apply str
                                                                 (map html/text x))
                                                          "Platforms:" "" "\n" "")
                                                         "  "))
                                                 "\\|")))
          related-games (zipmap
                         (map #(.trim ^String %)
                              (mapcat
                               #(-> %
                                    read-it
                                    html/html-resource
                                    (html/select #{[:.gameTitle :a html/text-node]}))
                               (:related_games meta-)))
                         (map
                          #(-> %
                               read-it
                               html/html-resource
                               (html/select #{[:li.platforms]})
                               first
                               :content
                               related-games-gather-platforms)
                          (:related_games meta-)))

          related-games-same-universe (zipmap
                                       (map #(.trim ^String %)
                                            (mapcat
                                             #(-> %
                                                read-it
                                                html/html-resource
                                                (html/select #{[:.gameTitle :a]})
                                                first
                                                :content)
                                             (:same_universe meta-)))
                                       (mapcat
                                        #(-> %
                                             read-it
                                             html/html-resource
                                             (html/select #{[:li.platforms :span.data]})
                                             first
                                             :content
                                             related-games-gather-platforms)
                                        (:same_universe meta-)))
          gs-data (if (istype? reviews-and-whatnot clojure.lang.PersistentArrayMap)
                    (:gamespot_review reviews-and-whatnot)
                    (nth reviews-and-whatnot 1))

          gamespot-review (apply str
                               (map html/text
                                    (mapcat
                                     #(-> %
                                          read-it
                                          html/html-resource
                                          (html/select #{[:#gs_review]})
                                          (html/at #{[:#generic_comments]} nil)
                                          (html/at #{[:.pageNav]} nil)
                                          (html/select #{[:.review_proscons :li ], [:p]}))
                                     (:review gs-data))))

                                        ;@TODO parse the comments into username, datetime,
                                        ;hours_played
          gamespot-comments (let [temp-fn (fn [x]
                                            (apply str
                                                   (interleave
                                                    (-> x
                                                        read-it
                                                        html/html-resource
                                                        (html/select #{[:div.message :p]})
                                                        (html/select #{[(html/but :.posted) html/text-node]}))
                                                    (cycle "\n"))))]
                              (concat (set (map temp-fn (:comments gs-data)))))
          gamespot-score (:gamespot_score gs-data)
          gamespot-score-word (:gamespot_score_word gs-data)
          metacritic-score (:metacritic_score gs-data)
          metacritic-reviews (:metacritic_reviews gs-data)
          metacritic-reviews-link (:metacritic_reviews_link gs-data)


          get-user-review-details (fn [html-tree]
                                    (assoc
                                        (zipmap
                                         (map #(sean-replace % ":" "")
                                              (mapcat :content (html/select
                                                                (html/html-resource (read-it (:score_details html-tree)))
                                                                #{[:.review_details :dt]})))
                                         (map #(if (istype? % clojure.lang.PersistentStructMap)
                                                 (-> % :content first render)
                                                 (render %))
                                              (mapcat :content
                                                      (html/select
                                                       (html/html-resource (read-it (:score_details html-tree)))
                                                       #{[:.review_details :dd]}))))
                                      "Score" (apply str
                                                     (-> (:meta html-tree)
                                                         read-it
                                                         html/html-resource
                                                         (html/select #{[:.numeric html/text-node]})))))

          get-user-review-body (fn [html-tree]
                               (apply str
                                      (-> (:body html-tree)
                                          read-it
                                          html/html-resource
                                          (html/select #{[html/text-node]}))))

          user-reviews (dorun (map
                               #(assoc {}
                                  :body (get-user-review-body %1)
                                  :details (get-user-review-details %1))
                               (filter #(!= % {})
                                       (if (istype? reviews-and-whatnot clojure.lang.PersistentArrayMap)
                                         (:user_reviews reviews-and-whatnot)
                                         (nth reviews-and-whatnot 2)))))]



      (comment
        (insert meta-gamespot
                values {:title title
                        :release_date release-date
                        :upc upc
                        :platform platform
                        :score score
                        :genre genre
                        :id id}))


      (comment
        (insert user-review
                (values (map user-reviews))))


      (comment
        (defentity meta_gamespot
          (has-one '__main___gamespotgamedata))
        (defentity gamespot_review
          (has-many 'gamespot_review_comment))
        (defentity gamespot_review_comment
          (has-one gamespot_review))
        (defentity gamespot_user_review
          (has-one '__main___gamespotgamedata))
        (defentity __main___gamespotgamedata
          (has-one meta_gamespot)
          (has-one gamespot_review)
          (has-many gamespot_user_review)))

      (spit (sean-replace f "gamespotData" "newGamespotData")
            (zipmap
             '(title
               href
               release-date
               upc
               platform
               score
               genre
               platforms
               more-details
               related-games
               related-games-same-universe
               gamespot-review
               gamespot-comments
               gamespot-score
               gamespot-score-word
               metacritic-score
               metacritic-reviews
               metacritic-reviews-link
               user-reviews)
             (list
              href
              release-date
              upc
              platform
              score
              genre
              platforms
              more-details
              related-games
              related-games-same-universe
              gamespot-review
              gamespot-comments
              gamespot-score
              gamespot-score-word
              metacritic-score
              metacritic-reviews
              metacritic-reviews-link))))))

;(
;  )
;(defn get-completed-games []
;  (exec-raw ["SELECT id, filename, CAST(LEFT(filename, LOCATE('.txt', filename)-1) as UNSIGNED) as yar from __main___gamespotgamedata where completed=1 and in_progress=0 and time_completed is not null and CAST(LEFT(filename, LOCATE('.txt', filename)-1) as UNSIGNED) >= 1 and CAST(LEFT(filename, LOCATE('.txt', filename)-1) as UNSIGNED) <= 9999 order by yar asc"] :results))

(defn get-completed-games []
  (exec-raw ["SELECT id, filename, CAST(LEFT(filename, LOCATE('.txt', filename)-1) as UNSIGNED) as yar from __main___gamespotgamedata where completed=1 and in_progress=0 and time_completed is not null order by yar asc"] :results))

(set! *warn-on-reflection* true)

(defn try-load-gs [x]
  (try
    (load-gs x)
    (catch Exception _)))

(def ^java.io.PrintWriter outoutout (java.io.PrintWriter. *out*))


(defn fuck []

  (dotimes [n 999999] (.println outoutout n)))


(defn -main []
  (dorun
   (pmap try-load-gs (to-array  (get-completed-games)))))

(defn derka []
  (map load-gs (get-completed-games)))








;(def data (map (fn [x] (slurp (str directory (:filename x))))
                                        ;(get-completed-games)))
