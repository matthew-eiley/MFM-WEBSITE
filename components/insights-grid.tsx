"use client"

// Main feature articles with individual links
const mainArticles = [
  {
    title: "Exploring the impacts of AI and GenAI across industries",
    description:
      "Continuing our examination of artificial intelligence and its potential to shape the investment landscape, we look at the specific impacts AI may have—or is already having—across a wide range of industries.",
    readTime: "14 minute read",
    image: "/insights/insight2.jpg",
    href: "https://www.rbcwealthmanagement.com/en-ca/insights/exploring-the-impacts-of-ai-and-gen-ai-across-industries",
  },
  {
    title: "AgriTech & FoodTech: Technology to feed the world",
    description:
      "Technology-driven solutions offer the promise of feeding a growing global population while limiting the burden on the environment.",
    readTime: "17 minute read",
    image: "/insights/insight2.jpg",
    href: "https://www.rbcwealthmanagement.com/en-ca/insights/agritech-foodtech-technology-to-feed-the-world#:~:text=Technology%2Ddriven%20solutions%20offer%20the,the%20burden%20on%20the%20environment.",
  },
]

// Podcast banner with its own link
const podcastBanner = {
  title: "Markets in Motion Podcast",
  image: "/insights/insight2.jpg",
  href: "https://www.rbccm.com/en/insights/story.page?dcr=templatedata/article/insights/data/2023/01/responsible_and_explainable_ai_exploring_the_future_of_trading",
}

// Links for your three platforms
const SPOTIFY_URL = "https://open.spotify.com/show/5aybgq0SiyzQhn8waCJ6jK"
const APPLE_PODCASTS_URL = "https://podcasts.apple.com/us/podcast/rbcs-markets-in-motion/id1516394991"
const YOUTUBE_MUSIC_URL = "https://music.youtube.com/playlist?list=PLkkJQzB4a-0ShjEcHShMP8PnztRbT4I-X"

// List of quick insights with individual links
const quickInsights = [
  {
    date: "June 10, 2025",
    title: "Improved 2026 EPS outlooks",
    duration: "5 min listen",
    image: "/insights/insight.png",
    href: "https://www.rbccm.com/en/insights/transcripts/improved-2026-eps-outlooks.page#:~:text=First%2C%20the%20increase%20in%202026,was%2014.2%25%20in%20mid%20March.",
  },
  {
    date: "June 6, 2025",
    title: "Messy markets and investor pickles",
    duration: "30 min listen",
    image: "/insights/insight.png",
    href: "https://www.rbccm.com/en/insights/transcripts/messy-markets-and-investor-pickles.page",
  },
  {
    date: "June 2, 2025",
    title: "Tweaking our target",
    duration: "7 min listen",
    image: "/insights/insight.png",
    href: "https://www.rbccm.com/en/story/story.page?dcr=templatedata/article/story/data/2025/06/tweaking-our-target",
  },
]

export default function InsightsGrid() {
  return (
    <div className="flex gap-12">
      {/* Main Articles Grid */}
      <div className="grid grid-cols-2 gap-6 flex-1">
        {mainArticles.map((article, idx) => (
          <a
            key={idx}
            href={article.href}
            className="group block space-y-4 p-4 rounded-lg cursor-pointer bg-gray-100 transition-colors hover:bg-blue"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover rounded shadow-sm"
            />
            <h3 className="text-xl font-semibold text-black group-hover:underline">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm">{article.description}</p>
            <div className="text-sm font-medium text-blue-800 hover:underline">
              {article.readTime} &rarr;
            </div>
          </a>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="flex-shrink-0 flex-col space-y-6 w-72">
        
        {/* Podcast Banner */}
        <div className="relative rounded-lg overflow-hidden h-40 transition-colors hover:bg-blue">
          {/* Full-banner link */}
          <a
            href={podcastBanner.href}
            className="absolute inset-0 block"
            aria-label={podcastBanner.title}
          >
            <img
              src={podcastBanner.image}
              alt={podcastBanner.title}
              className="w-full h-full object-cover"
            />
          </a>

          {/* Overlay with title + centered buttons */}
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-4 space-y-4">
            <h3 className="text-white text-2xl font-semibold text-center">
              {podcastBanner.title}
            </h3>
            <div className="flex space-x-6">
              <a
                href={SPOTIFY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Listen on Spotify"
              >
                <img
                  src="/subscribe/spotify-logo.png"
                  alt="Spotify logo"
                  className="w-6 h-6 object-contain"
                />
              </a>
              <a
                href={APPLE_PODCASTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Listen on Apple Podcasts"
              >
                <img
                  src="/subscribe/apple-logo.png"
                  alt="Apple Podcasts logo"
                  className="w-6 h-6 object-contain"
                />
              </a>
              <a
                href={YOUTUBE_MUSIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Listen on YouTube Music"
              >
                <img
                  src="/subscribe/youtube-logo.png"
                  alt="YouTube Music logo"
                  className="w-6 h-6 object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Insights List */}
        <div className="space-y-4">
          {quickInsights.map((insight, i) => (
            <a
              key={i}
              href={insight.href}
              className="flex items-center gap-3 p-2 rounded-lg cursor-pointer bg-gray-100 transition-colors hover:bg-blue"
            >
              <img
                src={insight.image}
                alt={insight.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 space-y-1">
                <div className="text-xs uppercase text-gray-500 tracking-wide">
                  Insights <span className="font-normal">{insight.date}</span>
                </div>
                <h4 className="text-sm font-semibold text-black hover:underline">
                  {insight.title}
                </h4>
                <div className="text-xs text-blue-800 hover:underline">
                  {insight.duration} &rarr;
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}