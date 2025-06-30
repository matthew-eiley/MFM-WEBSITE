import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import ListBlocks, { ListItem } from "@/components/list-blocks"

const impactful_stewardship1: ListItem[] = [
  {
    title: "Strategic Family Mission Statement",
    description: `At Leutner Wealth, we recognize that a powerful family legacy is rooted in a clearly articulated, purposeful mission
    statement. We partner closely with you to define, refine, and formalize a guiding vision and shared values that unify
    your family across generations. Through strategic collaboration, we craft mission statements that provide clarity,
    inspire meaningful stewardship, and serve as enduring frameworks for cohesive decision-making and purposeful
    alignment, empowering your family to navigate evolving complexities with confidence and clarity.`,
  },
  {
    title: "Purpose-Driven Financial Planning",
    description: `Leutner Wealth helps you define and strategically align your family's financial ambitions with your most deeply held
    values. We seamlessly integrate philanthropic endeavors, sustainable investment initiatives, and tailored growth
    strategies into a cohesive wealth plan, ensuring every financial decision authentically reflects your family's enduring
    vision.`,
  },
  {
    title: "Responsible Wealth Management",
    description: `Our commitment to responsible investing goes beyond exceptional financial returns. Leutner Wealth actively seeks
    opportunities in Environmental, Social, and Governance (ESG) and impact investing, allowing your family's wealth to
    serve a higher purpose and positively contributing to society, the environment, and the greater good.`,
  },
  {
    title: "Nurturing Family Governance",
    description: `Leutner Wealth strategically designs robust governance frameworks to foster transparent communication,
    collective responsibility, and trust across generations. Our approach empowers families to engage in unified
    decision-making, mitigate potential conflicts, and confidently pass the torch to prepared and empowered next-
    generation leaders.`,
  },
]

const impactful_stewardship2: ListItem[] = [
  {
    title: "Philanthropy and Community Impact",
    description: `At Leutner Wealth, philanthropy is thoughtfully integrated into your wealth strategy. Whether through family
    foundations, donor-advised funds, or customized charitable giving programs, we help you channel your
    resources toward initiatives that genuinely reflect your family's priorities, enabling meaningful societal
    transformation and inspiring community engagement.`,
  },
  {
    title: "Education and Next-Generation Empowerment",
    description: `Recognizing the importance of next-generation stewardship, Leutner Wealth offers specialized education and
    leadership programs. We equip younger family members with comprehensive financial knowledge, strategic
    insight, and leadership capabilities necessary for the responsible management of family wealth and legacy.`,
  },
  {
    title: "Holistic Legacy Planning",
    description: `Our comprehensive legacy planning approach extends beyond material assets. Leutner Wealth emphasizes the
    preservation of your family's cultural values, life lessons, and meaningful traditions, crafting a legacy that
    provides enduring inspiration, connection, and unity for generations ahead.`,
  },
  {
    title: "The Ultimate Goal of Impactful Stewardship",
    description: `True stewardship involves more than prudent financial management—it is about creating intentional influence
    across all facets of your family's life. At Leutner Wealth, our mission is to help you strategically align your
    financial and lifestyle choices with your core family values, building a legacy defined by responsibility, purpose,
    and lasting societal impact.`,
  },
]

const invstmt_mgmt_advisory: ListItem[] = [
  {
    title: "Bespoke Portfolio Advisory",
    description: "Tailored investment portfolios meticulously curated to reflect your unique objectivesand wealth aspirations.",
  },
  {
    title: "Advanced Risk Analysis and Strategic Asset Allocation",
    description: "Comprehensive risk evaluations and thoughtfully designed asset allocations to fortify your portfolio and optimize growth.",
  },
  {
    title: "Tax-Optimized Investment Strategies",
    description: "Sophisticated approaches engineered to maximize tax efficiency, preserving your wealth and enhancing your overall financial position.",
  },
  {
    title: "Expert Management of Concentrated Equity Holdings",
    description: "Specialized guidance and strategic diversification methods that adeptly handle substantial equity concentrations, mitigating risk while safeguarding value.",
  },
  {
    title: "Purpose-Driven ESG and Impact Investing",
    description: "Curated investment solutions that align performance with your environmental, social, and governance priorities, ensuring your wealth generates meaningful, measurable impact beyond financial returns.",
  },
]

