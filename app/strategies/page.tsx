import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import Hero from "@/components/hero"
import ListBlocks, {ListItem} from "@/components/list-blocks"
import { title } from "process"

const strat1: ListItem[] = [
    {
      title: "Event-Driven",
      subtitle: "Capitalizing on Market Catalysts",
      description: `Our Event-Driven team identifies trades around corporate actions, earnings announcements, M&A activity, and macroeconomic inflection points. These are high-conviction, time-sensitive ideas driven by fundamental and situational analysis. Members focus on understanding catalysts, market sentiment, and potential mispricings.`,
      href: "programs#event",
    },
]  
const strat2: ListItem[] = [
    {
      title: "Algorithmic",
      subtitle: "Technical Insight. Data-Driven Edge",
      description: `Our Algorithmic team develops quantitative strategies using Python, statistical modeling, and backtesting frameworks. Members explore momentum, mean-reversion, and multi-factor strategies — evaluating performance across multiple time frames while adhering to strict risk management protocols.`,
      href: "programs#algo",
    },
]  

const strat3: ListItem[] = [
    {
      title: "Long/Short Equities",
      subtitle: "Conviction-Based Fundamental Investing",
      description: `The Long/Short Equity team conducts deep-dive fundamental research to build high-conviction positions. Members develop investment theses rooted in financial statement analysis, competitive dynamics, and long-term value vs. market perception. Exposure is managed to hedge downside risk and target asymmetric returns.`,
      href: "programs#longshort",
    },
]


  export default function StrategiesPage() {
  return (
    <>
    <main>
      <Navigation />
      <Hero
        title="MARTLET FUND MCGILL"
        subtitle="Three Strategies. One Fund."
        description="Martlet Fund McGill is structured around three distinct yet complementary 
        investment strategies — Event-Driven, Algorithmic, and Long/Short Equity — empowering 
        members to explore diverse perspectives while contributing to a unified, high-conviction 
        portfolio guided by institutional discipline."
        ctaText="Join Today"
        ctaLink="/programs"
        backgroundImage="/hero/strategies-hero.jpg"

      />

    <ContentSection
        title="OUR APPROACH"
        subtitle="Independent Strategy. Unified Execution."
        description="We operate as a single student-run fund, combining diverse investment 
        philosophies under one centralized portfolio. Our structure mirrors the internal 
        segmentation of real hedge funds — offering our members exposure to both independent 
        strategy development and cross-team collaboration."
        ctaText="Join Us"
        ctaLink="/programs"
        className="bg-white"
        id="approach"
      >
      </ContentSection>

      <ContentSection
        title="OUR TEAMS"
        subtitle="Strategy Overview."
        className="bg-white"
        id="teams"
      >
        <ListBlocks items={strat1}/>
        <ListBlocks items={strat2}/>
        <ListBlocks items={strat3}/>
      </ContentSection>

      <ContentSection
        title="STRATEGY COLLABORATION"
        subtitle="Multiple Perspectives. One Cohesive Portfolio."
        description="While each team operates independently, the fund maintains a 
        unified capital structure and a collaborative investment committee process.
         Strategy heads meet regularly to assess risk exposures, portfolio construction,
         and macro overlay."
        ctaText="Join Us"
        ctaLink="/programs"
        className="bg-white"
        id="collaboration"
      >
      </ContentSection>

      <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}