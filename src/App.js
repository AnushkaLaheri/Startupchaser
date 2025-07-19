"use client"

import React, { useState, useEffect, useRef } from "react"
import "./App.css"

// Icons (using simple SVG icons instead of lucide-react)
const Icons = {
  Sun: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  ),
  Moon: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  Menu: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  X: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  GraduationCap: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  Building2: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  Rocket: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  Users: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Zap: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
    </svg>
  ),
  TrendingUp: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
      <polyline points="16,7 22,7 22,13" />
    </svg>
  ),
  Network: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  ),
  Target: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Award: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
    </svg>
  ),
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Twitter: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    </svg>
  ),
  Github: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
}

// Custom hook for intersection observer
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

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

  return [ref, isVisible]
}

// Button Component
const Button = ({ children, className = "", variant = "primary", size = "md", onClick, ...props }) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500",
    outline: "border-2 border-current bg-transparent hover:bg-current hover:bg-opacity-10 focus:ring-blue-500",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

// Card Component
const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

// Tabs Components
const Tabs = ({ children, defaultValue, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <div className={`tabs ${className}`} data-active-tab={activeTab}>
      {React.Children.map(children, (child) => React.cloneElement(child, { activeTab, setActiveTab }))}
    </div>
  )
}

const TabsList = ({ children, className = "", activeTab, setActiveTab }) => {
  return (
    <div className={`flex bg-gray-200 dark:bg-gray-800 rounded-lg p-1 ${className}`}>
      {React.Children.map(children, (child) => React.cloneElement(child, { activeTab, setActiveTab }))}
    </div>
  )
}

