let img = document.querySelector('#exchange-img-cam');

function exchange() {

    if (img.style.opacity == 0) {
        img.style.opacity = 1;
    } 
    else {
        img.style.opacity = 0;
    }

}

setInterval(() => {
    exchange();
}, 3000);
