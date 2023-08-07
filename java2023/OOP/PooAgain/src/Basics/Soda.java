package Basics;
public class Soda extends ProductoTienda {

    private String sabor;
    private String marca;

    public Soda() {}

    public Soda(int id, String nombre, String descripcion, double precio, String sabor, String marca) {
        super(id, nombre, descripcion, precio);
        this.sabor = sabor;
        this.marca = marca;
    }

    public String getSabor () {
        return sabor;
    }

    public String getMarca () {
        return marca;
    }

    public void setSabor (String sabor) {
        this.sabor = sabor;
    }

    public void setMarca (String marca) {
        this.marca = marca;
    }

    @Override
    public String toString () {
        return super.toString() +
               "Sabor: " + this.sabor + "\n" +
               "Marca: " + this.marca + "\n";
    }

}
