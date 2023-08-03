public class ProductoTienda {

    private int id;
    private String nombre;
    private String descripcion;
    private double precio;

    // en una buena implementación con herencia, se suele poner los constructores y metodos como protected
    // esto es para que solo las clases que heredan de esta puedan acceder a ellos, conservando todos los atributos privados, tanto en padre como en hijos 

    protected ProductoTienda() {}
    // si hiciera el constructor de ProductoTienda privado, no sera posible crear
    // objetos de esta clase por ningún medio

    protected ProductoTienda(int id, String nombre, String descripcion, double precio) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    // lo mismo a cualquiera de sus metodos, si fueran privados
    // no habria acceso a ellos desde otra clase por ningún medio
    protected int getId() {
        return id;
    }

    protected String getNombre() {
        return nombre;
    }

    protected String getDescripcion() {
        return descripcion;
    }

    protected double getPrecio() {
        return precio;
    }

    protected void setId(int id) {
        this.id = id;
    }

    protected void setNombre(String nombre) {
        this.nombre = nombre;
    }

    protected void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    protected void setPrecio(double precio) {
        this.precio = precio;
    }

    protected void mostrarNombre() {
        System.out.println("Este producto es: " + this.nombre);
    }

    protected void mostrarPrecio() {
        System.out.println("El precio de este producto es: " + this.precio);
    }

    @Override
    public String toString() {
        return "Producto: " + this.nombre + "\n" +
                "Descripcion: " + this.descripcion + "\n" +
                "Precio: " + this.precio + "\n" +
                "Id: " + this.id + "\n";
    }

}
