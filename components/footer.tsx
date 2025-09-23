"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Code, Trophy, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ManishjangirIITG",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/manish-jangir-183388250",
  },
]

const codingPlatforms = [
  {
    name: "Codeforces",
    href: "https://codeforces.com/profile/Manish_Jangir",
    icon: Code,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/ManishjangirIITG",
    icon: Trophy,
  },
  {
    name: "GeeksforGeeks",
    href: "https://geeksforgeeks.org/user/user_xhg4updvb8h/",
    icon: ExternalLink,
  },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-foreground hover:text-accent transition-colors"
            >
              Manish Jangir
            </button>
            <p className="text-muted-foreground text-pretty">
              Aspiring Software Development Engineer and Data Science Enthusiast from IIT Guwahati.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:bg-accent hover:text-accent-foreground hover:border-accent bg-transparent"
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <IconComponent className="h-5 w-5" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Coding Platforms */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Coding Profiles</h4>
            <div className="space-y-2">
              {codingPlatforms.map((platform, index) => {
                const IconComponent = platform.icon
                return (
                  <a
                    key={index}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{platform.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2025 Manish Jangir. All rights reserved.</p>
            <p className="text-muted-foreground text-sm">Built with Next.js, React, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
