"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
// import HighlightBadge from "./HighlightBadge"
import Image from "next/image"

const topStudents = {
  "product-management": {
    name: "Ishaan Verma",
    image: "/students/ishaan.jpg",
    skills: ["Strategy", "Communication", "Agile"],
    resume: "/resumes/ishaan-resume.pdf",
  },
  "fullstack-development": {
    name: "Sneha Kapoor",
    image: "/students/sneha.jpg",
    skills: ["React", "Node.js", "MongoDB"],
    resume: "/resumes/sneha-resume.pdf",
  },
  "ui-ux-design": {
    name: "Ritika Mehra",
    image: "/students/ritika.jpg",
    skills: ["Figma", "Adobe XD", "Design Systems"],
    resume: "/resumes/ritika-resume.pdf",
  },
}

export default function TopCategoryStudents() {
  const [category, setCategory] = useState("product-management")

  const student = topStudents[category as keyof typeof topStudents]

  return (
    <section className="my-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Top Talent by Category
      </h2>
      <Tabs defaultValue={category} onValueChange={setCategory} className="w-full">
        <TabsList className="flex justify-center mb-6 flex-wrap gap-2">
          <TabsTrigger value="product-management">Product Management</TabsTrigger>
          <TabsTrigger value="fullstack-development">Fullstack Development</TabsTrigger>
          <TabsTrigger value="ui-ux-design">UI/UX Design</TabsTrigger>
        </TabsList>

        {Object.entries(topStudents).map(([key, student]) => (
          <TabsContent key={key} value={key}>
            <Card className="flex flex-col sm:flex-row items-center gap-6 p-6 shadow-lg dark:bg-gray-800">
              <Image
                src={student.image}
                alt={student.name}
                width={100}
                height={100}
                className="rounded-full object-cover w-28 h-28"
              />
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-1">{student.name}</h3>
                {/* <HighlightBadge text="Top Performer" className="mb-2" /> */}
                
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Skills: {student.skills.join(", ")}
                </p>
                <a href={student.resume} download>
                  <Button variant="outline">Download Resume</Button>
                </a>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
