document.addEventListener('DOMContentLoaded', (event) => {
    const contactForm = document.getElementById('contactForm');
    const enviarBtn = document.getElementById('enviarBtn');

    enviarBtn.addEventListener('click', function () {

        if (contactForm.checkValidity()) {
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            if (!isValidEmail(email)) {
                alert('Por favor, ingresa una dirección de correo electrónico válida.');
                return;
            }
            alert(`Formulario enviado correctamente. Detalles:\nNombre: ${nombre}\nCorreo Electrónico: ${email}\nMensaje: ${mensaje}`);
        } else {
            alert('Por favor, completa todos los campos correctamente.');
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
