import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronDown,
  TrendingUp,
  Building,
  BarChart3,
  Layers,
  Rocket,
  Crown
} from 'lucide-react'

const servicesData = [
  { id: 'investment-banking', title: 'Investment Banking', icon: TrendingUp },
  { id: 'corporate-finance', title: 'Corporate Finance', icon: Building },
  { id: 'capital-markets', title: 'Capital Markets', icon: BarChart3 },
  { id: 'structured-finance', title: 'Structured Finance', icon: Layers },
  { id: 'venture-capital', title: 'Venture Capital', icon: Rocket },
  { id: 'wealth-management', title: 'Wealth Management', icon: Crown },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => router.pathname === path

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 z-50">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">BC</span>
              </div>
              <span className="text-xl font-heading font-bold text-foreground">
                Binary Capital
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
              <Link href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                About
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className={`nav-link flex items-center space-x-1 ${
                  router.pathname.startsWith('/services') ? 'active' : ''
                }`}>
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-xl shadow-xl z-50 transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-3">
                      {servicesData.map((service) => {
                        const IconComponent = service.icon
                        return (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200 group"
                          >
                            <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                              <IconComponent className="w-4 h-4 text-accent" />
                            </div>
                            <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                              {service.title}
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <Link
                        href="/services"
                        className="block text-sm font-medium text-accent hover:text-primary transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="/team" className={`nav-link ${isActive('/team') ? 'active' : ''}`}>
                Team
              </Link>
              <Link href="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                Contact
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-secondary/50 transition-colors duration-200 focus-visible"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                ) : (
                  <Moon className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
                )}
              </button>

              {/* CTA Button - Desktop */}
              <Link href="/contact" className="hidden lg:inline-flex btn btn-primary">
                Get Started
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors duration-200 z-50"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden absolute top-16 left-0 right-0 bg-card border-t border-border shadow-xl transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            <div className="p-6 space-y-4">
              <Link 
                href="/" 
                className={`block py-2 text-lg font-medium transition-colors ${
                  isActive('/') ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`block py-2 text-lg font-medium transition-colors ${
                  isActive('/about') ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <Link 
                  href="/services" 
                  className={`block py-2 text-lg font-medium transition-colors ${
                    isActive('/services') ? 'text-accent' : 'text-foreground hover:text-accent'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <div className="pl-4 space-y-2">
                  {servicesData.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-muted-foreground hover:text-accent transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                href="/team" 
                className={`block py-2 text-lg font-medium transition-colors ${
                  isActive('/team') ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                href="/contact" 
                className={`block py-2 text-lg font-medium transition-colors ${
                  isActive('/contact') ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="btn btn-primary w-full justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}