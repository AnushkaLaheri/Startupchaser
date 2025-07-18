"use client"

import { useEffect, useState } from "react"
import Header from "./Header"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(prefersDark)
    document.documentElement.classList.toggle("dark", prefersDark)
  }, [])

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev
      document.documentElement.classList.toggle("dark", newTheme)
      return newTheme
    })
  }

  return (
    <>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>{children}</main>
    </>
  )
}
