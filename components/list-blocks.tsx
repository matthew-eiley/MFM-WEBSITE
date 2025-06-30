// "use client"

// import React from "react"

// export interface ListItem {
//   title: string
//   description: string
//   subtitle?: string
// }

// interface ListBlocksProps {
//   items: ListItem[]
//   className?: string
// }

// export default function ListBlocks({
//   items,
//   className = "",
// }: ListBlocksProps) {
//   return (
//     <div className={`flex gap-6 max-w-7xl mx-auto ${className}`}>
//       {items.map((item, idx) => (
//         <div
//           key={idx}
//           className="bg-gray-100 p-6 rounded-lg shadow-sm transition-colors hover:bg-blue mb-6"
//         >
//           <h3 className="font-serif text-lg text-gray-600">
//             {item.title}
//           </h3>
//           {item.subtitle && (<p className="font-serif text-blue-800 text-base leading-relaxed">
//             {item.subtitle}
//           </p>)}
//           <p className="font-serif text-gray-500 text-sm leading-relaxed">
//             {item.description}
//           </p>
//         </div>
//       ))}
//     </div>
//   )
// }

"use client"

import React from "react"
import Link from "next/link"

export interface ListItem {
  title: string
  description: string
  subtitle?: string
  href?: string
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
    <div className={`flex flex-wrap gap-6 max-w-7xl mx-auto ${className}`}>
      {items.map((item, idx) => {
        const BlockContent = (
          <div
            className={`bg-gray-100 p-6 rounded-lg shadow-sm transition-colors hover:bg-blue mb-6 ${
              item.href ? "cursor-pointer hover:shadow-md" : ""
            }`}
          >
            <h3 className="font-serif text-lg text-gray-600">{item.title}</h3>
            {item.subtitle && (
              <p className="font-serif text-blue-800 text-base leading-relaxed">
                {item.subtitle}
              </p>
            )}
            <p className="font-serif text-gray-500 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        )

        return item.href ? (
          <Link key={idx} href={item.href} passHref className="flex-1 min-w-[280px]">
            {BlockContent}
          </Link>
        ) : (
          <div key={idx} className="flex-1 min-w-[280px]">
            {BlockContent}
          </div>
        )
      })}
    </div>
  )
}
