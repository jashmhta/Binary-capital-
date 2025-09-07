import { animateCounter } from './animations.js';
import { services, metrics, contactDetails } from './data.js';
import { generateHeaderHTML } from './layout/header.js';
import { generateFooterHTML } from './layout/footer.js';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {

    const savedTheme = localStorage.getItem('theme');
    const prefersDay = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if (savedTheme === 'day' || (!savedTheme && prefersDay)) {
        document.body.classList.add('day-mode');
    }

    loadLayout();
    setupThemeToggle(); // Sets up listener and initial icon state
    lucide.createIcons();
    
    setupScrollListeners();
    setupMobileMenu();
    setupIntersectionObserver();

    if (document.getElementById('services-grid')) {
        populateServices();
    }
    if (document.getElementById('services-grid-full')) {
        populateFullServicesGrid();
    }
    if (document.getElementById('contact-info-container')) {
        populateContactInfo();
    }
    if (document.getElementById('contact-form')) {
        populateServiceDropdown();
        setupContactForm();
    }
}

function setupThemeToggle() {
    const toggleButton = document.getElementById('theme-toggle');
    if (!toggleButton) return;

    const body = document.body;
    const themeIcon = toggleButton.querySelector('i');

    const updateThemeState = () => {
        const isDay = body.classList.contains('day-mode');
        themeIcon.setAttribute('data-lucide', isDay ? 'moon' : 'sun');
        lucide.createIcons();
    };

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('day-mode');
        const newTheme = body.classList.contains('day-mode') ? 'day' : 'night';
        localStorage.setItem('theme', newTheme);
        updateThemeState();
    });

    updateThemeState(); // Set initial icon based on pre-applied body class
}

const servicePageMap = {
    "Capital Markets": "service_capital_markets.html",
    "Mergers & Acquisitions": "service_mergers_and_acquisitions.html",
    "Supply Chain Financing": "service_supply_chain_financing.html",
    "Corporate Bonds": "service_corporate_bonds.html",
    "Project Finance": "service_project_finance.html",
    "Structured Finance": "service_structured_finance.html",
    "Alternative Investment Funds": "service_alternative_investment_funds.html",
    "Fixed Income": "service_fixed_income.html",
    "Global Investing": "service_global_investing.html",
    "Portfolio Management Services": "service_portfolio_management.html",
    "Unlisted & Pre-IPO Equity": "service_unlisted_pre_ipo.html"
};

function loadLayout() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    const path = window.location.pathname.split("/").pop();
    const isHomePage = path === 'index.html' || path === '';

    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = generateFooterHTML(isHomePage);
    }

    if (headerPlaceholder) {
        let currentHeaderHTML = generateHeaderHTML(services, servicePageMap);
        const activeClass = 'text-white font-semibold';
        
        currentHeaderHTML = currentHeaderHTML.replace(/{ACTIVE_HOME}/g, '')
                                             .replace(/{ACTIVE_ABOUT}/g, '')
                                             .replace(/{ACTIVE_SERVICES}/g, '')
                                             .replace(/{ACTIVE_INSIGHTS}/g, '')
                                             .replace(/{ACTIVE_CONTACT}/g, '');

        if (isHomePage) {
            currentHeaderHTML = currentHeaderHTML.replace(/{ACTIVE_HOME}/g, activeClass);
        } else if (path.includes('about_us')) {
            currentHeaderHTML = currentHeaderHTML.replace(/{ACTIVE_ABOUT}/g, activeClass);
        } else if (path.includes('service')) {
            currentHeaderHTML = currentHeaderHTML.replace(/{ACTIVE_SERVICES}/g, activeClass);
        } else if (path.includes('insights')) {
            currentHeaderHTML = currentHeaderHTML.replace(/{ACTIVE_INSIGHTS}/g, activeClass);
        } else if (path.includes('contact')) {
            currentHeaderHTML = currentHeaderHTML.replace(/{ACTIVE_CONTACT}/g, activeClass);
        }
        
        headerPlaceholder.innerHTML = currentHeaderHTML;
    }
}

function setupMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!menuBtn || !mobileMenu) return;

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = mobileMenu.classList.toggle('open');
        const icon = menuBtn.querySelector('i');
        icon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
        lucide.createIcons();
    });
}

function populateServices() {
    const servicesGrid = document.getElementById('services-grid');
    if (!servicesGrid) return;
    
    services.slice(0, 6).forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card reveal';
        card.dataset.delay = (index % 3) * 0.15;
        const servicePage = servicePageMap[service.title] || '#';

        card.innerHTML = `
            <div>
                <i data-lucide="${service.icon}" class="w-10 h-10 text-gold mb-5"></i>
                <h3 class="font-heading text-2xl font-semibold text-white mb-3">${service.title}</h3>
                <p class="text-base text-off-white/70">${service.description}</p>
            </div>
            <div class="learn-more pt-6">
                <a href="${servicePage}" class="font-heading font-semibold text-gold hover:text-white transition-colors duration-300 flex items-center">
                    Learn More <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                </a>
            </div>
        `;
        servicesGrid.appendChild(card);
    });
    lucide.createIcons();
}

function populateFullServicesGrid() {
    const servicesGrid = document.getElementById('services-grid-full');
    if (!servicesGrid) return;

    services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card reveal';
        card.dataset.delay = (index % 3) * 0.1;
        const servicePage = servicePageMap[service.title] || '#';

        card.innerHTML = `
            <div>
                <i data-lucide="${service.icon}" class="w-10 h-10 text-gold mb-5"></i>
                <h3 class="font-heading text-2xl font-semibold text-white mb-3">${service.title}</h3>
                <p class="text-base text-off-white/70">${service.description}</p>
            </div>
            <div class="learn-more pt-6">
                <a href="${servicePage}" class="font-heading font-semibold text-gold hover:text-white transition-colors duration-300 flex items-center">
                    Learn More <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                </a>
            </div>
        `;
        servicesGrid.appendChild(card);
    });
    lucide.createIcons();
}

