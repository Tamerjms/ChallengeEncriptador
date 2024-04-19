let encriptado

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarTexto() {
    const texto = document.getElementById('textoIngresado').value;
    if ( /[A-Z]/.test(texto)){//esta validacion es para las mayusculas
        alert('El texto ingresado debe ser solo minusculas.');
        limpiarCaja();
    }
    if ( /\d/.test(texto)){//esta validacion es para los numeros
        alert('El texto ingresado debe ser solo minusculas.');
        limpiarCaja();
    }
    if ( /[^a-z\d\s]/.test(texto)){//Esta validacion es para los caracteres especiales
        alert('El texto ingresado debe ser solo minusculas.');
        limpiarCaja();
    }
    
}

function encriptarIntento(){
    verificarTexto();
    encriptado = document.getElementById('textoIngresado').value;
    encriptado = encriptado.replaceAll('e', 'enter').toLowerCase();
    encriptado = encriptado.replaceAll('i', 'imes').toLowerCase();
    encriptado = encriptado.replaceAll('a', 'ai').toLowerCase();
    encriptado = encriptado.replaceAll('o', 'ober').toLowerCase();
    encriptado = encriptado.replaceAll('u', 'ufat').toLowerCase();
    console.log(encriptado);
    asignarTextoElemento('h3', encriptado);
    borrarResultado();
    limpiarCaja()
    return;
}

function desencriptarIntento(){
    verificarTexto();
    encriptado = document.getElementById('textoIngresado').value;
    encriptado = encriptado.replaceAll('ai', 'a').toLowerCase();
    encriptado = encriptado.replaceAll('enter', 'e').toLowerCase();
    encriptado = encriptado.replaceAll('imes', 'i').toLowerCase();
    encriptado = encriptado.replaceAll('ober', 'o').toLowerCase();
    encriptado = encriptado.replaceAll('ufat', 'u').toLowerCase();
    console.log(encriptado);
    asignarTextoElemento('h3', encriptado);
    borrarResultado();
    limpiarCaja();
    return;
}

function limpiarCaja (){
    document.querySelector('#textoIngresado').value = '';
    return;
}

function copiar(){
    const element = document.querySelector('#copiarTexto');
    const textoCopiado = element.textContent;
    const storage = document.createElement('textarea');
    storage.value = textoCopiado;
    document.body.appendChild(storage);
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(storage);
    asignarTextoElemento('#copiarTexto', '');
    limpiarCaja();
    borrarResultado();
    mostrarMensaje('Copiado!');
    setTimeout(function() {
        mostrarMensaje('Copiar');
      }, 2000);//aqui se ponen los milisegundos
    //alert("Texto Copiado");
    return;
}

const resultadoContenido = document.querySelector('.contenido-Resultado');
const copiarTexto = document.getElementById('copiarTexto');

function borrarResultado() {
    if (copiarTexto.textContent.trim() !== '') {
        resultadoContenido.style.display = 'none';
    } else {
        resultadoContenido.style.display = 'block'; 
    }
}

function mostrarMensaje (texto){
    const botonCopy = document.getElementById('botonCopiar');
    botonCopy.textContent = texto;
}