import java.awt.Font;
import java.awt.Shape;
import java.awt.font.FontRenderContext;
import java.awt.font.GlyphVector;
import java.awt.font.TextAttribute;
import java.awt.geom.AffineTransform;
import java.awt.geom.PathIterator;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
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

	int width = 1600;
	int height = 1200;
	float offsetX = ((float) width * 0.618f) / 2.0f;
//	float offsetY = ((float) height * 0.618f);
	float offsetY = 400;
	
	PFont pfont;
	boolean draw = true;
	String the_message = "f";

	ArrayList<SeanLine> lines;
	ArrayList<Letter> letters;

	int index = 0;

	class Letter {
		public ArrayList<ArrayList<SeanPoint>> shapes;

		public Letter(ArrayList<ArrayList<SeanPoint>> shapes) {
			this.shapes = shapes;
		}
	}

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

	class SeanLine {
		public double x1 = 0.0;
		public double y1 = 0.0;
		public double x2 = 0.0;
		public double y2 = 0.0;

		public SeanLine(double x1, double y1, double x2, double y2) {
			this.x1 = x1;
			this.y1 = y1;
			this.x2 = x2;
			this.y2 = y2;
		}
	}

	public void keyPressed() {
		if (key == this.DELETE || key == this.BACKSPACE) {
			if (the_message.length() <= 1)
				the_message = "";
			else
				the_message = the_message
						.substring(0, the_message.length() - 1);

			UppercaseFutura = font.createGlyphVector(fontRenderContext,
					the_message);

			offsetX = width / 2.0f
					- (float) UppercaseFutura.getVisualBounds().getWidth();

			lines = getLines();
			letters = getLetters();
		} else {
			the_message += key;
			UppercaseFutura = font.createGlyphVector(fontRenderContext,
					the_message);

			offsetX = width / 2.0f
					- (float) UppercaseFutura.getVisualBounds().getWidth();

			lines = getLines();
			letters = getLetters();
		}
	}

	public void setup() {
		// this.font = new Font("Futura", Font.PLAIN, 92);

		Map textAttributes = new HashMap();
		textAttributes.put(TextAttribute.FAMILY, "Futura");
		textAttributes.put(TextAttribute.SIZE, 92f);
		textAttributes.put(TextAttribute.KERNING, TextAttribute.KERNING_ON);
		this.font = Font.getFont(textAttributes);

		affineTransform = this.font.getTransform();
		fontRenderContext = new FontRenderContext(affineTransform, false, false);

		UppercaseFutura = font.createGlyphVector(fontRenderContext,
		// "AbBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz");
				the_message);

		offsetX = width / 2.0f
				- (float) UppercaseFutura.getVisualBounds().getWidth();

		Ashape = UppercaseFutura.getGlyphOutline(index);

		size(width, height);
		hint(ENABLE_OPENGL_4X_SMOOTH);
		hint(ENABLE_NATIVE_FONTS);

		background(0);
		fill(0, 0, 0);
		// stroke(255, 255, 255);
		// fill(0, 0, 0);

		lines = getLines();
		letters = getLetters();

		// pfont = loadFont("Futura");
		// textFont(pfont);
	}

	public void drawGrid() {
		background(0, 0, 0);
		// background(255, 255, 255);
		/*
		 * stroke(255, 255, 255, 100.0f); for (int i = 0; i < width; i += 16) {
		 * if (i % 92 == 0) { stroke(255, 255, 255, 150.0f); line(i, 0, i,
		 * height); stroke(255, 255, 255, 100.0f); } else { line(i, 0, i,
		 * height); } } for (int i = 0; i < height; i += 16) { if (i % 92 == 0)
		 * { stroke(255, 255, 255, 150.0f); line(0, i, width, i); stroke(255,
		 * 255, 255, 100.0f); } else { line(0, i, width, i); } }
		 */
	}

	public ArrayList<Letter> getLetters() {
		ArrayList<Letter> letters = new ArrayList<Letter>();

		for (int k = 0; k < the_message.length(); k++) {
			ArrayList<ArrayList<SeanPoint>> curShapeGroup = new ArrayList<ArrayList<SeanPoint>>();
			ArrayList<SeanPoint> curShape = new ArrayList<SeanPoint>();
			Ashape = UppercaseFutura.getGlyphOutline(k);
			PathIterator pi = this.Ashape.getPathIterator(affineTransform);

			while (!pi.isDone()) {
				double[] coordinates = new double[6];
				int type = pi.currentSegment(coordinates);

				switch (type) {
				case PathIterator.SEG_MOVETO:
					curShape.add(new SeanPoint(coordinates[0], coordinates[1]));
					break;
				case PathIterator.SEG_LINETO:
					curShape.add(new SeanPoint(coordinates[0], coordinates[1]));
					break;
				case PathIterator.SEG_QUADTO:
					curShape.add(new SeanPoint(coordinates[0], coordinates[1],
							coordinates[2], coordinates[3], true));
					break;
				case PathIterator.SEG_CUBICTO:
					System.out.println("cubic to " + coordinates[0] + ", "
							+ coordinates[1] + ", " + coordinates[2] + ", "
							+ coordinates[3] + ", " + coordinates[4] + ", "
							+ coordinates[5]);
					break;
				case PathIterator.SEG_CLOSE:
					curShape.add(curShape.get(0));
					curShapeGroup.add(curShape);
					curShape = new ArrayList<SeanPoint>();
					break;
				default:
					break;
				}

				pi.next();
			}

			letters.add(new Letter(curShapeGroup));
		}

		return letters;
	}

	public ArrayList<SeanLine> getLines() {
		ArrayList<SeanLine> lines = new ArrayList<SeanLine>();

		for (int k = 0; k < the_message.length(); k++) {
			Ashape = UppercaseFutura.getGlyphOutline(k);
			PathIterator pi = this.Ashape.getPathIterator(affineTransform);

			// text("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
			double x = 0.0;
			double y = 0.0;
			ArrayList<SeanPoint> coordinates2 = new ArrayList<SeanPoint>();

			double prevX = 0.0;
			double prevY = 0.0;
			double cp1x = 0.0;
			double cp1y = 0.0;
			double cp2x = 0.0;
			double cp2y = 0.0;

			// beginShape();
			while (!pi.isDone()) {
				double[] coordinates = new double[6];
				int type = pi.currentSegment(coordinates);

				switch (type) {
				case PathIterator.SEG_MOVETO:
					System.out.println("move to " + coordinates[0] + ", " + coordinates[1]);
					coordinates2.add(new SeanPoint(coordinates[0],
							coordinates[1]));
					break;
				case PathIterator.SEG_LINETO:
					// y = mx+b
					// x = (y-b)/m
					// b = y - mx
					System.out.println("line to " + coordinates[0] + ", " + coordinates[1]);

					double x1 = coordinates2.get(coordinates2.size() - 1).x
							+ offsetX;
					double y1 = coordinates2.get(coordinates2.size() - 1).y
							+ offsetY;
					double x2 = coordinates[0] + offsetX;
					double y2 = coordinates[1] + offsetY;
					double m = 0.0;
					double b = 0.0;

					if (x2 - x1 != 0) {
						if (y2 - y1 == 0) {
							lines.add(new SeanLine(0, y1, width, y1));

						} else {

							m = (y2 - y1) / (x2 - x1);

							// compute b, calculate points at y = 0 & y = screen
							// height
							b = y1 - m * x1;

							// now draw a line
							SeanPoint p1 = new SeanPoint((0 - b) / m, 0);
							SeanPoint p2 = new SeanPoint((height - b) / m,
									height);
							lines.add(new SeanLine(p1.x, p1.y, p2.x, p2.y));
						}
					} else {
						SeanPoint p1 = new SeanPoint(x1, 0);
						SeanPoint p2 = new SeanPoint(x1, height);
						lines.add(new SeanLine(p1.x, p1.y, p2.x, p2.y));
					}

					coordinates2.add(new SeanPoint(coordinates[0],
							coordinates[1]));
					break;

				case PathIterator.SEG_QUADTO:
					System.out.println("quad to  " + coordinates[0] + ", " + coordinates[1] + ", " + coordinates[2] + ", " + coordinates[3]);

					prevX = coordinates2.get(coordinates2.size() - 1).x;
					prevY = coordinates2.get(coordinates2.size() - 1).y;
					cp1x = prevX + 2.0 / 3.0 * (coordinates[2] - prevX);
					cp1y = prevY + 2.0 / 3.0 * (coordinates[3] - prevY);
					cp2x = cp1x + (coordinates[0] - prevX) / 3.0;
					cp2y = cp1y + (coordinates[1] - prevY) / 3.0;

					// prevX & prevY are first point

					// get location of point to make tangent to
					x = bezierPoint((float) prevX, (float) cp1x, (float) cp2x,
							(float) coordinates[0], .5f);
					y = bezierPoint((float) prevY, (float) cp1y, (float) cp2y,
							(float) coordinates[1], .5f);

					double tx = bezierTangent((float) prevX, (float) cp1x,
							(float) cp2x, (float) coordinates[0], .5f);
					double ty = bezierTangent((float) prevY, (float) cp1y,
							(float) cp2y, (float) coordinates[1], .5f);
					double a = atan2((float) ty, (float) tx);
					a += PI;

					x1 = x + offsetX;
					y1 = y + offsetY;
					x2 = cos((float) a) * 30.0f + (float) x + offsetX;
					y2 = sin((float) a) * 30.0f + (float) y + offsetY;
					m = 0.0;
					b = 0.0;
					stroke(0, 255, 255);
					if (x2 - x1 != 0) {
						m = (y2 - y1) / (x2 - x1);
						// compute b, calculate points at y = 0 & y = screen
						// height
						b = y1 - m * x1;

						// now draw a line
						SeanPoint p1 = new SeanPoint((0 - b) / m, 0);
						SeanPoint p2 = new SeanPoint((height - b) / m, height);
						lines.add(new SeanLine(p1.x, p1.y, p2.x, p2.y));
					} else {
						SeanPoint p1 = new SeanPoint(x1, 0);
						SeanPoint p2 = new SeanPoint(x1, height);
						lines.add(new SeanLine(p1.x, p1.y, p2.x, p2.y));
					}

					coordinates2.add(new SeanPoint(coordinates[0],
							coordinates[1], coordinates[2], coordinates[3],
							true));
					break;
				case PathIterator.SEG_CUBICTO:
					break;
				case PathIterator.SEG_CLOSE:
					coordinates2.add(coordinates2.get(0));
					coordinates2.clear();
					System.out.println("close");
					break;
				default:
					break;
				}
				pi.next();
			}
		}
		
		return lines;
	}

	public void drawShape(ArrayList<SeanPoint> shape) {
		stroke(0, 0, 0, 0);
		for (int i = 0; i < shape.size(); i++) {
			SeanPoint p = shape.get(i);
			if (!p.quadratic) {
				vertex((float) p.x + offsetX, (float) p.y + offsetY);
			} else {
				double prevX = shape.get(i - 1).x;
				double prevY = shape.get(i - 1).y;
				double cp1x = prevX + 2.0 / 3.0
						* (shape.get(i).controlX - prevX);
				double cp1y = prevY + 2.0 / 3.0
						* (shape.get(i).controlY - prevY);
				double cp2x = cp1x + (shape.get(i).x - prevX) / 3.0;
				double cp2y = cp1y + (shape.get(i).y - prevY) / 3.0;

				// finally call cubic Bezier curve function
				bezierVertex((float) cp1x + offsetX, (float) cp1y + offsetY,
						(float) cp2x + offsetX, (float) cp2y + offsetY,
						(float) shape.get(i).x + offsetX,
						(float) shape.get(i).y + offsetY);
			}
		}
	}

	public void draw() {
		drawGrid();

		stroke(0, 255, 215);
		for (SeanLine line : lines) {
			line((float) line.x1, (float) line.y1, (float) line.x2,
					(float) line.y2);
		}

		stroke(0, 0, 0, 0);
		for (Letter letter : letters) {
			beginShape();

			for (ArrayList<SeanPoint> shape : letter.shapes) {
				drawShape(shape);
			}
			endShape();
		}
	}
}
