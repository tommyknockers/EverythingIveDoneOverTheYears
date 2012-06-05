(ns yar.derp
  (:import
    (java.awt Font GraphicsEnvironment) ;Graphics Graphics2D Font Shape)
    (javax.swing JFrame JPanel JLabel)))

(defn main []
  (let [frame (JFrame. "Futura")
        panel (JPanel.)
        message (String. "The Future of the Past is more interesting than the Future of the Present")
        font (Font. "Futura" Font/PLAIN 36)
        textLabel (JLabel. message)
        ge (. GraphicsEnvironment (getLocalGraphicsEnvironment))] ; when your method is static, put it own parenthesis

    (.getAllFonts ge)
    (.setFont textLabel font)

    ; get glyph of Futura
    (doto frame
      (.add textLabel)
      (.pack)
      (.setVisible true))))

