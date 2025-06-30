"use client"

// Example partner data
const partners = [
  { name: "John Doe", position: "Strategic Partner", logo: "/partners/partner1.jpg" },
  { name: "Jane Doe", position: "Financial Partner", logo: "/partners/partner2.jpg" },
  { name: "John Doe", position: "Estate Planning", logo: "/partners/partner3.jpg" },
  { name: "Jane Doe", position: "Technology Partner", logo: "/partners/partner4.jpg" },
]

export default function PartnersGrid() {
  return (
    <div className="grid grid-cols-4 gap-8 text-center mt-8 max-w-5xl mx-auto">
      {partners.map((partner, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-gray-100 rounded-lg shadow-sm overflow-hidden transition-colors hover:bg-blue p-4"
        >
          {/* Logo/Image */}
          <div className="w-full h-32 mb-4">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Name & Position */}
          <h3 className="text-lg font-semibold text-black mb-1">{partner.name}</h3>
          <p className="text-sm text-blue-800">{partner.position}</p>
        </div>
      ))}
    </div>
  )
}