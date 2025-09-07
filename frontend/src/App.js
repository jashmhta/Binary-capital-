import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Theme Context
const ThemeContext = createContext();

// Custom Hook for Theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return saved ? saved === 'dark' : prefersDark;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Services Data
const servicesData = [
  {
    id: 'investment-banking',
    title: 'Investment Banking',
    icon: 'TrendingUp',
    description: 'Strategic advisory services for mergers, acquisitions, and capital raising initiatives.',
    fullDescription: 'Our investment banking division provides comprehensive advisory services for complex financial transactions, strategic planning, and capital optimization.',
    features: ['M&A Advisory', 'Capital Raising', 'Strategic Planning', 'Market Analysis']
  },
  {
    id: 'corporate-finance',
    title: 'Corporate Finance',
    icon: 'Building',
    description: 'Tailored financing solutions to optimize your capital structure and growth strategy.',
    fullDescription: 'Expert corporate finance solutions designed to enhance value and support sustainable growth through optimal capital allocation.',
    features: ['Capital Structure', 'Financial Planning', 'Risk Management', 'Growth Strategy']
  },
  {
    id: 'capital-markets',
    title: 'Capital Markets',
    icon: 'BarChart3',
    description: 'Access to global capital markets with expert execution and strategic guidance.',
    fullDescription: 'Comprehensive capital markets services connecting clients with global investors and optimal funding solutions.',
    features: ['IPO Advisory', 'Debt Markets', 'Equity Markets', 'Market Access']
  },
  {
    id: 'structured-finance',
    title: 'Structured Finance',
    icon: 'Layers',
    description: 'Complex financing instruments tailored to unique capital needs and risk profiles.',
    fullDescription: 'Innovative structured finance solutions designed for complex transactions and specialized funding requirements.',
    features: ['Asset-Backed Securities', 'Structured Products', 'Risk Transfer', 'Complex Financing']
  },
  {
    id: 'venture-capital',
    title: 'Venture Capital',
    icon: 'Rocket',
    description: 'Strategic investment and advisory services for high-growth technology companies.',
    fullDescription: 'Venture capital expertise focused on identifying and nurturing breakthrough technologies and innovative business models.',
    features: ['Early Stage Investment', 'Growth Capital', 'Strategic Advisory', 'Portfolio Management']
  },
  {
    id: 'wealth-management',
    title: 'Wealth Management',
    icon: 'Crown',
    description: 'Comprehensive wealth preservation and growth strategies for high-net-worth individuals.',
    fullDescription: 'Personalized wealth management solutions designed to preserve, grow, and transfer wealth across generations.',
    features: ['Portfolio Management', 'Estate Planning', 'Tax Optimization', 'Family Office Services']
  }
];

// Team Data
const teamData = [
  {
    name: 'Alexander Chen',
    position: 'Founder & Managing Partner',
    expertise: ['Investment Banking', 'M&A Strategy', 'Capital Markets'],
    image: '/assets/team_professional_indian-ONF9Gn7I.png',
    bio: 'Over 20 years of experience in investment banking and corporate finance, leading transformative transactions across multiple industries.'
  },
  {
    name: 'Sarah Mitchell',
    position: 'Head of Corporate Finance',
    expertise: ['Corporate Finance', 'Structured Finance', 'Risk Management'],
    image: '/assets/team_professional_indian-ONF9Gn7I.png',
    bio: 'Expert in complex financing structures with a track record of optimizing capital allocation for Fortune 500 companies.'
  },
  {
    name: 'David Rodriguez',
    position: 'Director of Capital Markets',
    expertise: ['Capital Markets', 'IPO Advisory', 'Investor Relations'],
    image: '/assets/team_professional_indian-ONF9Gn7I.png',
    bio: 'Seasoned professional specializing in capital market transactions and strategic investor engagement.'
  }
];

