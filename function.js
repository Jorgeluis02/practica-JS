function saludoInicial(name) {
  document.write(`hola, mi nombre es ${name}<br>`);
}
saludoInicial("jorge");
saludoInicial("carlos");
saludoInicial("juan");

function nombre(){
  return "pablo";
}

const userName = nombre();
console.log(userName);
 
function suma(a, b) {
  return a + b;
}
const resultado = suma(5 + 10);
console.log(resultado);

function suma(a, b = 10){
  return a + b;
}
const resultado2 = suma(10);
console.log(resultado2);


//function anomima

const unaFunction = function(){
  console.log(1);
}
unaFunction();

//Arrow Function

const unaFunctionArrow = (a) =>{   // Arrow function sin parametros 
  console.log(5);
}
unaFunctionArrow();

const unaFunctionArrow2 = diez => {     // Arrow function con parametros 
  console.log(10);
}
unaFunctionArrow2();

const unaFunctionArrow3 = (a, b) => {     // Arrow function con dos parametros 
  console.log(10 + 5);
}
unaFunctionArrow3();

// function mas condicionales 

function cocinarCena (plato, tiempo, temperatura) {
if (plato === "pollo" && tiempo === 20 && temperatura === 70) { 
return "pollo cocido"
}
if (plato === "huevo" && tiempo === 12 && temperatura === 70) {
  return "huevo cocido"
}
return "plato no soportado"
}
console.log(cocinarCena("pollo", 20, 70));
console.log(cocinarCena("huevo", 12, 70));
console.log(cocinarCena("pescado", 20, 70));


function cocinarDesayuno(plato, tiempo, temperatura) {
  if (plato === 'huevos' && tiempo === '10minutos' && temperatura === '80°');
  if (plato === 'pan tostado' && tiempo === '3minutos' && temperatura === '90°');
  return 'huevos cocidos con pan tostado';
}
 console.log(cocinarDesayuno('huevos', '10minutos', '80°', 'pan tostado', '3minutos', '90°'));

const sum = (a, b) => {a +b} // Da Undefined
sum(2, 3)
 console.log(sum(2,3))

function cuentaAtras (numero){
  if (numero < 0) { return }    // cuenta atras 
  console.log(numero);
  cuentaAtras(numero -1);
}
cuentaAtras(3);

function cuentaAdelante(inicio, fin) {
  if (inicio > fin) { return }  // caso base para detener la recursión
  console.log(inicio);
  cuentaAdelante(inicio + 1, fin);
}

// Llamamos a la función con inicio en 3 y fin en 6
cuentaAdelante(2, 6);

// calcular factoriales js

function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else { 
   return n * factorial(n - 1);
  }
}
console.log(factorial(5));
 
const resultadFactorial = factorial(5);
console.log(resultadFactorial);


function recursive(n) {
  if (n === 0){
    return 0;     // Ejemplo de recursividad en funciones 
  } else {
    return n + recursive(n - 1)
  }
}
console.log(recursive(3));


// Arrays

const numbers = [1, 2, 3, 4];
console.log(numbers[0]);
console.log(numbers[3]);

const arraysText = ['hola','mundo'];
console.log(arraysText[0]);
console.log(arraysText[1]);

let names = ['diana','jusn','camilo']
console.log(names);

   // Declarar Arrays con variables 

const numbers2 = [1, 2, 3, 4, 5];
let index = 0;
let index2 = 1;
let index3 = 2;
 console.log(numbers2[index]);
 console.log(numbers2[index2]);
 console.log(numbers2[index3]);

 // Modificar Arrays 
 const numbersM = [1, 2, 3, 4, 5];

numbersM[3] = 20;
numbersM[4] = 30;

console.log(numbersM);


//Longitud metodos y propiedades de un Array


const frutas = ['pera', 'manzana', 'fresa', 'mango','banano'];
console.log(frutas.length);
frutas.length = 3;
console.log(frutas.length);

frutas.push('melocoton'); // El .push es para agregar a elementos al Array al final
 console.log(frutas);

 frutas.pop();  // El .pop es para sacar o devolver el ultimo elemento del Array 
 console.log(frutas);

 frutas.shift(); // El .shift es para sacar o devolver el primer elemento del Array
 console.log(frutas);

frutas.unshift('pera'); //El .unshift es para agregar un elemento en el primer lugar 
console.log(frutas);

// Concatenar dos Arrays

const numbersC = [1, 2, 3];
const numbersC2 = [4, 5, 6];

const allNumbresC = numbersC.concat(numbersC2);
 console.log(allNumbresC);

 // Operador Spread

 const allNumbresSpread = [... numbersC, ...numbersC2];

 console.log(allNumbresSpread) + console.log('resultado de el operador espread');



 function procesarPedido(pedidos) {
  let nombreCliente = pedidos.shift();
  pedidos.unshift("bebida");
  pedidos.push(nombreCliente);
  return pedidos;
}

