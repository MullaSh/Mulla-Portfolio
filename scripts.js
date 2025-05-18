document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling untuk navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Form Validation & Submission
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Hentikan pengiriman default

            // Ambil nilai input
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const submitBtn = contactForm.querySelector('button[type="submit"]');

            // Validasi
            let isValid = true;

            // 1. Validasi Nama (min 3 karakter)
            if (nameInput.value.trim().length < 3) {
                showError(nameInput, 'Nama harus minimal 3 karakter');
                isValid = false;
            }

            // 2. Validasi Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                showError(emailInput, 'Format email tidak valid');
                isValid = false;
            }

            // 3. Validasi Pesan (min 10 karakter)
            if (messageInput.value.trim().length < 10) {
                showError(messageInput, 'Pesan harus minimal 10 karakter');
                isValid = false;
            }

            // Jika valid, kirim data
            if (isValid) {
                submitBtn.disabled = true; // Cegah double submit
                submitBtn.textContent = 'Mengirim...';

                // Kirim ke Formspree (jika action mengandung 'formspree')
                if (contactForm.action.includes('formspree')) {
                    fetch(contactForm.action, {
                        method: 'POST',
                        body: new FormData(contactForm),
                        headers: { 'Accept': 'application/json' }
                    })
                    .then(response => {
                        if (response.ok) {
                            showSuccess('Pesan terkirim! Saya akan segera membalas.');
                            contactForm.reset();
                        } else {
                            throw new Error('Gagal mengirim');
                        }
                    })
                    .catch(error => {
                        showError(null, 'Terjadi error. Silakan coba lagi atau email langsung ke mshadra6@gmail.com');
                    })
                    .finally(() => {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Send';
                    });
                } else {
                    // Fallback: Jika tidak pakai Formspree
                    showSuccess('Pesan siap dikirim!');
                    contactForm.reset();
                }
            }
        });
    }

    // Animasi scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const nav = document.querySelector('nav');

        if (scrollPosition > 100) {
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });

    // Animasi untuk skill items
    const skillItems = document.querySelectorAll('.skill-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });

    // Scroll ke atas saat copyright diklik
    document.querySelector('.footer-click').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Fungsi tampilkan error
function showError(input, message) {
    // Hapus error sebelumnya
    if (input) {
        input.classList.remove('error');
        const existingError = input.nextElementSibling;
        if (existingError && existingError.classList.contains('error-message')) {
            existingError.remove();
        }

        // Tambahkan error baru
        input.classList.add('error');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '0.8rem';
        errorDiv.style.marginTop = '5px';
        input.after(errorDiv);
    } else {
        alert(message); // Jika input tidak ada (fallback)
    }
}

// Fungsi tampilkan sukses
function showSuccess(message) {
    // Bisa diganti dengan SweetAlert/toast
    alert(message);
}