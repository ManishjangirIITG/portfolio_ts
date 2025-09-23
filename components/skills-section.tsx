"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Globe } from "lucide-react"

const skillsData = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: ["C/C++", "Python", "JavaScript"],
  },
  {
    category: "Web Development",
    icon: Globe,
    skills: ["HTML", "CSS", "Bootstrap", "TailwindCSS", "React", "Node.js", "Next.js", "Express.js", "Vite"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["SQL", "Mongoose", "MongoDB"],
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Fusion", "Manufacturing"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Technical skills and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-300 border border-white/10 dark:border-white/5 bg-gradient-to-br from-sky-500/10 via-teal-500/10 to-emerald-500/10 backdrop-blur-md supports-[backdrop-filter]:bg-white/5 dark:supports-[backdrop-filter]:bg-black/5 ${category.category ? "lg:col-span-2" : ""}`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-lg">{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
