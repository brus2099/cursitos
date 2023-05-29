#clases y objetos
class Drink:
    # constructor de clase
    def __init__(self, name):
        self.__name = name
  
    def getDetail(self):
        return "La bebida es " + self.__name
    
drink1 = Drink("Coca Cola")
# print(drink1.getDetail())
# el atributo __name es privado, no se puede acceder desde fuera de la clase 
# print(drink1.__name) # error

# herencia multiple: se puede heredar de varias clases
class Product:
    def __init__(self, cost, price):
        self.__cost = cost
        self.__price = price
    
    def getGain(self):
        return "Ganancia por producto: " + str(self.__price - self.__cost)

# Herencia
# la clase Cerveza hereda de Drink y Product
class Cerveza(Drink, Product):
    # atributos estaticos
    # para tener informacion que pertenece a la clase, se puede usar al mismo nivel que los metodos
    count = 0

    def __init__(self, name, brand, alcohol, cost, price):
        # super() es una referencia a la clase padre
        # super().__init__(name) es lo mismo que Drink.__init__(self, name)
        # si no invoco al constructor de la clase padre, no se inicializa el atributo __name  

        # Si hubiera solo una clase de la que heredar, se coloca super()
        # super().__init__(name)

        # Si hay mas de una clase de la que heredar, se coloca el nombre de la clase
        Drink.__init__(self, name)
        Product.__init__(self, cost, price)
        self.__brand = brand
        self.__alcohol = alcohol
        Cerveza.count += 1
    
    # polimorfismo: sobreescritura y reutilizacion de metodos del padre
    # es posible agregar argumentos opcionales a los metodos
    def getDetail(self, text = ""):
        return text + super().getDetail() + " y tiene " + str(self.__alcohol) + " grados de alcohol"
    
    # metodos estaticos: tambien es posible con los metodos
    @staticmethod
    def getClassInfo():
        return "La clase Cerveza tiene " + str(Cerveza.count) + " instancias"
    
# el nombre se envia al padre en si, aunque el hijo no lo tenga
# pero el hijo necesita el nombre, o va a dar error
# quiza no da el error al ejecutar pero si queremos usar atributos del padre ahi si lo da
beer1 = Cerveza("Pilsen", "Pilsen", 4.5, 10, 20)
print(beer1.getDetail())
# usando el metodo de otra clase
print(beer1.getGain())

# beer2 tiene su propio ambito, su propia informacion
# no se comparte con beer1
# puede existir informacion del objeto o de la clase
# para eso siven los metodos estaticos
beer2 = Cerveza("Cristal", "Cristal", 5.6, 15, 25)
print(beer2.getDetail("info: "))
print(beer2.getGain())

# usando metodos y atributos estaticos
# no se necesita crear un objeto para usar el metodo estatico de la clase
print(Cerveza.count)
print(Cerveza.getClassInfo())
