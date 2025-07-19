"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Moon,
  Sun,
  Rocket,
  Users,
  TrendingUp,
  Network,
  GraduationCap,
  Building2,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Zap,
  Target,
  Award,
  Menu,
  X,
} from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics",
    company: "TechFlow Startup",
    logo: "AI",
    logoColor: "bg-[#ff6600]",
    description: "Build next-generation analytics dashboard using machine learning and modern web technologies.",
  },
  {
    id: 2,
    title: "EcoCommerce Platform",
    company: "GreenTech Solutions",
    logo: "EC",
    logoColor: "bg-green-500",
    description: "Sustainable e-commerce platform connecting eco-friendly brands with conscious consumers worldwide.",
  },
  {
    id: 3,
    title: "FinTech Revolution",
    company: "NextGen Finance",
    logo: "FT",
    logoColor: "bg-purple-500",
    description: "Revolutionary payment processing system with blockchain integration for secure transactions.",
  },
  {
    id: 4,
    title: "VR Education Hub",
    company: "LearnVirtual Inc",
    logo: "VR",
    logoColor: "bg-orange-500",
    description: "Immersive virtual reality platform for interactive learning experiences across various subjects.",
  },
  {
    id: 5,
    title: "HealthTech Monitor",
    company: "MedTech Innovations",
    logo: "HT",
    logoColor: "bg-[#ff6600]",
    description: "Smart health monitoring system with IoT integration for real-time patient care.",
  },
  {
    id: 6,
    title: "Smart Mobility App",
    company: "UrbanFlow Tech",
    logo: "SM",
    logoColor: "bg-[#ff6600]",
    description: "Integrated transportation platform combining ride-sharing, public transit, and micro-mobility.",
  },
]

// Custom hook for intersection observer
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isVisible] as const
}

