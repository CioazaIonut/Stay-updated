const cardUnu = document.querySelector(".card-unu");
const cardDoi = document.querySelector(".card-doi");

const submitButton = document.querySelector(".button-subscribe");

const buttonReset = document.querySelector(".secound-button");


// buton pagina doi

const goToNextStep = () => {

    cardUnu.style.display = 'none';
    cardDoi.style.display = 'block';
    
}

submitButton.addEventListener("click", goToNextStep);


// buton reset

const resetButtonPasDoi = () => {
    cardUnu.style.display = "block";
    cardDoi.style.display = "none";
    
  };
  
  buttonReset.addEventListener("click", resetButtonPasDoi);