function borde() {
    const imagen = document.querySelector('#planeta');
    console.info('borde: ', imagen.border);
    if(!imagen.border || imagen.border == 0) {
        imagen.border = "2px";
        imagen.style.borderColor = "red";
    } else{
        imagen.border = 0;
    }
    }

function sumar() {
    texto = document.querySelector('#lectura');

    numero1 = document.querySelector('#input_1').value;
    numero2 = document.querySelector('#input_2').value;
    numero3 = document.querySelector('#input_3').value;

    if (numero1 < 0 || numero2 <0 || numero3 <0) {
        texto.innerHTML = "No pueden haber stickers negativos."
    } else {
        const suma = Math.round(Number(document.querySelector('#input_1').value) + Number(document.querySelector('#input_2').value) + Number(document.querySelector('#input_3').value));
        console.info(suma);
        texto = document.querySelector('#lectura');
        if (suma <= 10) {
            texto.innerHTML = "Llevas " + suma + " stickers.";
        } else {
            texto.innerHTML = "Llevas demasiados stickers.";
        }
    }
}

function password() {
    texto = document.querySelector("#texto_password");
    ingreso = Number(document.querySelector("#select_1").value)*100 + Number(document.querySelector("#select_2").value)*10 + Number(document.querySelector("#select_3").value);
    console.info(ingreso);
    if (ingreso == 911) {
        texto.innerHTML = "password 1 correcto";
    } else if (ingreso == 714) {
        texto.innerHTML = "password 2 es correcto";
    } else {
        texto.innerHTML = "password incorrecto";
    }
}