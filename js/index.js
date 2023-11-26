import Controls from "./controls.js";
import Timer from "./timer.js";

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOFF = document.querySelector(".sound-off");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent);
let timeTimerOut;

const controls = Controls(buttonPause, buttonPlay, buttonSet, buttonStop);

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timeTimerOut,
  resetControls: controls.reset,
});

buttonPlay.addEventListener("click", () => {
  controls.play();
  timer.countdown();
});

buttonPause.addEventListener("click", () => {
  controls.pause();
  clearTimeout(timeTimerOut);
});

buttonStop.addEventListener("click", () => {
  controls.reset();
});

buttonSoundOn.addEventListener("click", () => {
  buttonSoundOn.classList.add("hide");
  buttonSoundOFF.classList.remove("hide");
});

buttonSoundOFF.addEventListener("click", () => {
  buttonSoundOFF.classList.add("hide");
  buttonSoundOn.classList.remove("hide");
});

buttonSet.addEventListener("click", () => {
  let newMinutes = controls.getMinutes;
  if (!newMinutes) {
    timer.resetTimer();
    return;
  }
  minutes = newMinutes;

  timer.updateDisplay(minutes, 0);
});
