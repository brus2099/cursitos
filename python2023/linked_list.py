class Node: 
  # Constructor que se usa para crear un nuevo nodo
  def __init__(self, data): 
    self.data = data  
    self.next = None


# Clase para crear una lista enlazada
"""
Metodos comunes de una lista enlazada:
- append: Agrega un elemento al final de la lista
- printList: Imprime los elementos de la lista
- deleteNode: Elimina un elemento de la lista
- search: Busca un elemento en la lista
- insert: Inserta un elemento en la lista en una posición específica
- length: Devuelve el tamaño de la lista
- isEmpty: Devuelve True si la lista esta vacía
- reverse: Invierte la lista
- removeDuplicates: Elimina los elementos duplicados de la lista
- sort: Ordena la lista
- getNth: Devuelve el elemento en la posición n
- getMiddle: Devuelve el elemento en la mitad de la lista
- count: Devuelve el número de veces que aparece un elemento
- detectLoop: Devuelve True si la lista tiene un ciclo
- removeLoop: Elimina el ciclo de la lista
- swapNodes: Intercambia dos nodos de la lista
- moveNode: Mueve el nodo de una lista a otra
- isPalindrome: Devuelve True si la lista es un palíndromo
- pairwiseSwap: Intercambia los elementos de la lista de dos en dos
- moveLastElementToFirst: Mueve el último elemento de la lista a la primera posición
- deleteAlternate: Elimina los elementos en posiciones pares de la lista
- deleteList: Elimina la lista
- getIntersectionNode: Devuelve el nodo de intersección de dos listas
- getUnion: Devuelve la unión de dos listas
- getIntersection: Devuelve la intersección de dos listas
- mergeSort: Ordena la lista usando el algoritmo merge sort
- sortedMerge: Devuelve una lista ordenada con los elementos de dos listas ordenadas
- splitList: Divide la lista en dos sublistas
- moveZerosToEnd: Mueve los ceros al final de la lista
- sumLists: Suma dos listas
- detectAndRemoveLoop: Detecta y elimina el ciclo de la lista
* ciclo es cuando un nodo apunta a un nodo anterior en la lista
"""
class LinkedList: 
  # Función para inicializar la lista enlazada 
  def __init__(self):  
    self.head = None
  
  # Esta función inserta un nuevo nodo al final de la lista enlazada 
  def append(self, new_data): 
    # 1. Crea un nuevo nodo 
    new_node = Node(new_data) 
    
    # 2. Si la lista está vacía, entonces asigna el nuevo nodo como cabeza 
    if self.head is None: 
      self.head = new_node 
      return
     
    # 3. En caso contrario, recorre los nodos hasta encontrar el último
    last = self.head
    while (last.next): 
      last = last.next
    
    # 4. Asigna el último nodo
    last.next =  new_node 
      
  # Esta función imprime los contenidos de la lista enlazada 
  def printList(self): 
    temp = self.head 
    while (temp): 
      print(temp.data)
      temp = temp.next

  # Esta función elimina un nodo de la lista enlazada
  def deleteNode(self, key):
    # 1. Asigna la cabeza de la lista enlazada a una variable temporal
    temp = self.head

    # 2. Si la cabeza contiene el elemento a eliminar, asigna el siguiente nodo como cabeza
    if temp is not None:
      if temp.data == key:
        self.head = temp.next
        temp = None
        return

    # 3. Recorre los nodos hasta encontrar el elemento a eliminar
    while temp is not None:
      if temp.data == key:
        break
      prev = temp
      temp = temp.next

    # 4. Si el elemento no esta en la lista, termina la función
    if temp == None:
      return

    # 5. Elimina el nodo
    prev.next = temp.next
    temp = None
                        
  # Esta funcion determina si un elemento esta en la lista enlazada
  def search(self, element):
    temp = self.head
    while (temp):
      if temp.data == element:
        return True
      temp = temp.next
    return False

#Inicializar la lista enlazada
lista_enlazada1 = LinkedList()
lista_enlazada2 = LinkedList()

#Agregar elementos a la primera lista enlazada
lista_enlazada1.append(2)
lista_enlazada1.append(5)
lista_enlazada1.append(4)
lista_enlazada1.append(10)
lista_enlazada1.append(1)
lista_enlazada1.append(13)
lista_enlazada1.append(15)
lista_enlazada1.append(7)
lista_enlazada1.append(16)
lista_enlazada1.append(20)

#Agregar elementos a la segunda lista enlazada
lista_enlazada2.append(3)
lista_enlazada2.append(1)
lista_enlazada2.append(4)
lista_enlazada2.append(5)
lista_enlazada2.append(2)
lista_enlazada2.append(17)
lista_enlazada2.append(20)
lista_enlazada2.append(9)
lista_enlazada2.append(6)
lista_enlazada2.append(10)

lista_enlazada1.deleteNode(10)
