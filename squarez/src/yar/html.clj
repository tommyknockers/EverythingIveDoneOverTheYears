(ns yar.html)

(require 'clojure.contrib.duck-streams)
(def templates "/Users/seanneilan/BucketsOfNantucket/yar/public/")
(def yar-html (str templates "index.html"))
(use 'hiccup.core)

; [:a#logout {:href "{% better_url '/accounts/logout' LANGUAGE_CODE %}"} "logout"]

(defn run []
  (clojure.contrib.duck-streams/spit yar-html (html
    [:html5
     [:head
      [:title "hooray!"]
      [:link {:rel "stylesheet" :type "text/css" :href "yar.css"}]
      [:script {:type "text/javascript" :src "jquery-1.6.2.min.js"}]
      [:script {:type "text/javascript" :src "jQuery_mousewheel_plugin.js"}]
      [:script {:type "text/javascript" :src "sylvester.src.js"}]
      ;[:script {:type "text/javascript" :src "javascript.js"}]]
      [:script {:type "text/javascript" :src "out/goog/base.js"}]
      [:script {:type "text/javascript" :src "hello.js"}]
      [:script {:type "text/javascript"}
        "goog.require('hello');"]]
     [:body
      [:canvas#blobs {:width "640px" :height "480px"}]]])))

(run)

