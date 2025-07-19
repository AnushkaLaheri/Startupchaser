"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export default function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDark = resolvedTheme === "dark"

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-500 ${
        isDark
          ? "bg-gray-900/90 border-gray-800 shadow-lg shadow-gray-900/20"
          : "bg-orange-300 border-gray-200 shadow-lg shadow-gray-900/10"
      }`}
      style={{
        transform: `translateY(${Math.min(scrollY * 0.5, 20)}px)`,
      }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-white to-gray-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          StartupChaser
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {["findjob", "hire-team"].map((path, i) => (
            <Link
              key={i}
              href={`/${path}`}
              className={`hover:text-orange-600 transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "text-gray-300 hover:text-orange-600"
                  : "text-gray-700 hover:text-orange-700"
              }`}
            >
              {path === "findjob" ? "Find Internships" : "Hire Interns"}
            </Link>
          ))}
          {["About", "Contact"].map((label, i) => (
            <Link
              key={i}
              href="#"
              className={`hover:text-orange-600 transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "text-gray-300 hover:text-orange-600"
                  : "text-gray-700 hover:text-orange-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {mounted && (
            <Button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              variant="ghost"
              size="icon"
              className="rounded-full hover:scale-110 transition-all duration-300 hover:rotate-180"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-orange-600" />
              ) : (
                <Moon className="h-5 w-5 text-orange-600" />
              )}
            </Button>
          )}

          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:scale-110 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } ${isDark ? "bg-gray-800/95" : "bg-white/95"} backdrop-blur-md`}
      >
        <nav className="px-4 py-4 space-y-4">
          {[{ href: "/findjob", label: "Find Internships" }, { href: "/hire-team", label: "Hire Interns" }, { href: "#", label: "About" }, { href: "#", label: "Contact" }].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`block hover:text-orange-600 transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
