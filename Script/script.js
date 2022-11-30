var btnSi = document.getElementById('si'), btnNo = document.getElementById('no');

document.addEventListener('click', e => {
    if (e.target === btnSi) {
        Swal.fire({
            title: 'Ya me esperaba esa respuesta mi amor 😍',
            confirmButtonText: 'Dale click 😊',
            width: 600,
            padding: '6em',
            color: '#716add',
            background: 'url("../img/amour-love.gif")',
            backdrop: `
              rgba(0,0,123,0.4)
              url("../img/cat.gif")
              left top
              no-repeat
                `
        }).then((result) => {
            if (result.isConfirmed) {
                let url = "https://api.whatsapp.com/send?phone=5493888564153&text=" + "Si, una y mil veces mi amor 🥰" + "%0A";
                window.open(url, "Enviar");
            }
        })
    }
})
document.addEventListener('mouseover', e => {
    if (e.target == btnNo) {
        btnNo.style.left = `${numeroRandon(left1, left2, 'left')}%`;
        btnNo.style.top = `${numeroRandon(top1, top2, 'top')}%`;
    }
})

var left1 = 0, left2 = 0, top1 = 0, top2 = 0;

var numeroRandon = (x1, x2, direccion) => {
    let nRamdom = Math.floor(Math.random() * (+92 + 1 - +0)) + +0;
    x1 = nRamdom;

    if ((x1 - x2) <= 10 && (x1 - x2) >= 0) {
        if ((x1 + 10) > 92) {
            x1 -= 8;
        } else {
            x1 += 8;
        }
    }
    if ((x1 - x2) >= -10 && (x1 - x2) <= 0) {
        if ((x1 + 20) > 92) {
            x1 -= 20;
        } else {
            x1 += 20;
        }
    }
    if (direccion === "left") {
        left1 = x1;
        left2 = x1;
        console.log('l: ', left1, left2)
        return left1;
    }
    if (direccion === "top") {
        top1 = x1;
        top2 = x1;
        console.log('t: ', top1, top2)
        return top1;
    }
}