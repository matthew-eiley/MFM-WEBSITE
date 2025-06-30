// "use client"

// // Example partner data
// const partners = [
//   { name: "Max Marcuzzi", position: "Head of Operations and Logistics", logo: "/partners/partner1.jpg" },
//   { name: "Erin Shaffer", position: "Head of Finance and Communications", logo: "/partners/partner2.jpg" },
//   { name: "Ben Salmons", position: "Head of Outreach", logo: "/partners/partner3.jpg" },
// ]

// export default function PartnersGrid() {
//   return (
//     <div className="grid grid-cols-4 gap-8 text-center mt-8 max-w-5xl mx-auto">
//       {partners.map((partner, idx) => (
//         <div
//           key={idx}
//           className="flex flex-col items-center bg-gray-100 rounded-lg shadow-sm overflow-hidden transition-colors hover:bg-blue p-4"
//         >
//           {/* Logo/Image */}
//           <div className="max-auto h-32 mb-4">
//             <img
//               src={partner.logo}
//               alt={partner.name}
//               className="w-full h-full object-contain"
//             />
//           </div>
//           {/* Name & Position */}
//           <h3 className="text-lg font-semibold text-black mb-1">{partner.name}</h3>
//           <p className="text-sm text-blue-800">{partner.position}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

"use client"

const miniTeamMembers = [
  {
    name: "Max Marcuzzi",
    position: "Head of Operations and Logistics",
    photo: "/team/max.jpg",
    linkedin: "https://www.linkedin.com/in/maxmarcuzzi/",
  },
  {
    name: "Erin Shaffer",
    position: "Head of Finance and Communications",
    photo: "/team/erin.jpg",
    linkedin: "https://www.linkedin.com/in/erinshaffer-finance/",
  },
  {
    name: "Ben Salmons",
    position: "Head of Outreach",
    photo: "/team/ben.jpg",
    linkedin: "https://www.linkedin.com/in/benmsalmons/",
  },
  // Add 3 more team members as needed
]

export default function PartnersGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {miniTeamMembers.map((member, idx) => (
        <a
          key={idx}
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-gray-100 rounded-lg shadow-sm hover:bg-blue p-4 transition-colors text-center"
        >
          <img
            src={member.photo}
            alt={member.name}
            className="h-36 w-36 rounded-full mb-4"
          />
          <h3 className="text-md font-semibold text-black hover:underline">
            {member.name}
          </h3>
          <p className="text-sm text-blue-800">{member.position}</p>
        </a>
      ))}
    </div>
  )
}