// 1. Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// 2. Smooth Scroll & Close Menu on Click (Mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) navLinks.classList.remove('active');
    });
});

// 3. Scroll Animation (Reveal on Scroll)
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
}

// 4. Contact Form Popup Logic
const contactForm = document.getElementById('contactForm');
const contactModal = document.getElementById('contactModal');
const closeModalBtn = document.getElementById('closeModalBtn');

if (contactForm && contactModal) {
    // Saat form disubmit
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah reload halaman
        contactModal.classList.add('active'); // Tampilkan modal
        
        // Opsional: Reset form setelah submit
        contactForm.reset();
    });

    // Tombol Close
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            contactModal.classList.remove('active');
        });
    }

    // Klik di luar modal untuk menutup
    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            contactModal.classList.remove('active');
        }
    });
}