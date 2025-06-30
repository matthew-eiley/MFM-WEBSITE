import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import InsightsGrid from "@/components/insights-grid"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import ContentSection from "@/components/content-section"
import ListBlocks, { ListItem } from "@/components/list-blocks"
import ShareButtons from "@/components/share-buttons"

const reports: ListItem[] = [
  {
    title: "Strategic Investment Outlooks",
    description: `Comprehensive analyses of global market trends and economic indicators, providing strategic insights for informed
    investment decisions.`,
  },
  {
    title: "Sector-Specific Insights",
    description: `Specialized reports detailing opportunities, risks, and emerging trends within key sectors relevant to high-net-worth
    investors.`,
  },
  {
    title: "Macro and Economic Updates",
    description: `Regularly updated macroeconomic perspectives, enabling you to navigate geopolitical developments, regulatory
    changes, and economic volatility with confidence.`,
  },
]

const podcasts: ListItem[] = [
  {
    title: "Market Insights Podcast",
    description: `Thought-provoking interviews featuring leading economists, portfolio managers, and financial strategists sharing
    real-time perspectives on global market dynamics.`,
  },
  {
    title: "Legacy and Leadership Series",
    description: `Conversations designed specifically for ultra-high-net-worth families, focusing on strategic family governance,
    succession planning, and purposeful stewardship across generations.`,
  },
  {
    title: "Innovation and Impact Investing Podcast",
    description: `Explore investment strategies that align profit with purpose, delivering insights into ESG, sustainability, and impact
    investing opportunities.`,
  },
]

const forecasting_analysis: ListItem[] = [
  {
    title: "Economic Forecasting Reports",
    description: `Detailed forecasts that help clients anticipate economic shifts and position their portfolios proactively for optimal
    outcomes.`,
  },
  {
    title: "Customized Client Briefings",
    description: `Exclusive, personalized briefings offering tailored perspectives that align specifically with your individual financial
    goals, family governance objectives, or institutional mandates.`,
  },
]

const events: ListItem[] = [
  {
    title: "Interactive Webinars",
    description: `Access live sessions covering market updates, investment opportunities, and timely financial topics.`,
  },
  {
    title: "Annual Client Symposium",
    description: `Engage with global experts and industry leaders in our signature annual event, fostering valuable insights, informed
    conversations, and strategic networking opportunities.`,
  },
]

export default function InsightsPage() {
  return (
    <>
    <main>
      <Navigation />
      <Hero
        title="OUR INSIGHTS"
        subtitle="Expert Perspectives, Strategic Clarity"
        description="At Leutner Wealth, informed decisions start with insightful analysis. Our expert perspectives illuminate the
        complexities of global markets, providing clear, strategic guidance to empower your financial decisions confidently.
        Stay ahead of trends and gain strategic advantage through thoughtfully curated, forward-looking market
        intelligence."
        ctaText="Subscribe Now"
        ctaLink="/insights#subscribe"
        backgroundImage="/hero/insights-hero.jpg"
      />

    <ContentSection
    title="STAY INFORMED"
    subtitle="Insights on Financial Markets and the Global Economy"
    >
    <ShareButtons/>
    <InsightsGrid/>
    </ContentSection>

    
    <ContentSection
    subtitle="Leutner Wealth Research Reports"
    description="Gain in-depth knowledge and actionable insights from our meticulously researched market analyses:"
    ctaText="Subscribe For Our Reports"
    ctaLink="/insights#subscribe"
    >
      <ListBlocks items={reports}/>
    </ContentSection>

    <ContentSection
    subtitle="Leutner Wealth Podcasts"
    description="Engage with our industry-leading experts and thought leaders through in-depth discussions that explore current
    economic climates, financial strategies, and wealth management innovations:"
    ctaText="Subscribe For Our Podcasts"
    ctaLink="/insights#subscribe"
    >
      <ListBlocks items={podcasts}/>
    </ContentSection>

    <ContentSection
    subtitle="Economic Forecasting and Analysis"
    description="Leverage our forward-thinking analysis, clearly outlining critical economic indicators and market trends:"
    ctaText="Subscribe For Our Forecasting and Analysis"
    ctaLink="/insights#subscribe"
    >
      <ListBlocks items={forecasting_analysis}/>
    </ContentSection>

    <ContentSection
    subtitle="Exclusive Client Webinars and Events"
    description="Participate in specially curated events designed to deepen your understanding of market movements, wealth
    preservation strategies, and next-generation stewardship:"
    ctaText="Hear About Our Events"
    ctaLink="/insights#subscribe"
    >
      <ListBlocks items={events}/>
    </ContentSection>

    <ContentSection
    subtitle="Thought Leadership for Strategic Advantage"
    description="At Leutner Wealth, insight drives clarity, and clarity drives success. Our commitment to providing precise, relevant,
    and forward-thinking analysis ensures you remain strategically informed, prepared, and positioned for lasting
    financial success."
    children="Stay ahead of the curve with Leutner Wealth."
    >
    </ContentSection>
    <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}
