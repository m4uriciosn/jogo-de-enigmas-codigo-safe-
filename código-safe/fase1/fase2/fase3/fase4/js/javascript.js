function checar() {
    var txt = document.getElementById('txt')
    text = txt.value
    if (text == 'slytherin') {
            window.location = 'fase5/desafio4-slytherin.html'
        } else if ( text == 'sonserina') {
            alert('Try again!!!!! Follow the pattern!!!!')
        } else {
        window.alert('tente novamente!')
    }
}