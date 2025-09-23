"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Code, Users, Award } from "lucide-react"

const achievementsData = [
  {
    category: "Competitive Programming",
    icon: Code,
    achievements: [
      {
        title: "800+ Coding Problems Solved",
        description: "Across multiple platforms demonstrating strong problem-solving skills",
        details: ["Codeforces: 330+ problems", "LeetCode: 315+ problems", "GeeksforGeeks: 140+ problems"],
      },
    ],
  },
  {
    category: "Event Organization",
    icon: Users,
    achievements: [
      {
        title: "National-level Robotics Event Organizer",
        description: "Techniche 2023, IIT Guwahati",
        details: [
          "Coordinated large-scale technical event",
          "Managed participant registration and logistics",
          "Ensured smooth execution of competitions",
        ],
      },
    ],
  },
  {
    category: "Technical Contributions",
    icon: Award,
    achievements: [
      {
        title: "Robotics Club Member",
        description: "Active contributor to 'Yuvan' project",
        details: [
          "Participated in robotics projects",
          "Collaborated on technical solutions",
          "Contributed to club activities and initiatives",
        ],
      },
    ],
  },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Achievements & Extracurriculars</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Recognition and contributions beyond academics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {achievementsData.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-white/10 dark:border-white/5 bg-gradient-to-br from-sky-500/10 via-teal-500/10 to-emerald-500/10 backdrop-blur-md supports-[backdrop-filter]:bg-white/5 dark:supports-[backdrop-filter]:bg-black/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-lg">{category.category}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {category.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground text-pretty">{achievement.description}</p>
                      </div>

                      <ul className="space-y-1">
                        {achievement.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-pretty">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Coding Platforms Stats */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Coding Platforms</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Trophy className="mr-2 h-4 w-4 text-accent" />
              Codeforces: 330+ Problems
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Trophy className="mr-2 h-4 w-4 text-accent" />
              LeetCode: 315+ Problems
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Trophy className="mr-2 h-4 w-4 text-accent" />
              GeeksforGeeks: 140+ Problems
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
