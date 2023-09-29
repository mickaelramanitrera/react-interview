import './globals.css'
import { ReduxProvider } from "@/redux/provider";
import { ThemeProvider } from "@/components/ui/theme-provider"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notflix',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ReduxProvider>
            {children}
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