export default function HomePage() {
  const [isDark, setIsDark] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // THEME COLORS GLOBAL CSS
  // This <style jsx global> block injects your color variables for both light and dark themes
  // and provides example usage for backgrounds, text, buttons, and accents.
  // You can use these variables in inline styles or extend Tailwind config for more integration.
  const themeStyles = (
    <style jsx global>{`
      :root {
        --color-orange: #ff6600;
        --color-peach: #fff7f0;
        --color-white: #fff;
        --color-black: #0d0d0d;
        --color-orange-transparent: rgba(255,165,0,0.2);
        --color-orange-transparent-light: rgba(255,165,0,0.15);
        --color-shadow: rgba(0,0,0,0.1);
        --color-card-shadow: rgba(0,0,0,0.05);
        --color-green: #28a745;
        --color-purple: #6f42c1;
        --color-orange-stats: #ff6600;
      }
      .light-theme {
        /* Main Theme Colors */
        --color-orange: #ff6600;
        --color-peach: #fff7f0;
        --color-white: #fff;
        --color-black: #0d0d0d;
        --background-gradient-start: var(--color-peach);
        --background-gradient-end: var(--color-white);
        --text-color: var(--color-black);
        --heading-color: var(--color-black);
        --button-bg: var(--color-orange);
        --button-text: var(--color-white);
        --button-shadow: var(--color-shadow);
        /* Accent Colors */
        --color-orange-transparent: rgba(255,165,0,0.2);
        --color-orange-transparent-light: rgba(255,165,0,0.15);
        --color-shadow: rgba(0,0,0,0.1);
        --color-card-shadow: rgba(0,0,0,0.05);
        /* Stats Section */
        --color-green: #28a745;
        --color-purple: #6f42c1;
        --color-orange-stats: #ff6600;
      }
      .dark-theme {
        --background-gradient-start: #181818;
        --background-gradient-end: #232323;
        --text-color: var(--color-white);
        --heading-color: var(--color-orange);
        --button-bg: var(--color-orange);
        --button-text: var(--color-black);
        --button-shadow: var(--color-card-shadow);
      }
      body.light-theme {
        background: linear-gradient(135deg, var(--background-gradient-start), var(--background-gradient-end));
        color: var(--text-color);
      }
      body.dark-theme {
        background: linear-gradient(135deg, var(--background-gradient-start), var(--background-gradient-end));
        color: var(--text-color);
      }
      h1, h2, h3, h4, h5, h6 {
        color: var(--heading-color);
      }
      .themed-btn {
        background: var(--button-bg);
        color: var(--button-text);
        box-shadow: 0 2px 8px var(--button-shadow);
        border: none;
        border-radius: 6px;
        padding: 0.75em 1.5em;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
      }
      .themed-btn:hover {
        background: #e65c00;
      }
      .themed-card {
        box-shadow: 0 2px 12px var(--color-card-shadow);
        background: var(--color-white);
        border-radius: 12px;
      }
      .circle-1 {
        background: var(--color-orange-transparent);
      }
      .circle-2 {
        background: var(--color-orange-transparent-light);
      }
      .stats-success {
        color: var(--color-green);
      }
      .stats-rating {
        color: var(--color-purple);
      }
      .stats-enrolled {
        color: var(--color-orange-stats);
      }
    `}</style>
  );

  // Intersection observer refs
  const [heroRef, heroVisible] = useIntersectionObserver(0.3)
  const [projectsRef, projectsVisible] = useIntersectionObserver(0.2)
  const [howItWorksRef, howItWorksVisible] = useIntersectionObserver(0.2)
  const [benefitsRef, benefitsVisible] = useIntersectionObserver(0.2)
  const [ctaRef, ctaVisible] = useIntersectionObserver(0.3)

  useEffect(() => {
    setIsVisible(true)

    // Parallax scroll effect
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {themeStyles}
      <div className={`min-h-screen transition-all duration-700 ${isDark ? "dark-theme" : "light-theme"}`}>
        <div className={`min-h-screen`}>
        {/* Header */}
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
              className="text-2xl font-bold text-[#ff6600] hover:scale-105 transition-transform duration-300"
            >
              StartupChaser
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/findjob"
                className={`hover:text-[#ff6600] transition-all duration-300 hover:scale-105 ${
                isDark ? "text-gray-300 hover:text-[#ff6600]" : "text-[#0d0d0d] hover:text-[#ff6600]"
                }`}
              >
                Find Internships
              </Link>
              <Link
                href="/hire-team"
                className={`hover:text-blue-400 transition-all duration-300 hover:scale-105 ${
                  isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Hire Interns
              </Link>
              <Link
                href="#"
                className={`hover:text-blue-400 transition-all duration-300 hover:scale-105 ${
                  isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About
              </Link>
              <Link
                href="#"
                className={`hover:text-blue-400 transition-all duration-300 hover:scale-105 ${
                  isDark ? "text-gray-300 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="icon"
                className="rounded-full hover:scale-110 transition-all duration-300 hover:rotate-180"
              >
                {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-blue-600" />}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                onClick={toggleMobileMenu}
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full hover:scale-110 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
              <Link
                href="/findjob"
                className={`block hover:text-[#ff6600] transition-colors duration-300 ${
                isDark ? "text-gray-300" : "text-[#0d0d0d]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find Internships
              </Link>
              <Link
                href="/hire-team"
                className={`block hover:text-blue-400 transition-colors duration-300 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hire Interns
              </Link>
              <Link
                href="#"
                className={`block hover:text-blue-400 transition-colors duration-300 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#"
                className={`block hover:text-blue-400 transition-colors duration-300 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-32 ${
            isDark
              ? "bg-gray-300"
              : "bg-gradient-to-br from-[#fff7f0] via-[#fff] to-[#fff]"
          }`}
        >
          {/* Subtle Orange Blink Overlay for Dark Mode */}
          {isDark && (
            <>
            <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: '#222e2eff', // Darker gray base
      }}
    />
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'rgba(255, 110, 0, 0.03)',
                  animation: 'orangeBlink 3s ease-in-out infinite'
                }}
              />
              <style jsx>{`
                @keyframes orangeBlink {
                  0%, 100% { opacity: 0.3; }
                  50% { opacity: 0.8; }
                }
              `}</style>
            </>
          )}
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div
              className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse"
              style={{
                background: 'rgba(255,165,0,0.2)',
                transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`
              }}
            ></div>
            <div
              className="absolute bottom-20 right-10 w-48 h-48 rounded-full blur-xl animate-pulse"
              style={{
                background: 'rgba(255,165,0,0.15)',
                transform: `translate(${-scrollY * 0.1}px, ${-scrollY * 0.05}px)`,
                animationDelay: "1s",
              }}
            ></div>
            <div
              className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"
              style={{
                transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.08}px)`,
                animationDelay: "2s",
              }}
            ></div>
          </div>

          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          <div
            className={`container mx-auto px-4 text-center z-10 transform transition-all duration-1000 ${
              heroVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="animate-float">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span
                  className="text-[#ff6600] font-bold"
                >
                  Join Innovative Startups
                </span>
                <br />
                <span className={`animate-fade-in-delayed ${isDark ? "text-white" : "text-gray-900"}`}>
                  or Build Your Dream Team
                </span>
              </h1>

              <p
                className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto animate-fade-in-delayed-2 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Connecting students with real-world startup projects & helping startups hire smart young talent.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delayed-3 mb-16">
                <Link href="/findjob">
                  <Button
                    size="lg"
                    className="bg-[#ff6600] hover:bg-[#e65c00] text-white px-8 py-4 text-lg rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce-subtle"
                  >
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Find Internships
                  </Button>
                </Link>
                <Link href="/hire-team">
                  <Button
                    size="lg"
                    variant="outline"
                    className={`px-8 py-4 text-lg rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce-subtle ${
                      isDark
                        ? "border-gray-600 text-white hover:bg-gray-800 hover:border-gray-500"
                        : "border-[#ff6600] text-[#ff6600] hover:bg-[#fff7f0] hover:border-[#ff6600]"
                    }`}
                    style={{ animationDelay: "0.2s" }}
                  >
                    <Building2 className="mr-2 h-5 w-5" />
                    Hire Interns
                  </Button>
                </Link>
              </div>

              {/* Founder Photo */}
              <div className="max-w-3xl mx-auto mb-12 animate-fade-in-delayed-4">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className={`w-32 h-32 rounded-full border-4 ${isDark ? "border-white/20" : "border-gray-300"} overflow-hidden shadow-lg`}>
                      <div className={`w-full h-full flex items-center justify-center ${isDark ? "bg-gray-700" : "bg-gray-200"}`}>
                        {/* Placeholder for founder photo - replace with actual image */}
                        <div className={`text-4xl font-bold ${isDark ? "text-white/60" : "text-gray-500"}`}>
                          VY
                        </div>
                      </div>
                    </div>
                    {/* Optional decorative ring */}
                    <div className="absolute -inset-2 rounded-full border-2 border-[#ff6600]/30 animate-pulse"></div>
                  </div>
                  <div className={`text-center ${isDark ? "text-white/80" : "text-gray-600"}`}>
                    <div className="font-semibold">Venkatesh (Yugendhar)</div>
                    <div className="text-sm">Founder & CEO, StartupChaser</div>
                    <div className="text-xs">Former PM at HackerEarth</div>
                  </div>
                </div>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {/* Hackathon Champion */}
                <div className="text-center animate-fade-in-delayed-5 group cursor-pointer">
                  <div className={`relative p-8 h-48 flex flex-col justify-center rounded-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 ${
                    isDark 
                      ? "bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 hover:border-yellow-500/40" 
                      : "bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 hover:border-yellow-400"
                  }`}>
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-3 left-3 w-1 h-1 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: "1s"}}></div>
                    
                    <div className="relative z-10">
                      <div className="mb-3">
                        <Award className="inline-block text-yellow-500 h-10 w-10 animate-bounce" style={{animationDelay: "0.5s"}} />
                      </div>
                      <div className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent`}>
                        42+
                      </div>
                      <div className={`text-xs font-medium tracking-wide ${isDark ? "text-yellow-200" : "text-yellow-700"}`}>
                        Hackathon Champion
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revenue Achievement */}
                <div className="text-center animate-fade-in-delayed-6 group cursor-pointer">
                  <div className={`relative p-8 h-48 flex flex-col justify-center rounded-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 ${
                    isDark 
                      ? "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40" 
                      : "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:border-green-400"
                  }`}>
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-3 left-2 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{animationDelay: "0.5s"}}></div>
                    <div className="absolute bottom-2 right-4 w-1 h-1 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: "1.5s"}}></div>
                    
                    <div className="relative z-10">
                      <div className="mb-3">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg font-bold animate-pulse">
                          $
                        </div>
                      </div>
                      <div className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent`}>
                        1M+
                      </div>
                      <div className={`text-xs font-medium tracking-wide ${isDark ? "text-green-200" : "text-green-700"}`}>
                        in 90 days
                      </div>
                    </div>
                  </div>
                </div>

                {/* Former PM */}
                <div className="text-center animate-fade-in-delayed-7 group cursor-pointer">
                  <div className={`relative p-8 h-48 flex flex-col justify-center rounded-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 ${
                    isDark 
                      ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/40" 
                      : "bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 hover:border-blue-400"
                  }`}>
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-4 right-3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: "1s"}}></div>
                    <div className="absolute bottom-4 left-2 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: "2s"}}></div>
                    
                    <div className="relative z-10">
                      <div className="mb-3">
                        <Building2 className="inline-block text-blue-500 h-10 w-10 animate-bounce" style={{animationDelay: "1s"}} />
                      </div>
                      <div className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight`}>
                        Former PM
                      </div>
                      <div className={`text-xs font-medium tracking-wide ${isDark ? "text-blue-200" : "text-blue-700"}`}>
                        HackerEarth
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Projects Showcase */}
        <section ref={projectsRef} className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                projectsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff6600] to-[#fff7f0] bg-clip-text text-transparent animate-gradient-x">
                Top Startup Projects
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Discover exciting opportunities to grow your career or find the perfect team members
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`group hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl transform cursor-pointer ${
                    isDark
                      ? "bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600"
                      : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                  } ${projectsVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <CardContent className="p-6 relative overflow-hidden">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex items-center mb-4 relative z-10">
                      <div
                        className={`w-12 h-12 ${project.logoColor} rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4 transform group-hover:rotate-12 transition-transform duration-300`}
                      >
                        {project.logo}
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
                          {project.title}
                        </h3>
                        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{project.company}</p>
                      </div>
                    </div>

                    <p className={`mb-6 relative z-10 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                      {project.description}
                    </p>

                    <div className="flex gap-3 relative z-10">
                      <Link href="/find-job" className="flex-1">
                        <Button className="w-full bg-[#ff6600] hover:bg-[#e65c00] text-white transform hover:scale-105 transition-all duration-300">
                          Join Project
                        </Button>
                      </Link>
                      <Link href="/hire-team" className="flex-1">
                        <Button
                          variant="outline"
                          className={`w-full transform hover:scale-105 transition-all duration-300 ${
                            isDark
                              ? "border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
                              : "border-[#ff6600] text-[#ff6600] hover:bg-[#fff7f0] hover:border-[#ff6600]"
                          }`}
                        >
                          Assemble Team
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div
              className={`text-center transform transition-all duration-1000 delay-500 ${
                projectsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <a href="https://app.startupchaser.com/listing" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#ff6600] hover:bg-[#e65c00] text-white px-8 py-4 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  View More Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section ref={howItWorksRef} className={`py-20 ${isDark ? "bg-gray-800" : "bg-white"}`}>
          <div className="container mx-auto px-4">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                howItWorksVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff6600] to-[#fff7f0] bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Simple steps to connect talent with opportunity
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* For Students */}
              <div
                className={`transform transition-all duration-1000 delay-200 ${
                  howItWorksVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
              >
                <div className="flex items-center mb-8">
                  <div className="p-2 rounded-lg mr-4" style={{background: 'rgba(255,165,0,0.2)'}}>
                    <GraduationCap className="h-8 w-8 text-[#ff6600]" />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>For Students</h3>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Create Your Account",
                      desc: "Sign up and build your profile showcasing your skills, interests, and career goals.",
                    },
                    {
                      step: 2,
                      title: "Explore Projects",
                      desc: "Browse through exciting startup projects that match your interests and skill level.",
                    },
                    {
                      step: 3,
                      title: "Apply & Connect",
                      desc: "Apply to projects that excite you and connect with innovative startup teams.",
                    },
                    {
                      step: 4,
                      title: "Build Your Portfolio",
                      desc: "Gain real-world experience and build an impressive portfolio for your career.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.step}
                      className={`flex items-start transform transition-all duration-500 hover:scale-105 ${
                        howItWorksVisible ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
                      }`}
                      style={{ transitionDelay: `${300 + index * 100}ms` }}
                    >
                      <div className="w-10 h-10 bg-[#ff6600] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-lg">
                        {item.step}
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                          {item.title}
                        </h4>
                        <p className={isDark ? "text-gray-300" : "text-gray-600"}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* For Startups */}
              <div
                className={`transform transition-all duration-1000 delay-400 ${
                  howItWorksVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                <div className="flex items-center mb-8">
                  <div className="p-2 rounded-lg mr-4" style={{background: 'rgba(255,165,0,0.15)'}}>
                    <Rocket className="h-8 w-8 text-[#28a745]" />
                  </div>
                  <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>For Startups</h3>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: "Sign Up & Verify",
                      desc: "Create your startup profile and get verified to access our talent pool.",
                    },
                    {
                      step: 2,
                      title: "Post Your Project",
                      desc: "Define your project requirements, skills needed, and what interns will learn.",
                    },
                    {
                      step: 3,
                      title: "Review Applications",
                      desc: "Browse qualified candidates and review their profiles, skills, and portfolios.",
                    },
                    {
                      step: 4,
                      title: "Assemble Your Team",
                      desc: "Select the best candidates and build your dream team of talented interns.",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.step}
                      className={`flex items-start transform transition-all duration-500 hover:scale-105 ${
                        howItWorksVisible ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"
                      }`}
                      style={{ transitionDelay: `${500 + index * 100}ms` }}
                    >
                      <div className="w-10 h-10 bg-[#28a745] rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-lg">
                        {item.step}
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                          {item.title}
                        </h4>
                        <p className={isDark ? "text-gray-300" : "text-gray-600"}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
          <div className="container mx-auto px-4">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                benefitsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff6600] to-[#fff7f0] bg-clip-text text-transparent">
                Why Choose StartupChaser?
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                Unlock opportunities and accelerate growth for everyone involved
              </p>
            </div>

            <Tabs defaultValue="students" className="max-w-4xl mx-auto">
              <TabsList
                className={`grid w-full grid-cols-2 mb-12 ${
                  isDark ? "bg-gray-800 border border-gray-700" : "bg-gray-200 border border-gray-300"
                }`}
              >
                <TabsTrigger
                  value="students"
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    isDark
                      ? "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                      : "data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  }`}
                >
                  <GraduationCap className="h-4 w-4" />
                  For Students
                </TabsTrigger>
                <TabsTrigger
                  value="startups"
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    isDark
                      ? "data-[state=active]:bg-cyan-600 data-[state=active]:text-white"
                      : "data-[state=active]:bg-cyan-600 data-[state=active]:text-white"
                  }`}
                >
                  <Rocket className="h-4 w-4" />
                  For Startups
                </TabsTrigger>
              </TabsList>

              <TabsContent value="students">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Zap className="h-8 w-8 text-[#ff6600]" />,
                      title: "Real-World Skills",
                      desc: "Gain hands-on experience with cutting-edge technologies and industry best practices in real startup environments.",
                    },
                    {
                      icon: <TrendingUp className="h-8 w-8 text-[#28a745]" />,
                      title: "Career Growth",
                      desc: "Accelerate your career with mentorship from experienced entrepreneurs and access to exclusive opportunities.",
                    },
                    {
                      icon: <Network className="h-8 w-8 text-[#6f42c1]" />,
                      title: "Professional Network",
                      desc: "Build valuable connections with industry leaders, fellow students, and potential future employers or co-founders.",
                    },
                  ].map((benefit, index) => (
                    <Card
                      key={index}
                      className={`group hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer ${
                        isDark
                          ? "bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600"
                          : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                      } ${benefitsVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <CardContent className="p-6 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="mb-4 flex justify-center relative z-10">
                          <div
                            className={`p-3 rounded-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${
                              isDark ? "bg-gray-700" : "bg-gray-100"
                            }`}
                          >
                            {benefit.icon}
                          </div>
                        </div>
                        <h3
                          className={`font-bold text-xl mb-3 relative z-10 ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                          {benefit.title}
                        </h3>
                        <p className={`relative z-10 ${isDark ? "text-gray-300" : "text-gray-600"}`}>{benefit.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="startups">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Users className="h-8 w-8 text-[#ff6600]" />,
                      title: "Top Talent Access",
                      desc: "Connect with motivated, skilled students from top universities who are eager to contribute to innovative projects.",
                    },
                    {
                      icon: <Target className="h-8 w-8 text-green-500" />,
                      title: "Cost-Effective Hiring",
                      desc: "Build your team efficiently with talented interns who bring fresh perspectives and cutting-edge skills.",
                    },
                    {
                      icon: <Award className="h-8 w-8 text-purple-500" />,
                      title: "Fast Recruitment",
                      desc: "Streamlined hiring process with pre-screened candidates, reducing time-to-hire and improving team quality.",
                    },
                  ].map((benefit, index) => (
                    <Card
                      key={index}
                      className={`group hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer ${
                        isDark
                          ? "bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600"
                          : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                      } ${benefitsVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"}`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <CardContent className="p-6 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="mb-4 flex justify-center relative z-10">
                          <div
                            className={`p-3 rounded-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${
                              isDark ? "bg-gray-700" : "bg-gray-100"
                            }`}
                          >
                            {benefit.icon}
                          </div>
                        </div>
                        <h3
                          className={`font-bold text-xl mb-3 relative z-10 ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                          {benefit.title}
                        </h3>
                        <p className={`relative z-10 ${isDark ? "text-gray-300" : "text-gray-600"}`}>{benefit.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Final CTA */}
        <section
          ref={ctaRef}
          className={`py-20 relative overflow-hidden`}
          style={
            isDark
              ? { background: "linear-gradient(90deg, #181818 0%, #232323 50%, #0d0d0d 100%)" }
              : { background: "#ff6600" }
          }
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div
            className={`container mx-auto px-4 text-center relative z-10 transform transition-all duration-1000 ${
              ctaVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-pulse-glow">
              Ready to Shape the Future?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto">
              Join thousands of students and startups already building tomorrow's innovations together. Your next
              opportunity is just one click away.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/find-job">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 px-8 py-4 text-lg rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce-subtle"
                >
                  Start Exploring Internships
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/hire-team">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl bg-transparent animate-bounce-subtle"
                  style={{ animationDelay: "0.2s" }}
                >
                  Assemble Your Team
                  <Users className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`py-16 ${isDark ? "bg-gray-900 border-t border-gray-800" : "bg-[#fff7f0] border-t border-[#fff]"}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <Link
                  href="/"
                  className="text-2xl font-bold text-[#ff6600] mb-4 block hover:scale-105 transition-transform duration-300"
                >
                  StartupChaser
                </Link>
                <p className={`mb-6 max-w-md ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  Connecting brilliant students with innovative startups to create the next generation of breakthrough
                  companies.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                      isDark
                        ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-blue-400"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                      isDark
                        ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-cyan-400"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-cyan-600"
                    }`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                      isDark
                        ? "bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-purple-400"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-purple-600"
                    }`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className={`font-bold text-lg mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/find-job"
                      className={`hover:text-blue-400 transition-all duration-300 hover:translate-x-1 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Find Internships
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hire-team"
                      className={`hover:text-blue-400 transition-all duration-300 hover:translate-x-1 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Hire Interns
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`hover:text-blue-400 transition-all duration-300 hover:translate-x-1 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`hover:text-blue-400 transition-all duration-300 hover:translate-x-1 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`font-bold text-lg mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className={`hover:text-blue-400 transition-all duration-300 hover:translate-x-1 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`hover:text-blue-400 transition-all duration-300 hover:translate-x-1 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`hover:text-blue-400 transition-all duration-300 hover:translate-x-1 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className={`hover:text-blue-400 transition-all duration-300 hover:translate-x-1 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      GDPR
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`mt-12 pt-8 border-t text-center ${
                isDark ? "border-gray-800 text-gray-400" : "border-gray-200 text-gray-500"
              }`}
            >
              <p>&copy; 2024 StartupChaser. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </>
  )
}
