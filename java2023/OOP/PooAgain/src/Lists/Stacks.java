package Lists;

import java.util.Stack;

public class Stacks {
  public static void main(String[] args) {
    
    Stack<Integer> stack = new Stack<Integer>();
    System.out.println(stack);
    System.out.println("empty?..." + stack.empty());

    // añadir elementos
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    System.out.println(stack);

    // recorrido
    for (Integer stackito : stack) {
      System.out.println(stackito);
    }

    // comprobando
    System.out.println(stack);
    System.out.println("empty?... " + stack.empty());

    // comprobar un elemento
    System.out.println("search 3?... " + stack.search(3)); // devuelve indice
    System.out.println("search 5?..." + stack.search(5)); // devuelve -1
    System.out.println("last element: " + stack.peek());

    // eliminar elementos
    System.out.println("pop: " + stack.pop()); // lo devuelve y lo elimina, ojo: lo devuelve
    System.out.println(stack);

    // es eso, una pila
    /*
        |___|
        |___|
        | 4 | <- peek
        | 3 | 
        | 2 | 
        | 1 |
        |___|
    */

  }
}
