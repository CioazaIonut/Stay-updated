const cardUnu = document.querySelector(".card-unu");
const cardDoi = document.querySelector(".card-doi");

const submitButton = document.querySelector(".button-subscribe");

const buttonReset = document.querySelector(".secound-button");

const emailInput = document.querySelector('.email-input');
const emailAfisat = document.querySelector('.email-afisat');


// buton pagina doi

const goToNextStep = () => {

    cardUnu.style.display = 'none';
    cardDoi.style.display = 'block';

    emailAfisat.innerText = emailInput.value;
}

submitButton.addEventListener("click", goToNextStep);


// buton reset

const resetButtonPasDoi = () => {
    cardUnu.style.display = "flex";
    cardDoi.style.display = "none";



    emailAfisat.style.display = "none";  /*reusesc sa il sterg de tot input-ul, nu doar email-ul scris*/

  };

  buttonReset.addEventListener("click", resetButtonPasDoi);


  /*    Tema

1) distanta intre input email si butonul de jos                 OK
2) butonul trebuie sa ocupe 100% din latimea disponibila
3) spatieri intre text                          768 px                OK
4) (desktop) titlul "Stay updated" trebuie sa fie mai mare      OK
5) (desktop) imaginea din dreapta trebuie sa fie mai mica si sa aiba colturile rotunjite             ok
6) cand ma intorc pe pasul 1 sa fie sters continutul imputului (dreptunghiului) 
                              reusesc sa il sterg de tot input-ul, nu doar email-ul scris
*/
