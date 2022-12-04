function borde() {
    const imagen = document.querySelector('#planeta');
    console.info('borde: ', imagen.border);
    if(!imagen.border || imagen.border == 0) {
        imagen.border = "2px";
    } else{
        imagen.border = 0;
    }
    }