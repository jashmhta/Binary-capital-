export const generateFooterHTML = (isHomePage) => {
    const backToHomeLink = isHomePage 
        ? '' 
        : `
        <div class="mb-8">
            <a href="index.html" class="back-to-home-link inline-flex items-center gap-2">
                <i data-lucide="arrow-left" class="w-4 h-4"></i>
                <span>Back to Home</span>
            </a>
        </div>`;

    return `
<footer class="bg-charcoal-dark py-12 border-t border-white/10">
    <div class="container mx-auto px-6 text-center text-off-white/60">
        ${backToHomeLink}
        <a href="index.html" class="inline-block mb-6">
             <img src="https://r2.flowith.net/files/6fd33d8e-c6d6-4ba9-9194-7493e5686600/1753650763411-cropped-cropped-c772297acc5500801168334cd6e2e5dd@512x512.png" alt="Binary Capital Logo" class="h-12 w-12" loading="lazy" decoding="async">
        </a>
        <div class="flex justify-center space-x-6 my-6">
            <a href="about_us.html" class="nav-link-footer">About</a>
            <a href="services.html" class="nav-link-footer">Services</a>
            <a href="insights.html" class="nav-link-footer">Insights</a>
            <a href="contact.html" class="nav-link-footer">Contact</a>
        </div>
        <p class="text-sm">&copy; 2025 Binary Capital. All Rights Reserved.</p>
    </div>
</footer>
`;
};
