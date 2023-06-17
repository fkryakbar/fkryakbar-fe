import '../globals.css'

export const metadata = {
    title: 'Blog',
    description: `Sometimes i write some articles`,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
