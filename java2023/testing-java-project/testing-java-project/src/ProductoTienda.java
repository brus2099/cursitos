public class ProductoTienda {

  int id;
  String nombre;
  double precio;
  String descripcion;

  public ProductoTienda(int id, String nombre, double precio, String descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
  }

  public ProductoTienda() {
  }

  // getters y setters

  public int getId() {
    return id;
  }

  public String getNombre() {
    return nombre;
  }

  public double getPrecio() {
    return precio;
  }

  public String getDescripcion() {
    return descripcion;
  }

  public void setId(int id) {
    this.id = id;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public void setPrecio(double precio) {
    this.precio = precio;
  }

  public void setDescripcion(String descripcion) {
    this.descripcion = descripcion;
  }

  // toString

  @Override
  // ovrride es una anotacion que indica que el metodo que sigue es una sobreescritura de un metodo de la clase padre (Object)
  // Object es la clase padre de todas las clases en Java (como en C#)
  
  public String toString() {
    return "ProductoTienda{" +
        "id=" + id +
        ", nombre='" + nombre + '\'' +
        ", precio=" + precio +
        ", descripcion='" + descripcion + '\'' +
        '}';
  }

  public String testImport () {
    return "testImport";
  }

  
}
