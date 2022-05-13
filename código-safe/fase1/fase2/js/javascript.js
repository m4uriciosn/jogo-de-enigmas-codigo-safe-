function checar() {
    var txt = document.getElementById('txt')
    text = txt.value 
    if (text == 'bob') {
        window.location = 'fase3/desafio2-bob.html'
    } else {
    window.alert('tente novamente!')
}
}