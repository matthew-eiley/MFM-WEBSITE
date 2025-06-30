"use client"

// Core values data
const coreValues = [
  { title: "Integrity", description: "We uphold the highest ethical standards, prioritizing transparency, accountability, and diligence in every decision and interaction." },
  { title: "Partnership", description: "We champion collaboration and collective intelligence, fostering a culture of teamwork, mutual respect, and shared achievement." },
  { title: "Client Service", description: "We exceed expectations by delivering tailored, impactful solutions designed to fulfill our clients' unique financial aspirations." },
  { title: "Excellence", description: "We are committed to superior performance, continually driving quality, innovation, and ongoing improvement." },
]

// Placeholder image for the values section; replace with your actual image path
const valuesImage = "/misc/about-values.jpg"

export default function ValuesGrid() {
  return (
    <div className="grid grid-cols-5 gap-6 items-stretch mb-8">
      {/* Left: image column */}
      <div className="overflow-hidden rounded-lg shadow-sm">
        <img
          src={valuesImage}
          alt="Core Values"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: 4 value columns */}
      {coreValues.map((value, index) => (
        <div
          key={index}
          className="p-6 bg-gray-100 rounded-lg shadow-sm cursor-pointer transition-colors hover:bg-blue"
        >
          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
        </div>
      ))}
    </div>
  )
}
