"use client"

export default function Subscribe() {
  return (
    <section className="bg-blue py-12" id="subscribe">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-gray-600 mb-4">Subscribe to Our Insights</h2>
        <p className="text-lg font-serif text-gray-600">Stay informed with our latest market analyses and strategic insights.</p>
        <p className="text-lg font-serif text-gray-600 mb-6">Enter your email address below to subscribe and receive timely updates directly to your inbox.</p>
        <form className="flex items-center justify-center mx-auto max-w-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="w-12 h-12 p-0 border-none"
          >
            <img
              src="/subscribe/lw-logo.png"
              alt="Subscribe"
              className="w-full h-full object-contain"
            />
          </button>
        </form>

        <div className="flex justify-center space-x-8 mt-8">

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img src="/subscribe/instagram-logo.png" alt="Instagram" className="w-6 h-6 mx-auto" />
          </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/leutner-wealth-34bab436b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img src="/subscribe/linkedin-logo.png" alt="LinkedIn" className="w-6 h-6 mx-auto" />
          </a>

          {/* X */}
          <a
            href="https://x.com/leutnerwealth?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img src="/subscribe/x-logo.png" alt="X" className="w-6 h-6 mx-auto" />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img src="/subscribe/facebook-logo.png" alt="Facebook" className="w-6 h-6 mx-auto" />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img src="/subscribe/youtube-logo.png" alt="YouTube" className="w-6 h-6 mx-auto" />
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-5xl font-script text-gray-800">Made of Trust &reg;</p>
        </div>
      </div>
    </section>
  )
}