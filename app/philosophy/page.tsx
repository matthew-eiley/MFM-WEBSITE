import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import ServiceCarousel from "@/components/service-carousel"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import Hero from "@/components/hero"
import ListBlocks, {ListItem} from "@/components/list-blocks"

const values1: ListItem[] = [
    {
      title: "People",
      description: `Our most important investments aren't securities — they're our people. 
      MFM is driven by the growth of our members and analysts. Whether you're a first-year 
      exploring finance or a returning executive, you'll find a collaborative environment 
      where you're supported, challenged, and encouraged to lead.`,
    },
    {
      title: "Potential",
      description: `We value potential over experience. We recruit based on drive, not resumes. 
      If you're motivated to learn, open-minded, and ready to grow, MFM will meet you where you 
      are — and take you further.`,
    },
  ]  

const values2: ListItem[] = [
    {
      title: "Action",
      description: `Theory is just the beginning. Our programs are grounded in application — 
      from real investing scenarios to peer-led stock pitches. You'll gain tangible skills in 
      strategy, analysis, and communication, preparing you for both recruiting and real-world success.`,
    },
    {
      title: "Community",
      description: `We're more than a fund — we're a community. Whether it's through collaborative 
      projects, networking events, or just hanging out, MFM fosters friendships and support systems 
      that last well beyond McGill.`,
    },
  ]  

  const apart: ListItem[] = [
    {
      title: "Real Fund Mentality",
      description: `We emulate the structure, expectations, and decision-making rigor of real-world hedge funds.`,
    },
    {
        title: "Student-Led, Professionally Minded",
        description: `Every investment decision, every report, every meeting is student-driven — yet held to institutional standards.`,
      },  
    {
      title: "Selective, Not Exclusive",
      description: `We welcome intellectual diversity and reward commitment. We don't expect perfection — we expect passion and work ethic.`,
    },
  ]  



export default function PhilosophyPage() {
  return (
    <>
    <main>
      <Navigation />
      <Hero
        title="MARTLET FUND MCGILL"
        subtitle="Our Philosophy"
        description="At the Martlet Fund, we combine academic excellence with institutional discipline. 
        Our philosophy is simple: learn by doing, lead with integrity, and perform with conviction."
        ctaText="Join Today"
        ctaLink="/programs"
        backgroundImage="/hero/home-hero.jpg"

      />

    <ContentSection
        title="WHO WE ARE"
        subtitle="Tomorrow's Leaders. Learning Today."
        description="Martlet Fund McGill is McGill University's first and only 
        student-run hedge fund. We operate like a real fund — with real responsibilities,
        real decisions, and real expectations. Our members aren't just students — they're 
        investors, analysts, and leaders."
        ctaText="Join Us"
        ctaLink="/programs"
        className="bg-white"
        id="who"
      >
      </ContentSection>

      <ContentSection
        title="WHAT WE DO"
        subtitle="Real Strategies. Real Impact."
        description="We manage a simulated portfolio through three complementary strategies: 
        Event-Driven, Algorithmic, and Long/Short Equity. Our mission is to give McGill's top 
        students hands-on exposure to markets, strategy, and execution—mirroring the work of 
        professional analysts and hedge fund teams."
        ctaText="Explore Our Strategies"
        ctaLink="/strategies"
        className="bg-white"
        id="what"
      >
      </ContentSection>

      <ContentSection
        title="CORE VALUES"
        subtitle="Principles that Guide Performance."
        className="bg-white"
        id="values"
      >
        <ListBlocks items={values1}/>
        <ListBlocks items={values2}/>
      </ContentSection>

      <ContentSection
        title="WHAT SETS US APART"
        subtitle="Built like a fund. Run by students."
        description="The Martlet Fund is a student-run investment fund dedicated to developing the 
        next generation of financial leaders. Our members gain hands-on experience managing capital 
        across diverse strategies — combining rigorous research, quantitative insight, and disciplined 
        execution. We operate through three specialized divisions, each offering a unique lens into 
        the world of professional investing."
        ctaText="Join Us"
        ctaLink="/programs"
        className="bg-white"
        id="who"
      >
        <ListBlocks items={apart}/>
      </ContentSection>

      <ContentSection
        title="A CULTURE OF EXCELLENCE"
        subtitle="Where Ambition Becomes Discipline."
        description="We believe that the best way to learn finance is to live it. 
        Our meetings mirror investment committees. Our debates are structured. Our 
        research is peer-reviewed. Members grow not just as analysts, but as thinkers, 
        collaborators, and future leaders in finance."
        className="bg-white"
        id="apart"
      >
      </ContentSection>
      <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}