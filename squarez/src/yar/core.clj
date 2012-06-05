(ns yar.core
  (:use compojure.core, ring.adapter.jetty)
  (:require [compojure.route :as route]))

;(require 'yar.curate.css)
;(require 'yar.curate.javascript)
;(require 'yar.curate.html)
;(require 'yar.css)
;(require 'yar.javascript)
;(require 'yar.html)
;(require 'yar.derp)

(defroutes main-routes
           (GET "/" [] "<h1>Hello World</h1>")
           (route/not-found "<h1>Page not found</h1>"))

(defn -main [& args]
  ;(yar.curate.css/run)
  ;(yar.curate.javascript/run)
  ;(yar.curate.html/run)
  ;(yar.css/run)
  ;(yar.javascript/run)
  ;(yar.html/run)
  ;(yar.derp/main)
  (run-jetty main-routes {:port 8080}))


;(-main)

