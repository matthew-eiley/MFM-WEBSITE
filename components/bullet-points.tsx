"use client"

import React from "react"

export interface BulletItem {
  description: string
}

interface BulletPointsProps {
  items: BulletItem[]
  className?: string
}

export default function BulletPoints({ items, className = "" }: BulletPointsProps) {
  return (
    <ul className={`space-y-3 list-disc list-inside text-gray-700 font-serif ${className}`}>
      {items.map((item, idx) => (
        <li key={idx} className="leading-relaxed">
          {item.description}
        </li>
      ))}
    </ul>
  )
}
