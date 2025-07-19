// components/StudentCard.tsx
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download } from "lucide-react"
import Link from "next/link"

export function StudentCard({ student }: { student: any }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 relative hover:shadow-xl transition">
      {student.excellent && (
        <div className="absolute top-2 right-2">
          <Badge variant="secondary">🏅 Excellent</Badge>
        </div>
      )}
      <Image
        src={student.image}
        alt={student.name}
        width={100}
        height={100}
        className="rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-center">{student.name}</h3>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        {student.projects} Projects • {student.tags.join(", ")}
      </p>

      <div className="mt-4 flex justify-center">
        <Link href={student.resume} target="_blank">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Resume
          </Button>
        </Link>
      </div>
    </div>
  )
}
