function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora é ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src="manha.png"
        document.body.style.background = "#f87911"
    } else if (hora >= 12 && hora < 18) {
        img.src="tarde.png"
        document.body.style.background = "rgb(226, 245, 52)"
    } else {
        img.src="noite.png"
        document.body.style.background = "rgba(0, 0, 0, 0.61)"
    }
}
