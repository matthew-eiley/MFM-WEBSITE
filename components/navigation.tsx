"use client"

import { useState, useRef } from "react"
import MegaMenu from "./mega-menu"

const navigationItems = [
  {
    label: "Philosophy",
    type: "mega",
    content: {
      title: "Philosophy",
      description: "Learn about our mission, values, and how we develop student investors through real-world experience.",
      ctaText: "Learn About Us",
      ctaLink: "/philosophy",
      links: [
        { label: "Who We Are", href: "/philosophy#who" },
        { label: "What We Do", href: "/philosophy#what" },
        { label: "Core Values", href: "/philosophy#values" },
        { label: "What Sets Us Apart", href: "/philosophy#apart" },
      ],
      image: "/navigation/philosophy-mega.jpg",
    },
  },
  {
    label: "Strategies",
    type: "mega",
    content: {
      title: "Strategies",
      description: "Explore the structure of our fund and the three core divisions that drive our performance.",
      ctaText: "Explore Our Strategies",
      ctaLink: "/strategies",
      links: [
        { label: "Our Approach", href: "/strategies#approach" },
        { label: "Event-Drive", href: "/strategies#teams" },
        { label: "Algorithmic", href: "/strategies#teams" },
        { label: "Long/Short Equities", href: "/strategies#teams" },
        { label: "Strategy Collaboration", href: "/strategies#collaboration" },
      ],
      image: "/navigation/strategies-mega.jpg",
    },
  },
  {
    label: "Our Team",
    type: "mega",
    content: {
      title: "Our Team",
      description: "Meet the students who lead, manage, and analyze within the Martlet Fund.",
      ctaText: "Meet Our Team",
      ctaLink: "/people",
      links: [
        { label: "Our Presidents", href: "/people#presidents" },
        { label: "Our Strategy Executives", href: "/people#executives" },
        { label: "Our Management Team", href: "/people#management" },
      ],
      image: "/navigation/people-mega.jpg",
    },

  },
  {
    label: "Programs",
    type: "mega",
    content: {
      title: "Programs",
      description: "Discover how to get involved, from applications to training and development opportunities.",
      ctaText: "Our Programs",
      ctaLink: "/programs",
      links: [
        { label: "General Membership", href: "/programs#general" },
        { label: "Junior Analyst Program", href: "/programs#junior" },
        { label: "Senior Analyst Program", href: "/programs#senior" },
        { label: "Fund Management Program", href: "/programs#executives" },
        { label: "Progression", href: "/programs#progression" },
        { label: "Open Positions", href: "/programs#opportunities" },
      ],
      image: "/navigation/programs-mega.jpg",
    },
  },
  {
    label: "Our Fund",
    type: "mega",
    content: {
      title: "Our Fund",
      description: "Access research, view alumni outcomes, and explore the partnerships behind the fund.",
      ctaText: "See Our Fund",
      ctaLink: "/fund",
      image: "/navigation/fund-mega.jpg",
      layout: "family" as const,
    },
  },

]

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300) // 300ms delay
  }

  const handleMegaMenuEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleMegaMenuLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="bg-white border-b border-gray-200 relative z-50">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logos - moved closer to left edge */}
          <div className="flex items-center space-x-8">
            <a href="https://www.mcgill.ca/" className="flex-shrink-0">
              <img
                src="/navigation/mcgill-logo.png"
                alt="mcgill"
                width={100}
                height={50}
                className="h-12 w-auto"
              />
            </a>
            <a href="https://www.musmcgill.com/" className="flex-shrink-0">
              <img
                src="/navigation/mus-logo.jpg"
                alt="mus"
                width={220}
                height={50}
                className="h-12 w-auto"
              />
            </a>
            <a href="/" className="flex-shrink-0">
              <img
                src="/navigation/mfm-logo.png"
                alt="mfm"
                width={220}
                height={50}
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Navigation - moved closer to right edge */}
          <nav className="hidden lg:flex items-center space-x-6 pr-4">
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="text-black text-uppercase hover:text-gray-600 py-2 text-xs font-serif transition-colors relative group whitespace-nowrap cursor-pointer">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </div>
            ))}

            <a
              href="/programs"
              className="bg-gray-200 text-uppercase border border-black text-black px-4 py-2 text-xs font-serif hover:bg-blue transition-colors whitespace-nowrap"
            >
              APPLY TODAY
            </a>
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Render active mega menu */}
      {activeDropdown && (
        <div onMouseEnter={handleMegaMenuEnter} onMouseLeave={handleMegaMenuLeave}>
          <MegaMenu content={navigationItems.find((item) => item.label === activeDropdown)?.content!} />
        </div>
      )}
    </header>
  )
}
