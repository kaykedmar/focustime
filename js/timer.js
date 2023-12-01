// Essa estrutura e chamada de Factory: 
export function Timer({
  minutesDisplay,
  secondsDisplay,
  timeTimerOut,
  resetControls,
}) {
  
  // Atualizar a exibição do temporizador na DOM
  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.innerHTML = String(minutes).padStart(2, "0");
    secondsDisplay.innerHTML = String(seconds).padStart(2, "0");
  }

  function resetTimer() {
    updateTimerDisplay(minutes, 0);
    clearTimeout(timeTimerOut);
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
        return; // Para de executar a função se minutes/seconds for 0, impedindo numeros negativos
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
  
  // Objeto Short
  return {
    countdown,
    resetTimer,
  };  
}
