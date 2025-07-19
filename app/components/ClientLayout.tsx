"use client"

import Header from "./Header"
import { useTheme } from "next-themes"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <>
      <Header isDark={theme === "dark"} toggleTheme={toggleTheme} />
      <main>{children}</main>
    </>
  )
}