// Icon Component
const Icon = ({ name, className = "w-6 h-6" }) => {
  const icons = {
    TrendingUp: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    Building: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h2M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    BarChart3: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    Layers: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    ),
    Rocket: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    Crown: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l4 6l5-7l5 7l4-6v18H5V3z" />
      </svg>
    ),
    Menu: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    X: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    Sun: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    Moon: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
      </svg>
    ),
    ArrowRight: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    ),
    Shield: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Users: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    Target: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    )
  };
  
  return icons[name] || icons.Building;
};

// Header Component
const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'header-scrolled' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">BC</span>
            </div>
            <span className="text-xl font-bold text-foreground">Binary Capital</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/team" className="nav-link">Team</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
              aria-label="Toggle theme"
            >
              <Icon name={isDark ? "Sun" : "Moon"} className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="w-5 h-5" />
            </button>

            <Link 
              to="/contact" 
              className="hidden md:inline-flex btn btn-primary"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-2">
            <Link to="/" className="block nav-link py-2">Home</Link>
            <Link to="/about" className="block nav-link py-2">About</Link>
            <Link to="/services" className="block nav-link py-2">Services</Link>
            <Link to="/team" className="block nav-link py-2">Team</Link>
            <Link to="/contact" className="block nav-link py-2">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-card py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BC</span>
              </div>
              <span className="text-xl font-bold text-foreground">Binary Capital</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Engineering financial futures and building enduring value through bespoke investment banking solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesData.slice(0, 4).map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-primary transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Binary Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Home Page Component
