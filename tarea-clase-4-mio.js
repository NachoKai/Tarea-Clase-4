let $form = document.querySelector('#form')
let tarea1 = $form.querySelector('#boton-tarea1')
let tarea2 = $form.querySelector('#boton-tarea2')
let tarea3 = $form.querySelector('#boton-tarea3')
let tarea4 = $form.querySelector('#boton-tarea4')
let desafios = $form.querySelector('#boton-desafios')
let nodoResultadoTareas = document.querySelector('#resultados')
let nodoResultadoDesafios = document.querySelector('#desafios')

function fTarea1() {
    for (let i1 = 3; i1 <= 22; i1 += 2) {
        if (i1 >= 3 && i1 <= 22) {
            console.log(i1++)
        }
    }
}

function fTarea2() {
    let i2 = 1;
    while (i2 <= 10) {
        console.log(i2);
        i2++;
    }
}

function fTarea3() {
    function promedio(num) {
        let sum = 0;
        for (let i3 = 0; i3 < num.length; i3++) {
            sum += num[i3];
        }
        return (sum / num.length) || 0;
    }
    console.log(promedio([10, 5, 4, 2, 8]))
}

function fTarea4() {
    let i4 = 0
    for (i4 = 0; i4 <= 50; i4++) {
        if (i4 % 3 === 0 && i4 % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i4 % 3 === 0) {
            console.log("Fizz");
        } else if (i4 % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i4);
        }
    }
}

function mostrarTareas() {
    if (tarea1.checked) {
        fTarea1()
        nodoResultadoTareas.className = ('mostrar')
        nodoResultadoTareas.innerHTML = `• Imprimí cada 3er número del 3 al 22 usando un 'bucle for <br> <img src="img/tarea1.svg" alt="Tarea 1">`
        nodoResultadoDesafios.innerText = ''
    }
    if (tarea2.checked) {
        fTarea2()
        nodoResultadoTareas.className = ('mostrar')
        nodoResultadoTareas.innerText = `
        Usando un bucle 'while', decile a tu computadora que registre los números de diez a uno
        
        let i = 1;
        while (i <= 10) {
            console.log(i);
            i++; }
        `
        nodoResultadoDesafios.innerText = ''
    }
    if (tarea3.checked) {
        fTarea3()
        nodoResultadoTareas.className = ('mostrar')
        nodoResultadoTareas.innerText = `
        Calcular el promedio de todos los números en un array de números. (Ponerlo en una función) Ej.: calcularPromedio([10,5,4,2,8])

        function promedio(num) {
            let sum = 0;
            for (let i = 0; i < num.length; i++) {
                sum += num[i]; }
            return (sum / num.length) || 0; }
        console.log(promedio([10, 5, 4, 2, 8] ) )
        `
        nodoResultadoDesafios.innerText = ''
    }
    if (tarea4.checked) {
        fTarea4()
        nodoResultadoTareas.className = ('mostrar')
        nodoResultadoTareas.innerText = `
Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'. Cuenta del 1 al 50 e imprime:
* Si un número es múltiplo de tres, imprime 'Fizz'.
* Si es un múltiplo de 5, imprime 'Buzz'.
* Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
* Para todo lo demás, imprime el número mismo.

let x = 0
for (x = 0; x <= 50; x++) {
    if (x % 3 === 0 && x % 5 === 0) {
        ("FizzBuzz")
    } else if (x % 3 === 0) {
        ("Fizz");
    } else if (x % 5 === 0) {
        ("Buzz");
    } else {
        (x); } }
        `
        nodoResultadoDesafios.innerText = ''
    }
    if (desafios.checked) {
        nodoResultadoDesafios.className = ('mostrar')
        nodoResultadoDesafios.innerText = `
        
Desafío de programación #1: Imprimí los números del 1 al 10
for (let x = 1; x <= 10; x++) {
  console.log(x);
}

Desafìo de programación  #2: Imprimí los números impares del 1 al 100
for (let x = 1; x <= 100; x++) {
if (x%3==0) {
  console.log(x); } }

Desafío de programación #3: Imprimí la tabla de multiplicación del 7
for (let i = 0; i <= 10 ; i++){
  let fila = "7 x " + i + " = " + 7*i 
console.log(fila) }

Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9
for(let i = 0; i <= 10; i++)
{ imprimirTabla(i);
  console.log(""); }
function imprimirTabla(n)
{ for(let i = 1; i <= 10; i++)
    { let fila = n + " * " + i + " = " + n * i;
        console.log(fila); } }

Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
let suma = 0;
for(let i = 1; i <= 10; i++)
{ suma += i; }
console.log(suma);

Desafío de programación #6: Calcula 10! (10 factorial)
let mul = 1;
for(let i = 1; i <= 10; i++)
{ mul *= i; } console.log(mul);

Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
let sum = 0;
for(let i = 11; i <= 30; i += 2)
{
    sum += i;
}
console.log(sum);

Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
let numero = prompt("Elige °C para convertir")
function conversion(numero) { 
    return (numero * 9/5) + 32  }
console.log(conversion(numero))

Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
let numero = prompt("Elige °C para convertir")
function conversion(numero) {
  return (numero - 32) * 5/9 }
console.log(conversion(numero).toFixed(2))
        `
        nodoResultadoTareas.innerText = ''
    }
}

$form.querySelector('#boton-tarea1').onclick = function () {
    mostrarTareas()
}
$form.querySelector('#boton-tarea2').onclick = function () {
    mostrarTareas()
}
$form.querySelector('#boton-tarea3').onclick = function () {
    mostrarTareas()
}
$form.querySelector('#boton-tarea4').onclick = function () {
    mostrarTareas()
}
$form.querySelector('#boton-desafios').onclick = function () {
    mostrarTareas()
}
