"use client"

import { useState } from "react"

export default function Subscribe() {
  const [email, setEmail] = useState("")

  const handleSubscribe = () => {
    const recipient = "mail@martletfundmcgill.ca"
    const subject = encodeURIComponent("Subscribe Me to the Weekly Newsletter")
    const body = encodeURIComponent(`Hello,\n\nPlease add ${email} to the newsletter mailing list.\n\nThank you!`)
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`

    window.location.href = mailtoLink
  }

  return (
    <section className="bg-blue py-12" id="subscribe">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-gray-600 mb-4">Get the Signal. Not the Noise.</h2>
        <p className="text-lg font-serif max-w-lg mx-auto mb-6 text-gray-600">
          Subscribe to our weekly newsletter for club updates, fund performance 
          insights, and curated market commentary — delivered directly to your inbox.
        </p>

        <div className="flex items-center justify-center mx-auto max-w-lg">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 border focus:outline-none"
          />
          <button
            type="button"
            onClick={handleSubscribe}
            className="w-12 h-12 p-0 border bg-blue"
          >
            <img
              src="/subscribe/mfm-logo.png"
              alt="Subscribe"
              className="w-full h-full object-contain bg-blue"
            />
          </button>
        </div>

        {/* Social icons and footer unchanged */}
        <div className="flex justify-center space-x-8 mt-8">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/martletfundmcgill/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img src="/subscribe/instagram-logo.png" alt="Instagram" className="w-6 h-6 mx-auto" />
          </a>
          {/* X */}
          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img src="/subscribe/x-logo.png" alt="X" className="w-6 h-6 mx-auto" />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/martletfundmcgill/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img src="/subscribe/linkedin-logo.png" alt="LinkedIn" className="w-6 h-6 mx-auto" />
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-5xl font-script text-gray-800">Learning With Purpose</p>
        </div>
      </div>
    </section>
  )
}