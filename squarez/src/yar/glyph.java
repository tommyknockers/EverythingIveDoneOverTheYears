GlyphVector gv = font.createGlyphVector(g.getFontRenderContext(), "abcdefghijklmnopqrstuvwxyz");
Shape ashape = gv.getGlyphOutline(0); // shape of letter a

// outline letter with 1px line
g.setStroke(new BasicStroke(1.0f));


import java.awt.Font
Graphics Graphics2D RenderingHints Shape
import java.awt.font
FontRenderContext
GlyphVector
AffineTransform
Point2D

public class RotatedText extends JPanel {
  public void paint(Graphics g) {
    Graphics2D g2d = (Graphics2D) g;
    g2d.setRenderingHint(RenderHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);

  }
}




class ToggleShape extends PPath {
  private boolean fIsPressed = false;
  public ToggleShape() {
    setPathToEllipse(0, 0, 100, 80);
    addInputEventListener(new PBasicInputEventHandler() {
      public void mousePressed(PInputEvent event) {
        super.mousepressed(event);
        fIsPressed = true;
        repaint();
      }
      public void mouseReleased(PInputEvent event) {
        super.mouseReleased(event);
        fIsPressed = false;
        repaint();
      }
    });
  }

  protected void paint(PPaintContext paintContext) {
    if (fIsPressed) {
      Graphics2D g2 = paintContext.getGraphics();
      g2.setPaint(getPaint());
      g2.fill(getBoundsReference());
    } else {
      super.paint(paintContext);
    }
  }
}

;(proxy [class-name] [] (methods))

(defn create-toggle-shape
  "creates an ellipse that changes shape when it is clicked"
  []
  (let [fIsPressed? (atom false)
        shape (proxy [PPath] []
                (paint [#^PPaintContext paintContext]
                  (if @fIsPressed?
                    (doto (.getGraphics paintContext)
                      (.setPaint (.getPaint this))
                      (.fill (.getBoundsReference this)))
                    (proxy-super paint paintContext))))]
        (doto shape
          (.setPathToEllipse 0 0 100 80)
          (.addInputEventListener
            (proxy [PBasicInputEventHandler] []
              (mousePressed
                [event]
                (proxy-super mousePressed event)
                (reset! fIsPressed? true)
                (.repaint shape))
              (mouseReleased
                [event]
                (proxy-super mouseReleased event)
                (reset! fIsPressed? false)
                (.repaint shape)))))))



