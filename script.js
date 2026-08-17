document.addEventListener('DOMContentLoaded', () => {
    // Menu Hamburger Mobile
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Lightbox para Galeria
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');

    if (galleryItems.length > 0 && lightbox) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const caption = item.getAttribute('data-caption');
                
                lightboxImg.src = img.src;
                lightboxCaption.textContent = caption;
                lightbox.classList.add('active');
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
        };

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });
    }

    // Simulação do Formulário de Contato (Sem Banco de Dados)
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simula envio bem-sucedido
            formSuccess.classList.remove('hidden');
            contactForm.reset();

            setTimeout(() => {
                formSuccess.classList.add('hidden');
            }, 5000);
        });
    }
});