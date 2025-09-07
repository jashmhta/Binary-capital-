import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import { 
  Target, 
  TrendingUp, 
  Shield, 
  Users,
  Award,
  Globe,
  Building,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function About() {
  return (
    <>
      <Head>
        <title>About Binary Capital - Leading Investment Banking Firm in Mumbai | Our Story</title>
        <meta name="description" content="Learn about Binary Capital's mission, values, and expertise in investment banking, corporate finance, and strategic financial advisory. Building enduring value since inception." />
        <meta name="keywords" content="about binary capital, investment banking firm Mumbai, corporate finance expertise, financial advisory team, company history, mission values" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Binary Capital - Leading Investment Banking Firm | Our Story" />
        <meta property="og:description" content="Learn about Binary Capital's mission, values, and expertise in investment banking and strategic financial advisory services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://binarycapital.com/about" />
        
        <link rel="canonical" href="https://binarycapital.com/about" />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative py-32 bg-card">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                  About Binary Capital
                </h1>
                <div className="golden-strip"></div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Binary Capital is a dynamic financial firm driven by a passion for financing, advisory services, and venture capital. 
                  We are committed to building long-term relationships and delivering tailored solutions that drive sustainable growth 
                  across industries like technology, healthcare, and real estate.
                </p>
              </div>
            </div>
          </section>

          {/* Company Stats */}
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-2">15+</div>
                  <p className="text-muted-foreground font-medium">Years in Business</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-2">500+</div>
                  <p className="text-muted-foreground font-medium">Clients Served</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-2">₹5000Cr+</div>
                  <p className="text-muted-foreground font-medium">Transaction Value</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <div className="text-3xl lg:text-4xl font-heading font-bold text-accent mb-2">300+</div>
                  <p className="text-muted-foreground font-medium">Institutional Partners</p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Values */}
          <section className="py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="golden-strip-left"></div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
                    Our Mission & Core Values
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    At Binary Capital, our mission is to transform aspirations into achievements. We strive to simplify 
                    financial complexities, enhance value creation, and empower our clients' financial futures with 
                    unwavering integrity, deep expertise, and a relentless focus on sustainable success.
                  </p>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Simplify Complexities</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          We break down financial complexities into simple, actionable solutions that empower decision-makers 
                          to navigate challenging market conditions with confidence and clarity.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Enhance Value Creation</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Our bespoke strategies are designed to unlock hidden value and create sustainable growth 
                          opportunities for all stakeholders across the entire business ecosystem.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-heading font-semibold text-foreground mb-2">Unwavering Integrity</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          We operate with the highest standards of integrity, transparency, and ethical business practices 
                          in all our dealings, building trust that lasts for generations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="/assets/about_us_mission-BgRTG9Ln.png" 
                    alt="Binary Capital Mission and Values" 
                    className="w-full h-auto rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center shadow-xl">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Our Strategic Approach
                </h2>
                <div className="golden-strip"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  We combine deep market expertise with innovative thinking to deliver solutions that create lasting value.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Client-Centric Focus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every strategy is tailored to our clients' unique needs, objectives, and market position. 
                    We invest time to deeply understand your business before crafting solutions.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Global Perspective</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our global network and international experience enable us to identify opportunities 
                    and navigate challenges across diverse markets and regulatory environments.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/40 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Long-term Partnerships</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We build enduring relationships that extend beyond individual transactions, 
                    serving as trusted advisors throughout your business journey.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Industry Expertise */}
          <section className="py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Industry Expertise
                </h2>
                <div className="golden-strip"></div>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Deep sector knowledge across key industries driving India's economic growth.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Technology & Software',
                    description: 'From early-stage startups to enterprise software companies, we understand the unique challenges and opportunities in the tech ecosystem.',
                    icon: '💻'
                  },
                  {
                    title: 'Healthcare & Life Sciences',
                    description: 'Comprehensive expertise in pharmaceuticals, biotechnology, medical devices, and healthcare services across the value chain.',
                    icon: '🏥'
                  },
                  {
                    title: 'Financial Services',
                    description: 'Deep understanding of banking, insurance, fintech, and capital markets with regulatory expertise.',
                    icon: '🏦'
                  },
                  {
                    title: 'Real Estate & Infrastructure',
                    description: 'Strategic advisory for real estate development, infrastructure projects, and urban development initiatives.',
                    icon: '🏗️'
                  },
                  {
                    title: 'Manufacturing & Industrial',
                    description: 'Supporting traditional and advanced manufacturing companies through digital transformation and growth.',
                    icon: '🏭'
                  },
                  {
                    title: 'Consumer & Retail',
                    description: 'Expertise in consumer brands, retail chains, e-commerce, and direct-to-consumer businesses.',
                    icon: '🛍️'
                  }
                ].map((industry, index) => (
                  <div key={index} className="bg-background p-6 rounded-xl border border-border">
                    <div className="text-3xl mb-4">{industry.icon}</div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Commitment */}
          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <img 
                    src="/assets/team_professional_indian-ONF9Gn7I.png" 
                    alt="Binary Capital Professional Team" 
                    className="w-full h-auto rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="golden-strip-left"></div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                    Our Commitment to Excellence
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    We are committed to maintaining the highest standards of professional excellence, 
                    regulatory compliance, and ethical business practices. Our team undergoes continuous 
                    professional development to stay at the forefront of industry trends and best practices.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      'SEBI registered and regulated investment banking firm',
                      'ISO 27001 certified for information security management',
                      'Member of leading industry associations and regulatory bodies',
                      'Continuous professional development and certification programs',
                      'Strict adherence to global compliance and risk management standards'
                    ].map((commitment, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{commitment}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link href="/team" className="btn btn-primary">
                      Meet Our Expert Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary to-accent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                  Ready to Partner with Us?
                </h2>
                <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
                  Discover how Binary Capital can help transform your business vision into reality 
                  through strategic financial solutions and expert advisory services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact" className="btn bg-white text-primary hover:bg-gray-50 font-semibold px-8 py-4 text-lg shadow-xl">
                    Start the Conversation
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