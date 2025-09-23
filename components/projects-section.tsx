"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projectsData = [
  {
    title: "UR VDO",
    description:
      "Scalable Video Streaming Platform with user authentication, payment integration, and video processing capabilities. Features include user management, subscription handling, and optimized video delivery.",
    technologies: ["React.js", "Node.js", "MongoDB", "JWT", "Razorpay", "FFmpeg"],
    githubUrl: "https://github.com/ManishjangirIITG/ur_vdo",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "CreatorConnect",
    description:
      "Direct Support Platform for Creators enabling seamless interaction between creators and their audience. Includes authentication, payment processing, and real-time communication features.",
    technologies: ["MERN", "Next.js", "NextAuth", "Razorpay"],
    githubUrl: "https://github.com/ManishjangirIITG/patreon_clone",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "PathVisual",
    description:
      "Interactive Pathfinding Visualizer implementing Dijkstra's Algorithm with real-time visualization. Educational tool for understanding graph algorithms and shortest path concepts.",
    technologies: ["React", "Material-UI", "Algorithms"],
    githubUrl: "https://github.com/ManishjangirIITG/pathfindingalgovisualizer",
    liveUrl: "#",
    featured: false,
  },
  {
    title: "WeatherNow",
    description:
      "Real-time Weather Forecast Application providing accurate weather information with location-based services. Clean UI with responsive design and API integration.",
    technologies: ["Vite", "React", "Tailwind", "AccuWeather API"],
    githubUrl: "https://github.com/ManishjangirIITG/reactp_swc_vite",
    liveUrl: "#",
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my technical projects and development work
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-300 border border-white/10 dark:border-white/5 bg-gradient-to-br from-sky-500/10 via-teal-500/10 to-emerald-500/10 backdrop-blur-md supports-[backdrop-filter]:bg-white/5 dark:supports-[backdrop-filter]:bg-black/5 ${project.featured ? "lg:col-span-2" : ""}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl group-hover:text-accent transition-colors">
                      {project.title}
                      {project.featured && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="mt-2 text-pretty">{project.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    {project.liveUrl !== "#" && (
                      <Button size="sm" className="flex items-center gap-2" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/ManishjangirIITG" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
