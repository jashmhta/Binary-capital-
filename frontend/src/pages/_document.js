import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Binary Capital Advisors LLP" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        
        {/* Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FinancialService',
              name: 'Binary Capital Advisors LLP',
              description: 'Investment Banking, Advisory Services, and Venture Capital solutions across industries. Structured finance, project finance, corporate bonds, M&A, and capital markets expertise.',
              url: 'https://binarycapital.com',
              logo: 'https://binarycapital.com/logo.png',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Mumbai Financial District',
                addressLocality: 'Mumbai',
                addressCountry: 'India'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-7738056127',
                contactType: 'customer service',
                email: 'contact@binarycapital.com'
              },
              sameAs: [
                'https://linkedin.com/company/binarycapital',
                'https://twitter.com/binarycapital'
              ],
              areaServed: 'IN',
              serviceType: [
                'Investment Banking',
                'Corporate Finance',
                'Capital Markets',
                'Structured Finance',
                'Venture Capital',
                'Wealth Management'
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}