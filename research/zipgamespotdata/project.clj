(defproject gamespot "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "[1.3.0]"]
                 ;[org.clojure/clojure-contrib "1.2.0"]
                 [mysql/mysql-connector-java "5.1.18"]
                 [necessary-evil "2.0.0-SNAPSHOT"]
                 [org.clojure/data.json "0.1.1"]
                 [cdt "1.2.6.2"]
                 [com.draines/postal "1.7-SNAPSHOT"]
                 ;[mmemail "1.0.1"]
                 ;[org.clojars.gjahad/debug-repl "0.3.1"]
                 [korma "0.2.1"]]

  :dev-dependencies [[swank-clojure "1.4.0"]
                     ;[cdt "1.2.6.2"]
                     ]

  :disable-implicit-clean true
  :aot [gamespot.core]
  :main gamespot.core
  :checksum-deps false
  :jvm-opts ["-Xmx2g" "-server"]
  )
