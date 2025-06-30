"use client"

import React from "react"
import Image from "next/image"
import { FaEnvelope } from "react-icons/fa"

const SHARE_TEXT = "Check out the Martlet Fund's Insights"
const INSIGHTS_URL = "/fund#insights"

const encodedURL = encodeURIComponent(INSIGHTS_URL)
const encodedTextAndURL = encodeURIComponent(`${SHARE_TEXT}: ${INSIGHTS_URL}`)
const encodedTitle = encodeURIComponent(SHARE_TEXT)

const TWITTER_URL = `https://twitter.com/intent/tweet?text=${encodedTextAndURL}`
const LINKEDIN_URL = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}&title=${encodedTitle}&summary=${encodedTitle}`
const INSTAGRAM_URL = "https://www.instagram.com/direct/inbox/"
const EMAIL_URL = `mailto:?subject=${encodedTitle}&body=${encodedURL}`

export default function ShareButtons() {
  const iconWrapper = (href: string, label: string, child: React.ReactNode) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        p-3 
      "
    >
      {child}
    </a>
  )

  return (
    <div className="flex items-center">
      <span className="font-serif text-lg tracking-wide text-gray-700 mr-4">
        Share on
      </span>
      <div className="flex space-x-4">
        {iconWrapper(
          TWITTER_URL,
          "Share on X",
          <Image
            src="/subscribe/x-logo.png"
            alt="X logo"
            width={24}
            height={24}
          />
        )}
        {iconWrapper(
          LINKEDIN_URL,
          "Share on LinkedIn",
          <Image
            src="/subscribe/linkedin-logo.png"
            alt="LinkedIn logo"
            width={24}
            height={24}
          />
        )}
        {iconWrapper(
          INSTAGRAM_URL,
          "Share on Instagram",
          <Image
            src="/subscribe/instagram-logo.png"
            alt="Instagram logo"
            width={24}
            height={24}
          />
        )}
        {iconWrapper(
          EMAIL_URL,
          "Share via Email",
          <FaEnvelope className="text-2xl text-gray-700" />
        )}
      </div>
    </div>
  )
}
