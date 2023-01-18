const ARRAY_BASE = [0, 0, 0, 0, 0, 0, 0, 0];
const imagenFusa = "𝅘𝅥𝅰"
const imagenSilencio = "𝅀"

let arrayModificable = [];
let arrayModificable2 = [];
let arrayModificable3 = [];
let arrayModificable4 = [];
let arrayModificable5 = [];
let arrayModificable6 = [];
let arrayModificable7 = [];
let arrayModificable8 = [];
let arrayContenedor = [];
let arrayParaMostrar= [];
let selector = document.getElementById("selector");
let botonesSeleccionarVariaciones = document.querySelectorAll(".boton");
let botonesVariacionesSeleccionadas = document.querySelectorAll(".botonB");
let botonEliminarSeleccion = document.querySelector(".botonLimpiar")


var valorInicio = 0
var valorFinal = 0


function generarArraysConTodasLasCombinaciones(){
            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], 1, 1);
                arrayContenedor.push(arrayModificable);
            }

            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], 1, 2);
                for (o = i + 1; o < (ARRAY_BASE.length); o++) {
                    arrayModificable2 = arrayModificable.slice(0, 9);
                    arrayModificable2.splice([o], 1, 2)
                    arrayContenedor.push(arrayModificable2);
                }

            }

            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], 1, 3);
                for (o = i + 1; o < (ARRAY_BASE.length); o++) {
                    arrayModificable2 = arrayModificable.slice(0, 9);
                    arrayModificable2.splice([o], 1, 3)
                    for (p = o + 1; p < (ARRAY_BASE.length); p++) {
                        arrayModificable3 = arrayModificable2.slice(0, 9);
                        arrayModificable3.splice([p], 1, 3)
                        arrayContenedor.push(arrayModificable3)
                    }
                }

            }

            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], 1, 4);
                for (o = i + 1; o < (ARRAY_BASE.length); o++) {
                    arrayModificable2 = arrayModificable.slice(0, 9);
                    arrayModificable2.splice([o], 1, 4)
                    for (p = o + 1; p < (ARRAY_BASE.length); p++) {
                        arrayModificable3 = arrayModificable2.slice(0, 9);
                        arrayModificable3.splice([p], 1, 4)
                        for (a = p + 1; a < (ARRAY_BASE.length); a++) {
                            arrayModificable4 = arrayModificable3.slice(0, 9);
                            arrayModificable4.splice([a], 1, 4)
                            arrayContenedor.push(arrayModificable4)
                        }
                    }
                }

            }


            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], 1, 5);
                for (o = i + 1; o < (ARRAY_BASE.length); o++) {
                    arrayModificable2 = arrayModificable.slice(0, 9);
                    arrayModificable2.splice([o], 1, 5)
                    for (p = o + 1; p < (ARRAY_BASE.length); p++) {
                        arrayModificable3 = arrayModificable2.slice(0, 9);
                        arrayModificable3.splice([p], 1, 5)
                        for (a = p + 1; a < (ARRAY_BASE.length); a++) {
                            arrayModificable4 = arrayModificable3.slice(0, 9);
                            arrayModificable4.splice([a], 1, 5)
                            for (b = a + 1; b < (ARRAY_BASE.length); b++) {
                                arrayModificable5 = arrayModificable4.slice(0, 9);
                                arrayModificable5.splice([b], 1, 5)
                                arrayContenedor.push(arrayModificable5)
                            }
                        }
                    }
                }

            }

            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], 1, 6);
                for (o = i + 1; o < (ARRAY_BASE.length); o++) {
                    arrayModificable2 = arrayModificable.slice(0, 9);
                    arrayModificable2.splice([o], 1, 6)
                    for (p = o + 1; p < (ARRAY_BASE.length); p++) {
                        arrayModificable3 = arrayModificable2.slice(0, 9);
                        arrayModificable3.splice([p], 1, 6)
                        for (a = p + 1; a < (ARRAY_BASE.length); a++) {
                            arrayModificable4 = arrayModificable3.slice(0, 9);
                            arrayModificable4.splice([a], 1, 6)
                            for (b = a + 1; b < (ARRAY_BASE.length); b++) {
                                arrayModificable5 = arrayModificable4.slice(0, 9);
                                arrayModificable5.splice([b], 1, 6)
                                for (c = b + 1; c < (ARRAY_BASE.length); c++) {
                                    arrayModificable6 = arrayModificable5.slice(0, 9);
                                    arrayModificable6.splice([c], 1, 6)
                                    arrayContenedor.push(arrayModificable6)

                                }
                            }
                        }
                    }
                }

            }

            for (i = 0; i < ARRAY_BASE.length; i++) {
                arrayModificable = ARRAY_BASE.slice(0, 9);
                arrayModificable.splice([i], 1, 7);
                for (o = i + 1; o < (ARRAY_BASE.length); o++) {
                    arrayModificable2 = arrayModificable.slice(0, 9);
                    arrayModificable2.splice([o], 1, 7)
                    for (p = o + 1; p < (ARRAY_BASE.length); p++) {
                        arrayModificable3 = arrayModificable2.slice(0, 9);
                        arrayModificable3.splice([p], 1, 7)
                        for (a = p + 1; a < (ARRAY_BASE.length); a++) {
                            arrayModificable4 = arrayModificable3.slice(0, 9);
                            arrayModificable4.splice([a], 1, 7)
                            for (b = a + 1; b < (ARRAY_BASE.length); b++) {
                                arrayModificable5 = arrayModificable4.slice(0, 9);
                                arrayModificable5.splice([b], 1, 7)
                                for (c = b + 1; c < (ARRAY_BASE.length); c++) {
                                    arrayModificable6 = arrayModificable5.slice(0, 9);
                                    arrayModificable6.splice([c], 1, 7)
                                    for (v = c + 1; v < (ARRAY_BASE.length); v++) {
                                        arrayModificable7 = arrayModificable6.slice(0, 9);
                                        arrayModificable7.splice([v], 1, 7)
                                        arrayContenedor.push(arrayModificable7)

                                    }

                                }
                            }
                        }
                    }
                }

            }
}

