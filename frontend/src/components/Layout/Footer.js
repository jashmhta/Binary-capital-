import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  ExternalLink,
  TrendingUp,
  Building,
  BarChart3
} from 'lucide-react'

const servicesData = [
  { id: 'investment-banking', title: 'Investment Banking' },
  { id: 'corporate-finance', title: 'Corporate Finance' },
  { id: 'capital-markets', title: 'Capital Markets' },
  { id: 'structured-finance', title: 'Structured Finance' },
  { id: 'venture-capital', title: 'Venture Capital' },
  { id: 'wealth-management', title: 'Wealth Management' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">BC</span>
              </div>
              <span className="text-xl font-heading font-bold text-foreground">
                Binary Capital
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Engineering financial futures and building enduring value through bespoke 
              investment banking solutions and strategic advisory services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/binarycapital"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/binarycapital"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center group"
                  >
                    {service.title}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">Mumbai Financial District</p>
                  <p className="text-muted-foreground text-sm">Mumbai, India</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+917738056127"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  +91 7738056127
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:contact@binarycapital.com"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200"
                >
                  contact@binarycapital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Binary Capital Advisors LLP. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Regulated by SEBI • Licensed Investment Banking Firm
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Professional Disclaimer */}
        <div className="mt-8 p-4 bg-secondary/20 rounded-lg border border-border">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Professional Disclaimer:</strong> Binary Capital Advisors LLP is a regulated investment banking firm. 
            All investments carry risk of loss. Past performance does not guarantee future results. 
            Please consult with qualified financial advisors before making investment decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}