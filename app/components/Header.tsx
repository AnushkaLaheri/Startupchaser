"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"

interface HeaderProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-500 ${
        isDark
          ? "bg-gray-900/90 border-gray-800 shadow-lg shadow-gray-900/20"
          : "bg-white/90 border-gray-200 shadow-lg shadow-gray-900/10"
      }`}
      style={{
        transform: `translateY(${Math.min(scrollY * 0.5, 20)}px)`,
      }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
        >
          StartupChaser
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["findjob", "hire-team"].map((path, i) => (
            <Link
              key={i}
              href={`/${path}`}
              className={`hover:text-blue-400 transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {path === "findjob" ? "Find Internships" : "Hire Interns"}
            </Link>
          ))}
          {["About", "Contact"].map((label, i) => (
            <Link
              key={i}
              href="#"
              className={`hover:text-blue-400 transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="rounded-full hover:scale-110 transition-all duration-300 hover:rotate-180"
          >
            {isDark ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-blue-600" />
            )}
          </Button>

          {/* Mobile Menu Button */}
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
          {[
            { href: "/findjob", label: "Find Internships" },
            { href: "/hire-team", label: "Hire Interns" },
            { href: "#", label: "About" },
            { href: "#", label: "Contact" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`block hover:text-blue-400 transition-colors duration-300 ${
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
