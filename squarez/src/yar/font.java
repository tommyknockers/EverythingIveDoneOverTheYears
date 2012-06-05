import java.awt.Font;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.RenderingHints;
import java.awt.Shape;
import java.awt.font.FontRenderContext;
import java.awt.font.GlyphVector;
import java.awt.geom.AffineTransform;
import java.awt.geom.Point2D;

import javax.swing.JFrame;
import javax.swing.JPanel;

public class RotatedText extends JPanel {
  public void paint(Graphics g) {
    Graphics2D g2d (Graphics2D) g;
    g2d.setRenderingHint(RenderingHints.KEY_
