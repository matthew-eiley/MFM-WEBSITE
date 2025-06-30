import SpecialHero from "@/components/special-hero"
import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import ServiceCarousel from "@/components/service-carousel"
import InsightsGrid from "@/components/insights-grid"
import AboutCarousel from "@/components/about-carousel"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import ShareButtons from "@/components/share-buttons"
import Hero from "@/components/hero"

export default function HomePage() {
  return (
    <>
    <main>
      <Navigation />
      <Hero
        title="MANAGEMENT UNDERGRADUATE SOCIETY"
        subtitle="Martlet Fund McGill"
        description="Martlet Fund McGill is the university's premier student-run hedge fund, 
        uniting top talent with institutional-level investment rigor. Through disciplined 
        research, active portfolio management, and a commitment to performance, we cultivate 
        the next generation of financial leaders."
        ctaText="Join Today"
        ctaLink="/careers"
        backgroundImage="/hero/home-hero.jpg"

      />

      <ContentSection
        title="WHAT WE DO"
        subtitle="Real Markets. Real Decisions."
        description="The Martlet Fund is a student-run investment fund dedicated to developing the 
        next generation of financial leaders. Our members gain hands-on experience managing capital 
        across diverse strategies—combining rigorous research, quantitative insight, and disciplined 
        execution. We operate through three specialized divisions, each offering a unique lens into 
        the world of professional investing."
        ctaText="Explore Our Fund"
        ctaLink="/what-we-do"
        className="bg-white"
      >
        <ServiceCarousel/>
      </ContentSection>

      <ContentSection
        title="OUR INSIGHTS"
        subtitle="Expert Perspectives on Global Markets"
        description="Stay informed with strategic analyses and forward-looking 
        insights curated by Leutner Wealth. Navigate market trends, economic 
        developments, and investment opportunities clearly and confidently."
        ctaText="Explore All Insights"
        ctaLink="/insights"
        className="bg-white"
      >
        <ShareButtons/>
        <InsightsGrid/>
      </ContentSection>

      <ContentSection 
        title="ABOUT US" 
        subtitle="We're not just building for tomorrow, we're shaping the future 
        of financial success. And we're just getting started."
        className="bg-white"
      >
        <AboutCarousel/>
      </ContentSection>
      <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}