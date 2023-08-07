package Interfaz;

public class Circle implements Form, Drawable {
  
  private double radius;
  
  public Circle() {}
  
  public Circle(double radius) {
    this.radius = radius;
  }
  
  @Override
  public double area() {
    return Math.PI * Math.pow(radius, 2);
  }

  // si implementa de una interface, debe implementar todos los metodos de la interface
  @Override
  public boolean sidesEqual() {
    return true;
  }

  // todos los metodos de todas las interfaces que este implementando
  @Override
  public void draw(String color) {
    // hasta con los parametros definidos en la interfaces
    System.out.println("Dibujando un circulo color " + color);
  }

  // si no usa una de todas las interfaces, no necesita sus metodos
  /* @Override
  public void rotate(String direction) {
    System.out.println("Rotando un circulo hacia " + direction);
  }*/

}
