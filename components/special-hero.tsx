interface SpecialHeroProps {
    title: string
    subtitle1?: string
    subtitle2?: string
    subtitle3?: string
    tagline?: string
    ctaText?: string
    ctaLink?: string
    backgroundImage?: string
  }
  
  export default function SpecialHero({
    title,
    subtitle1,
    subtitle2,
    subtitle3,
    tagline,
    ctaText,
    ctaLink,
    backgroundImage = "/placeholder.svg?height=1080&width=1920",
  }: SpecialHeroProps) {
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
            <div className="max-w-4xl space-y-2">
              {title && <h1 className="text-8xl font-serif text-white leading-tight">{title}</h1>}
              {subtitle1 && <h2 className="text-4xl font-serif text-white leading-snug">{subtitle1}</h2>}
              {subtitle2 && <h2 className="text-4xl font-serif text-white leading-snug">{subtitle2}</h2>}
              {subtitle3 && <h2 className="text-4xl font-serif text-white leading-snug">{subtitle3}</h2>}
              {tagline && <h2 className="text-6xl font-serif text-white leading-snug">{tagline}</h2>}
  
              <p className="text-5xl font-script text-white mt-3">Made of Trust &reg;</p>
  
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