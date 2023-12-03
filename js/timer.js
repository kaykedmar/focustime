import sounds from "./sounds";

// Essa estrutura e chamada de Factory:
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timeTimerOut,
  resetControls,
  minutes,
}) {
  // Atualizar a exibição do temporizador na DOM
  function updateDisplay(newMinutes, seconds) {
    // === = Exatamente Igual
    // ? = if
    // : = else
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.innerHTML = String(newMinutes).padStart(2, "0");
    secondsDisplay.innerHTML = String(seconds).padStart(2, "0");
  }

  // Função que reseta o temporizador e exibe o valor inicial no display
  function reset() {
    updateDisplay(minutes, 0); // Atualiza o display com o valor inicial de minutos (pode ser 0) e 0 segundos
    clearTimeout(timeTimerOut); // Limpa qualquer temporizador em espera
  }

  // Função countdown - implementa a lógica principal do temporizador regressivo
  function countdown() {
    // Utilizando setTimeout para atrasar a execução de um trecho de código.
    timeTimerOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent); // Obtém o valor atual dos segundos
      let minutes = Number(minutesDisplay.textContent); // Obtém o valor atual dos minutos

      updateDisplay(minutes, 0); // Atualiza a exibição com os minutos atuais

      if (minutes <= 0 && seconds <= 0) {
        updateDisplay(); // Atualiza a exibição para evitar números negativos
        resetControls(); // Reseta os controles quando minutos e segundos são ambos zero
        sounds.timeEnd();
        return; // Para de executar a função se minutes/seconds for 0, impedindo números negativos
      }

      if (seconds <= 0) {
        // Quando os segundos chegam a 0, reiniciar para 60
        seconds = 3; // Atualiza os segundos
        --minutes; // Decrementa minutes em 1 minuto
      }

      updateDisplay(minutes, String(seconds - 1)); // Atualiza a exibição com os minutos e segundos atualizados

      countdown(); // Chama a própria função para executar novamente
    }, 1000); // Tempo para executar a função de callback (1 segundo)
  }

  // Função que atualiza o valor da variável 'minutes'
  function updateMinutes(newMinutes) {
    minutes = newMinutes; // Atualiza a variável 'minutes' com o novo valor fornecido
  }

  // Função que pausa o temporizador,
  function hold() {
    clearTimeout(timeTimerOut);
  }

  // Objeto Short
  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  };
}
