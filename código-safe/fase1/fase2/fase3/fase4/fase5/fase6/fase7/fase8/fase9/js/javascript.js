function checar() {
    var txt = document.getElementById('txt')
    text = txt.value
    if (text == 'hollywood' || text == 'Hollywood') {
            window.location = 'fase10/ate-mais.html'
        } else if (text == 'os 8 odiados' || text == '8 odiados' || text == 'samuel l jackson' 
        || text== 'quentin tarantino' || text == 'tarantino')
        {
        window.alert('lhe falta enxergar além do que os olhos são capazes de ver, amigo!')
    } else {
        window.alert('tente novamente!')
    }
}