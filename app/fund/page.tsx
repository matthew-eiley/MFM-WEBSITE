import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import Hero from "@/components/hero"
import ShareButtons from "@/components/share-buttons"
import InsightsGrid from "@/components/insights-grid"
import ScrollingCarousel from "@/components/scrolling-carousel"

const logos = [
  "/team/aidan.jpg",
  "/team/aidan.jpg",
  "/team/aidan.jpg",
  "/team/aidan.jpg",
  "/team/aidan.jpg",
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
        <ScrollingCarousel images={logos}/>
      </ContentSection>



      <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}