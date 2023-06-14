import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT">
      <body className={inter.className}>
        <div className="grid grid-cols-[100px_1fr]">
          <Sidebar />
        <main className='bg-zinc-100 h-screen'>
          <Header />
          {children}
        </main>
        </div>
      </body>
    </html>
  )
}
