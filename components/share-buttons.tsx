// "use client"

// import React from "react"
// import {
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
//   FaEnvelope,
// } from "react-icons/fa"

// const TWITTER_URL = "https://x.com/compose/post"
// const LINKEDIN_URL = "https://www.linkedin.com/article/new/"
// const INSTAGRAM_URL = "https://www.instagram.com/direct/inbox/"
// const EMAIL_RECIPIENT = ""
// const INSIGHTS_URL = "https://your-site.com/insights"
// const EMAIL_SUBJECT = "Check out Leutner Wealth Insights"

// export default function ShareButtons() {
//   const encodedURL = encodeURIComponent(INSIGHTS_URL)
//   const encodedSubject = encodeURIComponent(EMAIL_SUBJECT)

//   const iconWrapper = (href: string, label: string, children: React.ReactNode) => (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label={label}
//       className="
//         p-3 
//         bg-gray-100 
//         rounded-full 
//         hover:bg-gray-200 
//         transition-colors 
//         duration-200
//       "
//     >
//       {children}
//     </a>
//   )

//   return (
//     <div className="mt-8 flex items-center">
//       <span className="font-serif text-sm tracking-wide text-gray-700 mr-4">
//         Share
//       </span>

//       <div className="flex space-x-4">
//         {iconWrapper(TWITTER_URL, "Share on X", <FaTwitter className="text-2xl text-blue-800" />)}
//         {iconWrapper(LINKEDIN_URL, "Share on LinkedIn", <FaLinkedin className="text-2xl text-blue-700" />)}
//         {iconWrapper(INSTAGRAM_URL, "Share on Instagram", <FaInstagram className="text-2xl text-pink-500" />)}

//         <a
//           href={`mailto:${EMAIL_RECIPIENT}?subject=${encodedSubject}&body=${encodedURL}`}
//           aria-label="Share via Email"
//           className="
//             p-3 
//             bg-gray-100 
//             rounded-full 
//             hover:bg-gray-200 
//             transition-colors 
//             duration-200
//           "
//         >
//           <FaEnvelope className="text-2xl text-gray-700" />
//         </a>
//       </div>
//     </div>
//   )
// }

"use client"

import React from "react"
import Image from "next/image"
import { FaEnvelope } from "react-icons/fa"

const SHARE_TEXT = "Check out Leutner Wealth Insights"
const INSIGHTS_URL = "https://your-site.com/insights"

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