const Home = () => {
  const [counters, setCounters] = useState({ clients: 0, transactions: 0, value: 0 });

  useEffect(() => {
    const animateCounter = (key, target, duration = 2000) => {
      const start = Date.now();
      const timer = setInterval(() => {
        const elapsed = Date.now() - start;
        const progress = elapsed / duration;
        
        if (progress >= 1) {
          setCounters(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          const current = Math.floor(target * progress);
          setCounters(prev => ({ ...prev, [key]: current }));
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id === 'metrics') {
          animateCounter('clients', 500);
          animateCounter('transactions', 1200);
          animateCounter('value', 5000);
        }
      });
    });

    const metricsSection = document.getElementById('metrics');
    if (metricsSection) observer.observe(metricsSection);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute inset-0 hero-overlay"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-hero leading-tight mb-6 animate-fade-in">
              Engineering Financial Futures. <br className="hidden md:block" />
              <span className="text-accent">Building Enduring Value.</span>
            </h1>
            <p className="text-xl md:text-2xl text-hero-secondary mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              We deliver bespoke financial strategies and expert advisory to navigate complex markets. 
              Binary Capital is your partner in achieving ambitious growth and lasting success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-2">
              <Link to="/services" className="btn btn-primary btn-lg">
                Discover Our Solutions
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Schedule Consultation
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-delay-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-hero mb-2">Growth Focused</h3>
                <p className="text-hero-secondary text-sm">Strategic solutions designed to accelerate business growth</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-hero mb-2">Risk Management</h3>
                <p className="text-hero-secondary text-sm">Comprehensive risk assessment and mitigation strategies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-hero mb-2">Expert Team</h3>
                <p className="text-hero-secondary text-sm">Seasoned professionals with decades of industry experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-accent mb-2">
                {counters.clients}+
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Clients Served</h3>
              <p className="text-muted-foreground">Trusted partnerships built on excellence and results</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-accent mb-2">
                {counters.transactions}+
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Transactions Completed</h3>
              <p className="text-muted-foreground">Successfully executed deals across multiple sectors</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-accent mb-2">
                ₹{counters.value}Cr+
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Transaction Value</h3>
              <p className="text-muted-foreground">Capital deployed and value created for our clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Financial Solutions
            </h2>
            <div className="golden-strip mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From complex corporate restructuring to strategic capital raising, our services are designed 
              to address the unique challenges and opportunities your business faces.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service, index) => (
              <div key={service.id} className="service-card group">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                </div>
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-flex items-center text-accent hover:text-foreground transition-colors font-semibold"
                >
                  Learn More
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services" className="btn btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Financial Journey?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Reach out to our experts for a bespoke solution tailored to your goals. 
              Let's discuss how we can help you achieve your financial objectives.
            </p>
            <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-50 font-semibold px-8 py-4 text-lg">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Services Page Component
const Services = () => {
  return (
    <div className="pt-16">
      <section className="relative py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              A Spectrum of Solutions for Every Stage of Growth
            </h1>
            <div className="golden-strip mx-auto"></div>
            <p className="text-lg md:text-xl text-muted-foreground">
              Binary Capital offers a comprehensive suite of financial advisory services designed to meet 
              the evolving needs of our clients across the entire corporate lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div key={service.id} className="service-card group">
                <div className="mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to={`/services/${service.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-foreground transition-colors font-semibold"
                >
                  Learn More
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Service Detail Page Component
const ServiceDetail = ({ serviceId }) => {
  const service = servicesData.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="btn btn-primary">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <section className="relative py-32 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Icon name={service.icon} className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {service.title}
            </h1>
            <div className="golden-strip mx-auto"></div>
            <p className="text-lg md:text-xl text-muted-foreground">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mr-4 mt-2"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Us</h2>
              <p className="text-muted-foreground mb-6">
                Our expertise in {service.title.toLowerCase()} is built on years of experience 
                and a deep understanding of market dynamics. We provide tailored solutions 
                that address your specific needs and objectives.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page Component
const About = () => {
  return (
    <div className="pt-16">
      <section className="relative py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About Binary Capital
            </h1>
            <div className="golden-strip mx-auto"></div>
            <p className="text-lg md:text-xl text-muted-foreground">
              Binary Capital is a dynamic financial firm driven by a passion for financing, 
              advisory services, and venture capital. We are committed to building long-term 
              relationships and delivering tailored solutions across industries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Our Mission & Values
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Simplify Complexities</h4>
                    <p className="text-muted-foreground">We break down financial complexities into simple, actionable solutions that empower decision-makers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Enhance Value</h4>
                    <p className="text-muted-foreground">Our bespoke strategies are designed to unlock value and create sustainable growth for all stakeholders.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Integrity & Trust</h4>
                    <p className="text-muted-foreground">We operate with the highest standards of integrity and transparency in all our dealings.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/assets/about_us_mission-BgRTG9Ln.png" 
                alt="Mission and Values" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Team Page Component
const Team = () => {
  return (
    <div className="pt-16">
      <section className="relative py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Expert Team
            </h1>
            <div className="golden-strip mx-auto"></div>
            <p className="text-lg md:text-xl text-muted-foreground">
              Meet the experienced professionals committed to your success. Our team brings 
              decades of expertise in investment banking, corporate finance, and strategic advisory.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <div key={index} className="team-card">
                <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-accent font-medium mb-3">{member.position}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Expertise</p>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you shortly.');
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      <section className="relative py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <div className="golden-strip mx-auto"></div>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're here to answer your questions and explore how we can help transform 
              your financial journey. Reach out to our experts for personalized solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <img 
                  src="/assets/contact_us_indian-D0WDDTkl.png" 
                  alt="Contact Us" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-foreground font-medium">+91 7738056127</p>
                    <p className="text-muted-foreground text-sm">Mon-Fri 9AM-6PM IST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Target" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-foreground font-medium">contact@binarycapital.com</p>
                    <p className="text-muted-foreground text-sm">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Building" className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-foreground font-medium">Mumbai Financial District</p>
                    <p className="text-muted-foreground text-sm">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select a service</option>
                      {servicesData.map(service => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Tell us about your requirements or questions..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetailWrapper />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

// Wrapper component for service detail to extract params
const ServiceDetailWrapper = () => {
  const { serviceId } = require('react-router-dom').useParams();
  return <ServiceDetail serviceId={serviceId} />;
};

export default App;