// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
            }
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Product Image Gallery
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-product-image');
    
    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                // Add active class to clicked thumbnail
                this.classList.add('active');
                // Update main image
                const newImageSrc = this.getAttribute('data-image');
                mainImage.src = newImageSrc;
            });
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Add to Cart Functionality
    const addToCartButtons = document.querySelectorAll('#add-to-cart, .btn-secondary');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent.includes('Add to Cart')) {
                e.preventDefault();
                alert('Product added to cart!');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting based on scroll position
    function highlightNavOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }
    
    // Only run this on single-page version, not on multi-page
    if (document.querySelector('.page')) {
        window.addEventListener('scroll', highlightNavOnScroll);
    }
});

// Product data for dynamic product detail pages
const products = {
    1: {
        title: "E-Commerce Pro",
        price: "$299",
        description: "E-Commerce Pro is a complete online store solution designed for businesses of all sizes. With powerful features like inventory management, secure payment processing, and advanced analytics, you can create a professional online presence that drives sales and growth.",
        features: [
            "Complete inventory management system",
            "Multiple payment gateway integration",
            "Advanced analytics and reporting dashboard",
            "Customer relationship management (CRM)",
            "Mobile-responsive design",
            "SEO optimization tools",
            "Order tracking and management",
            "Multi-language and currency support"
        ]
    },
    2: {
        title: "ProjectFlow",
        price: "$199",
        description: "ProjectFlow is a comprehensive project management solution that helps teams collaborate effectively, track progress, and deliver projects on time. With intuitive task management and powerful reporting features.",
        features: [
            "Task and project management",
            "Team collaboration tools",
            "Time tracking and reporting",
            "File sharing and document management",
            "Gantt charts and timeline views",
            "Custom workflow automation",
            "Integration with popular tools",
            "Mobile app for on-the-go access"
        ]
    },
    3: {
        title: "Analytics Dashboard",
        price: "$249",
        description: "Analytics Dashboard provides comprehensive business intelligence with customizable dashboards, real-time data visualization, and advanced reporting capabilities to help you make data-driven decisions.",
        features: [
            "Customizable dashboard widgets",
            "Real-time data visualization",
            "Advanced reporting and analytics",
            "Data export capabilities",
            "Multi-source data integration",
            "Automated report generation",
            "Role-based access control",
            "Predictive analytics features"
        ]
    }
};

// Update product details based on URL parameters
function updateProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId && products[productId]) {
        const product = products[productId];
        
        // Update page title
        document.title = `${product.title} - MMS Connections`;
        
        // Update product details
        const titleElement = document.getElementById('product-title');
        const priceElement = document.getElementById('product-price');
        const descriptionElement = document.getElementById('product-description');
        
        if (titleElement) titleElement.textContent = product.title;
        if (priceElement) priceElement.textContent = product.price;
        if (descriptionElement) descriptionElement.textContent = product.description;
        
        // Update features list
        const featuresList = document.querySelector('.product-features ul');
        if (featuresList) {
            featuresList.innerHTML = '';
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
        }
    }
}

// Initialize product details if on product detail page
if (window.location.pathname.includes('product-detail.html')) {
    updateProductDetails();
}