import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import Hero from "@/components/hero"
import Opportunities from "@/components/opportunities"
import BulletPoints, {BulletItem} from "@/components/bullet-points"
import ProgressionTimeline from "@/components/progression-snapshot"

  const gen: BulletItem[] = [
    { description: "Investor Mindset Workshops (valuation, catalysts, macro context)" },
    { description: "Mock Interviews & Recruiting Resources" },
    { description: "Introductory Pitch Competitions" },
    { description: "Networking Events with alumni and industry professionals" },
  ] 
  
  const junior: BulletItem[] = [
    { description: "Investment thesis writing" },
    { description: "Portfolio structure and simulation" },
    { description: "How real hedge fund teams operate" },
    { description: "How to pitch an idea in a team setting" },
  ]  

  const senior: BulletItem[] = [
    { description: "Run strategy logic and pitch preparation" },
    { description: "Manage simulated P&Ls" },
    { description: "Lead routine reviews with execs" },
    { description: "Are mentored for careers in hedge funds, trading, and research" },
  ]  

  const exec: BulletItem[] = [
    { description: "Set strategy tone and thematic direction" },
    { description: "Manage portfolio-level decisions" },
    { description: "Mentor analysts and manage review cycles" },
    { description: "Uphold fund quality, performance, and culture" },
  ]  


export default function FundPage() {
  return (
    <>
    <main>
      <Navigation />
      <Hero
        title="MARTLET FUND MCGILL"
        subtitle="Programs That Build Investors"
        description="Martlet Fund McGill offers a progression of opportunities — from 
        open-access learning to high-level portfolio simulation — designed to equip McGill 
        students with the skills, structure, and discipline needed to succeed in modern finance."
        ctaText="Join Today"
        ctaLink="#opportunities"
        backgroundImage="/hero/fund-hero.jpg"
      />

    <ContentSection
        title="GENERAL MEMBERSHIP"
        subtitle="Open to all McGill Students"
        description="Our General Membership track is open to any student interested in markets, investing, or financial strategy — no technical background required. Members gain access to workshops, speaker events, simplified competitions, and exclusive recruiting prep, making it the perfect entry point to learn the mindset and mechanics of a hedge fund."
        ctaText="Become a General Member"
        ctaLink="#opportunities"
        className="bg-white"
        id="general"
      >
        <BulletPoints items={gen}/>
      </ContentSection>

      <ContentSection
        subtitle="Junior Analyst Program"
        description="The Junior Analyst Program is a hands-on introduction to hedge fund strategy. Juniors are placed into strategy pods (Event-Driven, Algorithmic, Long/Short) where they contribute to idea generation, thesis building, and collaborative simulation — without needing prior technical experience."
        ctaText="Become a Junior Analyst"
        ctaLink="#opportunities"
        className="bg-white"
        id="junior"
      >
        <BulletPoints items={junior}/>
      </ContentSection>

      <ContentSection
        subtitle="Senior Analyst Program"
        description="Senior Analysts lead pod research, refine strategy execution, and mentor junior teammates. They take ownership of team performance and pitch to the Executive Team, mirroring the pace and pressure of institutional asset management."
        ctaText="Become a Senior Analyst"
        ctaLink="#opportunities"
        className="bg-white"
        id="senior"
      >
        <BulletPoints items={senior}/>
      </ContentSection>

      <ContentSection
        title="EXECUTIVE TEAM"
        subtitle="Fund Manager Roles"
        description="Fund Managers oversee strategy-specific pods (Event-Driven, Algorithmic, Long/Short Equities) and serve as technical and strategic leads. They guide analysts, approve trades, manage team output, and work closely with the Presidential team on fund direction."
        ctaText="Become a Senior Analyst"
        ctaLink="#opportunities"
        className="bg-white"
        id="executives"
      >
        <BulletPoints items={exec}/>
      </ContentSection>

      <ContentSection
        subtitle="Progression Snapshot"
        className="bg-white"
        id="progression"
      >
      </ContentSection>
      <ProgressionTimeline />


      <ContentSection
        title="JOIN MFM"
        subtitle="Open Opportunities."
        description="Martlet Fund McGill offers a range of student-led positions — from general membership to analyst roles to executive leadership. Whether you're new to the field or ready to take on high-level responsibility, this is where you'll find current openings and application details for joining the fund."
        className="bg-white"
        id="opportunities"
      >
        <Opportunities/>
      </ContentSection>
      <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}