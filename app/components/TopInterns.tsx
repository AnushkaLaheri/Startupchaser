"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { FaLinkedin } from "react-icons/fa"
import pfp1_f from "../../public/pfp4F.avif"
import pfp2_f from "../../public/pfp5f.jpeg"
import pfp3_f from "../../public/pfp6f.png"
import pfp4 from "../../public/pfp8.jpg"
import pfp5 from "../../public/pfp3.webp"


const interns = [
  {
    name: "Lakshita Tiwari",
    role: "Web Developer Intern",
    image: pfp1_f,
    linkedin: "https://linkedin.com/in/lakshit",
  },
  {
    name: "Sanya Mehta",
    role: "Product Intern",
    linkedin: "https://www.linkedin.com/in/sanyamehta",
    image: pfp2_f
  },
  {
    name: "Ishaan Verma",
    role: "Backend Developer Intern",
    linkedin: "https://www.linkedin.com/in/ishaanverma",
    image: pfp4
  },
  {
    name: "Ritika Singh",
    role: "Marketing Intern",
    linkedin: "https://www.linkedin.com/in/ritikasingh",
    image: pfp3_f
  },
  {
    name: "Rohan Verma",
    role: "Backend Developer Intern",
    linkedin: "https://www.linkedin.com/in/ishaanverma",
    image: pfp5
  }
]

const TopInterns = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    })
  }, [controls])

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 text-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-8">Meet Our Star Interns</h2>

        <div className="relative overflow-hidden w-full py-6 marquee-container">
          <motion.div
            className="flex gap-8 w-max marquee-track"
            animate={controls}
          >
            {[...interns, ...interns].map((intern, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 min-w-[220px] max-w-[220px] flex-shrink-0 flex flex-col items-center text-center hover:shadow-lg transition duration-300"
              >
                <Image
                  src={intern.image}
                  alt={intern.name}
                  className="w-20 h-20 rounded-full object-cover mb-3"
                />
                <h3 className="text-base font-semibold">{intern.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {intern.role || "Intern"}
                </p>
                <a
                  href={intern.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition"
                >
                  <FaLinkedin className="text-sm" />
                  LinkedIn
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TopInterns
