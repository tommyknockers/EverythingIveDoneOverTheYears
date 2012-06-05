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


(defn run []
  (clojure.contrib.duck-streams/spit yar-js
    (js 
      (var S {:CANVAS "#blobs"})
      (var WIDTH 640)
      (var HEIGHT 480)
      (var INTERVAL 15)
      (var HORIZONTAL_OFFSET 0)
      (var VERTICAL_OFFSET 0)
      (var TOTAL_DELTA 0)

      (var POINT {})
      (set! (aget "X" POINT) 50)
      (set! (aget "Y" POINT) 50)
      (set! (aget "DISPLAY" POINT) true)

      (var ctx "derp")
      (var canvas "null")
      (var grid "derpderpderp")
      (var dragging false)


      (fn clearCanvas [context canvas]
        (.clearRect context 0 0 canvas.width canvas.height)
        (var w canvas.width)
        (set! canvas.width 1)
        (set! canvas.width w))

      
      (fn mainLoop []
        (drawSomething)
        (setTimeout "mainLoop()" 30))


      (fn drawPoint []
        (.beginPath ctx)
        (.fillRect ctx POINT.X POINT.Y 6 6)
        (set! ctx.textBaseline "top")
        (set! ctx.font "2em Futura")
        (var X (/ (- POINT.X (% POINT.X MAJOR_INTERVAL)) MAJOR_INTERVAL))
        (var Y (/ (- POINT.Y (% POINT.Y MAJOR_INTERVAL)) MAJOR_INTERVAL))
        (.fillText ctx (+ "( " X " , " Y " )") (+ POINT.X 3) (+ POINT.Y 5))
        (.stroke ctx))

      (fn createGrid []
        (set! grid
          (Matrix.Zero
          (*
            (+
              (/ WIDTH INTERVAL)
              (/ HEIGHT INTERVAL)
            2)))))

      (fn drawGrid []
        (.beginPath ctx)
        (set! ctx.lineWidth 1)
        (set! ctx.strokeStyle "black")
        (.moveTo ctx 50 25)
        (.lineTo ctx 300 25)
        (.stroke ctx))


      (.ready
        ($ document)
        (fn []
          (set! canvas (aget ($ S.CANVAS) 0))
          (set! ctx (.getContext canvas "2d"))

          (set! HEIGHT (.height ($ window)))
          (set! WIDTH (- (.width ($ window)) 0))
          (set! canvas.width WIDTH)
          (set! canvas.height HEIGHT)

          (.mousemove
            ($ S.CANVAS)
            (fn [e]
              (if (== dragging true)
                (do
                  (var x (- e.pageX e.target.offsetLeft))
                  (var y (- e.pageY e.target.offsetTop))

                  (set! HORIZONTAL_OFFSET x)
                  (set! VERTICAL_OFFSET y)
                  (if (> HORIZONTAL_OFFSET INTERVAL)
                    (set! HORIZONTAL_OFFSET (% HORIZONTAL_OFFSET INTERVAL)))
                  (if (> VERTICAL_OFFSET INTERVAL)
                    (set! VERTICAL_OFFSET (% VERTICAL_OFFSET INTERVAL)))
                  (drawGrid)))))

          (.keydown
            ($ document)
            (fn [e]
              (if (== e.keyCode 37) ; left
                (do
                  (set! HORIZONTAL_OFFSET (- HORIZONTAL_OFFSET 1))
                  (if (> HORIZONTAL_OFFSET INTERVAL)
                    (set! HORIZONTAL_OFFSET (% HORIZONTAL_OFFSET INTERVAL)))))

              (if (== e.keyCode 39) ; right
                (do
                  (set! HORIZONTAL_OFFSET (+ HORIZONTAL_OFFSET 1))
                  (if (> HORIZONTAL_OFFSET INTERVAL)
                    (set! HORIZONTAL_OFFSET (% HORIZONTAL_OFFSET INTERVAL)))))

              (if (== e.keyCode 38) ; up
                (do
                  (set! VERTICAL_OFFSET (- VERTICAL_OFFSET 1))
                  (if (> VERTICAL_OFFSET INTERVAL)
                    (set! VERTICAL_OFFSET (% VERTICAL_OFFSET INTERVAL)))))

              (if (== e.keyCode 40) ; down
                (do
                  (set! VERTICAL_OFFSET (+ VERTICAL_OFFSET 1))
                  (if (> VERTICAL_OFFSET INTERVAL)
                    (set! VERTICAL_OFFSET (% VERTICAL_OFFSET INTERVAL)))))
              (drawGrid)))

          (.click
            ($ S.CANVAS)
            (fn [e]
              (set! POINT.DISPLAY true)
              (set! POINT.X (- e.pageX e.target.offsetLeft))
              (set! POINT.Y (- e.pageY e.target.offsetTop))
              (drawGrid)))

          (.mousedown
            ($ S.CANVAS)
            (fn [e]
              (set! dragging true)))

          (.mouseup
            ($ S.CANVAS)
            (fn [e]
              (set! dragging false)))

          (.mousewheel
            ($ S.CANVAS)
            (fn [objEvent intDelta]
              (zoom_function objEvent intDelta)))

          (.resize
            ($ window)
            (fn []
            (set! HEIGHT (.height ($ window)))
            (set! WIDTH (- (.width ($ window)) 0))
            (set! canvas.width WIDTH)
            (set! canvas.height HEIGHT)
            (drawGrid)))

          (.load
            ($ window)
            (fn []
            (drawGrid))))))))

(run)

