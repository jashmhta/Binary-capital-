import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import { 
  TrendingUp, 
  Building, 
  BarChart3, 
  Layers, 
  Rocket, 
  Crown,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const servicesData = [
  {
    id: 'investment-banking',
    title: 'Investment Banking',
    icon: TrendingUp,
    description: 'Strategic advisory services for mergers, acquisitions, and capital raising initiatives with global market access and institutional expertise.',
    fullDescription: 'Our investment banking division provides comprehensive advisory services for complex financial transactions, strategic planning, and capital optimization across multiple industries and market conditions.',
    features: ['M&A Advisory & Execution', 'Capital Raising Solutions', 'Strategic Financial Planning', 'Market Analysis & Insights', 'Due Diligence Management', 'Valuation Services'],
    benefits: ['Access to global capital markets', 'Expert deal structuring', 'Regulatory compliance support', 'Post-transaction integration'],
    industries: ['Technology', 'Healthcare', 'Manufacturing', 'Financial Services', 'Real Estate', 'Energy']
  },
  {
    id: 'corporate-finance',
    title: 'Corporate Finance',
    icon: Building,
    description: 'Tailored financing solutions to optimize your capital structure and accelerate sustainable growth across business cycles.',
    fullDescription: 'Expert corporate finance solutions designed to enhance value and support sustainable growth through optimal capital allocation and strategic financial management.',
    features: ['Capital Structure Optimization', 'Financial Planning & Analysis', 'Risk Management Solutions', 'Growth Strategy Development', 'Working Capital Management', 'Financial Restructuring'],
    benefits: ['Improved financial efficiency', 'Enhanced creditworthiness', 'Optimized cost of capital', 'Strategic growth enablement'],
    industries: ['Manufacturing', 'Technology', 'Healthcare', 'Consumer Goods', 'Infrastructure', 'Services']
  },
  {
    id: 'capital-markets',
    title: 'Capital Markets',
    icon: BarChart3,
    description: 'Access to global capital markets with expert execution, strategic investor relations, and comprehensive market intelligence.',
    fullDescription: 'Comprehensive capital markets services connecting clients with global investors and optimal funding solutions across debt and equity markets.',
    features: ['IPO Advisory & Execution', 'Secondary Market Offerings', 'Debt Capital Markets', 'Investor Targeting & Relations', 'Market Making Services', 'ESG Integration'],
    benefits: ['Global investor network access', 'Optimal pricing strategies', 'Regulatory expertise', 'Long-term investor relationships'],
    industries: ['Technology', 'Healthcare', 'Financial Services', 'Infrastructure', 'Consumer Brands', 'Industrial']
  },
  {
    id: 'structured-finance',
    title: 'Structured Finance',
    icon: Layers,
    description: 'Complex financing instruments tailored to unique capital needs and specialized risk profiles across various asset classes.',
    fullDescription: 'Innovative structured finance solutions designed for complex transactions and specialized funding requirements that traditional financing cannot address.',
    features: ['Asset-Backed Securities', 'Structured Products Design', 'Risk Transfer Mechanisms', 'Complex Financing Solutions', 'Credit Enhancement', 'Securitization Services'],
    benefits: ['Customized risk allocation', 'Enhanced credit profiles', 'Regulatory capital efficiency', 'Diversified funding sources'],
    industries: ['Real Estate', 'Infrastructure', 'Transportation', 'Energy', 'Trade Finance', 'Equipment Finance']
  },
  {
    id: 'venture-capital',
    title: 'Venture Capital',
    icon: Rocket,
    description: 'Strategic investment and advisory services for high-growth technology and innovation companies at every stage of development.',
    fullDescription: 'Venture capital expertise focused on identifying and nurturing breakthrough technologies and innovative business models with global scaling potential.',
    features: ['Early Stage Investment', 'Growth Capital Solutions', 'Strategic Advisory Services', 'Portfolio Management', 'Exit Strategy Planning', 'Board Representation'],
    benefits: ['Strategic value addition', 'Network access', 'Operational expertise', 'Global scaling support'],
    industries: ['Technology', 'Fintech', 'Healthtech', 'AI/ML', 'Sustainability', 'Deep Tech']
  },
  {
    id: 'wealth-management',
    title: 'Wealth Management',
    icon: Crown,
    description: 'Comprehensive wealth preservation and growth strategies for high-net-worth individuals and families across generations.',
    fullDescription: 'Personalized wealth management solutions designed to preserve, grow, and transfer wealth across generations while managing complex financial needs.',
    features: ['Portfolio Management', 'Estate Planning Services', 'Tax Optimization Strategies', 'Family Office Services', 'Succession Planning', 'Philanthropic Advisory'],
    benefits: ['Personalized investment strategies', 'Tax-efficient structures', 'Legacy preservation', 'Multi-generational planning'],
    industries: ['Private Wealth', 'Family Offices', 'Foundations', 'Endowments', 'Corporate Executives', 'Entrepreneurs']
  }
]

export default function Services() {
  return (
    <>
      <Head>
        <title>Financial Advisory Services - Investment Banking & Corporate Finance | Binary Capital</title>
        <meta name="description" content="Comprehensive financial advisory services including investment banking, corporate finance, capital markets, structured finance, venture capital, and wealth management solutions." />
        <meta name="keywords" content="financial advisory services, investment banking services, corporate finance solutions, capital markets advisory, structured finance, venture capital, wealth management" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Financial Advisory Services - Investment Banking & Corporate Finance | Binary Capital" />
        <meta property="og:description" content="Comprehensive financial advisory services including investment banking, corporate finance, capital markets, and strategic financial solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://binarycapital.com/services" />
        
        <link rel="canonical" href="https://binarycapital.com/services" />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative py-32 bg-card">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                  A Spectrum of Solutions for Every Stage of Growth
                </h1>
                <div className="golden-strip"></div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Binary Capital offers a comprehensive suite of financial advisory services designed to meet 
                  the evolving needs of our clients across the entire corporate lifecycle, from startup to IPO and beyond.
                </p>
              </div>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Our Core Service Areas
                </h2>
                <div className="golden-strip"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Each service is designed with precision and backed by decades of experience in global financial markets.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesData.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <div key={service.id} className="service-card h-full">
                      <div className="mb-6">
                        <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                          <IconComponent className="h-7 w-7 text-accent" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 4).map((feature, index) => (
                              <li key={index} className="flex items-start text-sm text-muted-foreground">
                                <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Industries Served */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">Industries</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.industries.slice(0, 3).map((industry, index) => (
                              <span key={index} className="px-2 py-1 bg-secondary/30 text-muted-foreground text-xs rounded-full">
                                {industry}
                              </span>
                            ))}
                            {service.industries.length > 3 && (
                              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                                +{service.industries.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Link 
                          href={`/services/${service.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full btn btn-primary group"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Our Services */}
          <section className="py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Why Choose Binary Capital Services
                </h2>
                <div className="golden-strip"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Over 1200+ successful transactions across diverse market conditions and industry sectors.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Global Network</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Extensive network of institutional investors, strategic partners, and global market makers.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Data-Driven Insights</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Advanced analytics and market intelligence to inform strategic decision-making processes.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">End-to-End Solutions</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Comprehensive service delivery from initial strategy through successful transaction completion.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Process Overview */}
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Our Service Delivery Process
                </h2>
                <div className="golden-strip"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  A structured approach ensuring optimal outcomes and transparent communication throughout every engagement.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    1
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Discovery & Analysis</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Comprehensive assessment of your business, market position, and strategic objectives.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    2
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Strategy Development</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Customized strategic recommendations tailored to your specific needs and market conditions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    3
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Execution & Management</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Expert execution with continuous monitoring, risk management, and stakeholder communication.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    ✓
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Success & Support</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Successful completion with ongoing support and strategic advisory for future growth.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary to-accent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                  Discover the Right Strategy for You
                </h2>
                <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Unsure which solution best fits your needs? Let's talk. Our experts can help you identify 
                  the most effective path forward and develop a customized strategy for your success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-50 font-semibold px-8 py-4 text-lg shadow-xl">
                    Schedule a Strategic Review
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link href="/team" className="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg">
                    Meet Our Experts
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