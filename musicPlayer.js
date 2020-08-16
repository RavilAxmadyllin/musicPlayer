export const musicPlayerInit = () => {
    const audio = document.querySelector('.audio')
    const audioImg = document.querySelector('.audio-img')
    const audioHeader = document.querySelector('.audio-header')
    const audioPlayer = document.querySelector('.audio-player')
    const audioNavigation = document.querySelector('.audio-navigation')
    const audioButtonPlay = document.querySelector('.audio-button__play')
    const audioProgress = document.querySelector('.audio-progress')
    const audioProgressTiming = document.querySelector('.audio-progress__timing')
    const audioTimePassed = document.querySelector('.audio-time__passed')
    const audioTimeTotal = document.querySelector('.audio-time__total')

    const playList = ['hello', 'flow', 'speed']
    let trackIndex = 0

    const loadTrack = () => {
        const isPlayed = audioPlayer.paused
        console.log(audioPlayer.paused)
        const track = playList[trackIndex]
        audioHeader.textContent = track.toUpperCase()
        audioPlayer.src = `./audio/${track}.mp3`
        audioImg.src = `./audio/${track}.jpg`

        if (isPlayed) {
            audioPlayer.pause()
        }else audioPlayer.play()
    }
    const prevTrack = () => {
        if (trackIndex !== 0) {
            trackIndex--
        }else {
            trackIndex = playList.length - 1
        }
        loadTrack()
    }
    const nextTrack = () => {
        if (trackIndex === playList.length - 1) {
            trackIndex = 0
        }else {
            trackIndex++
        }
        loadTrack()
    }
    audioNavigation.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains('audio-button__play')) {
            audio.classList.toggle('play')
            audioButtonPlay.classList.toggle('fa-play')
            audioButtonPlay.classList.toggle('fa-pause')

            if (audioPlayer.paused) {
                audioPlayer.play()
            }else audioPlayer.pause()
        }
        if (target.classList.contains('audio-button__prev')) prevTrack()
        if (target.classList.contains('audio-button__next')) nextTrack()
    })
    audioPlayer.addEventListener('ended', () => {
        nextTrack()
        audioPlayer.play()
    })
    audioPlayer.addEventListener('timeupdate', () => {
        const duration = audioPlayer.duration
        const currentTime = audioPlayer.currentTime
        const progress = (currentTime / duration) * 100
        audioProgressTiming.style.width = progress + '%'

        const minutesPassed = Math.floor(currentTime / 60) || '00'
        const secondPassed = Math.floor(currentTime % 60) || '00'

        const minutesTotal = Math.floor(duration / 60) || '00'
        const secondToral = Math.floor(duration % 60) || '00'
        audioTimePassed.textContent = minutesPassed + ':' + secondPassed
        audioTimeTotal.textContent = minutesTotal + ':' + secondToral
    })

    audioProgress.addEventListener('click', e => {
        const x = e.offsetX;
        const allWith = audioProgress.clientWidth
        const progress = (x / allWith) * audioPlayer.duration
        console.log('x', x)
        console.log('allWith', allWith)
        console.log('progress', progress)
        audioPlayer.currentTime = progress
    })













}
