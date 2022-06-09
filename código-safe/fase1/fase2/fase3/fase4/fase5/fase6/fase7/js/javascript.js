function checar() {
    var txt = document.getElementById('txt')
    text = txt.value
    if (text == 'besta da babilonia' || text == 'a besta da babilonia') {
            window.location = 'fase8/desafio7-besta.html'
        } else if (text == 'besta') {
            alert('ok. mas qual?')
        } else{
        window.alert('tente novamente!')
    }
}