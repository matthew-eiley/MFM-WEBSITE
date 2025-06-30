import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import Hero from "@/components/hero"
import Opportunities from "@/components/opportunities"
import BulletPoints, {BulletItem} from "@/components/bullet-points"
import ProgressionTimeline from "@/components/progression-snapshot"
import ShareButtons from "@/components/share-buttons"
import InsightsGrid from "@/components/insights-grid"

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
        subtitle="Beyond Simulation"
        description="Martlet Fund McGill is more than a student-run hedge fund — it's a platform for publishing real research, launching meaningful careers, and building relationships with the firms and individuals that support our mission."
        ctaText="Join Today"
        ctaLink="/programs"
        backgroundImage="/hero/fund-hero.jpg"
      />

      <ContentSection
        title="RESEARCH & INSIGHTS"
        subtitle="Ideas Worth Sharing."
        description="Stay informed with strategic analyses and forward-looking 
        insights curated by the Martlet Fund. Navigate market trends, economic 
        developments, and investment opportunities clearly and confidently."
        className="bg-white"
        id="insights"
      >
        <ShareButtons/>
        <InsightsGrid/>
      </ContentSection>



      <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}