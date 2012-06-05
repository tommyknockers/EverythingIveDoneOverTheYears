(ns yar.css)

(use 'cssgen)
(use 'cssgen.types)
(use 'cssgen.use)

(def public-media "/Users/seanneilan/BucketsOfNantucket/yar/public/")
(def yar-css (str public-media "yar.css"))

(defn run []
  (css-file yar-css
    (rule "@font-face"
      :font-family "Futura"
      :src "url('Futura.ttc')")
    (rule "body"
      :font-size "16px"
      :font-family "Futura, Helvetica"
      :overflow :hidden
      :padding 0
      :margin 0
      :text-shadow "0 1px 0 #ccc, 
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15)")
    (rule "h1"
      :font-size "5.0em"
      :padding 0
      :margin 0)
    (rule "h2"
      :font=size "4.0em")
    (rule "h3"
      :font-size "3.0em")
    (rule "h4"
      :font-size "2.0em")
    (rule "blockquote"
      :font-size "1.5em")
    (rule "p"
      :font-size "1.25em")
    (rule "input"
      :font-size "1.0em")
    (rule "small"
      :font-size "0.75em")
    (rule "#blobs"
      :border "1px grey solid")))

(run)

