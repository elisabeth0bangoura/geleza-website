import './globals.css'
import { Inter } from 'next/font/google'
import LayoutWrapper from '../components/main/LayoutWrapper'
import { MainHeader } from '../components/main/MainHeader'
import Footer from '../components/main/Footer'
import footerData from '../data/footer'
import { CallToAction } from '../components/public/CallToAction'

export const metadata = {
  title: 'Geleza - Home',
  description:
    'Revolutionizing High School Education with AI Technology: Experience it Now!',
}

const font = Inter({
  subsets: ['latin'],
  weight: '400',
})
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <LayoutWrapper>
          <MainHeader />
          <main className="pt-16 h-full min-h-screen">{children}</main>
          <CallToAction />
          <Footer data={footerData} />
        </LayoutWrapper>
      </body>
    </html>
  )
}
