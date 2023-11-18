const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOFF = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes; 

function countdown() { 
  setTimeout(function() { 
    let seconds = Number(secondsDisplay.textContent)

    if (seconds <= 0) { 
      seconds = 60
    }

    secondsDisplay.textContent = seconds - 1

    countdown()

  }, 1000 )
}


buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')
  buttonSet.classList.add('hide')

  countdown()
})

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
})


buttonStop.addEventListener('click', () => { 
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
})

buttonSoundOn.addEventListener('click', () => { 
  buttonSoundOn.classList.add('hide')
  buttonSoundOFF.classList.remove('hide')
})

buttonSoundOFF.addEventListener('click', () => { 
  buttonSoundOFF.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})


buttonSet.addEventListener('click', () => { 
  minutes = prompt('Quantos minutos?')
  minutesDisplay.textContent = minutes
})