generarArraysConTodasLasCombinaciones()

function mostrarImagenesSemiCorcheas(a,b){
    document.querySelector("#contenido").innerHTML = ``;
    let arrayParaMostrar = arrayContenedor.slice(a,b)
    for (i = 0; i < arrayParaMostrar.length; i++) {
        document.querySelector("#contenido").innerHTML += 
            `<button id = "boton${i}" type="button" class=" boton btn btn-dark ">`
        for (o = 0; o < arrayParaMostrar[i].length; o++) {
            if (arrayParaMostrar[i][o] > 0) {
                document.querySelector(`#boton${i}`).innerHTML += `${imagenFusa}`
            }
            else {
                document.querySelector(`#boton${i}`).innerHTML += `${imagenSilencio}`
            }
        }
        document.querySelector("#contenido").innerHTML += 
        `</button><br>`
        
    }
    botonesSeleccionarVariaciones = document.querySelectorAll(".boton")
    BOTONES.añadirElementos(botonesSeleccionarVariaciones);
}

function recibirValoresDeBusqueda(valor) {
    if (valor == 1) {
        valorInicio = 0
        valorFinal = 8
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
    else if (valor == 2) {
        valorInicio = 8
        valorFinal = 36
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
    else if (valor == 3) {
        valorInicio = 36
        valorFinal = 92
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
    else if (valor == 4){
        valorInicio = 92
        valorFinal = 162
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
    else if (valor == 5){
        valorInicio = 162
        valorFinal = 218
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
    else if (valor == 6){
        valorInicio = 218
        valorFinal = 246
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
    else if (valor == 7){
        valorInicio = 246
        valorFinal = 254
        mostrarImagenesSemiCorcheas(valorInicio,valorFinal)
    }
}

function añadirSeleccion(htmlParaAñadir){
    document.querySelector("#seleccion").innerHTML += `
    <button id = "boton${i}B" type="button" class="btn btn-light botonB">
        ${document.querySelector(`#${htmlParaAñadir}`).innerHTML} 
    </button><br>`;
}

function limpiarSeleccion(){
    document.querySelector("#seleccion").innerHTML = ``;
}


class Selector {
    cambiarSeleccion(element) {
        element.addEventListener('change', () => recibirValoresDeBusqueda(document.querySelector("#selector").value))

    }
}
class BotonesSeleccion{

    añadirElementos(element){
        element.forEach(boton => {
            boton.addEventListener('click', () => añadirSeleccion(boton.id))
        });
    }
}

class BotonesSeleccionados{

    eliminarElementos(element){
        element.forEach(boton => {
            boton.addEventListener('click', () => eliminarSeleccion(boton.id))
        })
    }
}

class BotonLimpiarSeleccion{

    eliminarSeleccion(element){
        element.addEventListener('click', () => limpiarSeleccion())
    }
}

const selectorDeCantidadDecorcheas = new Selector();

selectorDeCantidadDecorcheas.cambiarSeleccion(selector);

const BOTONES = new BotonesSeleccion();

const BOTON_LIMPIAR = new BotonLimpiarSeleccion()

BOTON_LIMPIAR.eliminarSeleccion(botonEliminarSeleccion);

