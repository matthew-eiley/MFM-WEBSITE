import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import ListBlocks, { ListItem } from "@/components/list-blocks"

const young_succ: ListItem[] = [
  {
    title: "Tailored Education and Mentorship",
    description: `Customized learning pathways in financial management, strategic
    planning, governance, and family dynamics.`,
  },
  {
    title: "Leadership Development",
    description: `Workshops and experiential learning focused on adaptive leadership, strategic
    decision-making, and entrepreneurial thinking.`,
  },
  {
    title: "Stewardship and Impact Investing",
    description: `Education on responsible wealth management, ESG portfolios, and
    philanthropic engagement aligned with personal and family values.`,
  },
  {
    title: "Exclusive Networking Opportunities",
    description: `Connections with industry leaders, successful entrepreneurs, and fellow
    next-generation visionaries.`,
  },
  {
    title: "Family Governance and Succession Planning",
    description: `Structured programs to enhance family cohesion, effective
    communication, and robust governance frameworks.`,
  },
]

const succ_summit: ListItem[] = [
  {
    title: "Thought Leadership Panels",
    description: `Insights and strategies from global experts on trending topics such as sustainability,
    governance innovation, and cross-border financial management.`,
  },
  {
    title: "Interactive Workshops",
    description: `Practical, scenario-based learning sessions that refine critical leadership skills, from risk
    assessment to strategic philanthropy.`,
  },
  {
    title: "Expert-Led Roundtables",
    description: `Personalized sessions allowing deep dives into complex issues and strategic family matters,
    guided by industry-leading professionals.`,
  },
  {
    title: "Exclusive Social Events",
    description: `Opportunities to build lifelong relationships through curated networking events and peer-to-
    peer interactions in a confidential environment.`,
  },
]

const why_join: ListItem[] = [
  {
    title: "Customized Learning Paths",
    description: `InTailored educational experiences designed to meet the specific needs and aspirations of
    each successor.`,
  },
  {
    title: "Global Perspectives",
    description: `Deepen understanding of international markets, regulatory environments, and multicultural family
    dynamics.`,
  },
  {
    title: "Impactful Stewardship",
    description: `Equip yourself to make strategic decisions that not only preserve wealth but enhance social
    impact and align with family values.`,
  },
]

export default function YoungSuccessorsPage() {
  return (
    <>
    <main>
      <Navigation />
      <Hero
        title="YOUNG SUCCESSORS PROGRAM AND ANNUAL SUMMIT"
        subtitle="Empowering Tomorrow's Visionaries."
        description="At Leutner Wealth, we understand that preparing the next generation to lead, steward, and innovate within the
        family enterprise is crucial for preserving and enhancing your legacy. Our Young Successors Program and
        Annual Summit provide an exclusive, transformative experience tailored specifically for the future leaders of
        ultra-high-net-worth families."
        ctaText="Contact Us"
        ctaLink="/contact"
        backgroundImage="/hero/young-successors-hero.jpg"
      />

      <ContentSection
      subtitle="Young Successors Program"
      description="The Young Successors Program is meticulously designed to empower and equip the rising generation with the
      essential tools, knowledge, and networks to successfully steward family wealth and influence. Through
      structured education, hands-on learning, and expert mentorship, participants emerge prepared to navigate the
      complexities of significant wealth with confidence, clarity, and a strong sense of purpose."
      className="bg-white"
      ctaText="Join the Young Successors Program"
      ctaLink="/contact"
      >
        <ListBlocks items={young_succ} />
      </ContentSection>

      <ContentSection
      subtitle="Annual Successors Summit"
      description="The Annual Successors Summit gathers next-generation leaders from ultra-high-net-worth families around the globe for
      an exclusive event centered on transformative growth, strategic foresight, and impactful networking. This premier
      gathering features keynote sessions, interactive workshops, and confidential roundtables designed to address the unique
      challenges and opportunities faced by young inheritors and future family leaders."
      className="bg-white"
      >
        <ListBlocks items={succ_summit} />
      </ContentSection>

      <ContentSection
      subtitle="Why Join the Young Successors Program"
      description="Our program transcends traditional financial education, offering a holistic approach that integrates financial acumen with
      personal growth and family alignment:"
      className="bg-white"
      ctaText="Join the Young Successors Program"
      ctaLink="/contact"
      >
        <ListBlocks items={why_join} />
      </ContentSection>

      <ContentSection
      title="YOUR PATH TO ENDURING LEADERSHIP STARTS HERE"
      subtitle="Invest in your family's future leadership. Join the Leutner Wealth Young Successors Program and Annual Summit to unlock
      your potential as a visionary steward of your family's legacy."
      className="bg-white"
      ctaText="Reach Out to Enroll"
      ctaLink="/contact"/>

      <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}
