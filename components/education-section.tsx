"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

const educationData = [
  {
    degree: "B.Tech in Chemical Science & Technology",
    institution: "IIT Guwahati",
    period: "2022 – Present",
    cgpa: "8.09",
    description:
      "Pursuing undergraduate degree with focus on chemical engineering principles and technology applications.",
  },
  {
    degree: "Senior Secondary (RBSE)",
    institution: "Rajasthan Board",
    period: "2022",
    cgpa: "93.4%",
    description: "Completed higher secondary education with distinction in Science stream.",
  },
  {
    degree: "Secondary (RBSE)",
    institution: "Rajasthan Board",
    period: "2020",
    cgpa: "94.0%",
    description: "Completed secondary education with excellent academic performance.",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My academic journey and educational background
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-white/10 dark:border-white/5 bg-gradient-to-br from-sky-500/10 via-teal-500/10 to-emerald-500/10 backdrop-blur-md supports-[backdrop-filter]:bg-white/5 dark:supports-[backdrop-filter]:bg-black/5">
              <CardContent className="p-6 bg-white/30 dark:bg-white/5 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-pretty">{edu.description}</p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                    <div className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {edu.cgpa}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
