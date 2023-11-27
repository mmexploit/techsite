import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MantineProvider } from '@mantine/core'
import { theme as baseTheme } from "@/config/theme"

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kachamale Solution',
  description: 'Kachamale solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MantineProvider theme={baseTheme}>{children}</MantineProvider></body>
    </html>
  )
}
