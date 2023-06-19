const cord = document.querySelectorAll('.cord')
cord.forEach((e) => {
    e.addEventListener('click', () => {
        const wordBox = e.closest('.word-box')
        const word = wordBox.querySelector('.word')
        e.style.top = '-400vh' 
        word.style.animation = 'cut_cord 2s linear both'
        word.style.webkitBoxReflect = 'below 0px transparent'
        word.classList.remove('tied')
    })
})

const botãoRetorno = document.querySelector('.back_to_page')
botãoRetorno.addEventListener('click', () => {
    window.history.back()
})