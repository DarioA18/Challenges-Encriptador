function esValido(texto) {
    return /^[a-z\s]*$/.test(texto);  // Solo permite letras minúsculas y espacios
}

document.getElementById('encriptar-btn').addEventListener('click', function() {
    let textoEntrada = document.getElementById('input-text').value;
    if (textoEntrada && esValido(textoEntrada)) {
        let textoEncriptado = encriptarTexto(textoEntrada);
        mostrarResultado(textoEncriptado);
    } else {
        alert('⚠️ Solo letras minúsculas y sin acentos.');
    }
});

document.getElementById('desencriptar-btn').addEventListener('click', function() {
    let textoEntrada = document.getElementById('input-text').value;
    if (textoEntrada && esValido(textoEntrada)) {
        let textoDesencriptado = desencriptarTexto(textoEntrada);
        mostrarResultado(textoDesencriptado);
    } else {
        alert('⚠️ Solo letras minúsculas y sin acentos.');
    }
});

document.getElementById('copiar-btn').addEventListener('click', function() {
    let textoSalida = document.getElementById('texto-salida');
    navigator.clipboard.writeText(textoSalida.value).catch(err => {
        alert('Error al copiar el texto: ' + err);
    });
});

function encriptarTexto(texto) {
    let mapa = {'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat'};
    return texto.replace(/[eioua]/g, m => mapa[m]);
}

function desencriptarTexto(texto) {
    let mapa = {'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u'};
    return texto.replace(/enter|imes|ai|ober|ufat/g, m => mapa[m]);
}

function mostrarResultado(texto) {
    document.getElementById('resultado-contenedor').classList.remove('hidden');
    document.getElementById('mensaje-placeholder').classList.add('hidden');
    document.getElementById('texto-salida').value = texto;
}

