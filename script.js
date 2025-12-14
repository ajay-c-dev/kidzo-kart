document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- GSAP Animations ---

    // Hero Animation Timeline
    const heroTl = gsap.timeline();
    heroTl.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    })
        .from('.hero-image img', {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.7)'
        }, '-=0.8')
        .from('.floating-icon', {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'elastic.out(1, 0.5)'
        }, '-=0.5');

    // Floating Icons Animation (Continuous)
    gsap.to('.floating-icon', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
            each: 0.5,
            from: "random"
        }
    });

    // Scroll Animations (Batch)
    const sections = ['.feature-card', '.product-card', '.brand-highlight > div', '.about-text', '.about-decoration', '.location-banner', '.contact-section > div'];

    sections.forEach(selector => {
        gsap.utils.toArray(selector).forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
        });
    });

    // Button Hover Effect (Elastic)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'elastic.out(1, 0.3)' });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    });
});


