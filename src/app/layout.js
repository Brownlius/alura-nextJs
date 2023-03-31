import './globals.css'

export const metadata = {
  title: 'Alura Pages',
  description: 'Curso de Next.Js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
