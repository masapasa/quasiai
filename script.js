// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js for quantum particle effect
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 120,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": ["#0057b8", "#00d4aa", "#003b7a"]
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
                    "color": "#0057b8",
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

    // Create random stars for background animation - simulating quantum particles
    function createStars() {
        const hero = document.querySelector('.hero');
        if (hero) {
            for (let i = 0; i < 150; i++) {
                const star = document.createElement('div');
                star.className = 'stars';
                
                // Random positioning
                star.style.top = Math.random() * 100 + '%';
                star.style.left = Math.random() * 100 + '%';
                
                // Vary size slightly to simulate different quantum particles
                star.style.width = (Math.random() * 3 + 1) + 'px';
                star.style.height = (Math.random() * 3 + 1) + 'px';
                
                // Random animation delay
                star.style.animationDelay = Math.random() * 5 + 's';
                
                hero.appendChild(star);
            }
        }
    }
    
    createStars();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animation for elements when they come into view
    function animateOnScroll() {
        const elements = document.querySelectorAll('.section h2, .project-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(element);
        });
    }

    // Run animation on scroll after a short delay to ensure all styles are applied
    setTimeout(animateOnScroll, 500);

    // Add quantum effect to the logo text on hover
    const quantumText = document.querySelector('.quantum-text');
    if (quantumText) {
        quantumText.addEventListener('mouseover', function() {
            this.style.animation = 'none'; // Reset the animation
            setTimeout(() => {
                this.style.animation = 'pulse 1s infinite'; // Restart the animation
            }, 10);
        });
    }
    
    // Enhanced hover effect for project cards - simulating quantum state change
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Rotate and scale the icon to simulate quantum state change
            this.querySelector('.project-icon').style.transform = 'scale(1.2) rotate(5deg)';
            this.querySelector('.project-icon').style.transition = 'transform 0.3s ease';
            
            // Simulate quantum fluctuation with subtle color change
            this.querySelector('.project-icon').style.color = '#00d4aa';
            
            // Remove the glow effect to eliminate any background animation
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Return to original state
            this.querySelector('.project-icon').style.transform = 'scale(1) rotate(0deg)';
            this.querySelector('.project-icon').style.color = '';
            this.style.boxShadow = '';
        });
    });
}); 