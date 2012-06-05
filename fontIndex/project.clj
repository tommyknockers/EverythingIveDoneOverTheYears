(defproject test "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dependencies [[org.clojure/clojure "1.3.0"]
                  [korma "0.2.1"]
                 [mysql/mysql-connector-java "5.1.18"]
                  
                 ]

  :dev-dependencies [[swank-clojure "1.4.0"]
                     ;[cdt "1.2.6.2"]
                     ]
  :jvm-opts ["-Djava.awt.headless=true"]
  
  :main test.core)
