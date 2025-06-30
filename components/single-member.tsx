// "use client"

// // Example team member data (same as TeamGrid)
// const teamMembers = [
//   {
//     name: "Miles Leutner",
//     position: "Senior Portfolio Manager",
//     photo: "/team/miles.png",
//     description: "With decades of financial industry experience, Miles guides the firm's strategic vision, emphasizing a culture rooted in integrity, trust, and client success.",
//   },
//   {
//     name: "Corine Leutner",
//     position: "Senior Investment Advisor",
//     photo: "/team/corine.png",
//     description: "Expert in wealth management strategies and global financial solutions, providing seasoned guidance to our ultrahigh-net-worth clients and institutional partners.",
//   },
// ]

// export default function SingleMemberGrid() {
//   return (
//     <div className="grid grid-cols-1 gap-8 mb-12 max-w-4xl mx-auto w-1/2-screen text-center">
//       {teamMembers.map((member, idx) => (
//         <div
//           key={idx}
//           className="flex bg-gray-100 rounded-lg shadow-sm overflow-hidden transition-colors hover:bg-blue"
//         >
//           {/* Photo: left square */}
//           <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
//             <img
//               src={member.photo}
//               alt={member.name}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Text: right flex */}
//           <div className="p-4 flex flex-col justify-center flex-1 ">
//             <h3 className="text-lg font-semibold text-black mb-1">
//               {member.name}
//             </h3>
//             <p className="text-blue-800 text-base mb-2">{member.position}</p>
//             <p className="text-gray-700 text-sm leading-relaxed">
//               {member.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

"use client"

// Example team member data (same as TeamGrid)
const teamMembers = [
  {
    name: "Miles Leutner",
    position: "Senior Portfolio Manager",
    photo: "/team/miles.png",
    description: "With decades of financial industry experience, Miles guides the firm's strategic vision, emphasizing a culture rooted in integrity, trust, and client success.",
    linkedin: "https://www.linkedin.com/in/miles-leutner-285b1b131/",
  },
  {
    name: "Corine Leutner",
    position: "Senior Investment Advisor",
    photo: "/team/corine.png",
    description: "Expert in wealth management strategies and global financial solutions, providing seasoned guidance to our ultrahigh-net-worth clients and institutional partners.",
    linkedin: "https://www.linkedin.com/feed/",
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