function populateContactInfo() {
    const container = document.getElementById('contact-info-container');
    if (!container || !contactDetails) return;

    container.innerHTML = `
        <div class="flex items-start">
            <i data-lucide="mail" class="w-6 h-6 text-gold mt-1 mr-4"></i>
            <div>
                <h3 class="font-heading text-xl font-semibold text-white">Email</h3>
                <a href="mailto:${contactDetails.email}" class="text-off-white/70 hover:text-gold transition">${contactDetails.email}</a>
            </div>
        </div>
        <div class="flex items-start">
            <i data-lucide="phone" class="w-6 h-6 text-gold mt-1 mr-4"></i>
            <div>
                <h3 class="font-heading text-xl font-semibold text-white">Phone</h3>
                <a href="tel:${contactDetails.phone.replace(/\\s/g, '')}" class="text-off-white/70 hover:text-gold transition">${contactDetails.phone}</a>
            </div>
        </div>
        <div class="flex items-start">
            <i data-lucide="map-pin" class="w-6 h-6 text-gold mt-1 mr-4"></i>
            <div>
                <h3 class="font-heading text-xl font-semibold text-white">Office Address</h3>
                <p class="text-off-white/70">${contactDetails.address}</p>
            </div>
        </div>
    `;
    lucide.createIcons();
}

function populateServiceDropdown() {
    const serviceSelect = document.getElementById('service');
    if (!serviceSelect) return;

    serviceSelect.innerHTML = '<option value="">Service of Interest *</option>';

    const generalInquiry = document.createElement('option');
    generalInquiry.value = 'general';
    generalInquiry.textContent = 'General Inquiry';
    serviceSelect.appendChild(generalInquiry);

    services.forEach(service => {
        const option = document.createElement('option');
        const value = service.title.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_');
        option.value = value;
        option.textContent = service.title;
        serviceSelect.appendChild(option);
    });
}


function setupScrollListeners() {
    const header = document.getElementById('header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function setupIntersectionObserver() {
    const animatedMetrics = new Set();
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const revealElements = entry.target.querySelectorAll('.reveal');
                revealElements.forEach(el => {
                    if (!el.classList.contains('visible')) {
                        const delay = parseFloat(el.dataset.delay) || 0;
                        setTimeout(() => {
                            el.classList.add('visible');
                        }, delay * 1000);
                    }
                });

                if (entry.target.classList.contains('reveal') && !entry.target.classList.contains('visible')) {
                    const delay = parseFloat(entry.target.dataset.delay) || 0;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay * 1000);
                }

                if (entry.target.id === 'metrics' && !animatedMetrics.has('metrics')) {
                    const metricElements = entry.target.querySelectorAll('[data-metric]');
                    metricElements.forEach(el => {
                        const target = parseInt(el.dataset.target, 10);
                        const metricId = el.dataset.metric;
                        const metricData = metrics.find(m => m.id === metricId);
                        const suffix = metricData ? (metricData.suffix || '') : '';
                        if (!isNaN(target)) {
                            animateCounter(el, target, suffix);
                        }
                    });
                    animatedMetrics.add('metrics');
                }
                


            }
        });
    }, options);

    document.querySelectorAll('section, .reveal').forEach(el => {
        observer.observe(el);
    });
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const service = document.getElementById('service');
    const message = document.getElementById('message');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    const inputs = [fullName, email, service, message];

    const validateEmail = (email) => {
        const re = new RegExp('^(([^<>()[\\\\]\\\\\\\\.,;:\\\\s@\"]+(\\\\.[^<>()[\\\\]\\\\\\\\.,;:\\\\s@\"]+)*)|(\".+\"))@((\\\\[[0-9]{1,3}\\\\.[0-9]{1,3}\\\\.[0-9]{1,3}\\\\.[0-9]{1,3}\\\\])|(([a-zA-Z\\\\-0-9]+\\\\.)+[a-zA-Z]{2,}))$', 'i');
        return re.test(String(email).toLowerCase());
    };

    const setValidationState = (input, isValid) => {
        if (isValid) {
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
        }
    };
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValidForm = true;

        formStatus.style.display = 'none';
        formStatus.className = 'mt-6';
        
        const isNameValid = fullName.value.trim() !== '';
        setValidationState(fullName, isNameValid);
        if (!isNameValid) isValidForm = false;
        
        const isEmailValid = validateEmail(email.value);
        setValidationState(email, isEmailValid);
        if (!isEmailValid) isValidForm = false;

        const isServiceValid = service.value !== '';
        setValidationState(service, isServiceValid);
        if (!isServiceValid) isValidForm = false;
        
        const isMessageValid = message.value.trim() !== '';
        setValidationState(message, isMessageValid);
        if (!isMessageValid) isValidForm = false;

        if (isValidForm) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';

            setTimeout(() => {
                formStatus.textContent = 'Thank you for your inquiry! We will get back to you shortly.';
                formStatus.classList.add('success');
                formStatus.style.display = 'block';
                form.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Inquiry';
                inputs.forEach(input => input.classList.remove('invalid'));
            }, 1000);
        } else {
            formStatus.textContent = 'Please correct the errors before submitting.';
            formStatus.classList.add('error');
            formStatus.style.display = 'block';
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim() !== '' && input.type !== 'email') {
                setValidationState(input, true);
            }
        });
    });
}
