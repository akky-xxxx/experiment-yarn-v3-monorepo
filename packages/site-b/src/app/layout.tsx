import "./globals.css"
import { Inter } from "next/font/google"

import type { Metadata } from "next"
import type {FC, PropsWithChildren} from "react"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",

  description: "Generated by create next app",
}

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
