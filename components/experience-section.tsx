"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experienceData = [
  {
    title: "WebOps Head",
    organization: "CheSTA – Student Body of Chemistry Dept. (CST)",
    location: "IIT Guwahati",
    period: "2025 – Present",
    type: "Leadership Role",
    responsibilities: [
      "Managed department website and ensured optimal performance",
      "Coordinated event postings and digital communications",
      "Facilitated student-faculty updates and information flow",
      "Led web operations team and implemented digital solutions",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience & Responsibilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Leadership roles and professional responsibilities
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-white/10 dark:border-white/5 bg-gradient-to-br from-sky-500/10 via-teal-500/10 to-emerald-500/10 backdrop-blur-md supports-[backdrop-filter]:bg-white/5 dark:supports-[backdrop-filter]:bg-black/5">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Briefcase className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">{exp.title}</CardTitle>
                      <p className="text-muted-foreground font-medium">{exp.organization}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">{exp.type}</Badge>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-pretty">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