const wealth_planning1: ListItem[] = [
  {
    title: "Holistic Financial Planning",
    description: "Comprehensive wealth strategies tailored precisely to your evolving financial landscape and personal goals.",
  },
  {
    title: "Advanced Retirement Planning and Implementation",
    description: "Expertly structured retirement solutions to safeguard your lifestyle and achieve your envisioned financial independence.",
  },
  {
    title: "Estate and Legacy Structuring",
    description: "Sophisticated estate frameworks designed to preserve, enhance, and strategically transition your wealth across generations seamlessly.",
  },
  {
    title: "Strategic Tax Optimization and Advisory",
    description: "Innovative, tax-efficient approaches carefully crafted to optimize your wealth retention and enhance long-term financial outcomes.",
  },
]

const wealth_planning2: ListItem[] = [
  {
    title: "Philanthropy and Charitable Giving Strategies",
    description: "Purpose-driven philanthropic solutions, thoughtfully integrated into your financial blueprint, amplifying your impact and aligning your wealth with your core values.",
  },
  {
    title: "Business Succession and Owner Planning",
    description: "Proactive, customized succession frameworks ensuring continuity, preserving your legacy, and positioning your business for long-term prosperity.",
  },
  {
    title: "Liquidity Event and IPO Advisory",
    description: "Comprehensive pre- and post-liquidity strategies for navigating significant financial milestones with strategic clarity and precision.",
  },
  {
    title: "Trust and Estate Services",
    description: "Specialized trust structuring and estate management solutions, ensuring asset protection, seamless administration, and sustained legacy fulfillment.",
  },
]


const advanced_management: ListItem[] = [
  {
    title: "Sophisticated Estate & Trust Structuring",
    description: `Expertly tailored structures designed for asset protection, tax efficiency,
    and enduring family legacy.`,
  },
  {
    title: "Family Limited Partnerships (FLPs)",
    description: `Strategic entities to manage and transition wealth effectively while preserving
    family control and minimizing liability.`,
  },
  {
    title: "Intergenerational Wealth Transfer",
    description: `Precise strategies for smooth, purposeful, and efficient wealth succession to
    future generations.`,
  },
  {
    title: "Comprehensive Trust Administration",
    description: `Professional trust management services ensuring compliance, seamless
    execution, and fidelity to your legacy intentions.`,
  },
  {
    title: "Power of Attorney & Incapacity Planning",
    description: `Thoughtful preparation for unforeseen circumstances, preserving
    financial stability, autonomy, and clarity for your family.`,
  },
]

const banking_liquidity: ListItem[] = [
  {
    title: "Exclusive Private Banking & Cash Management",
    description: `Premium, personalized banking services precisely attuned to your
    lifestyle and financial demands.`,
  },
  {
    title: "Customized Credit & Lending Facilities",
    description: `Strategic financing solutions crafted to seize opportunities and meet
    complex liquidity needs effectively.`,
  },
  {
    title: "Cross-Border Financial Solutions",
    description: `Seamless, tailored services ensuring efficient management of international
    financial obligations and opportunities.`,
  },
  {
    title: "Strategic Liquidity & Cash Flow Management",
    description: `Comprehensive planning to optimize cash flow, enhance financial
    flexibility, and support sustained wealth growth.`,
  },
]

const fam_gov1: ListItem[] = [
  {
    title: "Structured Family Governance and Advisory Councils",
    description: `Strategic frameworks ensuring family unity, transparent decision-making, and shared vision.`,
  },
  {
    title: "Next-Generation Leadership and Mentorship Programs",
    description: `Personalized mentorship initiatives cultivating leadership excellence and responsible stewardship.`,
  },
  {
    title: "Dedicated Certified Financial Planners",
    description: `Specialized financial professionals providing tailored, expert guidance for complex financial planning and
    wealth structuring needs.`,
  },
]

const fam_gov2: ListItem[] = [
  {
    title: "Comprehensive Financial Education",
    description: `Advanced educational programs empowering family members with financial literacy and strategic insight.`,
  },
  {
    title: "Strategic Education Funding Solutions",
    description: `Bespoke strategies optimizing resources to fulfill your family's educational ambitions.`,
  },
  {
    title: "Customized Insurance and Risk Management Solutions",
    description: `Tailored insurance strategies offering robust asset protection and proactive risk mitigation.`,
  },
]