const TabsTrigger = ({ children, value, className = "", activeTab, setActiveTab }) => {
  const isActive = activeTab === value
  return (
    <button
      className={`flex-1 px-4 py-2 rounded-md transition-all duration-300 ${
        isActive
          ? "bg-blue-600 text-white shadow-sm"
          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
      } ${className}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}

const TabsContent = ({ children, value, activeTab }) => {
  if (activeTab !== value) return null
  return <div className="mt-6">{children}</div>
}

// Project data
const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics",
    company: "TechFlow Startup",
    logo: "AI",
    logoColor: "bg-blue-500",
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
    logoColor: "bg-blue-600",
    description: "Smart health monitoring system with IoT integration for real-time patient care.",
  },
  {
    id: 6,
    title: "Smart Mobility App",
    company: "UrbanFlow Tech",
    logo: "SM",
    logoColor: "bg-cyan-500",
    description: "Integrated transportation platform combining ride-sharing, public transit, and micro-mobility.",
  },
]

function App() {
  const [isDark, setIsDark] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  // Intersection observer refs
  const [heroRef, heroVisible] = useIntersectionObserver(0.3)
  const [projectsRef, projectsVisible] = useIntersectionObserver(0.2)
  const [howItWorksRef, howItWorksVisible] = useIntersectionObserver(0.2)
  const [benefitsRef, benefitsVisible] = useIntersectionObserver(0.2)
  const [ctaRef, ctaVisible] = useIntersectionObserver(0.3)

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Parallax scroll effect
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (href) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer")
    } else {
      // For internal navigation, you would use React Router
      console.log(`Navigate to: ${href}`)
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className={`min-h-screen transition-all duration-700 ${isDark ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Header */}
        <header
          className="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-500 bg-white/90 dark:bg-gray-900/90 border-gray-200 dark:border-gray-800 shadow-lg"
          style={{
            transform: `translateY(${Math.min(scrollY * 0.5, 20)}px)`,
          }}
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <button
              onClick={() => handleNavClick("/")}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              StartupChaser
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavClick("/find-job")}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                Find Internships
              </button>
              <button
                onClick={() => handleNavClick("/hire-team")}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                Hire Interns
              </button>
              <button
                onClick={() => handleNavClick("#")}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("#")}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
              >
                Contact
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                onClick={toggleTheme}
                variant="ghost"
                size="sm"
                className="rounded-full hover:scale-110 transition-all duration-300 hover:rotate-180"
              >
                {isDark ? <Icons.Sun /> : <Icons.Moon />}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                onClick={toggleMobileMenu}
                variant="ghost"
                size="sm"
                className="md:hidden rounded-full hover:scale-110 transition-all duration-300"
              >
                {isMobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-500 overflow-hidden ${
              isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            } bg-white/95 dark:bg-gray-800/95 backdrop-blur-md`}
          >
            <nav className="px-4 py-4 space-y-4">
              <button
                onClick={() => handleNavClick("/find-job")}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Find Internships
              </button>
              <button
                onClick={() => handleNavClick("/hire-team")}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Hire Interns
              </button>
              <button
                onClick={() => handleNavClick("#")}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("#")}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-blue-900/30 dark:to-cyan-900/30"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div
              className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"
              style={{
                transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
              }}
            ></div>
            <div
              className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-500/20 rounded-full blur-xl animate-pulse"
              style={{
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
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                  Join Innovative Startups
                </span>
                <br />
                <span className="animate-fade-in-delayed text-gray-900 dark:text-white">or Build Your Dream Team</span>
              </h1>

              <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto animate-fade-in-delayed-2 text-gray-600 dark:text-gray-300">
                Connecting students with real-world startup projects & helping startups hire smart young talent.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delayed-3">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce-subtle"
                  onClick={() => handleNavClick("/find-job")}
                >
                  <Icons.GraduationCap />
                  <span className="ml-2">Find Internships</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce-subtle bg-transparent"
                  style={{ animationDelay: "0.2s" }}
                  onClick={() => handleNavClick("/hire-team")}
                >
                  <Icons.Building2 />
                  <span className="ml-2">Hire Interns</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Top Projects Showcase */}
        <section ref={projectsRef} className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                projectsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Top Startup Projects
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                Discover exciting opportunities to grow your career or find the perfect team members
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`group hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl transform cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 hover:border-gray-300 dark:hover:border-gray-600 ${
                    projectsVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div className="p-6 relative overflow-hidden">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex items-center mb-4 relative z-10">
                      <div
                        className={`w-12 h-12 ${project.logoColor} rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4 transform group-hover:rotate-12 transition-transform duration-300`}
                      >
                        {project.logo}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{project.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{project.company}</p>
                      </div>
                    </div>

                    <p className="mb-6 relative z-10 text-gray-600 dark:text-gray-300">{project.description}</p>

                    <div className="flex gap-3 relative z-10">
                      <Button
                        className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transform hover:scale-105 transition-all duration-300"
                        onClick={() => handleNavClick("/find-job")}
                      >
                        Join Project
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300 bg-transparent"
                        onClick={() => handleNavClick("/hire-team")}
                      >
                        Assemble Team
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div
              className={`text-center transform transition-all duration-1000 delay-500 ${
                projectsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                onClick={() => handleNavClick("https://app.startupchaser.com/listing")}
              >
                View More Projects
                <Icons.ArrowRight />
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section ref={howItWorksRef} className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                howItWorksVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                How It Works
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
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
                  <div className="p-2 bg-blue-500/20 rounded-lg mr-4">
                    <Icons.GraduationCap />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">For Students</h3>
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
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-lg">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
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
                  <div className="p-2 bg-cyan-500/20 rounded-lg mr-4">
                    <Icons.Rocket />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">For Startups</h3>
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
                      <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 shadow-lg">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                benefitsVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Why Choose StartupChaser?
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                Unlock opportunities and accelerate growth for everyone involved
              </p>
            </div>

            <Tabs defaultValue="students" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-12 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                <TabsTrigger value="students" className="flex items-center gap-2">
                  <Icons.GraduationCap />
                  For Students
                </TabsTrigger>
                <TabsTrigger value="startups" className="flex items-center gap-2">
                  <Icons.Rocket />
                  For Startups
                </TabsTrigger>
              </TabsList>

              <TabsContent value="students">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Icons.Zap />,
                      title: "Real-World Skills",
                      desc: "Gain hands-on experience with cutting-edge technologies and industry best practices in real startup environments.",
                    },
                    {
                      icon: <Icons.TrendingUp />,
                      title: "Career Growth",
                      desc: "Accelerate your career with mentorship from experienced entrepreneurs and access to exclusive opportunities.",
                    },
                    {
                      icon: <Icons.Network />,
                      title: "Professional Network",
                      desc: "Build valuable connections with industry leaders, fellow students, and potential future employers or co-founders.",
                    },
                  ].map((benefit, index) => (
                    <Card
                      key={index}
                      className={`group hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 hover:border-gray-300 dark:hover:border-gray-600 ${
                        benefitsVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="p-6 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="mb-4 flex justify-center relative z-10">
                          <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-blue-500">
                            {benefit.icon}
                          </div>
                        </div>
                        <h3 className="font-bold text-xl mb-3 relative z-10 text-gray-900 dark:text-white">
                          {benefit.title}
                        </h3>
                        <p className="relative z-10 text-gray-600 dark:text-gray-300">{benefit.desc}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="startups">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Icons.Users />,
                      title: "Top Talent Access",
                      desc: "Connect with motivated, skilled students from top universities who are eager to contribute to innovative projects.",
                    },
                    {
                      icon: <Icons.Target />,
                      title: "Cost-Effective Hiring",
                      desc: "Build your team efficiently with talented interns who bring fresh perspectives and cutting-edge skills.",
                    },
                    {
                      icon: <Icons.Award />,
                      title: "Fast Recruitment",
                      desc: "Streamlined hiring process with pre-screened candidates, reducing time-to-hire and improving team quality.",
                    },
                  ].map((benefit, index) => (
                    <Card
                      key={index}
                      className={`group hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 hover:border-gray-300 dark:hover:border-gray-600 ${
                        benefitsVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-10"
                      }`}
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="p-6 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="mb-4 flex justify-center relative z-10">
                          <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-blue-500">
                            {benefit.icon}
                          </div>
                        </div>
                        <h3 className="font-bold text-xl mb-3 relative z-10 text-gray-900 dark:text-white">
                          {benefit.title}
                        </h3>
                        <p className="relative z-10 text-gray-600 dark:text-gray-300">{benefit.desc}</p>
                      </div>
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
          className="py-20 relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-900 dark:via-purple-900 dark:to-cyan-900"
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
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce-subtle"
                onClick={() => handleNavClick("/find-job")}
              >
                Start Exploring Internships
                <Icons.ArrowRight />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce-subtle"
                style={{ animationDelay: "0.2s" }}
                onClick={() => handleNavClick("/hire-team")}
              >
                Assemble Your Team
                <Icons.Users />
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <button
                  onClick={() => handleNavClick("/")}
                  className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 block hover:scale-105 transition-transform duration-300"
                >
                  StartupChaser
                </button>
                <p className="mb-6 max-w-md text-gray-600 dark:text-gray-300">
                  Connecting brilliant students with innovative startups to create the next generation of breakthrough
                  companies.
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleNavClick("#")}
                    className="p-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Icons.Linkedin />
                  </button>
                  <button
                    onClick={() => handleNavClick("#")}
                    className="p-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Icons.Twitter />
                  </button>
                  <button
                    onClick={() => handleNavClick("#")}
                    className="p-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-400 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <Icons.Github />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleNavClick("/find-job")}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                    >
                      Find Internships
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("/hire-team")}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                    >
                      Hire Interns
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("#")}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("#")}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleNavClick("#")}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("#")}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                    >
                      Terms of Service
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("#")}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                    >
                      Cookie Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavClick("#")}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1"
                    >
                      GDPR
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400">
              <p>&copy; 2024 StartupChaser. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
