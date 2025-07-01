import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import ServiceCarousel from "@/components/service-carousel"
import InsightsGrid from "@/components/insights-grid"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import ShareButtons from "@/components/share-buttons"
import Hero from "@/components/hero"
import ScrollingCarouselRTL from "@/components/scrolling-carousel-rtl"
import ScrollingCarouselLTR from "@/components/scrolling-carousel-ltr"

const alumni_rtl = [
  "/fund/bmo.png",
  "/fund/ms.svg",
  "/fund/rbc.webp",
  "/fund/pcc.png",
  "/fund/jefferies.png",
  "/fund/bmo.png",
  "/fund/ms.svg",
  "/fund/rbc.webp",
  "/fund/pcc.png",
  "/fund/jefferies.png",
]
const alumni_ltr = [
  "/fund/fidelity.png",
  "/fund/valsoft.png",
  "/fund/elliot.png",
  "/fund/cintas.png",
  "/fund/cdpq.png",
  "/fund/realstar.png",
  "/fund/galliant.png",
  "/fund/fidelity.png",
  "/fund/valsoft.png",
  "/fund/elliot.png",
  "/fund/cintas.png",
  "/fund/cdpq.png",
  "/fund/realstar.png",
  "/fund/galliant.png",
]

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
        ctaLink="/programs"
        backgroundImage="/hero/home-hero.jpg"

      />

      <ContentSection
        title="WHAT WE DO"
        subtitle="Three Strategies. One Fund."
        description="The Martlet Fund is a student-run investment fund dedicated to developing the 
        next generation of financial leaders. Our members gain hands-on experience managing capital 
        across diverse strategies — combining rigorous research, quantitative insight, and disciplined 
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
        create the best outcomes — for our fund and our members. Our philosophy is rooted in rigorous 
        analysis and a commitment to learning through doing."
        ctaText="Explore Our Philosophy"
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
        title="PROGRAMS"
        subtitle="Developing future investment leaders."
        description="We offer a comprehensive learning path. From introductory workshops 
        to advanced research and management positions. Whether you're just starting or ready to lead, 
        our programs are built to accelerate your growth."
        ctaText="See Our Offers"
        ctaLink="/programs"
        className="bg-white"
      />


      <ContentSection
        title="RESEARCH & INSIGHTS"
        subtitle="Ideas Worth Sharing."
        description="Stay informed with strategic analyses and forward-looking 
        insights curated by the Martlet Fund. Navigate market trends, economic 
        developments, and investment opportunities clearly and confidently."
        className="bg-white"
      >
        <ShareButtons/>
        <InsightsGrid/>
      </ContentSection>

      <ContentSection
        title="JOIN US"
        subtitle="Your Career Starts Here."
        description="Applications are always open on a rolling basis. We look for intellectual curiosity, 
        teamwork, and a drive to learn. Ready to challenge yourself?"
        ctaText="Join Us"
        ctaLink="/programs"
        className="bg-white"
      />
            
      <ContentSection
        title="ALUMNI NETWORK"
        subtitle="Beyond McGill, Across Finance."
        description="Our alumni go on to top firms, graduate programs, and leadership roles 
        across the financial world. Martlet Fund is not just a student club — it's a lifelong network."
        className="bg-white"
        ctaText="See Our Network"
        ctaLink="/network-partners"
      >
        <ScrollingCarouselRTL images={alumni_rtl}/>
        <ScrollingCarouselLTR images={alumni_ltr}/>
      </ContentSection>

      <ContentSection
        title="PARTNERS & SPONSORS"
        subtitle="Supported by the Industry."
        description="We're proud to collaborate with industry professionals and alumni who support our 
        mission through mentorship, sponsorship, and insight."
        className="bg-white"
        ctaText="Meet Our Partners"
        ctaLink="/network-partners"
      />

      <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}