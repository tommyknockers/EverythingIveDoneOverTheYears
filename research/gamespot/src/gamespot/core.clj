(ns gamespot.core
  (:use
    [korma.db]
    [korma.core]
    [clojure.contrib.json]
    [alex-and-georges.debug-repl])
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
                    :host "localhost" ;; optional
                    ;:host "169.254.86.98" ;; optional
                    :port "3306" ;; optional
                    :user "sneilan_research"
                    ;:user "root"
                    :password "1ac1e956"}))
                    ;:password "root"}))

(defn as-file [s]
  "Return whatever string we have as a file object"
  (cond
    (instance? File s) s; already have a file, return unchanged
    (string? s) (File. s) ; return java file object for path s
    :else (throw (FileNotFoundException. (str s)))))

(defn walk [^File dir]
  (let [children (.listFiles dir)
        subdirs (filter #(.isDirectory %) children)
        files (filter #(.isFile %) children)]
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
;) ENGINE=InnoDB DEFAULT CHARSET=utf8;


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
;) ENGINE=InnoDB DEFAULT CHARSET=utf8;



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
;) ENGINE=InnoDB DEFAULT CHARSET=utf8;



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
;) ENGINE=InnoDB DEFAULT CHARSET=utf8;


;(take 5 (get-completed-games))

; read in all the files of these games into one big zip file


(defn get-completed-games [] 
  (let [game __main___gamespotgamedata]
    (select game
      (where {:completed true 
              :in_progress false
              :time_completed [not= nil]}))))

(defn -main[]
  (def dest (FileOutputStream. "asdf.zip"))
  (def out (ZipOutputStream. (BufferedOutputStream. dest)))

  (def BUFFER 2048)
  (def data (byte-array BUFFER))
  (def f (File. "./gamespotData/."))
  (def files (.list f)) ; String array
  (def directory "/home/sneilan/webapps/research/gamespotData/")
  (def filename (first files))

  (defn add-to-zip [filename]
    (print filename)
    (def entry (ZipEntry. filename))
    (.putNextEntry out entry)
    (def filedata (slurp (str directory filename)))
    (print (take 20 filedata))
    (.write out (.getBytes filedata) 0 (count filedata)))

  ; get a list of all games that are ready to be parsed
  (defn get-completed-games [] 
    (let [game __main___gamespotgamedata]
      (select game
        (where {:completed true 
                :in_progress false
                :time_completed [not= nil]}))))

  ;(def files (walk (as-file "/home/sneilan/BucketsOfNantucket/research/gamespotData")))
  (dorun
    (map add-to-zip (map :filename (get-completed-games))))
  (.close out)
  )



;public class Zip {
;   static final int BUFFER = 2048;
;   public static void main (String argv[]) {
;      try {
;         BufferedInputStream origin = null;
;         FileOutputStream dest = new 
;           FileOutputStream("c:\\zip\\myfigs.zip");
;         ZipOutputStream out = new ZipOutputStream(new 
;           BufferedOutputStream(dest));
;         //out.setMethod(ZipOutputStream.DEFLATED);
;         byte data[] = new byte[BUFFER];
;         // get a list of files from current directory
;         File f = new File(".");
;         String files[] = f.list();
;
;         for (int i=0; i<files.length; i++) {
;            System.out.println("Adding: "+files[i]);
;            FileInputStream fi = new 
;              FileInputStream(files[i]);
;            origin = new 
;              BufferedInputStream(fi, BUFFER);
;            ZipEntry entry = new ZipEntry(files[i]);
;            out.putNextEntry(entry);
;            int count;
;            while((count = origin.read(data, 0, 
;              BUFFER)) != -1) {
;               out.write(data, 0, count);
;            }
;            origin.close();
;         }
;         out.close();
;      } catch(Exception e) {
;         e.printStackTrace();
;      }
;   }
;}






(defn loadGamespotDataFromFileIntoDatabase [f]
  (def data (read-json (FileReader. f)))
  ;(:title :href :release_date :upc :reviews_and_whatnot :platform :score :genre)
  (:title data)
  (:href data)
  (:release_date data) ; store as a string
  (:upc data) ; store only if it contains numbers
  (:platform data) ; pray it's not blank each and every time
  (:score data) ; store as text?
  (:genre data) ; not sure

  (:reviews_and_whatnot data)
  ; if game gave a 404, gamespot_review, user_reviews and metadata will all be null
  ; these lines here will crash if metadata is nil
  (def related_games (first (:related_games (first (:reviews_and_whatnot data))))) ; returns a string
  (def platforms (:platforms (first (:reviews_and_whatnot data)))) ; returns a list (I think)
  (def more_details (:details (first (:reviews_and_whatnot data)))) ; returns a string
  (def related_games_same_universe (:same_universe (first (:reviews_and_whatnot data)))) ; returns a string or an empty list

  (def gamespot_review (first (next (:reviews_and_whatnot data)))) ; can be nil

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

  (def user_reviews (first (nnext (:reviews_and_whatnot data)))) ; a list. will only be nil if we have no data at all about this video game.
  (debug-repl)
  )

;(comment
;(defn -main
;  []
;  (let [db-host "localhost"
;        db-port 3306
;        db-name "sneilan_research"]
;    (def db {:classname "com.mysql.jdbc.Driver"
;           :subprotocol "mysql"
;           :subname (str "//" db-host ":" db-port "/" db-name)
;           :user "sneilan_research"
;           :password "1ac1e956"})
;    (with-connection db
;      (with-query-results rs ["select (SELECT count(*) FROM `__main___gamespotgamedata` WHERE completed=1)/(select count(*) from `__main___gamespotgamedata` ) * 100.0 as yar"]
;        (dorun (map #(send-progress-email (:yar %)) rs))))))
;)



