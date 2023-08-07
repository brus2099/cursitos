package Abstract;

public abstract class AbstractForm {

  protected double x; // solo los hijos lo pueden ver
  protected double y; // solo los hijos lo pueden ver

  // si puede haber constructores, pero solo acceden las clases hijas
  protected AbstractForm() {
    // se pueden inicializar los atributos sin recibir parametros
  }
  // pueden existir dos constructores, y se diferencian por los parametros que
  // reciben para no considerarse como duplicados

  protected AbstractForm(double x, double y) {
    this.x = x;
    this.y = y;
  }

  public abstract double area(); // al menos un metodo abstracto
  // los metodos abstractos no tienen cuerpo, solo se declaran, sin llaves

}
