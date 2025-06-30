interface MegaMenuContent {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  links?: Array<{ label: string; href: string }>
  image: string
  layout?: "default" | "family"
}

interface MegaMenuProps {
  content: MegaMenuContent
}

export default function MegaMenu({ content }: MegaMenuProps) {
  const isFamily = content.layout === "family"

  return (
    <div
      className="fixed left-0 w-screen bg-gray-200 shadow-lg z-40 animate-in fade-in slide-in-from-top-2 duration-300"
      style={{ top: "calc(4rem + 1px)" }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className={`grid gap-12 ${isFamily ? "grid-cols-2" : "grid-cols-3"} items-center max-w-6xl mx-auto`}>
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-black">{content.title}</h3>
            <p className="text-lg font-serif text-black leading-relaxed">{content.description}</p>
            <a
              href={content.ctaLink}
              className="inline-block border-2 border-black px-4 py-2 text-lg font-serif hover:bg-blue transition-colors"
            >
              {content.ctaText}
            </a>
          </div>

          {/* Center Column (Links) - Only for non-family layout */}
          {!isFamily && content.links && (
            <div className="space-y-3">
              {content.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-black hover:text-blue-800 hover:underline transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Right Column (Image) */}
          <div className="flex justify-center">
            <img
              src={content.image || "/placeholder.svg"}
              alt={content.title}
              width={isFamily ? 600 : 400}
              height={isFamily ? 280 : 300}
              className={`object-cover rounded ${isFamily ? "w-full max-h-72" : "h-72 w-auto"}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