let pedido = ["Juan", "Pizza", "Ensalada"];
console.log("Pedido original:", pedido);

let pedidoProcesado = procesarPedido(pedido);
console.log("Pedido procesado:", pedidoProcesado);

// Interaccion de Arrays en js

let frutas2 = ["manzana", "banana", "fresa"];
let i = 0;
while (i < frutas2.length) {
  console.log(frutas2[i]);
  i++;
}

let frutas3 = ["manzana", "banana", "fresa"];

for (let i = 0; i < frutas3.length; i++) {
  console.log(frutas3[i])
}

let cervezas = ["aguila", "club colombia", "meeler", "poker"];
 let incremento = 0;
 while (incremento < cervezas.length) {
  console.log(cervezas[incremento])
  incremento++
 }


let cervezas2 = ["Aguila", "culb colombia", "meeler", "poker"];
for ( let i = 0; i < cervezas2.length; i++) {
  console.log(cervezas[i])
}
  
// Busqueda de arrays con sus metodos 

// indexof 

const frutas4 = ["fresa", "mango", "melon"];

const posicionMelon = frutas4.indexOf("melon");

console.log(posicionMelon);

const posicionDeFrutas = frutas4.indexOf("fresa", "mango", "melon");

console.log(posicionDeFrutas);

//metodo includes

console.log(frutas4.includes("mango"));

console.log(frutas4.includes("mango", 8));

console.log(frutas4.includes("maracuya"));

// Metodo some

const metodoSome = frutas4.some( frutas4 => frutas4 === "melon");

console.log(metodoSome);

const names2 = ["leo", "isa", "fan", "lea"]; 
const tieneNombreLargo = names2.some(name => name.length > 3);
console.log(tieneNombreLargo);


//Metodo every 

const numbers3 = [1,2,3,4,5,6,7,8,9];
const everyNumbers = numbers3.every(numbers3 => numbers3 < 10);
console.log(everyNumbers);

const names4= ['Miguel', 'Juan', 'Itziar', 'Isabel'];
const todosLosNombresSonLargos = names4.every(name4 => name4.length > 3);
console.log(todosLosNombresSonLargos);

// Metodo find

const numbers5 = [34,5,86,-59,48,26,27];
const numbersFind = numbers5.find(numbers5 => numbers5 <0);
console.log(numbersFind);

// Metodo endsWith

const palabras = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita'
const ultimaLetra = palabras.endsWith('Expedita');
console.log(ultimaLetra);
console.log(palabras.endsWith('ipsum'));

function acabanEnA(words) {
  {return words.every(words => words.endsWith('a')) }
 { let palabrasA = words.every(words => words.endsWith('a')) 
   console.log(palabrasA) }
};


// Ordenar arrays

//Metodo .sort()
const numbers4 = [4,5,1,8,3,9,2,6];
  numbers4.sort(function(a, b) { 
    return a-b
})

console.log(numbers4);

//Metodo .sort() con arrowFunction

const numbers6 = [4,5,1,8,3,9,2,6];
  numbers6.sort((a, b) => a-b);

console.log(numbers4);

//Metodo .short() Decreciente 

const numbersDecreciente4 = [4,5,1,8,3,9,2,6];
numbersDecreciente4.sort(function(a, b) { 
    return b-a
})

console.log(numbersDecreciente4);

//Metodo .sort() con arrowFunction

const numbersDecreciente6 = [4,5,1,8,3,9,2,6];
numbersDecreciente6.sort((a, b) => b - a);

console.log(numbersDecreciente6);

let numeros45 =  [5, -10, -2, -25, -7];
numeros45.sort((a,b) => Math.abs(a) - Math.abs(b));

console.log(numeros45);

function sortAbsoluteNumbers(numbers21) {
  // Usamos el método sort con una función de comparación que compara los valores absolutos
  return numbers21.sort((a, b) => Math.abs(a) - Math.abs(b));
}
// Ejemplo de uso
const numeros = [5, -10, -2, -25, -7];
const numerosOrdenados = sortAbsoluteNumbers(numeros);
console.log(numerosOrdenados); // [-2, 5, -7, -10, -25]

//Metodo filter

const frases = ['cafe','viajes','lentes','brill0','esfuerzo'];
const frasesConA = frases.filter(frases => frases.includes('a'));
console.log(frasesConA);

// Metodo Map

const numbers7 = [4, 2, 3, 5];
const numbersDuble = numbers7.map((numbers7) => {
  return numbers7 *2
});
console.log(numbersDuble);

//Metodo Map con la longitud decada array 

const numbers8 = ['cafe','viajes','lentes','esfuerzo']; 
const numbersLength = numbers8.map((numbers8) => numbers8.length)
console.log(numbersLength);

//Metodo Map mas Filter 
