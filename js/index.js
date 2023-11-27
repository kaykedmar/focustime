// DOM
// Document referencia ao HTML
// Primeiro declarar as variaveis que vou modificar ou atribuir um valor
// Clean code (variaveis com nomes significativos)

/* === MINHAS VARIAVEIS ====*/
const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");

/* Variveis responsaveis por mostrar o tempo na DOM*/
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

let minutes;

function resetControls() { 
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  buttonSet.classList.remove("hide");
  buttonStop.classList.add("hide");
}

function updateTimerDisplay(minutes, seconds) { 
  minutesDisplay.innerHTML = String(minutes).padStart(2, "0");
  secondsDisplay.innerHTML = String(seconds).padStart(2, "0");

}

function countdown() {
  // Utilizando setTimeout para atrasar a execução de um trecho de código.
  setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent); //Transformando String em Numero
    let minutes = Number(minutesDisplay.textContent);

    secondsDisplay.textContent = '00'

    if (minutes <= 0) {
      resetControls() 
      return; //para de executar a função se minutes for 0, impede que seja minutes negativos
    }

    if (seconds <= 0) {
      // Quando os segundos chegam a 0, reiniciar para 60

      seconds = 5; //atualiza os segundos 

      minutesDisplay.textContent = String(minutes - 1) //minutes a ser Diminuido,
        .padStart(2, "0");
    }

    secondsDisplay.textContent = String(seconds - 1) //Seconds a ser Diminuido,
      .padStart(2, "0"); // para adicionar um 0 quando tiver so 1 numeros,

    countdown(); // colocar a propria função dentro dela para que execute novamente
  }, 1000); // tempo para executar a funcao callback
}

// CallBacks
buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  buttonSet.classList.add("hide");
  buttonStop.classList.remove("hide");

  countdown();
});

buttonPause.addEventListener("click", function () {
  buttonPause.classList.add("hide");
  buttonPlay.classList.remove("hide");
});

buttonStop.addEventListener("click", function () {
  resetControls()
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOff.classList.add("hide");
  buttonSoundOn.classList.remove("hide");
});

buttonSet.addEventListener("click", function () {
  minutes = prompt("How many minutes?");
  updateTimerDisplay(minutes, seconds)
});
