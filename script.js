document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const burgerBtn = document.getElementById('burgerBtn');
    const nav = document.querySelector('.nav');
    const appointmentBtn = document.getElementById('appointmentBtn');
    const appointmentModal = document.getElementById('appointmentModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const appointmentForm = document.getElementById('appointmentForm');
    
    burgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    appointmentBtn.addEventListener('click', function() {
        appointmentModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    modalCloseBtn.addEventListener('click', function() {
        appointmentModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    appointmentModal.addEventListener('click', function(e) {
        if (e.target === this) {
            appointmentModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        
        if (name && phone) {
            // В реальном проекте здесь будет отправка на сервер
            alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
            this.reset();
            appointmentModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        } else {
            alert('Пожалуйста, заполните обязательные поля: имя и телефон.');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-card, .form').forEach(el => {
        observer.observe(el);
    });
   
    console.log('Сайт автомастерской загружен');
});