// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js for quantum particle effect
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#5663fe", "#00e5a0", "#1a1e4e"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#5663fe",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
            
            if (this.classList.contains('active')) {
                this.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                this.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabButtons.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get the tab ID from data-tab attribute and activate the corresponding content
                const tabId = button.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
    }

    // Contact form submission (prevent default and show thank you message)
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formElements = this.elements;
            let isValid = true;
            
            // Basic form validation
            for (let i = 0; i < formElements.length; i++) {
                if (formElements[i].hasAttribute('required') && !formElements[i].value) {
                    isValid = false;
                    formElements[i].classList.add('error');
                } else if (formElements[i].type === 'email' && formElements[i].value) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(formElements[i].value)) {
                        isValid = false;
                        formElements[i].classList.add('error');
                    }
                }
            }
            
            if (isValid) {
                // Hide the form
                this.innerHTML = '<div class="thank-you-message"><i class="fas fa-check-circle"></i><h3>Thank You!</h3><p>Your message has been sent successfully. We\'ll get back to you soon.</p></div>';
            }
        });
    }

    // Create quantum particle effect on hero
    function createQuantumParticles() {
        const hero = document.querySelector('.hero');
        if (hero) {
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'quantum-particle';
                
                // Random position
                particle.style.top = Math.random() * 100 + '%';
                particle.style.left = Math.random() * 100 + '%';
                
                // Random size
                const size = Math.random() * 5 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Random opacity and color
                particle.style.opacity = Math.random() * 0.5 + 0.1;
                
                // Random animation delay
                particle.style.animationDelay = Math.random() * 5 + 's';
                
                hero.appendChild(particle);
            }
        }
    }
    
    createQuantumParticles();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation for elements when they come into view
    function animateOnScroll() {
        const elements = document.querySelectorAll('.section-header, .solution-card, .about-stats, .stat-card, .tech-showcase, .contact-wrapper');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    }

    // Run animation on scroll
    setTimeout(animateOnScroll, 100);

    // Counter animation for stat numbers
    function animateCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        if (statNumbers.length > 0) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const value = parseFloat(target.innerText);
                        let count = 0;
                        const duration = 2000; // ms
                        const frameRate = 30; // ms
                        const increment = value / (duration / frameRate);
                        
                        // Check if it's a percentage
                        const isPercentage = target.innerText.includes('%');
                        
                        const counter = setInterval(() => {
                            count += increment;
                            if (count >= value) {
                                clearInterval(counter);
                                count = value;
                            }
                            
                            // Format the number appropriately
                            if (isPercentage) {
                                target.innerText = count.toFixed(1) + '%';
                            } else {
                                target.innerText = count.toFixed(1) + 'x';
                            }
                        }, frameRate);
                        
                        observer.unobserve(target);
                    }
                });
            }, {
                threshold: 0.5
            });
            
            statNumbers.forEach(number => {
                observer.observe(number);
            });
        }
    }
    
    animateCounters();

    // Optional: Typed.js-like effect for the hero headline
    function typeEffect() {
        const headline = document.querySelector('.hero h1 .highlight');
        
        if (headline) {
            const text = headline.innerText;
            headline.innerText = '';
            
            let i = 0;
            const typing = setInterval(() => {
                if (i < text.length) {
                    headline.innerText += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 100);
        }
    }
    
    // Uncomment to enable typing effect
    // typeEffect();
});