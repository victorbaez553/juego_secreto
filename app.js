//VARIABLES
let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];
//FUNCIONES
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //en este caso es por buena practica de programacion
}

function verificarIntento(){
                        // el parsetInt convierte el input en un valor entero
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario===numeroSecreto){ //cuando usamos 3 es igual el elemento tiene que seri igual en todo
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos===1 ? 'vez' : 'veces'}`);//usamos el operador tenario para definir si es vez o veces
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //el usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(params) {
    document.querySelector('#valorUsuario').value = '';
    return;
}
function retornarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  //SE INDICA EL NOMBRE DE LA VARIABLE QUE SE QUIERE TOMAR

    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return retornarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Numero Secreto');
    asignarTextoElemento('p', `Elija un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = retornarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    //desabilitamos el boton de reiniciar juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
