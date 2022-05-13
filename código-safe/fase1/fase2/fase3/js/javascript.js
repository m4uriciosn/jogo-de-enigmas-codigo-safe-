function checar() {
    var txt = document.getElementById('txt')
    text = txt.value
    if (text == 'europa') {
            window.location = 'fase4/desafio3-europa.html'
        } else {
        window.alert('tente novamente!')
        }
}