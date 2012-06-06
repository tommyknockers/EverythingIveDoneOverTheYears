(ns itunes.core
  (:require
   [net.cgrand.enlive-html :as html]
   [clj-http.client :as client])
  (:import
   [java.io
    FileOutputStream
    FileInputStream
    FileNotFoundException
    IOException
    BufferedInputStream
    BufferedOutputStream
    File
    FileReader])
  (:gen-class))


(def main-store-url "http://itunes.apple.com/us/genre/ios-books/id6018?mt=8")


(defn read-it
  "wrap java.io.StringReader in a function to make it compatible with
  sequence style programming"
  [x]
  (if (nil? x)
    '()
    (java.io.StringReader. x)))


(defn fetch-url [url]
 (->
   (client/get url)
   :body
   read-it
   html/html-resource))


(defn fetch-url-as-itunes [url]
  (->
   (client/get url
               {:headers
                {"User-Agent"
                 "iTunes/9.0.3 (Macintosh; U; Intel Mac OS X 10_6_2; en-ca)"}})
   :body
   read-it
   html/html-resource))


(defn get-genres [main-store-url]
  (let [links (->
                main-store-url
                fetch-url
                (html/select #{[:div#genre-nav :a.top-level-genre]}))]
    (zipmap
     (map html/text links)
     (map #(-> % :attrs :href) links))))


(defn get-apps-for-genre-url [genre-url]
  (let [letters (map char (concat (range 65 91) '(42)))
        rstr (fn [& args] (apply str (reverse args))) ; a str func
                                        ; that works in reverse
                                        ; handy.
        urls (map #(-> % (rstr "&letter=" genre-url)) letters)
        get-next-page-url (fn [page]
                            (-> page
                                (html/select #{[:a.paginate-more]})
                                last
                                :attrs
                                :href))
        get-apps-links (fn [page]
                         (let [app-links
                               (html/select
                                page
                                #{[:div#selectedcontent :a]})
                               apps (zipmap
                                     (map html/text app-links)
                                     (map #(-> % :attrs :href) app-links))]
                           apps))
        iterate-through-pages-and-get-apps
        (fn [url]
          (println url)
          (loop [page (fetch-url url)
                 apps (get-apps-links page)
                 next-page-url (get-next-page-url page)]
            (println next-page-url)
            (if next-page-url
              (let [next-page (fetch-url next-page-url)]
                (recur ; if there's a next page, get it
                 next-page
                 (merge apps (get-apps-links next-page))
                 (get-next-page-url next-page)))

              apps)
                                        ; otherwise return all the apps we've got
            ))]

    ; first download page 1
    ; get apps on that page
    ; if page has a next button, get the url for that page & recur
    (loop [urls-to-go (rest urls)
           url (str (first urls) "&page=1")
           apps (iterate-through-pages-and-get-apps url)]
      (if (not-empty urls-to-go)
        (recur
         (rest urls-to-go)
         (str (first urls-to-go) "&page=1")
         (merge apps
                (iterate-through-pages-and-get-apps
                 (str (first urls-to-go) "&page=1"))))
        apps))))


(defn -main []
  (spit "stuff.txt"
        (apply merge
               (map get-apps-for-genre-url
                    (map second (get-genres main-store-url))))))
