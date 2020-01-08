let $form = document.querySelector('#formulario')
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
        nodoResultadoTareas.innerHTML = `• Imprimí cada 3er número del 3 al 22 usando un 'bucle for <br><br> <img src="img/tarea1.svg" alt="Tarea 1">`
        nodoResultadoDesafios.innerText = ''
    }
    if (tarea2.checked) {
        fTarea2()
        nodoResultadoTareas.className = ('mostrar')
        nodoResultadoTareas.innerHTML = `• Usando un bucle 'while', decile a tu computadora que registre los números de diez a uno<br><br> <img src="img/tarea2.svg" alt="Tarea 2">`
        nodoResultadoDesafios.innerText = ''
    }
    if (tarea3.checked) {
        fTarea3()
        nodoResultadoTareas.className = ('mostrar')
        nodoResultadoTareas.innerHTML = `• Calcular el promedio de todos los números en un array de números. (Ponerlo en una función) Ej.: calcularPromedio([10,5,4,2,8])<br><br> <img src="img/tarea3.svg" alt="Tarea 3">`
        nodoResultadoDesafios.innerText = ''
    }
    if (tarea4.checked) {
        fTarea4()
        nodoResultadoTareas.className = ('mostrar')
        nodoResultadoTareas.innerHTML = `• Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'. Cuenta del 1 al 50 e imprime:<br><br>
* Si un número es múltiplo de tres, imprime 'Fizz'.<br>
* Si es un múltiplo de 5, imprime 'Buzz'.<br>
* Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.<br>
* Para todo lo demás, imprime el número mismo.<br><br> <img src="img/tarea4.svg" alt="Tarea 4">`
        nodoResultadoDesafios.innerText = ''
    }
    if (desafios.checked) {
        nodoResultadoDesafios.className = ('mostrar')
        nodoResultadoTareas.innerHTML = ``
        nodoResultadoDesafios.innerHTML = `
        • Desafío de programación #1: Imprimí los números del 1 al 10<br>
         <img src="img/desafio1.svg" alt="Desafio 1">
        <br><br>
        • Desafìo de programación #2: Imprimí los números impares del 1 al 100<br>
         <img src="img/desafio2.svg" alt="Desafio 2">
         <br><br>
        • Desafío de programación #3: Imprimí la tabla de multiplicación del 7<br>
         <img src="img/desafio3.svg" alt="Desafio 3">
         <br><br>
        • Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9<br>
          <img src="img/desafio4.svg" alt="Desafio 4">
          <br><br>
        • Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array<br>
         <img src="img/desafio5.svg" alt="Desafio 5">
         <br><br>
        • Desafío de programación #6: Calcula 10! (10 factorial)<br>
         <img src="img/desafio6.svg" alt="Desafio 6">
         <br><br>
        • Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30<br>
         <img src="img/desafio7.svg" alt="Desafio 7">
         <br><br>
        • Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit<br>
         <img src="img/desafio8.svg" alt="Desafio 8">
         <br><br>
        • Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius<br>
         <img src="img/desafio9.svg" alt="Desafio 9"> `
    }
}

$form.querySelector('#boton-tarea1').onclick = () => mostrarTareas()
$form.querySelector('#boton-tarea2').onclick = () => mostrarTareas()
$form.querySelector('#boton-tarea3').onclick = () => mostrarTareas()
$form.querySelector('#boton-tarea4').onclick = () => mostrarTareas()
$form.querySelector('#boton-desafios').onclick = () => mostrarTareas()