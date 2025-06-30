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
        subtitle="Three Strategies. One Fund."
        description="The Martlet Fund is a student-run investment fund dedicated to developing the 
        next generation of financial leaders. Our members gain hands-on experience managing capital 
        across diverse strategies—combining rigorous research, quantitative insight, and disciplined 
        execution. We operate through three specialized divisions, each offering a unique lens into 
        the world of professional investing."
        ctaText="Explore Our Fund"
        ctaLink="/strategies"
        className="bg-white"
      >
        <ServiceCarousel/>
      </ContentSection>

      <ContentSection
        title="PHILOSOPHY"
        subtitle="Integrity. Curiosity. Performance."
        description="We believe that disciplined investing, intellectual honesty, and collaboration 
        create the best outcomes—for our fund and our members. Our philosophy is rooted in rigorous 
        analysis and a commitment to learning through doing."
        ctaText="Explore Our Philosophies"
        ctaLink="/philosophy"
        className="bg-white"
      />

      <ContentSection
        title="OUR TEAM"
        subtitle="Led by students. Built on excellence."
        description="Our team comprises some of McGill's most driven finance and STEM students. 
        From general members, to analysts, to portfolio leads, each member plays a vital role 
        in shaping the fund's research, performance, and culture."
        ctaText="Meet Our Team"
        ctaLink="/team"
        className="bg-white"
      />


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