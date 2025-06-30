import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import Opportunities from "@/components/opportunities"
import Hero from "@/components/hero"

export default function AboutPage() {
  return (
    <>
    <main>
      <Navigation />
      <Hero
        title="CAREERS AT LEUTNER WEALTH"
        subtitle="Join Our Commitment to Excellence"
        description="At Leutner Wealth, we believe that our people are our greatest asset. We offer dynamic opportunities for
        talented professionals who are passionate about delivering exceptional client service, driving innovation, and
        making a meaningful impact."
        ctaText="Current Open Positions"
        ctaLink="/careers#positions"
        backgroundImage="/hero/careers-hero.jpg"
      />

      <ContentSection 
        title="CAREER OPPORTUNITIES"
        subtitle="Open Positions"
        description="At Leutner Wealth, we recruit exceptional talent to deliver solutions 
        to high-net-worth families. You will engage in rigorous training, collaborate across advisory,
        investment research, and technology disciplines, and work alongside seasoned professionals who
        uphold the highest standards of integrity and client service. We invest deeply in your development
        through structured mentorship, ongoing leadership exposure, and access to proprietary analytics so
        that you can accelerate your expertise and drive enduring impact. Join us to build a career defined
        by excellence, partnership, and the pursuit of innovative financial solutions."
        className="bg-white"
        id="positions"
        >
          <Opportunities/>
      </ContentSection>
    <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}
