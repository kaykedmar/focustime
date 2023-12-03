// ES6 Modules
import  Timer  from "./timer.js";
import Controls from "./controls.js";

// DOM
// Documento referente ao HTML
// Primeiro, declare as variáveis que serão modificadas ou receberão valores.
// Siga princípios de Clean Code, usando nomes de variáveis significativos.

/* === MINHAS VARIÁVEIS === */
const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");

/* Variáveis responsáveis por exibir o tempo na DOM */
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

let minutes = Number(minutesDisplay.textContent);
let timeTimerOut;

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
}) 

// Objeto ES6 Modules//   
const timer = Timer({
  //Dependências  
  minutesDisplay,
  secondsDisplay,
  timeTimerOut,
  resetControls: controls.reset,
  minutes
});




// Callbacks dos botões
buttonPlay.addEventListener("click", function () {
  controls.play()
  // Inicia o temporizador regressivo
  timer.countdown();
});

buttonPause.addEventListener("click", function () {
  controls.pause()
  timer.hold()
});

buttonStop.addEventListener("click", function () {
  // Reseta os controles e o temporizador
  controls.reset();
  timer.reset();
});

buttonSoundOn.addEventListener("click", function () {
  controls.soundOn()
});

buttonSoundOff.addEventListener("click", function () {
  controls.soundOFF()
});

// Event listener para o botão de configuração (buttonSet)
buttonSet.addEventListener("click", function () {
  
  // Solicita ao usuário o número de minutos por meio de um prompt
  let newMinutes = controls.getMinutes()

  // Verifica se o usuário cancelou o prompt ou não forneceu um valor // ! = NAO
  if (!newMinutes) {
    // Se o usuário cancelar, restaura o temporizador para o estado inicial e sai da função
    timer.resetTimer();
    return;
  }

  // Atualiza o valor de minutes com o novo valor fornecido pelo usuário
  minutes = newMinutes;

  // Atualiza a exibição do temporizador na DOM com os novos minutos e 0 segundos
  timer.updateDisplay(minutes, 0);
  timer.updateMinutes(minutes )
});
