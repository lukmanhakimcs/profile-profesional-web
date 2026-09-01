/**
 * Main Application Logic - Responsive Desktop Website Profile
 * Portfolio Website - Muhammad Lukman Hakim
 */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initScrollSpy();
    initContactForm();
});

/* ========== DARK MODE TOGGLE ========== */
function initThemeToggle() {
    document.body.classList.remove('dark-mode');
    const themeBtns = document.querySelectorAll('.btn-theme');
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    });
}

/* ========== ACTIVE NAV LINK ON SCROLL ========== */
function initScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ========== CONTACT FORM SUBMISSION ========== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('web-name').value;
        alert(`Terima kasih ${name}, pesan Anda berhasil dikirim! Saya akan segera menghubungi Anda.`);
        form.reset();
    });
}

/* ========== CV MODAL ========== */
function openCVModal() {
    const modal = document.getElementById('modal-overlay');
    if (modal) modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal-overlay');
    if (modal) modal.style.display = 'none';
}
