function checar() {
    var txt = document.getElementById('txt')
    text = txt.value
    if (text == 'troia') {
            window.location = 'fase6/desafio5-troia.html'
        } else if (text == 'troiano' || text == 'cavalo de troia') {
            alert('onde?')
        } else {
        window.alert('tente novamente!')
    }
}