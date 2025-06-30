"use client"

import { useRef } from "react"
import Link from "next/link"

// Each service card uses utility classes defined in globals.css for spacing, colors, hover states, and scroll snapping
const services = [
  {
    href: "/what-we-do#wealth-management",
    imageSrc: "/carousel/private-wealth-carousel.png",
    title: "Private Wealth Management",
    subtitle: "Building Wealth for our Clients",
    description: `Customized investment strategies
    crafted exclusively around your
    financial ambitions, ensuring tailored
    solutions and sustainable wealth
    growth.`,
  },
  {
    href: "/family-office",
    imageSrc: "/carousel/family-office-carousel.png",
    title: "Family Office Services",
    subtitle: "Your Legacy, Our Mission",
    description: `Expert family governance guidance
    structured specifically to nurture
    your family's vision, ensure stability,
    and fortify your legacy through
    generations.`,
  },
  {
    href: "/what-we-do#platforms",
    imageSrc: "/carousel/platforms-carousel.png",
    title: "Our Platforms",
    subtitle: "Technology That Empowers You",
    description: `Innovative digital solutions
    providing clarity, security, and
    seamless control, empowering
    confident asset management and
    informed financial decisions.`,
  },
  {
    href: "/insights",
    imageSrc: "/carousel/insights-carousel.png",
    title: "Our Insights",
    subtitle: "Market Intelligence",
    description: `Timely, strategic market
    analyses and insightful
    commentary designed to equip
    you with actionable intelligence
    for confident decision-making.`,
  },
  {
    href: "/young-successors",
    imageSrc: "/carousel/young-successors-carousel.png",
    title: "Young Successors Program and Annual Summit",
    subtitle: "Cultivating Next-Generation Leaders",
    description: `Engage in dynamic educational programs,
    personalized mentorship initiatives, and
    participate in our exclusive Annual Summit.
    Our program provides young leaders with
    strategic insights and invaluable networks
    essential for enduring family wealth
    stewardship.`,
  },
]

export default function ServiceCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative mt-12">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 snap-x snap-mandatory text-center"
      >
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="flex-shrink-0 w-96 bg-gray-50 rounded-lg shadow-sm snap-start block transition-colors duration-200 ease-in-out hover:bg-blue"
          >
            {/* Image */}
            <img
              src={service.imageSrc}
              alt={service.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            <div className="p-6">
              {/* Title */}
              <h3 className="text-xl font-semibold mb-1">{service.title}</h3>

              {/* Subtitle */}
              <h4 className="text-md font-medium text-blue-800 mb-3 hover:underline">{service.subtitle} &rarr;</h4>

              {/* Description */}
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
