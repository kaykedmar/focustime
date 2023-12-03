// Essa estrutura e chamada de Factory:
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timeTimerOut,
  resetControls,
  minutes,
}) {
  // Atualizar a exibição do temporizador na DOM
  function updateDisplay(minutes, seconds) {
    minutesDisplay.innerHTML = String(minutes).padStart(2, "0");
    secondsDisplay.innerHTML = String(seconds).padStart(2, "0");
  }

  // Função que reseta o temporizador e exibe o valor inicial no display
  function reset() {
    updateDisplay(minutes, 0); // Atualiza o display com o valor inicial de minutos (pode ser 0) e 0 segundos
    clearTimeout(timeTimerOut); // Limpa qualquer temporizador em espera
  }

  // Função principal do temporizador regressivo
  function countdown() {
    // Utilizando setTimeout para atrasar a execução de um trecho de código.
    timeTimerOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent); // Transformando String em Número
      let minutes = Number(minutesDisplay.textContent);

      updateDisplay(minutes, 0);

      if (minutes <= 0 && seconds <= 0) {
        resetControls();
        return; // Para de executar a função se minutes/seconds for 0, impedindo numeros negativos
      }

      if (seconds <= 0) {
        // Quando os segundos chegam a 0, reiniciar para 60
        seconds = 3; // Atualiza os segundos
        --minutes; // Decrementa minutes em 1 minuto
      }

      updateDisplay(minutes, String(seconds - 1)); // Segundos a serem diminuídos

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
