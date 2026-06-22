import type { Metadata } from 'next'
import Script from 'next/script'
import '../styles/globals.css'

export const metadata: Metadata = {
    title: 'Birgit Bauer Wöhlers — Private Advisory',
    description: 'Strategic advisor in longevity science, cellular optimization, and integrative health. Private practice serving individuals, luxury hospitality, and institutional clients.',
    robots: 'index, follow',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
          <html lang="en">
                <head>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                        <link
                                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400&display=swap"
                                    rel="stylesheet"
                                  />
                </head>
                <body>
                  {children}
                        <Script
                                    src="https://www.googletagmanager.com/gtag/js?id=G-85STE2QHVN"
                                    strategy="afterInteractive"
                                  />
                        <Script id="google-analytics" strategy="afterInteractive">
                          {`
                                      window.dataLayer = window.dataLayer || [];
                                                  function gtag(){dataLayer.push(arguments);}
                                                              gtag('js', new Date());
                                                                          gtag('config', 'G-85STE2QHVN');
                                                                                    `}
                        </Script>
                </body>
          </html>
        )
}
