document.addEventListener('DOMContentLoaded', () => {
    initializeModals();
    initializeNavigation();
    initializeHeaderScroll();
});

function initializeModals() {
    const newsCards = document.querySelectorAll('.news-card');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    // Open modal when clicking on news card
    newsCards.forEach(card => {
        card.addEventListener('click', () => {
            if (card.classList.contains('closed')) {
                const modalId = card.getAttribute('data-modal');
                let message = '';
                
                if (modalId === 'noticia1') {
                    message = 'Desculpe, as inscrições para o Grêmio Estudantil estão temporariamente encerradas.\n\nAguarde o próximo período de inscrições!';
                } else if (modalId === 'noticia2') {
                    message = 'A venda de Chup Chup Cremoso foi finalizada.\n\nObrigado a todos que participaram! Fique atento para as próximas promoções.';
                }
                
                alert(message);
                return;
            }
            const modalId = card.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) openModal(modal);
        });
    });

    // Close modal when clicking close button
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const modal = button.closest('.modal');
            if (modal) closeModal(modal);
        });
    });

    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal[style*="display: block"]');
            if (openModal) closeModal(openModal);
        }
    });
}

function openModal(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    // Trigger reflow to ensure the transition works
    modal.offsetHeight;
    modal.style.opacity = '1';
}

function closeModal(modal) {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
}

function initializeNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    menuToggle?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                navLinks.classList.remove('active');
                menuToggle?.classList.remove('active');
            }
        });
    });
}

function initializeHeaderScroll() {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero-section');
    let heroBottom = hero.offsetTop + hero.offsetHeight;

    function updateHeader() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > heroBottom - header.offsetHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateHeader);
    window.addEventListener('resize', () => {
        heroBottom = hero.offsetTop + hero.offsetHeight;
        updateHeader();
    });
    
    // Initial check
    updateHeader();
}
