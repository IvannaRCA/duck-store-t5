
export function contactFormListener() {
    const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {

    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('message').value;

    console.log('--- Datos del formulario ---');
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
});
}

