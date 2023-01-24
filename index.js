// JAVASCRIPT CON BUCLE

let caja1 = document.getElementById("caja1")
//let valor1 = parseInt(caja1.value) // lo que le estamos diciendo a ese string es que sea número, lo tenermos que incluir dentro de la función para que pueda obetner los datos

console.log(caja1)

let caja2 = document.getElementById("caja2")
// let valor2 = parseInt(caja2.value) // lo que le estamos diciendo a ese string es que sea número, lo tenermos que incluir dentro de la función para que pueda obetner los datos

let mensaje = document.getElementById("mensaje")

// function bucle(){

//     let valor1 = parseInt(caja1.value);
//     console.log(valor1)
//     let valor2 = parseInt(caja2.value);

   
//     let resultado = "";

//      resultado += "<ul>"

//     for(let i = valor1; i <= valor2; i++) {
//         console.log(i)

//         resultado += "<li>" + i +"</li>"
//      }

//    resultado += "</ul>"

//     mensaje.innerHTML = resultado; 
// } 


// SELECIONAR SOLO LOS NÚMEROS IMPARES

//  function bucle(){

//      let valor1 = parseInt(caja1.value);
//      let valor2 = parseInt(caja2.value);
   
//      let resultado = "";

//       resultado += "<ul>"

//      for(let i = valor1; i <= valor2; i++) {
        
//          if(i % 2 !== 0){
//              resultado += "<li>" + i +"</li>"
//          }         
//       }

//       resultado += "</ul>"

//       mensaje.innerHTML = resultado; 
//  } 


 // IMPRIMIR EL RANGO CADA 3

//  function bucle(){

//     let valor1 = parseInt(caja1.value);
//     let valor2 = parseInt(caja2.value);
  
//     let resultado = "";

//      resultado += "<ul>"

//     for(let i = valor1; i <= valor2; i= i + 3) {
                
//             resultado += "<li>" + i +"</li>"
               
//      }

//      resultado += "</ul>"

//      mensaje.innerHTML = resultado; 
// } 


// Inserta en un formulario una casilla de verdificación(checkbox) vinculado a un enlace sobre privacidad.



function clicado(){
        let checkBox = document.getElementById("checkbox")
        
        if(checkBox.checked){

        document.getElementById('btn1').disabled = false;

        } else {
        
        document.getElementById('btn1').disabled = true;

        }
}


function bucle(){

        let valor1 = parseInt(caja1.value);
        let valor2 = parseInt(caja2.value);

        let resultado = "";

        resultado += "<ul>"

        for(let i = valor1; i <= valor2; i++) {
                
                resultado += "<li>" + i +"</li>"
                
        }

        resultado += "</ul>"

        mensaje.innerHTML = resultado; 
 } 




