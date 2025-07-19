"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Building2 } from "lucide-react"
import Header from "../components/Header"
import HeroSection from "../components/FindJobHero"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons"
import PricingSection from "../components/PricingSection"
import ConnectMentorSection from "../components/mentor"
import ProjectTimeline from "../components/Timeline"
import TopInterns from "../components/TopInterns"


interface Project {
  id: string
  title: string
  company: string
  duration: string
  type: string
  stipend: string
  description: string
  skills: string[]
}

export default function FindJobPage() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    setProjects([
      {
        id: "p1",
        title: "Product Management Intern",
        company: "TechNova Inc.",
        duration: "6 weeks",
        type: "Paid",
        stipend: "₹4999",
        description: "Work on user research, roadmap planning, and product strategy for a B2B SaaS tool.",
        skills: ["Product Management", "Agile", "Figma"],
      },
      {
        id: "p2",
        title: "Frontend Developer",
        company: "InnovateX",
        duration: "2 months",
        type: "Paid",
        stipend: "₹4999",
        description: "Build responsive web UIs using React, TypeScript, TailwindCSS, and API integrations. ",
        skills: ["React", "TypeScript", "REST APIs"],
      },
      {
        id: "p3",
        title: "Frontend Developer",
        company: "InnovateX",
        duration: "2 months",
        type: "Paid",
        stipend: "₹4999",
        description: "Build responsive web UIs using React, TypeScript, TailwindCSS, and API integrations.",
        skills: ["React", "TypeScript", "REST APIs"],
      },
      {
        id: "p4",
        title: "Frontend Developer",
        company: "InnovateX",
        duration: "2 months",
        type: "Paid",
        stipend: "₹4999",
        description: "Build responsive web UIs using React, TypeScript, TailwindCSS, and API integrations. skfbkwjfbwjb",
        skills: ["React", "TypeScript", "REST APIs"],
      },
    ])
  }, [])

  return (
    <main>
      <Header/>
      <HeroSection/>
      <div className="min-h-screen bg-grid-pattern bg-background text-foreground py-40 px-4 md:px-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up">
          <FontAwesomeIcon icon={faHexagonNodes} /> Discover Paid Industry Projects
        </h1>
        <p className="text-lg text-muted-foreground mt-4 animate-fade-in-delayed">
          Work on real-world problems from top startups and product teams. Get paid, certified, and add credibility to your resume.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className={`bg-card text-card-foreground glass-effect animate-fade-in-delayed-${index+1} hover-lift max-h-400`}
            
          >
            <CardContent className="p-6 space-y-5">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Building2 size={16} /> {project.company}
                  </div>
                </div>
                <Badge className="bg-green-600 text-white">{project.type}</Badge>
              </div>

              <p className="text-sm leading-relaxed">{project.description}</p>

              <div className="flex gap-2 flex-wrap">
                {project.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex justify-between text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  {project.duration}
                </span>
                <span className="font-semibold text-foreground">{project.stipend}</span>
              </div>
                {/* <div className="relative"> */}
              <Button className="w-full font-medium bg-orange-600 hover:bg-orange-700">Apply Now</Button>

                {/* </div> */}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    <PricingSection/>
    <ConnectMentorSection/>
    <ProjectTimeline/>
    <TopInterns/>
    </main>
    
  )
}
