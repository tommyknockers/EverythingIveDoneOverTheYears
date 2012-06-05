(ns yar.javascript)

(use 'hiccup.core)

(use '[clojure.contrib.string :only (lower-case)])

(use 'com.reasonr.scriptjure)

(def public-media "/Users/seanneilan/BucketsOfNantucket/yar/public/")
(def yar-js (str public-media "javascript.js"))

(def js-beautifier (str "/Users/seanneilan/BucketsOfNantucket/javascript/bin/yar.sh"))

(use '[clojure.contrib.duck-streams :only (read-lines)])
(defn execute [command]
  (let [process (.exec (Runtime/getRuntime) command)]
    (if (= 0 (.waitFor  process))
      (read-lines (.getInputStream process))
      (read-lines (.getErrorStream process)))))

(def run []
  (print "derp derp derp"))

(run)

