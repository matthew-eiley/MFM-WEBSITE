interface HeroProps {
  title?: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  backgroundImage = "/placeholder.svg?height=1080&width=1920",
}: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={backgroundImage || "/placeholder.svg"}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="space-y-2">
            {title && <h1 className="text-xl font-serif font-bold text-white leading-tight">{title}</h1>}
            {subtitle && <h2 className="text-8xl font-serif text-white mb-4 leading-snug">{subtitle}</h2>}
            {description && <p className="text-xl font-serif max-w-4xl font-semibold text-white mb-4 leading-snug">{description}</p>}
            <p className="text-5xl font-script text-white mt-3">Learning With Purpose</p>

            {ctaText && ctaLink && (
              <div className="pt-2">
                <a
                  href={ctaLink}
                  className="inline-block border-2 border-white bg-white text-black px-6 py-3 text-lg font-serif hover:bg-transparent hover:text-white transition-colors"
                >
                  {ctaText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
