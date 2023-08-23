"use client"

import Layout from "@/components/layout"
import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <style jsx global>{`
                html {
                    font-family: ${poppins.style.fontFamily};
                }
            `}</style>
            <body className={poppins.className}>
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}
