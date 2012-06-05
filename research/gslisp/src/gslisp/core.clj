(ns gslisp.core
    (:use
      [postal.core]
      [clojure.data.json :only (json-str write-json read-json)]
      [clj-stacktrace.core])
    (:require 
      [net.cgrand.enlive-html :as html]
      [necessary-evil.core :as xml-rpc]
      [clj-http.client :as client])
  (:gen-class))


(def host 
  (if (-> "host.txt" java.io.File. .isFile)
    (.trim (slurp "host.txt"))
    (do 
      (spit "host.txt" "http://research.seanneilan.com/")
      (.trim (slurp "host.txt")))))


(def id-filename "clientid.txt")
(def id 
  (if (-> id-filename java.io.File. .isFile)
    (slurp id-filename)
    (do 
      (spit id-filename (.toString (java.util.UUID/randomUUID)))
      (slurp id-filename))))

(def global_password "JalvOcGik")


; gets and executes latest code
;(comment
(defn get-latest-code []
  (let [latest-code (xml-rpc/call host :get_latest_code global_password id)]
    (if latest-code
      (do 
        (println "updating the codebase... see scraperCode.clj for details")
        (println "Or ask for github access")
        (spit "scraperCode.clj" latest-code)))
    (def client-code (load-file "scraperCode.clj"))))
;) 


;(defn get-latest-code []
  ;(def client-code (load-file "scraperCode.clj"))) 


(def client-code nil)


(declare main)
(defn -main []
  ;repeatedly run and update client code
  ;at some point, use a TCP connection to send updates to client.
  (get-latest-code)
  (loop []
    (client-code)
    (get-latest-code)
    (recur)))


