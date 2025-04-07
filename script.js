// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Location button functionality
    const locationBtn = document.querySelector('.location-btn');
    if (locationBtn) {
        locationBtn.addEventListener('click', function() {
            // In a real application, you would implement geolocation here
            alert('This would use your current location in a real application.');
        });
    }

    // Add scroll animation for navigation
    const scrollElements = document.querySelectorAll('section');
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Initialize the scroll animation check
    handleScrollAnimation();

    // Simple product filtering (can be expanded)
    const productCards = document.querySelectorAll('.product-card');
    
    // This would be connected to a search input in a more complex implementation
    const filterProducts = (searchTerm) => {
        productCards.forEach((card) => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            if (title.includes(searchTerm.toLowerCase())) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Example: Add sticky header effect
    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    function handleStickyHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', handleStickyHeader);

    // Form validation for address input
    const addressInput = document.querySelector('.search-input input');
    if (addressInput) {
        addressInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const address = this.value.trim();
                if (address) {
                    alert(`You entered: ${address} - In a real app, this would show bakery locations near you.`);
                } else {
                    alert('Please enter an address to find bakeries near you.');
                }
            }
        });
    }

    // Add a simple animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add this CSS class to your stylesheet for the scroll animations
// .scrolled {
//     opacity: 1;
//     transform: translateY(0);
// }