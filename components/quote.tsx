"use client"

// Quote component displays a highlighted quote block
// Uses only your global utility classes

type QuoteProps = {
  quote: string
  author: string
}

export default function Quote({ quote, author }: QuoteProps) {
  return (
    <section className="py-2">
      <div className="mx-auto">
        <div className="bg-gray-100 font-serif p-8 rounded-lg shadow-lg transition-colors hover:bg-blue mx-auto text-center">
          <p className="text-2xl font-serif text-gray-700 leading-relaxed mb-4">
            {quote}
          </p>
          <cite className="block font-semibold text-gray-600">— {author}</cite>
        </div>
      </div>
    </section>
  )
}