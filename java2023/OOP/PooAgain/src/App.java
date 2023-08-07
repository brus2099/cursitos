import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Scanner;
import java.io.IOException;
public class App {
    public static void main(String[] args) throws Exception {
        
        ProductoTienda productos[] = new ProductoTienda[5];
        productos[0] = new ProductoTienda();
        productos[1] = new Botana();
        productos[2] = new Soda();
        
        ProductoTienda produ = new ProductoTienda();
        produ.getNombre();
        Botana botana = new Botana();
        // de hijo a padre, siempre se puede
        produ = botana;
        // de padre a hijo, no siempre se puede
        // botana = produ; // no se puede
        // para que se pueda, se tiene que hacer un casting
        // el casting es como una conversion de tipos de datos 
        botana = (Botana) produ; // si se puede

        // productos[0].nombre = "Producto 1";
        // hacer esto es de las peores idioteces que se pueden hacer
        // los atributos de una clase deben ser privados y solo se pueden acceder a ellos por medio de metodos
        // esto los protege de que cualquier clase pueda modificarlos
        // incluso el error dice "The field ProductoTienda.nombre is not visible"

        
  

    }
}
