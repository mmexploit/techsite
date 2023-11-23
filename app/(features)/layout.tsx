import Footer from '@/shared/components/footer/footer'
import { Header } from '@/shared/components/header/header'
import React, { ReactNode } from 'react'

export default function Home({ children }: {children: ReactNode}) {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}
