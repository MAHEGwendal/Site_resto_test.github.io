const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Votre formulaire a bien été envoyé !');
    });
}

const resaForm = document.getElementById('resa-form');
if (resaForm) {
    resaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Votre réservation a bien été enregistrée !');
    });
}

const burger = document.getElementById('burger'); 
const navList = document.getElementById('nav-list');

burger.addEventListener('click', () => {
    navList.classList.toggle('active');
});