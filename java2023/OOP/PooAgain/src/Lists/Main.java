package Lists;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class Main {

  public static void main(String[] args) {

    // usando la interfaz list, y entre rombos el tipo de dato que va a contener
    // arraylist es como un array comun y corriente pero dinamico
    // se puede acceder a los elementos por medio de un indice
    List<Person> list = new ArrayList<Person>();
    list.add(new Person(1, "Brus", 24));
    list.add(new Person(2, "Ana", 21));
    list.add(new Person(3, "Brandon", 22));
    list.add(new Person(4, "Yosh", 23));

    // tradicional con indice
    for (int i = 0; i < list.size(); i++) {
      // System.out.println(list.get(i).getName());
    }

    // el forEach existe en java
    for (Person p : list) {
      p.getAge();
      // System.out.println(p.getName());
    }

    // no tienen un indice, no se puede acceder a un elemento en especifico
    // estan pensadas para ir de registro en registro
    List<Person> list2 = new LinkedList<Person>();
    // se pueden añadir datos al final
    list2.clear();
    list2.add(new Person(1, "Brus", 24));
    list2.add(new Person(2, "Ana", 21));
    list2.add(new Person(3, "Brandon", 22));
    list2.add(new Person(4, "Yosh", 23));

    // y al inicio
    // nmms el indice si se puede cambiar, no solo se puede añadir al inicio sino en
    // cualqier posicion
    // pero no en indices mayores al tamaño de la lista
    // si se pone al fina, el indice debe respetar la longitud actual de la lista
    // i.e. len = 4, index = 3 insert = 4
    // list2.add(4, new Person(5, "YoshInicio", 23));
    /*
     * for (Person p : list2) {
     * System.out.println(p.getName());
     * }
     */

    // si existen diferencias entre ArrayList y LinkedList

    // Uso recomendado:
    // ArrayList: Se recomienda cuando se necesita un acceso rápido por índice y las
    // operaciones de inserción y eliminación no son frecuentes.
    // LinkedList: Se recomienda cuando se realizan operaciones frecuentes de
    // inserción o eliminación en el medio de la lista, y el acceso por índice no es
    // una prioridad.

    list.remove(0); // O(1)

    // list2.remove(0); // O(n) porque:
    Person personaBorrar = new Person(2, "Ana", 21);
    for (Person p : list2) {
      if (p.getName().equals(personaBorrar.getName())) {
        // p.equals(personaBorrar) no funcionaria porque se estaria comparando la
        // referencia de memoria
        list2.remove(p);
        break;
      }
      // o sea que es un desmadre de rendimiento eliminar un elemento de una
      // linkedlist
    }

    // metodos extra que no hace falta probar para que sirven porque se intuyen
    /*
      list.size(); para ambos
      list2.getFirst(); y getLast(); para linkedlist
      list.clear(); para ambos
      list.isEmpty(); para ambos que pregunta si esta vacia
      
     */

  }

}
