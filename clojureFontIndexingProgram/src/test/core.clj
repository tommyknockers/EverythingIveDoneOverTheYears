(ns test.core
  (:import (java.io InputStreamReader OutputStreamWriter)))

(use 'korma.db)
(use 'korma.core)

(declare get-path)


(defdb prod (mysql {:db "fonts"
                    :host "localhost"
                    :port "3306"
                    :user "root"
                    :password "root"}))


(defentity font)
(defentity zip)

(defn sean-replace [string & replacements]
  (loop [p replacements
         s string]
    (if (not-empty p)
      (recur
       (-> p rest rest)
       (.replace s (first p) (second p)))
      s)))


(defn execute [command & commands]
  (let [process (.exec
                 (Runtime/getRuntime)
                 (into-array String (flatten (list command commands))))
        output (if (= 0 (.waitFor  process))
                 (slurp (.getInputStream process))
                 (slurp (.getErrorStream process)))]
    (.split output "\n")))


(defn is-font [file]
  (let [name (.getName file)
        extension (last (.split name "\\."))]
    (if
        (or
         (= extension "ttf")
         (= extension "TTF")
         (= extension "otf")
         (= extension "OTF")
         (= extension "ttc")
         (= extension "TTC"))
      (try
        (let [font (java.awt.Font/createFont
                    java.awt.Font/TRUETYPE_FONT
                    file)]
          (.finalize font)
          true)
        (catch Exception _
          (do
            (println (str (.getAbsolutePath file) " failed"))
            (println _)
            false)))
      false)))

(defn get-font-data [file]
  (let [path (.getAbsolutePath file)
        font-data-program "/Users/seanneilan/bin/getName.sh"
        output (execute font-data-program path)]
                                        ;(dorun (map println output))

    (if
        (> (count output) 1)
      (do
                                        ;(println path)
        (let [get (fn [output n] (.trim (nth output n)))
              font-name (get output 0)
              family-name (get output 1)
              full-name (get output 2)
              fond-name (get output 3)
              weight (get output 4)]
          {'font-name font-name
           'family-name family-name
           'full-name full-name
           'fond-name fond-name
           'weight weight}))

      nil)))


(defn insert-font [file md5 data]
  (insert font (values {:file file
                        :md5 md5
                        :fontname ('font-name data)
                        :familyname ('family-name data)
                        :fullname ('full-name data)
                        :fondname ('fond-name data)
                        :weight ('weight data)})))


(def md5thinger (java.security.MessageDigest/getInstance "MD5"))
(defn get-md5-string-from-bytes [x] (.toString (BigInteger. 1 x) 16))
(defn get-md5 [file]
  (get-md5-string-from-bytes
   (.digest md5thinger (.getBytes (slurp file) "UTF-8"))))


(defn get-path [file]
  (.getAbsolutePath file))


(defn print-font [font-obj path]
  (dorun
   (map println
        (list path
              (.getName font-obj)
              (.getFontName font-obj)
              (.getFamily font-obj)
              (.getPSName font-obj)
              "------"))))


(def dir "/Volumes/GermansAreSilly/Fonts/")
                                        ;(def dir "/Users/seanneilan/BucketsOfNantucket/BigNumberNames/web/media/fonts/helvetica/")


(defn font-doesnt-exist [font-path]
  (=
   (count
    (select font (where {:file font-path})))
   0))


(def i (ref 0))

(defn look-for-font-files []
  (doseq [x
           (drop (+ 181775 39300)
                 
          (file-seq (java.io.File. dir)) 
                 )
           ]
    (do
      (println (deref i))
      (dosync (ref-set i (+ (deref i) 1)))
      (println (get-path x))
      (if
          (and
           (not (.isDirectory x))
           (< (.length x) 1000000)
           (font-doesnt-exist (get-path x)))
        (let [data (get-font-data x)]
          (if data
            (do
              (insert-font (get-path x) (get-md5 x) data)
              (println data))))))))

(defn look-for-font-files1 [dir]
  (doseq [x
          (file-seq (java.io.File. dir))]
    (if
        (and
         (not (.isDirectory x))
         (< (.length x) 1000000))
      (let [data (get-font-data x)]
        (if data
          (do
            (insert-font (get-path x) (get-md5 x) data)
            (println data)))))))


(defn is-zip-file [file]
  (let [name (.getName file)
        extension (last (.split name "."))]
    (if
        (or
         (= extension "zip")
         (= extension "ZIP")
         (= extension "rar")
         (= extension "RAR")
         (= extension "bin")
         (= extension "BIN")
         (= extension "tar")
         (= extension "TAR")
         (= extension "gz")
         (= extension "GZ")
         (= extension "dmg")
         (= extension "DMG"))
      true)))


(defn insert-zip [file md5]
  (insert zip (values {:file file
                       :md5 md5})))


(defn look-for-zip-files []
  (doseq [x (drop 170000 (file-seq (java.io.File. "/Volumes/GermansAreSilly/Fonts/"))) ]
    (if
        (and
         (not (.isDirectory x))
         (is-zip-file x))
      (do
        (println (str "working on " (.getName x)))
        (insert-zip (get-path x) (get-md5 x)))
      (println "skipping " (.getName x)))))


(defn unzip-all-the-zip-files []
                                        ; first determine the filetype
                                        ; unzip it
                                        ; delete the file!
  true)


(defn -main []
  (look-for-font-files))
