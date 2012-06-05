(ns stuff.core)

;(def lines (-> "RA.txt" slurp (.split "\n")))
;(def words (map #(.split % " ") lines))
;(def asdf (first words))

(defn sean-replace [string & replacements]
 (loop [p replacements
        s string]
   (if (not-empty p)
     (recur
       (-> p rest rest)
       (.replace s (first p) (second p)))
     s)))


(defn cost [a b]
  (if (= a b) 0 1))


;(declare levenshtein-distance-fast)

(defn levenshtein-distance
  [seq1 seq2]
  (cond
    (empty? seq1) (count seq2)
    (empty? seq2) (count seq1)
    :else (min
            (+ (cost (first seq1) (first seq2)) (levenshtein-distance (rest seq1) (rest seq2)));substitution
            (inc (levenshtein-distance (rest seq1) seq2)) ;insertion
            (inc (levenshtein-distance seq1 (rest seq2)))))) ;deletion


;(def levenshtein-distance-fast (memoize levenshtein-distance))


(comment
      (concat (set (mapcat #(reverse (loop [c (rest (take (dec (* 2 (count asdf))) (interleave (cycle %) (cycle %))))
                                              f ()]
                                         (if (< 0 (count c))
                                           (recur (drop 2 c)
                                                  (cons (take 2 c) f))
                                           f))) words)))
  )



(defn -main []
  (let [files '("ESCL2.txt" "ESCL2.1.txt" "ESCL2.2.txt" "ESCL2.3.txt" "ESCL2.4.txt")
        lines (map #(-> % slurp (sean-replace ":" "" "|" "" "'" "apostrophe") (.split "\n")) files)


        ;words (map #(.split % " ") lines)
        ;asdf (first words)
        ;double-words
        ]
    ;(println "digraph {")
    ;(dorun (map #(print %) (mapcat #(str (first %1) "->" (second %1) ";\n") double-words)))
    ;(println "}")

    ))
