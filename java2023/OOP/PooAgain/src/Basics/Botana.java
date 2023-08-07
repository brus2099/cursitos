package Basics;
// solo por usar extends ProductoTienda, Botana ya tiene todos los metodos y atributos de ProductoTienda
// esto es herencia

public class Botana extends ProductoTienda {

    private String sabor;
    private String marca;

    public Botana() {}

    public Botana(int id, String nombre, String descripcion, double precio, String sabor, String marca) {
        // ahora si empiezan las anoraciones
        // super() es una palabra reservada que se usa para llamar al constructor de la clase padre
        // en este caso, la clase padre es ProductoTienda, y se llama a su constructor con los parametros
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