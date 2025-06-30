"use client"

import type React from "react"

interface ContentSectionProps {
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  className?: string
  children?: React.ReactNode
  id?: string
}

export default function ContentSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  className = "bg-white",
  children,
  id,
}: ContentSectionProps) {
  return (
    <section className={`py-16 ${className}`} id={id}>
      <div className="container mx-auto px-6">
        <div className="text-left max-w-7xl mx-auto">
          {title && (
            <h2 className="text-lg font-serif text-uppercase mb-2">{title}</h2>
          )}

          <hr className="my-hr mt-0 mb-3"/>

          {subtitle && (
            <h3 className="text-4xl font-serif text-cap text-gray-600 max-w-4xl mb-2">{subtitle}</h3>
          )}
          {description && (
            <p className="text-lg font-serif text-gray-700 mb-4 leading-relaxed">
              {description}
            </p>
          )}

          {children && (
            <div className="text-lg font-serif text-gray-700 mb-4 leading-relaxed">
              {children}
            </div>
          )}

          {ctaText && ctaLink && (
            <div className="mt-8 text-center">
              <a
                href={ctaLink}
                className="bg-white border border-black text-black px-8 py-3 text-base font-serif rounded hover:bg-blue transition-colors whitespace-nowrap"
              >
                {ctaText}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}