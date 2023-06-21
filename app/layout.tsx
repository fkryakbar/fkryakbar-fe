import './globals.css'
export const metadata = {
  title: 'Fkryakbar',
  description: `Hi it's me! fkryakbar`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className="dark:bg-slate-950">{children}</body>
    </html>
  )
}
