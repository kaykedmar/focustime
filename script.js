const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOFF = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes;


function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds) { 
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function resetTimer() { 
  updateTimerDisplay(0, 0)
}

function countdown() {
  timeTimerOut =  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(25, 0)

    if (minutes <= 0) {
      resetControls()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }
    
    updateTimerDisplay(minutes, String(seconds - 1))
    
    countdown()

  }, 1000)
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

  clearTimeout(timeTimerOut);

})


buttonStop.addEventListener('click', () => {
  resetControls();
  resetTimer()
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
  minutes = prompt('How many minutes?') || 25
  seconds = prompt('How many seconds?') || 0
  updateTimerDisplay(minutes, seconds)}) 
  