// metodo forEach
const students = [
  {
    name: 'Alice',
    lastName: 'Zephyr',
    age: 20,
    course: 'Intro to JavaScript'
  },
  {
    name: 'Bob',
    lastName: 'Yellow',
    age: 21,
    course: 'Node JS'
  },
  {
    name: 'Claus',
    lastName: 'Xavier',
    age: 22,
    course: 'JavaScript Applications'
  },
  {
    name: 'Daniel',
    lastName: 'Walter',
    age: 23,
    course: 'React JS'
  },
  {
    name: 'Ethan',
    lastName: 'Upton',
    age: 24,
    course: 'React Native'
  },
]

// forma junior 
for (let i = 0; i < students.length; i++) {
  //console.log(students[i].name);
}

/* forEach
 recibe un callback como parametro, y el callback recibe como parametro cada uno de los elementos del array
el callback puede recibir hasta 3 parametros, el primero entrega el elemento, el segundo el indice y el tercero el array
*/
students.forEach(function (student, index, arr) {
  //console.log(student.name);
  // console.log(index);
  //console.log(arr);
});

// funciona con funciones flecha
// students.forEach(student => console.log(student.name));
// el forEach no retorna nada, solo itera sobre el array y trabaja con cada elemento
// tendria que crear un nuevo array y una instruccion adicional para guardar datos en el nuevo array

/**
 * map
 * recibe un callback como parametro, y el callback recibe como parametro cada uno de los elementos del array
 * el map si retorna un array con un elemento por cada iteracion
 */

const result = students.map(function (student) {
  // console.log(student.name);
  // aunque es posible añadir más instrucciones con otras tareas, el map es util para devolver un nuevo array con los resultados de la iteracion
  return student.name + ' ' + student.lastName;
  // es util en el frontend para mostrar datos en la vista como html
});

// lo mismo con funciones flecha
const result2 = students.map(student => student.name + ' ' + student.lastName);
// console.log(result2);

// tambien es util para modificar los datos del array original
const result3 = students.map(student => {
  return {
    fullName: student.name + ' ' + student.lastName,
    age: student.age,
    course: student.course,
  } 
});
//console.log(result3);

// si quisiera el mismo array pero con una propiedad adicional, podria usar el map
const result4 = students.map(student => {
  return {
    name: student.name,
    lastName: student.lastName,
    age: student.age,
    course: student.course,
    title: student.name + ' - ' + student.course,
  } 
});

// eso fue una forma idiota de hacerlo
// la forma correcta es usar el spread operator
const result5 = students.map(student => { 
  return {
    ...student,
    // de esta forma puedo actualizar un dato del array original sin modificarlo
    course: 'Programmin in JavaScript',
    // es importante que el spread operator vaya al inicio del objeto, de lo contrario se sobreescribiria el valor de la propiedad que acabamos de cambiar
  } 
});

// todo esto sin tocar el array original, es decir, en ningun momento muto el array original
//console.log(students);
// console.log(result5);

/**
 * es importante cuidar el scope de lo que se retorna
 * const result6 = students.map(student => {
 *   ...student,
 *   course: 'Programmin in JavaScript',
 * }); esto da error porque el spread operator no esta dentro de un objeto
 * 
 * para escribirlo de esta forma, se debe usar parentesis
 */

const result6 = students.map(student => ({ 
  ...student,
  course: 'Programmin in JavaScript',
  // y map puede ser concatenado con otro map
})).map(student => ({...student, age: student.age * 2}));
console.log(result6);

/**
 * filter
 * recibe un callback como parametro, y dentro del callback se aplica una condicion que recorre cada elemento del array
 * despues de la condicion, se retorna un arreglo con los elementos que cumplieron la condicion
 */