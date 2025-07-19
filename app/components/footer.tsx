"use client";

import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
 const { theme } = useTheme()
   const [isDark, setIsDark] = useState(false)
 
   useEffect(() => {
     setIsDark(theme === "dark")
   }, [theme])

  return (
    <footer
      className={`py-16 ${
        isDark ? "bg-gray-900 border-t border-gray-800" : "bg-[#fff7f0] border-t border-[#fff]"
      }`}
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
            <p
              className={`mb-6 max-w-md ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Connecting brilliant students with innovative startups to create
              the next generation of breakthrough companies.
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
            <h3
              className={`font-bold text-lg mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Quick Links
            </h3>
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
            <h3
              className={`font-bold text-lg mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Legal
            </h3>
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
  );
}
