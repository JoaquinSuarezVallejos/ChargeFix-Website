

// Flecha Scroll Up (Volver a Inicio)
let scrollBtn = document.querySelector(".scroll-up-button a");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};
scrollBtn.onclick = function () {
  window.scrollTo(0, 0);
};

// Botón "Contáctenos" - Inicio
let contactBtn = document.querySelector(".contact-us-btn");
contactBtn.onclick = function () {
  window.scrollTo(0, document.documentElement.scrollHeight);
};

//Código para borrar el historial del formulario cuando la página se recarga
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}



/*----------------- Validación del Formulario de Contacto ------------------------- */


const formName = document.getElementById("name");
const formPhone = document.getElementById("phone");
const formEmail = document.getElementById("email");
const formMessage = document.getElementById("message");
const form = document.getElementById ("contactForm");
const formError = document.getElementById ('formError');
const formAdvIcon = document.getElementById ('formAdvIcon');
const formInfo = document.getElementById ('formInfo');

form.addEventListener('submit', (e) =>{
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let errorMessage = '';

  if (formName.value === '' || formName.value == null){ errorMessage ='Por favor, ingrese su nombre.'; }
  else if (formName.value.length < 3 || (/\d/.test(formName.value))){ errorMessage = 'Por favor, verifique su nombre.'; }
  else if(!formEmail.value.match(mailformat)){ errorMessage ='Por favor, verifique la dirección de correo.'; }
  else if (formPhone.value.length < 10) { errorMessage = 'Por favor, verifique el número de teléfono e incluya el código de área.'; }
  else if (formMessage.value.length < 10){ errorMessage = 'Por favor, ingrese un mensaje breve.'; }
  

  if (errorMessage.length > 0){ 
    e.preventDefault(); 
    formError.innerText = errorMessage;
    formAdvIcon.hidden = false;
  }
  else{
    formError.innerText ='Enviando, aguarde...';
    formAdvIcon.hidden = true;
  }
});


form.addEventListener('click', (e) =>{
  formInfo.hidden = true;
});