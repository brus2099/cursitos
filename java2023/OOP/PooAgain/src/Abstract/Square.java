package Abstract;

public class Square extends AbstractForm{

    private double side;

    public Square() {}

    public Square(double side, double x, double y) {
        super(x, y);
        this.side = side;         
    }

    @Override
    public double area() {
        return side * side;
    }
  
}
