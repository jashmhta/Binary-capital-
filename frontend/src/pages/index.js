import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import { 
  TrendingUp, 
  Shield, 
  Users, 
  ArrowRight, 
  Building, 
  BarChart3, 
  Layers, 
  Rocket, 
  Crown,
  Target,
  Handshake,
  Award
} from 'lucide-react'

const servicesData = [
  {
    id: 'investment-banking',
    title: 'Investment Banking',
    icon: TrendingUp,
    description: 'Strategic advisory services for mergers, acquisitions, and capital raising initiatives with global market access.',
    features: ['M&A Advisory', 'Capital Raising', 'Strategic Planning', 'Market Analysis']
  },
  {
    id: 'corporate-finance',
    title: 'Corporate Finance',
    icon: Building,
    description: 'Tailored financing solutions to optimize your capital structure and accelerate sustainable growth.',
    features: ['Capital Structure', 'Financial Planning', 'Risk Management', 'Growth Strategy']
  },
  {
    id: 'capital-markets',
    title: 'Capital Markets',
    icon: BarChart3,
    description: 'Access to global capital markets with expert execution and strategic investor relations.',
    features: ['IPO Advisory', 'Debt Markets', 'Equity Markets', 'Market Access']
  },
  {
    id: 'structured-finance',
    title: 'Structured Finance',
    icon: Layers,
    description: 'Complex financing instruments tailored to unique capital needs and specialized risk profiles.',
    features: ['Asset-Backed Securities', 'Structured Products', 'Risk Transfer', 'Complex Financing']
  },
  {
    id: 'venture-capital',
    title: 'Venture Capital',
    icon: Rocket,
    description: 'Strategic investment and advisory services for high-growth technology and innovation companies.',
    features: ['Early Stage Investment', 'Growth Capital', 'Strategic Advisory', 'Portfolio Management']
  },
  {
    id: 'wealth-management',
    title: 'Wealth Management',
    icon: Crown,
    description: 'Comprehensive wealth preservation and growth strategies for high-net-worth individuals and families.',
    features: ['Portfolio Management', 'Estate Planning', 'Tax Optimization', 'Family Office Services']
  }
]

