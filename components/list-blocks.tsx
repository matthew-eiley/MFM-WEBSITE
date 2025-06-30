"use client"

import React from "react"

export interface ListItem {
  title: string
  description: string
  desc2?: string
}

interface ListBlocksProps {
  items: ListItem[]
  className?: string
}

export default function ListBlocks({
  items,
  className = "",
}: ListBlocksProps) {
  return (
    <div className={`flex gap-6 max-w-7xl mx-auto ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-gray-100 p-6 rounded-lg shadow-sm transition-colors hover:bg-blue mb-6"
        >
          <h3 className="font-serif text-lg text-gray-600">
            {item.title}
          </h3>
          <p className="font-serif text-gray-500 text-sm leading-relaxed">
            {item.description}
          </p>
          {item.desc2 && (<p className="font-serif text-gray-500 text-sm leading-relaxed">
            {item.desc2}
          </p>)}
        </div>
      ))}
    </div>
  )
}
