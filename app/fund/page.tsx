import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import Hero from "@/components/hero"
import ShareButtons from "@/components/share-buttons"
import InsightsGrid from "@/components/insights-grid"
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

const partners_rtl = [
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
]

const partners_ltr = [
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
  "/fund/",
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

      <ContentSection
        title="ALUMNI NETWORK"
        subtitle="Beyond McGill."
        description="Martlet Fund McGill alumni have gone on to top-tier roles 
        across investment banking, trading, private equity, asset management, and 
        hedge funds. The fund's structure, expectations, and simulated experience 
        prepare students to perform at the highest level—and to stand out in competitive 
        recruiting processes. As our network grows, so does our legacy of excellence."
        className="bg-white"
        id="alumni"
      >
        <ScrollingCarouselRTL images={alumni_rtl}/>
        <ScrollingCarouselLTR images={alumni_ltr}/>
      </ContentSection>

      <ContentSection
        title="PARTNERS & SPONSORS"
        subtitle="Supporting the Next Generation of Investors."
        description="Martlet Fund McGill is proud to be supported by a growing network 
        of alumni, professionals, and organizations that believe in student-led finance 
        education. Whether through mentorship, speaking engagements, recruiting support, 
        or sponsorship, our partners help elevate the fund's impact—providing students 
        with the access, resources, and confidence to pursue careers in high finance."
        className="bg-white"
        id="partners"
      >
        <ScrollingCarouselRTL images={partners_rtl}/>
        <ScrollingCarouselLTR images={partners_ltr}/>
      </ContentSection>


      <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}