export default function Home() {
  const [counters, setCounters] = useState({ clients: 0, transactions: 0, value: 0 })
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const animateCounter = (key, target, duration = 2000) => {
      const start = Date.now()
      const timer = setInterval(() => {
        const elapsed = Date.now() - start
        const progress = elapsed / duration
        
        if (progress >= 1) {
          setCounters(prev => ({ ...prev, [key]: target }))
          clearInterval(timer)
        } else {
          const current = Math.floor(target * progress)
          setCounters(prev => ({ ...prev, [key]: current }))
        }
      }, 16)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          setIsVisible(prev => ({ ...prev, [id]: true }))
          
          if (id === 'metrics') {
            animateCounter('clients', 500)
            animateCounter('transactions', 1200)
            animateCounter('value', 5000)
          }
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('section[id], .reveal').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Binary Capital - Bespoke Financial Strategies & Investment Banking Solutions</title>
        <meta name="description" content="Leading investment banking firm in Mumbai specializing in M&A advisory, corporate finance, capital markets, and strategic financial solutions. Engineering financial futures with bespoke strategies." />
        <meta name="keywords" content="investment banking Mumbai, corporate finance India, M&A advisory, capital markets, structured finance, venture capital, wealth management, financial advisory services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Binary Capital - Bespoke Financial Strategies & Investment Banking" />
        <meta property="og:description" content="Leading investment banking firm specializing in M&A advisory, corporate finance, and strategic financial solutions. Engineering financial futures with bespoke strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://binarycapital.com" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:site_name" content="Binary Capital" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Binary Capital - Bespoke Financial Strategies" />
        <meta name="twitter:description" content="Leading investment banking firm specializing in M&A advisory, corporate finance, and strategic financial solutions." />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />
        
        <link rel="canonical" href="https://binarycapital.com" />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-hero leading-tight mb-6 animate-fade-in text-shadow-lg">
                  Engineering Financial Futures. <br className="hidden md:block" />
                  <span className="gradient-text">Building Enduring Value.</span>
                </h1>
                <p className="text-xl md:text-2xl text-hero-secondary mb-8 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
                  We deliver bespoke financial strategies and expert advisory to navigate complex markets. 
                  Binary Capital is your partner in achieving ambitious growth and lasting success.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-delay-2">
                  <Link href="/services" className="btn btn-primary btn-lg shadow-xl">
                    Discover Our Solutions
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/contact" className="btn btn-secondary btn-lg">
                    Schedule Consultation
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-delay-3">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                      <TrendingUp className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-hero mb-2">Growth Focused</h3>
                    <p className="text-hero-secondary text-sm leading-relaxed">Strategic solutions designed to accelerate business growth and market expansion</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                      <Shield className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-hero mb-2">Risk Management</h3>
                    <p className="text-hero-secondary text-sm leading-relaxed">Comprehensive risk assessment and mitigation strategies for sustainable growth</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                      <Users className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-hero mb-2">Expert Team</h3>
                    <p className="text-hero-secondary text-sm leading-relaxed">Seasoned professionals with decades of industry experience and global expertise</p>
                  </div>
                </div>
              </div>
              
              {/* Scroll Indicator */}
              <div className="scroll-indicator"></div>
            </div>
          </section>

          {/* Metrics Section */}
          <section id="metrics" className={`py-20 bg-secondary/5 transition-all duration-1000 ${
            isVisible['metrics'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="text-5xl lg:text-6xl font-heading font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                    {counters.clients}+
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Clients Served</h3>
                  <p className="text-muted-foreground leading-relaxed">Trusted partnerships built on excellence, transparency, and measurable results</p>
                </div>
                <div className="group">
                  <div className="text-5xl lg:text-6xl font-heading font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                    {counters.transactions}+
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Transactions Completed</h3>
                  <p className="text-muted-foreground leading-relaxed">Successfully executed deals across multiple sectors and market conditions</p>
                </div>
                <div className="group">
                  <div className="text-5xl lg:text-6xl font-heading font-bold text-accent mb-3 group-hover:scale-110 transition-transform duration-300">
                    ₹{counters.value}Cr+
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Transaction Value</h3>
                  <p className="text-muted-foreground leading-relaxed">Capital deployed and value created for our diverse client portfolio</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                  Comprehensive Financial Solutions
                </h2>
                <div className="golden-strip"></div>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  From complex corporate restructuring to strategic capital raising, our services are designed 
                  to address the unique challenges and opportunities your business faces across every stage of growth.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <div key={service.id} className="service-card h-full">
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                          <IconComponent className="h-6 w-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto">
                        <Link 
                          href={`/services/${service.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-accent hover:text-primary transition-colors font-semibold group"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
              
              <div className="text-center mt-16">
                <Link href="/services" className="btn btn-secondary btn-lg">
                  View All Services
                </Link>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="golden-strip-left"></div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-8">
                    Your Partner in Strategic Growth
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    In a world of financial complexity, clarity is your greatest asset. At Binary Capital, 
                    we move beyond standard solutions to become deeply integrated partners in your journey. 
                    Our approach is founded on three core pillars of excellence.
                  </p>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Deep Expertise</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Our team brings decades of experience from leading global financial institutions. 
                          We leverage this knowledge to provide insights that anticipate market shifts, not just react to them.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Bespoke Strategy</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          We invest the time to understand your business, your goals, and your vision 
                          to architect truly customized solutions that drive sustainable growth.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Handshake className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Unwavering Integrity</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Trust is the bedrock of every relationship we build. We operate with complete 
                          transparency and a commitment to aligning our success with yours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <img 
                      src="/assets/hero_finance_investment-oDlAhxWb.png" 
                      alt="Strategic Growth and Financial Planning" 
                      className="w-full h-auto rounded-xl shadow-2xl"
                      loading="lazy"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center shadow-xl">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-secondary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                  Trusted by Industry Leaders
                </h2>
                <div className="golden-strip"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Our client success stories speak to our commitment to delivering exceptional results 
                  and building lasting partnerships across diverse industries.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                      <Building className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">Leading Technology Firm</h4>
                      <p className="text-sm text-muted-foreground">Series C Funding Success</p>
                    </div>
                  </div>
                  <blockquote className="text-lg italic text-foreground mb-6 leading-relaxed">
                    "Binary Capital was instrumental in navigating our Series C funding. Their strategic guidance 
                    and market access were second to none. They weren't just advisors; they were true partners in our success."
                  </blockquote>
                  <footer>
                    <p className="font-heading font-semibold text-accent">CEO & Founder</p>
                  </footer>
                </div>
                <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground">Manufacturing Conglomerate</h4>
                      <p className="text-sm text-muted-foreground">Strategic Acquisition</p>
                    </div>
                  </div>
                  <blockquote className="text-lg italic text-foreground mb-6 leading-relaxed">
                    "The professionalism and deep diligence demonstrated by the Binary Capital team during our 
                    acquisition process were exceptional. They managed every complexity with precision."
                  </blockquote>
                  <footer>
                    <p className="font-heading font-semibold text-accent">Chief Financial Officer</p>
                  </footer>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                  Ready to Transform Your Financial Journey?
                </h2>
                <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Reach out to our experts for a bespoke solution tailored to your goals. 
                  Let's discuss how we can help you achieve your financial objectives and drive sustainable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-50 font-semibold px-8 py-4 text-lg shadow-xl">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link href="/services" className="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg">
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}