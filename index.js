let button = document.getElementById('input-btn');
const errorMessage = document.getElementById('errorMessage');

function validateEmail(event) {
    event.preventDefault();

    let inputEmail = document.getElementById('input-Email').value;  // Obtener el valor actualizado

    if (inputEmail === '' || !validateEmailFormat(inputEmail)) {    // Pasar inputEmail a la función de formato
        errorMessage.style.display = 'block';  // Mostrar el mensaje de error
        document.getElementById('inputEmail').value = '';
    } else {
        errorMessage.style.display = 'none';   // Ocultar el mensaje de error si es válido
        document.getElementById('inputEmail').value = '';
    }
}  

function validateEmailFormat(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);   // Retornar true si el formato es válido
}


button.addEventListener('click', validateEmail);