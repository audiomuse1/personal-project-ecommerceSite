import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Kim Hartford Art Store</title>
        <meta name="description" content="Beautiful artwork by Kim Hartford" />
      </head>
      <body className="min-h-screen flex flex-col">
        <header className="header-container py-4 px-6">
          <nav className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Kim Hartford Art Store</h1>
            {/* Your existing navigation components */}
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="footer-container py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center">© 2025 Kim Hartford Art Store. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