const corp_inst: ListItem[] = [
  {
    title: "Customized Corporate Retirement and Group Pension Plans",
    description: `Strategic retirement solutions designed to attract and retain top-tier talent while promoting organizational
    financial health.`,
  },
  {
    title: "Executive Compensation and Financial Advisory",
    description: `Sophisticated compensation planning and personalized advisory services supporting executive financial
    wellbeing.`,
  },
  {
    title: "Institutional Investment Consulting",
    description: `Specialized investment strategies aligning portfolios with institutional objectives, optimizing outcomes, and
    managing risk effectively.`,
  },
]

const phil_impact: ListItem[] = [
  {
    title: "Creation and Administration of Private Foundations and Donor-Advised Funds",
    description: `We handle all legal setup, governance, and grant-making administration so you can focus on making an impact.`
  },
  {
    title: "Strategic Philanthropy Planning and Impact Measurement",
    description: `We map out your giving strategy and track outcomes to ensure every dollar works toward your goals.`,
  },
  {
    title: "Value-Aligned Investment Opportunities",
    description: `We build portfolios that pursue competitive returns while advancing the causes you care about.`,
  },
]

const alt_invstmts: ListItem[] = [
  {
    title: "Private Equity and Venture Capital",
    description: `Exclusive opportunities to participate in growth-oriented, private investments with high-caliber managers
    and innovative ventures.`
  },
  {
    title: "Hedge Fund Strategies",
    description: `Sophisticated, non-traditional investment vehicles providing strategic risk mitigation and optimized
    returns across diverse market conditions.`,
  },
  {
    title: "Real Assets and Infrastructure Investments",
    description: `Specialized exposure to tangible assets such as real estate, infrastructure, and commodities, enhancing
    portfolio resilience and inflation protection.`,
  },
  {
    title: "Customized Alternative Asset Allocation",
    description: `Strategic advisory and bespoke allocations in alternative asset classes tailored precisely to your risk
    tolerance, liquidity needs, and long-term financial goals.`,
  },
]


