"use client"

interface ScrollingCarouselProps {
  images: string[]
}

export default function ScrollingCarouselLTR({ images }: ScrollingCarouselProps) {
  return (
    <div className="overflow-hidden w-full bg-white py-6">
      <div className="flex w-max animate-scroll-ltr">
        {[...images, ...images].map((src, idx) => (
          <div key={idx} className="h-36 flex items-center justify-center px-8">
          <img
              src={src}
              alt={`Carousel item ${idx}`}
              className="max-h-36 w-auto max-w-48"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll-ltr {
          animation: scroll-ltr 30s linear infinite;
        }
      `}</style>
    </div>
  )
}