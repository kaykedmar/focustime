const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOFF = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timeTimerOut


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
 let newMinutes = prompt('How many minutes?') 
  if(!newMinutes) { 
    resetTimer()
    return
  }
  minutes = newMinutes

  let newSeconds = prompt('How many seconds?')
  if(!newSeconds) { 
    resetTimer()
    return
  }

  seconds = newSeconds
  updateTimerDisplay(minutes, seconds)}) 
  