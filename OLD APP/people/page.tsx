import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import SingleMemberGrid from "@/components/single-member"
import TeamGrid from "@/components/team-grid"
import PartnersGrid from "@/components/partners-grid"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"

export default function PeoplePage() {
  return (
    <>
    <main>
      <Navigation />
      <Hero
        title="MEET OUR TEAM"
        subtitle="Driven by Excellence, Defined by Integrity"
        description="At Leutner Wealth, our team's collective strength and individual expertise form the foundation of our firm's
        success. Our advisors, strategists, analysts, and specialists bring deep financial insight, strategic thinking, and a
        steadfast commitment to serving your unique financial needs and aspirations."
        ctaText="Contact Us"
        ctaLink="/contact"
        backgroundImage="/hero/people-hero.jpg"
      />

      <ContentSection 
        title="OUR LEADERSHIP"
        subtitle="Steering Strategy, Inspiring Confidence"
        description="Our leadership team combines deep institutional expertise with 
        visionary foresight, guiding our firm's direction while fostering a culture of 
        integrity, collaboration, and client-first excellence."
        className="bg-white"
        >
        <SingleMemberGrid/>
      </ContentSection>


      <ContentSection 
        title="ADVISORY PROFESSIONALS"
        subtitle="Our People, Your Success"
        description="Our advisory professionals bring expertise across wealth management, investment strategies, and comprehensive
        financial planning, delivering personalized solutions that align with your objectives."
        ctaText="Connect With Our Team"
        ctaLink="/contact"
        className="bg-white"
        >
        <TeamGrid/>
      </ContentSection>

      <ContentSection 
        title="OUR PARTNERSHIPS"
        subtitle="Empowering Legacies Through Strategic Collaboration"
        className="bg-white"
        >
        <PartnersGrid/>
      </ContentSection>

      <ContentSection 
        title="PROMISE"
        subtitle="Our Commitment To You"
        description="Every member of our team is dedicated to delivering exceptional client service, maintaining the highest ethical
        standards, and pursuing relentless excellence. Our collaborative approach ensures you receive comprehensive,
        coordinated solutions tailored precisely to your evolving needs."
        ctaText="Connect With Our Team"
        ctaLink="/contact"
        className="bg-white"
        >
      </ContentSection>



    <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}
