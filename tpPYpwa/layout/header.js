export const generateHeaderHTML = (services, servicePageMap) => {
    const desktopNavLinks = services.map(service => 
        `<a href="${servicePageMap[service.title] || '#'}" class="dropdown-link">${service.title}</a>`
    ).join('');

    const mobileNavLinks = services.map(service => 
        `<a href="${servicePageMap[service.title] || '#'}" class="nav-link text-sm">${service.title}</a>`
    ).join('');

    return `
<header id="header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
    <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
            <a href="index.html" class="flex items-center space-x-3">
                <img src="https://r2.flowith.net/files/6fd33d8e-c6d6-4ba9-9194-7493e5686600/1753650763411-cropped-cropped-c772297acc5500801168334cd6e2e5dd@512x512.png" alt="Binary Capital Logo" class="h-10 w-10" loading="lazy" decoding="async">
                <span class="font-heading text-2xl font-bold text-white">Binary Capital</span>
            </a>
            <nav class="hidden lg:flex items-center space-x-8">
                <a href="index.html" class="nav-link {ACTIVE_HOME}">Home</a>
                <a href="about_us.html" class="nav-link {ACTIVE_ABOUT}">About Us</a>
                <div class="relative group">
                    <a href="services.html" class="nav-link flex items-center {ACTIVE_SERVICES}">Services <i data-lucide="chevron-down" class="w-4 h-4 ml-1"></i></a>
                    <div class="absolute top-full left-0 bg-charcoal-light rounded-md shadow-lg py-2 w-72 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2 z-50">
                        ${desktopNavLinks}
                    </div>
                </div>
                <a href="insights.html" class="nav-link {ACTIVE_INSIGHTS}">Insights</a>
                <a href="contact.html" class="nav-link {ACTIVE_CONTACT}">Contact</a>
            </nav>
            <div class="flex items-center space-x-2">
                <a href="contact.html" class="btn btn-primary hidden lg:inline-block">Schedule a Consultation</a>
                <button id="theme-toggle" class="p-2 rounded-full text-off-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-charcoal theme-toggle-button">
                    <i data-lucide="sun" class="w-5 h-5"></i>
                </button>
                <button id="menu-btn" class="lg:hidden text-white focus:ring-2 focus:ring-gold">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
    </div>
    <div id="mobile-menu" class="absolute top-full left-0 right-0 bg-charcoal-dark lg:hidden" style="transform: translateY(-150%);">
        <div class="container mx-auto px-6 py-4">
            <nav class="flex flex-col space-y-4">
                <a href="index.html" class="nav-link {ACTIVE_HOME}">Home</a>
                <a href="about_us.html" class="nav-link {ACTIVE_ABOUT}">About Us</a>
                <div>
                    <a href="services.html" class="nav-link {ACTIVE_SERVICES} font-semibold text-white">Services</a>
                    <div class="flex flex-col space-y-2 mt-2 pl-4 border-l border-gold">
                        ${mobileNavLinks}
                    </div>
                </div>
                <a href="insights.html" class="nav-link {ACTIVE_INSIGHTS}">Insights</a>
                <a href="contact.html" class="nav-link {ACTIVE_CONTACT}">Contact</a>
                <a href="contact.html" class="btn btn-primary mt-4">Schedule a Consultation</a>
            </nav>
        </div>
    </div>
</header>
`;
};
