"use client"

import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Greeting */}
          <p className="text-lg text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Hi, I'm
          </p>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-balance">Manish Jangir</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Aspiring SDE | Data Science Enthusiast | IIT Guwahati
          </p>

          {/* Description */}
          <p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            Passionate about crafting innovative solutions through code and data. Building the future one algorithm at a
            time.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <Button size="lg" className="px-8 py-3 text-lg hover:cursor-pointer" asChild>
              <a href="/ManishJangir_220122033.pdf" download="ManishJangir_220122033.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border border-white/10 dark:border-white/5 bg-white/10 dark:bg-white/5 backdrop-blur-sm hover:bg-accent/10 dark:hover:bg-white/10 hover:cursor-pointer"
              onClick={() => scrollToSection("#contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in-up hover:cursor-pointer" style={{ animationDelay: "1.2s" }}>
            <button
              onClick={() => scrollToSection("#education")}
              className="text-muted-foreground hover:text-foreground transition-colors animate-bounce hover:cursor-pointer"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
              <p className="text-sm mt-2">Scroll to explore</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
