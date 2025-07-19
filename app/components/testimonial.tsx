"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import pfp1 from "../../public/pfp1.avif"
import pfp2 from "../../public/pfp2.avif"
import pfp3 from "../../public/pfp3.webp"
import Image from "next/image"




const stories = [
  {
    name: "Twisam",
    role: "Full Stack Developer",
    image: pfp1,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus ut blanditiis dolor facere deserunt harum cumque qui, dolorem voluptatibus.",
  },
  {
    name: "Onkar Lapate",
    role: "Product Manager",
    image: pfp2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus ut blanditiis dolor facere deserunt harum cumque qui, dolorem voluptatibus.",
  },
  {
    name: "Durgesh Chaubey",
    role: "SDE - 1",
    image: pfp3,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus ut blanditiis dolor facere deserunt harum cumque qui, dolorem voluptatibus.",
  },
]

export default function SuccessStories() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={containerRef} className="relative bg-background text-white py-20">
      {/* Animated vertical line centered */}
      {/* <div className="absolute left-20 inset-0 flex pointer-events-none">
        <motion.div
          style={{ height: lineHeight }}
          className="w-[4px] bg-gradient-to-b from-orange-500 via-white/30 to-white/10 rounded-full"
        />
      </div> */}

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-white text-black p-2 rounded-lg text-xl">❝</div>
          <h2 className="text-3xl font-semibold dark:text-white text-orange-600">Real Journeys. Real People.</h2>
        </div>

        {/* Tags */}
       
        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-tr from-orange-300 to-orange-400 p-6 rounded-xl relative pt-16"
            >
              <Image
                src={story.image}
                alt={story.name}
                className="w-16 h-16 rounded-full border-4 border-black absolute top-[-30px] left-1/2 transform -translate-x-1/2"
              />
              <h3 className="text-lg font-semibold text-center">{story.name}</h3>
              <p className="text-sm text-center text-gray-400 mb-4">{story.role}</p>
              <p className="text-sm text-center  text-gray-700">{story.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Read more */}
        <div className="text-right mt-8">
          <a
            href="#"
            className="text-orange-400 underline hover:text-orange-300 font-medium"
          >
            Read all success stories →
          </a>
        </div>
      </div>
    </section>
  )
}