export default function WhatWeDoPage() {
  return (
    <>
    <main>
      <Navigation />
      <Hero
        title="WHAT WE DO"
        subtitle="Integrated solutions for wealth, strategy, and legacy tailored to the complexities of your life."
        ctaText="Contact Us"
        ctaLink="/contact"
        backgroundImage="/hero/what-we-do-hero.jpg"
      />

      <ContentSection
        title="LEUTNER WEALTH FAMILY OFFICE SERVICES"
        subtitle="Your Wealth, Your Legacy, Our Commitment"
        description="At Leutner Wealth, we understand wealth is more than financial achievement. It embodies your
        ambitions, values, relationships, and the purposeful legacy you envision. Our Family Office Services represent 
        a strategic evolution born from deep expertise, enduring values, and a commitment to long-term stewardship. 
        This integrated platform goes beyond investment management, providing a comprehensive framework for 
        governance, successor preparation, capital strategy, and legacy continuity.
        We align financial strategy with family purpose, ensuring your wealth creates meaningful, lasting
        impact across generations—precisely reflecting your vision, intentions, and values.
        This is wealth management redefined—where insight meets intention, from our family to yours."
        ctaText="Discover our Family Office Services"
        ctaLink="/family-office"
        className="bg-white"/>

      <ContentSection
        title="IMPACTFUL STEWARDSHIP"
        subtitle="Building A Legacy Beyond Wealth"
        description="At Leutner Wealth, we believe impactful stewardship is foundational to meaningful legacy creation. It
        transcends traditional wealth management, shaping an intentional, enduring influence that enriches
        families, strengthens communities, and inspires future generations. Our approach integrates strategic wealth
        management with your core values, ensuring purposeful decision-making and lasting family cohesion."
        ctaText="Schedule Your Stewardship Consultation"
        ctaLink="/contact"
        className="bg-white"
        id="stewardship"/>
      <ListBlocks items={impactful_stewardship1} />
      <ListBlocks items={impactful_stewardship2} />


      <ContentSection
        title="PRIVATE WEALTH MANAGEMENT"
        subtitle="Your Wealth, Your Legacy, Our Expertise"
        description="At Leutner Wealth, we recognize that true wealth transcends financial assets it embodies opportunity, stability,
        and purpose. We believe in empowering you to safeguard your legacy, support future generations, uphold your
        family values, and create a meaningful, lasting impact. Our comprehensive private wealth management solutions
        align precisely with your vision, enabling you to preserve, enhance, and strategically transfer your wealth across
        generations."
        className="bg-white"
        id="wealth-management"/>

      <ContentSection
        title="OUR PLATFORMS"
        subtitle="Industry-Leading Technology"
        description="Leveraging proprietary platforms, we combine institutional-grade analytics with intuitive, client-centered
        design, ensuring that your wealth management experience is seamless, insightful, and secure."
        ctaText="Use Our Platforms Today"
        ctaLink="/platforms"
        className="bg-white"
        id="platforms"/>

      <ContentSection
        title="CUSTOMIZED SOLUTIONS"
        subtitle="Investment Management and Advisory"
        description="At Leutner Wealth, we craft investment strategies with meticulous precision, aligning financial excellence with your
        personal vision, values, and aspirations:"
        className="bg-white"/>
      <ListBlocks items={invstmt_mgmt_advisory} />

      <ContentSection
        title="INTEGRATED GUIDANCE"
        subtitle="Wealth Planning Solutions"
        description="At Leutner Wealth, we deliver meticulously crafted, fully-integrated wealth management solutions, positioning you
        strategically to meet immediate priorities and achieve your long-term aspirations with confidence and clarity."
        ctaText="Contact Us"
        ctaLink="/contact"
        className="bg-white"
      />
      <ListBlocks items={wealth_planning1} />
      <ListBlocks items={wealth_planning2} />

      <ContentSection
        title="ADVANCED MANAGEMENT"
        subtitle="Estate Planning & Trust Management"
        description="Leverage strategic estate solutions meticulously 
        designed to secure and strengthen your family's legacy across generations:"
        className="bg-white"
      />
      <ListBlocks items={advanced_management} />

      <ContentSection
        subtitle="Private Banking & Liquidity Solutions"
        description="Customized financial solutions providing sophisticated liquidity management, strategic banking, and personalized
        financial agility:"
        ctaText="Contact Us"
        ctaLink="/contact"
        className="bg-white"
      />
      <ListBlocks items={banking_liquidity} />

      <ContentSection
        subtitle="Family Governance and Next-Generation Empowerment"
        description="Equip your family for enduring success through sophisticated governance frameworks and specialized
        educational initiatives. Foster confident, informed stewardship to safeguard and amplify your legacy:"
        className="bg-white"
      />
      <ListBlocks items={fam_gov1} />
      <ListBlocks items={fam_gov2} />

      <ContentSection
        subtitle="Corporate and Institutional Advisory"
        description="Tailored advisory solutions expertly structured to meet your organization's sophisticated financial
        management requirements:"
        ctaText="Contact Us"
        ctaLink="/contact"
        className="bg-white"
      />
      <ListBlocks items={corp_inst} />

      <ContentSection
        subtitle="Philanthropy and Impact Investing"
        description="Align your philanthropic objectives seamlessly with your overall financial strategy to magnify your
        impact:"
        className="bg-white"
      />
      <ListBlocks items={phil_impact} />

      <ContentSection
        subtitle="Alternative Investments"
        description="Access exclusive alternative investment strategies to diversify, enhance, and protect your portfolio with
        advanced solutions:"
        className="bg-white"
      />
      <ListBlocks items={alt_invstmts} />

      <ContentSection
        title="LEUTNER WEALTH"
        subtitle="Your Trusted Partner"
        description="At Leutner Wealth, our disciplined, transparent, and personalized approach delivers exceptional clarity
        and confidence in your financial journey. We commit ourselves deeply to understanding your
        ambitions, strategically preserving and growing your financial, familial, and social capital, empowering
        you to focus on what truly matters—your legacy."
        children="Together, let's craft your enduring legacy of purpose and prosperity."
        ctaText="Connect With Our Advisors"
        ctaLink="/contact"
        className="bg-white"
      />

      <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}
