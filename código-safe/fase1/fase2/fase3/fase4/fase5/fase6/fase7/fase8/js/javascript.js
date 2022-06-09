function checar() {
    var txt = document.getElementById('txt')
    text = txt.value
    if (text == 'Ben Chichoski' || text == 'ben chichoski') {
            window.location = 'fase9/desafio8-directedBy.html'
        } else {
        window.alert('tente novamente!')
    }
}