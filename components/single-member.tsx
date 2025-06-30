"use client"

// Example team member data (same as TeamGrid)
const teamMembers = [
  {
    name: "Andrew Cutler",
    position: "Power Corporation of Canada | Class of 2026",
    photo: "/team/andrew.jpg",
    description: "\"What makes Martlet special isn't just the research — it's the culture of accountability and growth we've built around it.\"",
    linkedin: "https://www.linkedin.com/in/andrew-cutler-/",
  },
  {
    name: "Ryan Fox",
    position: "Jefferies | Class of 2027",
    photo: "/team/ryan.jpg",
    description: "\"We're not just managing a fund — we're building a legacy that connects students, alumni, and industry.\"",
    linkedin: "https://www.linkedin.com/in/ryanfox575/",
  },
  {
    name: "Aidan Rawas",
    position: "BMO Capital Markets | Class of 2027",
    photo: "/team/aidan.jpg",
    description: "\"When you treat student research like real capital, the standard rises—and so does the performance.\"",
    linkedin: "https://www.linkedin.com/in/aidan-rawas/",
  },
]

export default function SingleMemberGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 mb-12 max-w-4xl mx-auto w-1/2-screen text-center">
      {teamMembers.map((member, idx) => (
        <a
          key={idx}
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-gray-100 rounded-lg shadow-sm overflow-hidden transition-colors hover:bg-blue"
        >
          {/* Photo: left square */}
          <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text: right flex */}
          <div className="p-4 flex flex-col justify-center flex-1 ">
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
