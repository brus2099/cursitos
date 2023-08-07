public class App {
    public static void main(String[] args) throws Exception {

        ProductoTienda chetos = new ProductoTienda(1, "Chetos", 10.5, "Papas fritas");
        ProductoTienda doritos = new ProductoTienda(2, "Doritos", 12.5, "Papas fritas");

        // showing the Object class
        Object Object = new Object();

        System.out.println(Object.toString());
        
    }
}
