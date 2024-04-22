document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll para âncoras do menu
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    // Validação do formulário de contato
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            event.preventDefault();
            alert('Por favor, preencha todos os campos do formulário.');
        }
    });
});
