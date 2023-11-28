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

// Resetar os controles para o estado inicial
function resetControls() {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  buttonSet.classList.remove("hide");
  buttonStop.classList.add("hide");
}

// Resetar o tempo na DOM para o estado inicial
function resetTimer() {
  updateTimerDisplay(minutes, 0);
  clearTimeout(timeTimerOut);
}

// Atualizar a exibição do temporizador na DOM
function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.innerHTML = String(minutes).padStart(2, "0");
  secondsDisplay.innerHTML = String(seconds).padStart(2, "0");
}

// Função principal do temporizador regressivo
function countdown() {
  // Utilizando setTimeout para atrasar a execução de um trecho de código.
  timeTimerOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent); // Transformando String em Número
    let minutes = Number(minutesDisplay.textContent);

    updateTimerDisplay(minutes, 0);

    if (minutes <= 0 && seconds <= 0) {
      resetControls();
      return; // Para de executar a função se minutes/seconds for 0, impedindo minutes negativos
    }

    if (seconds <= 0) {
      // Quando os segundos chegam a 0, reiniciar para 60
      seconds = 5; // Atualiza os segundos
      --minutes; // Decrementa minutes em 1 minuto
    }

    updateTimerDisplay(minutes, String(seconds - 1)); // Segundos a serem diminuídos

    countdown(); // Chama a própria função para executar novamente
  }, 1000); // Tempo para executar a função de callback (1 segundo)
}

// Callbacks dos botões
buttonPlay.addEventListener("click", function () {
  // Altera a visibilidade dos botões durante a execução
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  buttonSet.classList.add("hide");
  buttonStop.classList.remove("hide");

  // Inicia o temporizador regressivo
  countdown();
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
  resetTimer();
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
    resetTimer();
    return;
  }

  // Atualiza o valor de minutes com o novo valor fornecido pelo usuário
  minutes = newMinutes;

  // Atualiza a exibição do temporizador na DOM com os novos minutos e 0 segundos
  updateTimerDisplay(minutes, 0);
});
