// JAVASCRIPT CON BUCLE

let caja1 = document.getElementById("caja1")
//let valor1 = parseInt(caja1.value) // lo que le estamos diciendo a ese string es que sea número, lo tenermos que incluir dentro de la función para que pueda obetner los datos

console.log(caja1)

let caja2 = document.getElementById("caja2")
// let valor2 = parseInt(caja2.value) // lo que le estamos diciendo a ese string es que sea número, lo tenermos que incluir dentro de la función para que pueda obetner los datos

let mensaje = document.getElementById("mensaje")

function bucle(){

    let valor1 = parseInt(caja1.value);
    console.log(valor1)
    let valor2 = parseInt(caja2.value);

   
    let resultado = "";

     resultado += "<ul>"

    for(let i = valor1; i <= valor2; i++) {
        console.log(i)

        resultado += "<li>" + i +"</li>"
     }

     resultado += "</ul>"

     mensaje.innerHTML = resultado; 
} 