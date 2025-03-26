import './globals.css'

export const metadata = {
  title: 'My Figma Implementation',
  description: 'Created from Figma design',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}