// ES6 Modules
import resetControls from "./controls.js";
import { Timer } from "./timer.js";

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

// Objeto ES6 Modules// 
const timer = Timer({
  //Dependências  
  minutesDisplay,
  secondsDisplay,
  timeTimerOut,
  resetControls,
});

// Callbacks dos botões
buttonPlay.addEventListener("click", function () {
  // Altera a visibilidade dos botões durante a execução
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  buttonSet.classList.add("hide");
  buttonStop.classList.remove("hide");

  // Inicia o temporizador regressivo
  timer.countdown();
});

buttonPause.addEventListener("click", function () {
  // Altera a visibilidade dos botões durante a pausa
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");

  // Pausa o temporizador
  clearTimeout(timeTimerOut);
});

buttonStop.addEventListener("click", function () {
  // Reseta os controles e o temporizador
  resetControls();
  timer.resetTimer();
});

buttonSoundOn.addEventListener("click", function () {
  // Alterna os ícones de som
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
});

buttonSoundOff.addEventListener("click", function () {
  // Alterna os ícones de som
  buttonSoundOff.classList.add("hide");
  buttonSoundOn.classList.remove("hide");
});

// Event listener para o botão de configuração (buttonSet)
buttonSet.addEventListener("click", function () {
  // Solicita ao usuário o número de minutos por meio de um prompt
  let newMinutes = prompt("How many minutes?");

  // Verifica se o usuário cancelou o prompt ou não forneceu um valor // ! = NAO
  if (!newMinutes) {
    // Se o usuário cancelar, restaura o temporizador para o estado inicial e sai da função
    timer.resetTimer();
    return;
  }

  // Atualiza o valor de minutes com o novo valor fornecido pelo usuário
  minutes = newMinutes;

  // Atualiza a exibição do temporizador na DOM com os novos minutos e 0 segundos
  updateTimerDisplay(minutes, 0);
});
