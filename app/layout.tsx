import { Inter, JetBrains_Mono } from 'next/font/google'
import { LanguageProvider } from '@/contexts/language-context'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Vitor Xisto | Senior DevOps Engineer',
  description: 'Senior DevOps Engineer with 6+ years of IT infrastructure experience, specializing in cloud services, DevOps culture, and infrastructure optimization.',
  openGraph: {
    title: 'Vitor Xisto | Senior DevOps Engineer',
    description: 'Senior DevOps Engineer with 6+ years of IT infrastructure experience.',
    url: 'https://vxisto.github.io',
    siteName: 'Vitor Xisto Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}



import './globals.css'