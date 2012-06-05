(defproject gslisp "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "[1.3.0]"]
                 ;[org.clojure/clojure-contrib "1.2.0"]
                 [com.draines/postal "1.7-SNAPSHOT"]
                 ;[org.clojars.gjahad/debug-repl "0.3.1"]
                 ;[paddleguru/enlive "1.2.0-alpha1"]
                 [necessary-evil "2.0.0-SNAPSHOT"]
                 [clj-http "0.3.1"]
                 [org.clojure/data.json "0.1.1"]
                 [cdt "1.2.6.2"]
                 [clj-stacktrace "0.2.4"]
                 
                 ]
  :disable-implicit-clean true
  :main gslisp.core
  :aot [gslisp.core]
  ;:jvm-opts ["-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8030"]

;  :jvm-opts ["-Dorg.apache.commons.logging.Log=org.apache.commons.logging.impl.SimpleLog"
;             "-Dorg.apache.commons.logging.simplelog.showdatetime=true"
;             "-Dorg.apache.commons.logging.simplelog.log.org.apache.http=DEBUG"
;             "-Dorg.apache.commons.logging.simplelog.log.org.apache.http.wire=ERROR"]
  )

