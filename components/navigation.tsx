"use client"

import { useState, useRef } from "react"
import MegaMenu from "./mega-menu"

const navigationItems = [
  {
    label: "About Us",
    type: "mega",
    content: {
      title: "About Us",
      description: "We help clients navigate complex financial decisions through a legacy of trust and performance.",
      ctaText: "Learn About Us",
      ctaLink: "/about",
      links: [
        { label: "Who We Are", href: "/about#who" },
        { label: "Our Values", href: "/about#values" },
        { label: "Our People and Leadership", href: "/people" },
        { label: "Careers at Leutner Wealth", href: "/careers" },
      ],
      image: "/navigation/about-us-mega.png",
    },
  },
  {
    label: "What We Do",
    type: "mega",
    content: {
      title: "What We Do",
      description: "Discover how we serve clients across private wealth, planning, platforms, and more.",
      ctaText: "Explore Our Business",
      ctaLink: "/what-we-do",
      links: [
        { label: "Private Wealth Management", href: "/what-we-do#wealth-management" },
        { label: "Financial Planning", href: "/what-we-do#stewardship" },
        { label: "Asset Management", href: "/what-we-do#stewardship" },
        { label: "Platform Solutions", href: "/platforms" },
        { label: "Addepar", href: "/platforms#addepar" },
        { label: "Leutner Wealth Tax Optimizer", href: "/platforms#optimizer" },
        { label: "Leutner Wealth AI Agent", href: "/platforms#agent" },
      ],
      image: "/navigation/what-we-do-mega.png",
    },
  },
  {
    label: "Family Office Services",
    type: "mega",
    content: {
      title: "Family Office Services",
      description: "We provide integrated strategies for governance, investment, and generational planning.",
      ctaText: "Our Solutions",
      ctaLink: "/family-office",
      image: "/navigation/family-office-mega.jpg",
      layout: "family" as const,
    },
  },
  {
    label: "Young Successors",
    type: "mega",
    content: {
      title: "Young Successors Program",
      description: "Empowering the next generation of family leaders through mentorship and education.",
      ctaText: "Our Program",
      ctaLink: "/young-successors",
      image: "/navigation/young-successors-mega.jpg",
      layout: "family" as const,
    },
  },
  {
    label: "Insights",
    type: "mega",
    content: {
      title: "Insights",
      description: "Gain perspectives on the markets, investing strategies, and future trends from our experts.",
      ctaText: "Explore Insights",
      ctaLink: "/insights",
      image: "/navigation/insights-mega.jpg",
      layout: "family" as const,
    },
  },
  {
    label: "Contact Us",
    type: "mega",
    content: {
      title: "Contact Us",
      description: "Have questions about your financial future? Reach out today and let our experts tailor a plan just for you.",
      ctaText: "Get In Touch",
      ctaLink: "/contact",
      image: "/navigation/contact-mega.jpg",
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
            <a href="https://www.rbcwealthmanagement.com/en-ca/" className="flex-shrink-0">
              <img
                src="/navigation/rbc-wm-logo.svg"
                alt="RBC"
                width={100}
                height={50}
                className="h-12 w-auto"
              />
            </a>
            <a href="/" className="flex-shrink-0">
              <img
                src="/navigation/lw-logo.png"
                alt="Leutner Wealth"
                width={120}
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

            <div className="relative group">
              <span className="text-black text-uppercase hover:text-gray-600 py-2 text-xs font-serif whitespace-nowrap cursor-pointer">
                Language
              </span>
              <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-32 z-10">
                <a href="#" className="block font-serif px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  English
                </a>
                <a href="#" className="block font-serif px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  French
                </a>
              </div>
            </div>

            <a
              href="https://www1.royalbank.com/sgw3/PUBINVH/3m00/ISAMSecureRequest/v1/eBGPublicPage?F6=1&F7=IB&F21=IB&F22=IB&REQUEST=ClientSignin&IDP=IVC&LANGUAGE=ENGLISH&SYSTEM=DSIC"
              className="bg-gray-200 text-uppercase border border-black text-black px-4 py-2 text-xs font-serif hover:bg-white transition-colors whitespace-nowrap"
            >
              Client Login
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
