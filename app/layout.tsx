import './globals.css'
import type { Metadata } from 'next'
import {Nunito} from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'
import RegisterModal from './components/modals/RegisterModal'
//import ToasterProvider from './providers/ToasterProvider'
import AboutModal from './components/modals/AboutModal'
//import { useHistory } from 'react-router-dom';
import TeamModal from './components/modals/TeamModal'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ThreadExchange',
  description: 'Thread Exchange Web App Survey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <body className={font.className}>
        
        <ClientOnly>
          <RegisterModal />
          <AboutModal />
          <TeamModal />
          <Navbar />
        </ClientOnly>

        {children}</body>
    </html>
  )
}
