import { Inter } from 'next/font/google'
import './globals.css'

import Header from './components/Header'
import Footer from './components/Footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>E-commerce Website</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
