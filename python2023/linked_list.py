class Node: 
	# Constructor que se usa para crear un nuevo nodo
	def __init__(self, data): 
		self.data = data  
		self.next = None

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

# "Escriba un programa en Python que lea dos listas enlazadas y devuelva una tercera lista que contenga los elementos de las dos listas originales ordenados."

# Metodo para resolver el problema

def merge(list1, list2):
  # Crear lista enlazada vacia
  lista_enlazada3 = LinkedList()
  # Recorrer la primera lista enlazada
  temp1 = list1.head
  while (temp1):
    # Agregar el elemento a la lista enlazada 3
    lista_enlazada3.append(temp1.data)
    temp1 = temp1.next
  # Recorrer la segunda lista enlazada
  temp2 = list2.head
  while (temp2):
    # Agregar el elemento a la lista enlazada 3
    lista_enlazada3.append(temp2.data)
    temp2 = temp2.next
  # Ordenar la lista enlazada 3
  temp3 = lista_enlazada3.head
  while (temp3):
    temp4 = temp3.next
    while (temp4):
      if temp3.data > temp4.data:
        temp = temp3.data
        temp3.data = temp4.data
        temp4.data = temp
      temp4 = temp4.next
    temp3 = temp3.next
  # Retornar la lista enlazada 3
  return lista_enlazada3