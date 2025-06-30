"use client"

import React from "react"

// Replace with real data or pull from props/API
const jobListings = [
  {
    title: "Investment Analyst",
    team: "Investing",
    location: "Montreal, QC",
    link: "https://docs.google.com/forms/u/0/",
  },
  {
    title: "Data Engineer",
    team: "Engineering",
    location: "Montreal, QC",
    link: "https://docs.google.com/forms/u/0/",
  },
  {
    title: "Financial Planner",
    team: "Investing",
    location: "Montreal, QC",
    link: "https://docs.google.com/forms/u/0/",
  },
  {
    title: "Administrative Assistant",
    team: "Business Operations",
    location: "Montreal, QC",
    link: "https://docs.google.com/forms/u/0/",
  },
  {
    title: "Client Service Associate",
    team: "Communications",
    location: "Montreal, QC",
    link: "https://docs.google.com/forms/u/0/",
  },
  {
    title: "Internship/Co-op Program",
    team: "Student Opportunities",
    location: "Montreal, QC",
    link: "https://docs.google.com/forms/u/0/",
  },
]

export default function Opportunities() {
  return (
    <section id="open-positions" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8">
          {jobListings.map((job, idx) => (
            <a
              key={idx}
              href={job.link}
              className="block bg-gray-100 p-6 rounded-lg shadow-sm hover:bg-blue transition-colors group"
            >
              <h3 className="text-xl font-semibold text-black group-hover:underline mb-2">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {job.team} &#8226; {job.location}
              </p>
              <span className="inline-block text-blue-800 font-medium hover:underline">
                Apply Now &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
