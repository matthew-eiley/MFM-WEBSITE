"use client"

import { useRef } from "react"
import Link from "next/link"

// Each service card uses utility classes defined in globals.css for spacing, colors, hover states, and scroll snapping
const services = [
  {
    href: "/strategies#event",
    imageSrc: "/carousel/event.jpg",
    title: "Event-Driven Strategies",
    subtitle: "Capitalizing on Catalysts",
    description: `We identify and trade around corporate actions, 
    earnings surprises, and macro events—where timing, analysis, 
    and conviction drive alpha.`,
  },
  {
    href: "/strategies#algo",
    imageSrc: "/carousel/algo.jpg",
    title: "Algorithmic Trading",
    subtitle: "Quant-Driven Market Execution.",
    description: `Our members develop, backtest, and deploy systematic 
    trading strategies using data science and automation to 
    uncover statistical edge.`,
  },
  {
    href: "/strategies#longshort",
    imageSrc: "/carousel/longshort.jpg",
    title: "Long/Short Equity",
    subtitle: "Fundamental Research, Tactical Positioning.",
    description: `We analyze company fundamentals to build conviction-based 
    positions—long on value, short on overvaluation—to outperform in any market.`,
  },
  {
    href: "/strategies#collaboration",
    imageSrc: "/carousel/collaboration.jpg",
    title: "Cross-Team Collaboration",
    subtitle: "Integrated Thinking Across Strategies.",
    description: `Teams regularly collaborate to refine ideas, share insights, 
    and align execution—emulating real-world hedge fund culture, competition, and discipline.`,
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
