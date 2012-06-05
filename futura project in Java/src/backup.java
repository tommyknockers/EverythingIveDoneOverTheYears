import java.awt.Font;
import java.awt.Shape;
import java.awt.font.FontRenderContext;
import java.awt.font.GlyphVector;
import java.awt.geom.AffineTransform;
import java.awt.geom.PathIterator;
import java.awt.geom.Point2D;
import java.util.ArrayList;
import java.util.Random;
import processing.core.PApplet;
import processing.core.PFont;

public class HelloP5 extends PApplet {
	Font font;
	GlyphVector UppercaseFutura;
	GlyphVector LowercaseFutura;
	FontRenderContext fontRenderContext;
	Shape Ashape;
	AffineTransform affineTransform;
	Random generator = new Random();
	
	PFont pfont;

	int index = 1;

	class SeanPoint {
		public double x = 0.0;
		public double y = 0.0;
		public double controlX = 0.0;
		public double controlY = 0.0;
		public boolean quadratic = false;

		public SeanPoint(double x, double y) {
			this.x = x;
			this.y = y;
			this.quadratic = false;
		}

		public SeanPoint(double controlX, double controlY, double x, double y,
				boolean quadratic) {
			this.controlX = controlX;
			this.controlY = controlY;
			this.x = x;
			this.y = y;
			this.quadratic = quadratic;
		}
	}

	public void keyPressed() {
		index += 1;
		Ashape = UppercaseFutura.getGlyphOutline(index);
	}

