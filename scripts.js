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

    // Form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validasi email
            const emailInput = document.getElementById('email');
            const emailValue = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(emailValue)) {
                alert('Format email tidak valid');
                return;
            }
            
            // Jika semua valid, tampilkan pesan sukses
            alert('Pesan berhasil dikirim! Terima kasih telah menghubungi saya.');
            contactForm.reset();
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
});