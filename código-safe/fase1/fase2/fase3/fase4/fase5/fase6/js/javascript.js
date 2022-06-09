function checar() {
    var txt = document.getElementById('txt')
    text = txt.value
    if (text == 'agua') {
            window.location = 'fase7/desafio6-agua.html'
        } else if (text == 'rosa dos ventos') {
            window.alert('e agora?')
        } else {
        window.alert('tente novamente!')
    }
}