package Abstract;

public class Circle extends AbstractForm {

    private double radius;

    public Circle() {
    }

    public Circle(double radius, double x, double y) {
        super(x, y);
        this.radius = radius;
    }

    // este es el metodo abstracto que se hereda de la clase AbstractForm
    // se trae, se sobreescribe y se implementa a como se necesite
    // pero nunca se implementa en la clase padre, solo se declara su existencia 
    @Override
    public double area() {
        return Math.PI * Math.pow(radius, 2);
    }
}
