function checar() {
    var txt = document.getElementById('txt')
    text = txt.value
    if (text == 'europa') {
            window.location = 'fase4/desafio3-europa.html'
        } else if (text == 'greenwich') {
            window.alert('fico feliz que voce saiba ingles! talvez voce me localize em um mapa do terceiro dentre os 8 do nosso sistema')
        } else {
            window.alert('tente novamente!')
        }
}