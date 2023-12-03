export default function Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
}) {
  function reset() {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
    buttonSet.classList.remove("hide");
    buttonStop.classList.add("hide");
  }

  function play() {
    // Altera a visibilidade dos botões durante a execução
    buttonPlay.classList.add("hide");
    buttonPause.classList.remove("hide");
    buttonSet.classList.add("hide");
    buttonStop.classList.remove("hide");
  }

  function pause() {
    // Altera a visibilidade dos botões durante a pausa
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");

    // Pausa o temporizador
  }

  function soundOn() {
    // Alterna os ícones de som
    buttonSoundOn.classList.add("hide");
    buttonSoundOff.classList.remove("hide");
  }

  function soundOFF() {
    // Alterna os ícones de som
    buttonSoundOff.classList.add("hide");
    buttonSoundOn.classList.remove("hide");
  }

  function getMinutes() {
    let newMinutes = prompt("How many minutes?");

    // ! = NAO 
    if (!newMinutes) {
      // Retorna 'false' se o usuário pressionou Cancelar ou não forneceu uma entrada
      return false;
    }

    // Retorna o valor inserido pelo usuário se tudo estivercorreto
    return newMinutes;
  }

  return {
    reset,
    play,
    pause,
    soundOn,
    soundOFF,
    getMinutes,
  };
}
