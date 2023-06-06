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
  {
    name: 'Bob',
    lastName: 'Zephyr',
    age: 20,
    course: 'Data Analisys'
  },
  {
    name: 'Daniel',
    lastName: 'Yoshimoto',
    age: 20,
    course: 'Data Base'
  }
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
})).map(student => ({ ...student, age: student.age * 2 }));
// console.log(result6);

/**
 * filter
 * recibe un callback como parametro, y dentro del callback se aplica una condicion que recorre cada elemento del array
 * despues de la condicion, se retorna un arreglo con los elementos que cumplieron la condicion
 * const developers = []
 * for (let i = 0; i < students.length; i++) {
 *   if (students[i].course === 'React JS' || students[i].course === 'React Native') {
 *    developers.push(students[i]);
 *  }
 * }
 * console.log(developers);
 * sin filter, el codigo es mas largo y menos legible
 */
const result7 = students.filter(function (student) {
  //console.log(student);
  // nuevamente es posible ejecutar codigo dentro del callback, pero es mejor usarlo para filtrar elementos
  // filter devuelve un nuevo array con los elementos que cumplieron la condicion
  return student.course === 'Intro to JavaScript';
});

// lo mismo con funciones flecha
const result8 = students.filter(student => student.course !== 'Any course');
const result9 = students.filter(student => student.age > 21);

// console.log(result9);

/**
 * reduce
 * tambien recibe un callback y tambien recibe un parametro adicional que es el valor inicial
 * el callback recibe 4 parametros, el primero es el acumulador, el segundo es el elemento, el tercero es el indice y el cuarto es el array
 * el acumulador es el valor que se va a ir acumulando en cada iteracion
 * el valor inicial es el valor que se va a acumular en la primera iteracion, y se pone despues del callback, por ejemplo, 0
 * tambien recibe el elemento que se recorre en cada iteracion, pero antes lleva el valor del acumulador
 * estos son los dos parametros mas importantes, los otros dos son opcionales
 * el callback debe retornar el valor del acumulador
 */
const result10 = students.reduce(function (total, student) {
  // console.log(total);
  return total + student.age;
}, 0);

// lo mismo con funciones flecha
const result11 = students.reduce((total, student) => total + student.age, 0);

// se puede usar con propiedades mas complejas
const developers = [
  {
    id: 1,
    name: 'Alice',
    skills: ['JavaScript', 'React', 'CSS', 'HTML', 'Node', 'Express', 'Azure', 'AWS', 'MongoDB', 'Postgres'],
  },
  {
    id: 2,
    name: 'Bob',
    skills: ['SQL', 'NoSQL', 'MongoDB', 'Postgres', 'MySQL', 'Docker', 'React', 'CSS', 'HTML', 'Node', 'Express'],
  },
  {
    id: 3,
    name: 'Claus',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud', 'DevOps', 'MongoDB', 'Postgres', 'MySQL', 'HTML'],
  },
];

// arreglo con todas las skills de los developers sin repetir
const result13 = developers.reduce(function (allSkills, developer) {
  //console.log(allSkills);
  //console.log(developer.skills);
  // el acumulador es un set, que es un objeto que no permite valores repetidos
  // es una nueva caracteristica de javascript
  // para leer mas sobre sets: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set
  return Array.from(new Set([...allSkills, ...developer.skills]));
  // asi queda convertido en un array
}, []);
// console.log(result13);

/**
 * sort
 * tambien recibe un callback, y tambien recibe un parametro adicional que es el valor inicial
 * el callback recibe dos parametros, el primero es el elemento actual y el segundo es el elemento siguiente
 * el callback debe retornar un valor numerico
 * es util para elementos que pueden ser ordenados
 * el valor inicial es opcional
 */

const result14 = students.sort(function (first, second) {
  return first.age - second.age;
});
// console.log(result14);

//el ordenamiento funciona diferente sin el callback
const numbers = [100, 10, 1000, 1, 20, 200, 2, 20000];
// console.log(numbers.sort());
// se ordena alfabeticamente, no numerico
// para ordenarlos numericamente, se debe usar el callback
const result15 = numbers.sort((a, b) => b - a); // ordena de mayor a menor
// console.log(result15);

/**
 * find
 * permite encontrar un elemento en un array
 * recibe un callback como parametro, y el callback recibe como parametro cada uno de los elementos del array
 * el callback puede recibir hasta 3 parametros, el primero entrega el elemento, el segundo el indice y el tercero el array
 * el callback debe retornar un valor booleano
 * find retorna el primer elemento que cumpla la condicion
 * si no encuentra ningun elemento, retorna undefined
 * es util para encontrar un elemento en un array
 */

const result16 = students.find(function (student) {
  if (student.name === 'Bob') {
    return true;
  }
});

// lo mismo con funciones flecha
const result17 = students.find(student => student.name === 'Daniel');

// si busco un elemento que no existe, retorna undefined
const result18 = students.find(student => student.name === 'Any name');
// console.log(result18);

/**
 * some
 * permite saber si algun elemento cumple una condicion
 * recibe un callback como parametro, y el callback recibe como parametro cada uno de los elementos del array
 * el callback debe retornar un valor booleano
 * some retorna true si algun elemento cumple la condicion, pero no el elemento
 * si no encuentra ningun elemento, retorna false 
 * es util para saber si algun elemento que cumpla una condicion existe en el array
 */

const result19 = students.some(function (student) {
  if (student.age > 21) {
    return true;
  }
});

// lo mismo con funciones flecha
const result20 = students.some(student => student.lastName === 'Zephyr');
const result21 = students.some(student => student.name === 'Any name');
// console.log(result20, result21);

/**
 * every
 * devuelve true si todos los elementos del array cumplen la condicion, estrictamente todos
 * recibe un callback como parametro, y el callback recibe como parametro cada uno de los elementos del array
 * el callback debe retornar un valor booleano
 * every retorna true si todos los elementos cumplen la condicion, pero no el elemento
 * si tan solo un elemento no cumple la condicion, retorna false
 */

const result22 = students.every(student => student.age > 19);
const result23 = students.every(student => student.age > 20);

/**
 * combiando metodos
*/

const result24 = students.map(({ name, lastName, age }) => ({
  student: `${name} ${lastName}`,
  age
}))
  .filter(student => student.age > 20)
  .sort((a, b) => b.age - a.age)
  .reduce((total, student) => total + student.age, 0);

console.log(result24);

/**
 * lo importante es el valor que retorna cada metodo para saber cual usar
 * forEach no retorna nada, solo itera sobre el array y trabaja con cada elemento
 * map retorna un nuevo array con un elemento por cada iteracion
 * filter retorna un nuevo array con los elementos que cumplieron una condicion booleana
 * reduce retorna un valor acumulado en cada iteracion
 * sort retorna un nuevo array con los elementos ordenados
 * find retorna el primer elemento que cumpla la condicion
 * some retorna true si algun elemento cumple la condicion
 * every retorna true si todos los elementos cumplen la condicion
 * 
 * para el frontend, estos metodos son muy utiles para trabajar los datos de la vista
 * y ya esta, esos son los metodos mas importantes de los arrays 👍 
 */