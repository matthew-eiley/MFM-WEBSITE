"use client"

import { useRef } from "react"
import Link from "next/link"

// Each service card uses utility classes defined in globals.css for spacing, colors, hover states, and scroll snapping
const services = [
  {
    href: "/about#values",
    imageSrc: "/carousel/values.png",
    title: "A Legacy of Excellence",
    subtitle: "Discover Our Core Values",
    description: `Drawing on deep experience in
    ultra-high-net-worth wealth
    management, we leverage global
    resources and enduring client
    relationships to create impactful
    financial strategies designed to
    preserve and enhance your family's
    legacy.`,
  },
  {
    href: "/people",
    imageSrc: "/carousel/people.png",
    title: "Our People, Your Success",
    subtitle: "Meet Our Team",
    description: `Our multidisciplinary team
    blends extensive industry
    knowledge, strategic insights,
    and advanced analytics. United
    by a collaborative culture, we
    turn your vision into reality,
    delivering practical and
    sustainable solutions to support
    your ongoing success.`,
  },
  {
    href: "/careers",
    imageSrc: "/carousel/careers.png",
    title: "Elevate your excellence",
    subtitle: "View Open Roles",
    description: `Become part of our dedicated
    team of advisors, strategists,
    analysts, engineers, and
    specialists. With opportunities
    ranging from cooperative
    placements to internships, we
    provide meaningful career
    paths and professional growth
    to cultivate future industry
    leaders.`,
  },
]

export default function AboutCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="text-center relative mt-12">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-4 snap-x snap-mandatory"
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