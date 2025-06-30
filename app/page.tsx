import SpecialHero from "@/components/special-hero"
import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import ServiceCarousel from "@/components/service-carousel"
import InsightsGrid from "@/components/insights-grid"
import AboutCarousel from "@/components/about-carousel"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import ShareButtons from "@/components/share-buttons"

export default function HomePage() {
  return (
    <>
    <main>
      <Navigation />
      <SpecialHero
        title="LEUTNER WEALTH"
        subtitle1="Trusted Partners In Private Wealth Management."
        subtitle2="Over Four Decades of Proven Expertise,"
        subtitle3="And Enduring Client Relationships."
        tagline="Investing for Tomorrow, Today."
        ctaText="Schedule Your Consultation Today"
        ctaLink="/contact"
        backgroundImage="/hero/home-hero.jpg"
      />

      <ContentSection
        title="WHAT WE DO"
        subtitle="We deliver personalized expertise to our
        clients"
        description="Leutner Wealth delivers the institutional strength of a 
        global financial leader with the personalized expertise of a boutique 
        advisory. Our comprehensive approach empowers purpose driven growth, 
        strategic wealth preservation, and proactive legacy management. We ensure 
        your wealth works as diligently and intentionally as you do, safeguarding 
        your legacy for generations to come."
        ctaText="Explore Our Business"
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