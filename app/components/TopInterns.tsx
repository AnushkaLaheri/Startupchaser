"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

const interns = [
  {
    name: "Lakshit Tiwari",
    image: "/path/to/image.jpg",
    message:
      "Thrilled to announce that I've successfully completed my internship in web development with a focus on the MERN stack at NullClass 🚀...",
    linkedin: "https://linkedin.com/in/lakshit",
  },
  {
    name: "Sanya Mehta",
    role: "Product Intern",
    linkedin: "https://www.linkedin.com/in/sanyamehta",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Ishaan Verma",
    role: "Backend Developer Intern",
    linkedin: "https://www.linkedin.com/in/ishaanverma",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Ritika Singh",
    role: "Marketing Intern",
    linkedin: "https://www.linkedin.com/in/ritikasingh",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
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
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Our Star Interns</h2>

        <div className="relative overflow-hidden w-full py-6 marquee-container">
          <motion.div
            className="flex gap-10 w-max marquee-track"
            animate={controls}
          >
            {[...interns, ...interns].map((intern, index) => (
              <a
                key={index}
                href={intern.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-4 shadow rounded-lg min-w-[180px] h-24 flex items-center justify-center hover:scale-105 transform transition"
              >
                <img
                  src={intern.image}
                  alt={intern.name}
                  className="h-16 w-16 object-cover rounded-full"
                />
              </a>
            ))}
            {[...interns, ...interns].map((intern, index) => (
              <a
                key={index}
                href={intern.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-gray-800 p-4 shadow rounded-lg min-w-[180px] h-24 flex items-center justify-center hover:scale-105 transform transition"
              >
                <img
                  src={intern.image}
                  alt={intern.name}
                  className="h-16 w-16 object-cover rounded-full"
                />
              </a>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default TopInterns
