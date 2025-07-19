"use client"

import Image from "next/image"
import heroRecruit from "../../public/hire_team.png" // Replace with your image
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HireTeamHeroSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:bg-background bg-grid-pattern">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 dark:glass-effect">
        
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Assemble the Dream Team 
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Explore outstanding student portfolios, examine project excellence, and find your next team member with confidence.
          </p>

           {/* Search Input */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl mx-auto md:mx-0">
            <Input
              type="text"
              placeholder="Search by skill, name, or domain..."
              className="flex-1 h-12 rounded-xl px-4 text-base"
            />
            <Button className="h-12 px-6 bg-orange-600 text-base rounded-xl">
              Search
            </Button>
          </div>

          <Button className="px-6 py-3 bg-orange-600 text-lg rounded-xl shadow-md">
            Browse Top Portfolios
          </Button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <Image
            src={heroRecruit}
            alt="Hiring students hero"
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
            priority
          />
        </div>

      </div>
      <div className="mt-20 text-center w-full">
          <h2 className="text-4xl md:text-4xl font-semibold mb-8">
            14,000+ customers large and small rely on us for trust &
            transformation
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground text-xl">
            <span>Google</span>
            <span>Microsoft</span>
            <span>Amazon</span>
            <span>TCS</span>
            <span>Infosys</span>
            <span>Wipro</span>
            <span>IBM</span>
          </div>
        </div>
    </section>
  )
}