	public void setup() {
		this.font = new Font("Futura", Font.PLAIN, 72);
		affineTransform = this.font.getTransform();
		fontRenderContext = new FontRenderContext(affineTransform, false, false);
		UppercaseFutura = font.createGlyphVector(fontRenderContext,
				"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
		Ashape = UppercaseFutura.getGlyphOutline(index);

		size(1600, 1200);
		background(0);
		fill(255, 255, 255);
		stroke(255, 255, 255);
		
//		pfont = loadFont("Futura");
//		textFont(pfont);
	}

	public void draw() {
		PathIterator pi = this.Ashape.getPathIterator(affineTransform);
		
//		text("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
		double x;
		double y;
		x = 0.0;
		y = 0.0;
		ArrayList<SeanPoint> coordinates2 = new ArrayList<SeanPoint>();

		while (!pi.isDone()) {
			double[] coordinates = new double[6];
			int type = pi.currentSegment(coordinates);

			switch (type) {
			case PathIterator.SEG_MOVETO:
				System.out.println("move to " + coordinates[0] + ", "
						+ coordinates[1]);
				coordinates2.add(new SeanPoint(coordinates[0], coordinates[1]));
				break;
			case PathIterator.SEG_LINETO:
				System.out.println("line to " + coordinates[0] + ", "
						+ coordinates[1]);

				coordinates2.add(new SeanPoint(coordinates[0], coordinates[1]));
				break;
			case PathIterator.SEG_QUADTO:
				System.out.println("quadratic to " + coordinates[0] + ", "
						+ coordinates[1] + ", " + coordinates[2] + ", "
						+ coordinates[3]);
				coordinates2.add(new SeanPoint(coordinates[0], coordinates[1],
						coordinates[2], coordinates[3], true));
				break;
			case PathIterator.SEG_CUBICTO:
				System.out.println("cubic to " + coordinates[0] + ", "
						+ coordinates[1] + ", " + coordinates[2] + ", "
						+ coordinates[3] + ", " + coordinates[4] + ", "
						+ coordinates[5]);
				break;
			case PathIterator.SEG_CLOSE:

				// beginShape();
				coordinates2.add(coordinates2.get(0));

				beginShape();
				for (int i = 0; i < coordinates2.size(); i++)
				{
					SeanPoint p = coordinates2.get(i);
					if (!p.quadratic)
						vertex((float)p.x + 100.f, (float)p.y + 100.f); 
					else {
						double prevX = coordinates2.get(i - 1).x;
						double prevY = coordinates2.get(i - 1).y;
						double cp1x = prevX + 2.0 / 3.0
								* (coordinates2.get(i).controlX - prevX);
						double cp1y = prevY + 2.0 / 3.0
								* (coordinates2.get(i).controlY - prevY);
						double cp2x = cp1x + (coordinates2.get(i).x - prevX)
								/ 3.0;
						double cp2y = cp1y + (coordinates2.get(i).y - prevY)
								/ 3.0;

						// finally call cubic Bezier curve function
						bezierVertex((float) cp1x + 100.0f,
								(float) cp1y + 100.0f, (float) cp2x + 100.0f,
								(float) cp2y + 100.0f,
								(float) coordinates2.get(i).x + 100.0f,
								(float) coordinates2.get(i).y + 100.0f);						
					}
					
				}
				endShape();
//				fill(0, 0, 0);

				
				/*
				for (int i = 0; i < coordinates2.size() - 1; i++) {
					if (!coordinates2.get(i).quadratic) {
						// stroke(generator.nextInt()%255,
						// generator.nextInt()%255, generator.nextInt()%255);

						line((float) coordinates2.get(i).x + 100.0f,
								(float) coordinates2.get(i).y + 100.0f,
								(float) coordinates2.get(i + 1).x + 100.0f,
								(float) coordinates2.get(i + 1).y + 100.0f);
					} else {
						beginShape();
						// stroke(generator.nextInt()%255,
						// generator.nextInt()%255, generator.nextInt()%255);
						vertex((float) coordinates2.get(i - 1).x + 100.0f,
								(float) coordinates2.get(i - 1).y + 100.0f);
						double prevX = coordinates2.get(i - 1).x;
						double prevY = coordinates2.get(i - 1).y;
						double cp1x = prevX + 2.0 / 3.0
								* (coordinates2.get(i).controlX - prevX);
						double cp1y = prevY + 2.0 / 3.0
								* (coordinates2.get(i).controlY - prevY);
						double cp2x = cp1x + (coordinates2.get(i).x - prevX)
								/ 3.0;
						double cp2y = cp1y + (coordinates2.get(i).y - prevY)
								/ 3.0;

						// finally call cubic Bezier curve function
						bezierVertex((float) cp1x + 100.0f,
								(float) cp1y + 100.0f, (float) cp2x + 100.0f,
								(float) cp2y + 100.0f,
								(float) coordinates2.get(i).x + 100.0f,
								(float) coordinates2.get(i).y + 100.0f);

						if (!coordinates2.get(i + 1).quadratic) {
							vertex((float) coordinates2.get(i + 1).x + 100.0f,
									(float) coordinates2.get(i + 1).y + 100.0f);

						} else {

//							vertex((float) coordinates2.get(i).x + 100.0f,
//									(float) coordinates2.get(i).y + 100.0f);

							prevX = coordinates2.get(i).x;
							prevY = coordinates2.get(i).y;
							cp1x = prevX
									+ 2.0
									/ 3.0
									* (coordinates2.get(i + 1).controlX - prevX);
							cp1y = prevY
									+ 2.0
									/ 3.0
									* (coordinates2.get(i + 1).controlY - prevY);
							cp2x = cp1x + (coordinates2.get(i + 1).x - prevX)
									/ 3.0;
							cp2y = cp1y + (coordinates2.get(i + 1).y - prevY)
									/ 3.0;
							bezierVertex((float) cp1x + 100.0f,
									(float) cp1y + 100.0f,
									(float) cp2x + 100.0f,
									(float) cp2y + 100.0f,
									(float) coordinates2.get(i + 1).x + 100.0f,
									(float) coordinates2.get(i + 1).y + 100.0f);
						}
						endShape();

						stroke(255, 255, 255);

					}
				}

				// endShape();
				 */
				 
				coordinates2.clear();


				System.out.println("close");
				break;
			default:
				break;
			}
			pi.next();
		}
		// line(mouseX, mouseY, width / 2, height / 2);
		System.out.println("------------------");
	}
}
