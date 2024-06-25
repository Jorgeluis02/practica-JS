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



  