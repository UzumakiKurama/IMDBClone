"use strict";
import Header from '@/components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB',
  description: 'This is imdb clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header/>
          {/* <SearchBox/> */}
          {children}
        </Providers>
        
        </body>
    </html>
  )
}
