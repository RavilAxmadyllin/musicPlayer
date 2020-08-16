export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio')
    const radioCoverImg = document.querySelector('.radio-cover__img')
    const radioHeaderBig = document.querySelector('.radio-header__big')
    const radioNavigation = document.querySelector('.radio-navigation')
    const radioItem = document.querySelectorAll('.radio-item')
    const radioStop  = document.querySelector('.radio-stop')

    const audio = new Audio()
    audio.type = 'audio/aac'
    radioStop.disabled = true
    const changeIconPlay = () => {
        if (audio.paused) {
            radio.classList.remove('play')
            radioStop.classList.add('fa-play')
            radioStop.classList.remove('fa-stop')
        }else {
            radio.classList.add('play')
            radioStop.classList.remove('fa-play')
            radioStop.classList.add('fa-stop')
        }
    }
    radioNavigation.addEventListener('change', event => {
        radioStop.disabled = false
        const target = event.target
        const parents = target.closest('.radio-item')
        radioItem.forEach(i => i.classList.remove('select'))
        parents.classList.add('select')
        const title = parents.querySelector('.radio-name').textContent
        const imgSrc = parents.querySelector('.radio-img').src
        radioHeaderBig.textContent = title
        radioCoverImg.src = imgSrc
        audio.src = target.dataset.radioStantion
        audio.play()
        changeIconPlay()
    })
    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play()
        }else audio.pause()
        changeIconPlay()
    })
}