// Form validation and submission
document.addEventListener('DOMContentLoaded', function() {
    // Booking Form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateBookingForm();
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateContactForm();
        });
    }

    // Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Image Gallery
    setupGallery();
});

function validateBookingForm() {
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!checkIn || !checkOut || !guests || !name || !email || !phone) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // You can replace this with your actual form submission logic
    alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
}

function validateContactForm() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;

    if (!name || !email || !subject || !message) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // You can replace this with your actual form submission logic
    alert('Mensagem enviada com sucesso! Responderemos em breve.');
}

function setupGallery() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    document.body.appendChild(modal);

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.innerHTML = `
                <span class="close-modal">&times;</span>
                <img src="${this.src}" alt="${this.alt}">
            `;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal || e.target.className === 'close-modal') {
            modal.style.display = 'none';
        }
    });
}