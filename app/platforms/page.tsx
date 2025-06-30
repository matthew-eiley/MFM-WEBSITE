import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import ListBlocks, { ListItem } from "@/components/list-blocks"

const addepar: ListItem[] = [
    {
      title: "Customizable Dashboards",
      description: `Tailored views showcasing precise investment performance data.`,
    },
    {
      title: "Transparent Reporting",
      description: `Detailed, actionable insights with robust performance attribution analysis.`,
    },
    {
      title: "Holistic Asset Management",
      description: `Unified tracking and management of diverse assets, including alternative
      investments and private equity.`,
    },
  ]
  
  const optimizer: ListItem[] = [
    {
      title: "Real-Time Tax Analytics",
      description: `Advanced forecasting and scenario analysis tools for proactive planning.`,
    },
    {
      title: "Strategic Wealth Preservation",
      description: `Customized tax-efficient solutions aligned to your specific portfolio goals.`,
    },
    {
      title: "Integrated Reporting",
      description: `Transparent reporting with actionable recommendations for informed decisions.`,
    },
  ]

  const agent: ListItem[] = [
    {
      title: "Personalized Financial Insights",
      description: `AdvAI-driven analysis uniquely tailored to your financial objectives, risk tolerance, and evolving priorities.`,
    },
    {
      title: "Instant Financial Expertise",
      description: `Immediate, expert answers to your most sophisticated financial queries, powered by advanced machine
      learning.`,
    },
    {
      title: "Strategic Market Intelligence",
      description: `Real-time predictive insights and timely alerts to ensure proactive identification of investment opportunities
      aligned with your financial goals.`,
    },
    {
        title: "Secure Digital Engagement",
        description: `A robust, state-of-the-art digital environment enabling seamless and secure collaboration between our client
        and our team.`,
    },  
  ]

  

export default function FamilyOfficePage() {
  return (
    <>
    <main>
      <Navigation />
      <Hero
        title="OUR PLATFORMS"
        subtitle="Cultivating a Culture of Innovation"
        description="At Leutner Wealth, innovation is deeply embedded in our DNA, driving agility, stability, and continuous
        growth across all market conditions. Our enduring commitment to technological excellence empowers our
        clients, fueling clarity and confident decision-making within a rapidly evolving financial landscape."
        ctaText="Use Our Platforms"
        ctaLink="/contact"
        backgroundImage="/hero/platforms-hero.jpg"
      />

        <ContentSection
        title="ADDEPAR"
        subtitle="Integrated Portfolio Management"
        description="Addepar powers our platform with advanced analytics, delivering comprehensive, real-time insights into
        your investment portfolio. Features include:"
        ctaText="Use Our Platforms Today"
        ctaLink="/contact"
        className="bg-white"
        id="addepar">
            <ListBlocks items={addepar} />
        </ContentSection>

        <ContentSection
        title="TAX OPTIMIZATION"
        subtitle="Leutner Wealth Tax Optimizer &trade;"
        description="Our exclusive Proprietary Tax Optimizer &trade; seamlessly integrates sophisticated tax strategies into your
        wealth planning process, optimizing your financial outcomes:"
        ctaText="Optimize Your Situation"
        ctaLink="/contact"
        className="bg-white"
        id="optimizer">
            <ListBlocks items={optimizer} />
        </ContentSection>

        <ContentSection
        title="LEUTNER WEALTH AI AGENT &trade;"
        subtitle="Trailblazing Innovation, Expertly Delivered"
        description="At Leutner Wealth, we harness advanced artificial intelligence to redefine wealth management—delivering
        precise insights, strategic guidance, and instant expertise tailored exclusively for our ultra-high-net-worth
        clients. Our cutting-edge AI Agent &trade; equips you with real-time, personalized analyses and secure digital
        interactions, empowering informed, strategic financial decisions with confidence and ease."
        ctaText="Discover More"
        ctaLink="/contact"
        className="bg-white"
        id="agent">
            <ListBlocks items={agent} />
        </ContentSection>

        <ContentSection
        subtitle="A Commitment to Continual Evolution"
        description="Our technology strategy evolves with purpose, continuously integrating pioneering solutions
        designed specifically for the dynamic needs of ultra-high-net-worth families and institutions."
        children="At Leutner Wealth, innovation is not just technology—it's our commitment to staying ahead of
        your evolving needs, ensuring every financial decision you make is informed, strategic, and
        empowered."
        ctaText="Access Our Platforms"
        ctaLink="/contact"
        className="bg-white"
      />

    <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}
