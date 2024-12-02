//ficheiro de script
const form = document.getElementById('formContato');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (form.checkValidity() === false) {
        event.stopPropagation();
    } else {
            alert('Formulário enviado com sucesso!');
    }

    form.classList.add('was-validated');
});