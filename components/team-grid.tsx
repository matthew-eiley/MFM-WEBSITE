"use client"

// Example team member data
const teamMembers = [
  {
    name: "Andrew Leutner",
    position: "Associate Advisor",
    photo: "/team/andrew.png",
    description:
      "Crafting tailored investment portfolios driven by rigorous analysis and market insight.",
    linkedin: "https://www.linkedin.com/in/andrew-leutner-mba-19214351/",
  },
  {
    name: "Justin Leutner",
    position: "Associate Advisor",
    photo: "/team/justin.png",
    description:
      "Crafting tailored investment portfolios driven by rigorous analysis and market insight.",
    linkedin: "https://www.linkedin.com/feed/",
  },
  {
    name: "Jennifer McCann",
    position: "Associate",
    photo: "/team/jenn.png",
    description:
      "Crafting tailored investment portfolios driven by rigorous analysis and market insight.",
    linkedin: "https://www.linkedin.com/in/jennifer-mccann-/",
  },
  {
    name: "Alexandra Bento-Christen",
    position: "Associate",
    photo: "/team/alex.png",
    description:
      "Crafting tailored investment portfolios driven by rigorous analysis and market insight.",
    linkedin: "https://www.linkedin.com/in/alexandra-bento-81682422b/",
  },
  {
    name: "Rebecca Fracasso",
    position: "Administrative Assistant",
    photo: "/team/rebecca.png",
    description:
      "Crafting tailored investment portfolios driven by rigorous analysis and market insight.",
    linkedin: "https://www.linkedin.com/in/rebecca-martina-fracasso-006b07235/",
  },
  {
    name: "Madison Burns",
    position: "Administrative Assistant",
    photo: "/team/madison.png",
    description:
      "Crafting tailored investment portfolios driven by rigorous analysis and market insight.",
    linkedin: "https://www.linkedin.com/in/madison-burns-2754701b5/",
  },
  {
    name: "Andrew Diamond",
    position: "Analyst Intern",
    photo: "/team/diamond.png",
    description:
      "As an analyst intern, I'm here to dive deep into research and bring fresh perspectives to the team. Every data point is an opportunity to learn—and I'm eager to turn those insights into value for our clients.",
    linkedin: "https://www.linkedin.com/in/andrew-diamond-b14961258/",
  },
  {
    name: "Matthew Eiley",
    position: "Data Engineering Intern",
    photo: "/team/matthew.png",
    description:
      "Behind every great investment strategy is a solid data pipeline. I'm passionate about building scalable systems that transform raw data into a powerful competitive edge.",
    linkedin: "https://www.linkedin.com/in/matthew-eiley",
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
