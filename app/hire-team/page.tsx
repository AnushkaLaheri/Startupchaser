"use client"

import { useState } from "react"
import { StudentCard } from "../components/StudentCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "../components/Header"
import HireTeamHeroSection from "../components/HireHero"
import ResumeModal from "../components/ResumeModal"
import Footer from "../components/footer"
import TopCategoryStudents from "../components/TopCategoryStudent"

const dummyStudents = [
  {
    id: 1,
    name: "Ananya Sharma",
    image: "/students/ananya.jpg",
    projects: 5,
    excellent: true,
    resume: "/resumes/ananya-resume.pdf",
    tags: ["Web", "React", "AI"],
  },
  {
    id: 2,
    name: "Raj Malhotra",
    image: "/students/raj.jpg",
    projects: 3,
    excellent: false,
    resume: "/resumes/raj-resume.pdf",
    tags: ["Backend", "Node.js"],
  },
  // Add more...
]

export default function HireTeamPage() {
  const [search, setSearch] = useState("")
  const [resumeUrl, setResumeUrl] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenResume = (url: string) => {
    setResumeUrl(url)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setResumeUrl("")
  }

  const filtered = dummyStudents.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Header />
      <HireTeamHeroSection />

      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-20">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Hire Your Team</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore top talent from our platform. View portfolios and download resumes.
          </p>
          <div className="mt-6 max-w-md mx-auto">
            <Input
              placeholder="Search students by skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-xl"
            />
          </div>
        </section>

         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((student) => (
            <div key={student.id}>
              <StudentCard student={student} />
              <div className="mt-2 text-center">
                {/* <Button onClick={() => handleOpenResume(student.resume)}>
                  View Resume
                </Button> */}
              </div>
            </div>
          ))} 
        </section>
      </div>
      <TopCategoryStudents/>

      {/* <ResumeModal open={isModalOpen} onClose={handleCloseModal} resumeUrl={resumeUrl} /> */}
      <Footer/>
    </>
  )
}
