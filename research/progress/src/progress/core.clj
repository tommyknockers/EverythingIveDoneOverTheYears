(ns progress.core
  (:gen-class))

(use 'clojure.contrib.sql)
(use 'mmemail.core)

(defn send-progress-email [pct-done]
 (send-email {:host "smtp.gmail.com"
             :port 465
             :ssl true
             :user "sean1@seanneilan.com"
             :password "shimon88"
             :to "sean@seanneilan.com"
             :subject (str "We are " pct-done "% done.")
             :body ""}))

(defn -main
  []
  (let [db-host "127.0.0.1"
        db-port 3306
        db-name "gamespot"]
    (def db {:classname "com.mysql.jdbc.Driver"
           :subprotocol "mysql"
           :subname (str "//" db-host ":" db-port "/" db-name)
           :user "root"
           :password "root"})
    (with-connection db
      (with-query-results rs ["select (SELECT count(*) FROM `__main___gamedata` WHERE completed=1)/(select count(*) from `__main___gamedata` ) * 100.0 as yar"]
        (dorun (map #(send-progress-email (:yar %)) rs))))))


