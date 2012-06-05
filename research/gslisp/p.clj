(defproject gamespot "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.2.1"]
                 [org.clojure/clojure-contrib "1.2.0"]
                 [mysql/mysql-connector-java "5.1.18"]
                 [mmemail "1.0.1"]
                 [org.clojars.gjahad/debug-repl "0.3.1"]
                 [korma "0.2.1"]
                 ]
  :disable-implicit-clean true
  :aot [gamespot.core]
  :main gamespot.core)

