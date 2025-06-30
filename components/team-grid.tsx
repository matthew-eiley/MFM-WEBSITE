"use client"

// Example team member data
const teamMembers = [
  {
    name: "Benjamin Amzallag",
    position: "Event-Driven Fund Manager",
    photo: "/team/benjy.jpg",
    description:
      "Crafting tailored investment portfolios driven by rigorous analysis and market insight.",
    linkedin: "https://www.linkedin.com/in/benjamin-amzallag/",
  },
  {
    name: "John Doe",
    position: "Event-Driven Fund Manager",
    photo: "/team/idk.jpg",
    description:
      "Crafting tailored investment portfolios driven by rigorous analysis and market insight.",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    name: "Matthew Eiley",
    position: "Algorithmic Fund Manager",
    photo: "/team/matthew.jpg",
    description:
      "Crafting tailored investment portfolios driven by rigorous analysis and market insight.",
    linkedin: "https://www.linkedin.com/in/matthew-eiley/",
  },
  {
    name: "Marc-Antoine Nadeau",
    position: "Algorithmic Fund Manager",
    photo: "/team/marc.jpg",
    description:
      "Crafting tailored investment portfolios driven by rigorous analysis and market insight.",
    linkedin: "https://www.linkedin.com/in/ma-nadeau/",
  },
  {
    name: "Evan Kerzner",
    position: "Long/Short Fund Manager",
    photo: "/team/evan.jpg",
    description:
      "Crafting tailored investment portfolios driven by rigorous analysis and market insight.",
    linkedin: "https://www.linkedin.com/in/evan-kerzner-45ba6828a/",
  },
  {
    name: "Cédrik Nadeau",
    position: "Long/Short Fund Manager",
    photo: "/team/cedrik.jpg",
    description:
      "Crafting tailored investment portfolios driven by rigorous analysis and market insight.",
    linkedin: "https://www.linkedin.com/in/cedrik-nadeau/",
  },
]

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {teamMembers.map((member, idx) => (
        <a
          key={idx}
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-gray-100 rounded-lg shadow-sm overflow-hidden transition-colors hover:bg-blue h-40"
        >
          {/* Photo on left third */}
          <div className="w-1/3 h-full overflow-hidden">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text on right two-thirds */}
          <div className="w-2/3 p-4 flex flex-col justify-center text-center">
            <h3 className="text-lg font-semibold text-black mb-1 hover:underline">
              {member.name}
            </h3>
            <p className="text-blue-800 text-base mb-2">{member.position}</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  )
}
