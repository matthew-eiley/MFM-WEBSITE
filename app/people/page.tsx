import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import Hero from "@/components/hero"
import ListBlocks, {ListItem} from "@/components/list-blocks"
import SingleMemberGrid from "@/components/single-member"
import TeamGrid from "@/components/team-grid"
import PartnersGrid from "@/components/partners-grid"

const strats: ListItem[] = [
    {
        title: "Event-Driven Executives",
        description: `Oversee the analysis of time-sensitive market catalysts such as 
        earnings, M&A, and macro events. They train analysts to assess risk/reward 
        dynamics, model scenarios, and capitalize on short-term dislocations.`,
        href: "/programs"
    },
    {
        title: "Algorithmic Executives",
        description: `Direct the creation and refinement of data-driven trading strategies 
        using Python and statistical methods. They support members in signal design, backtesting, 
        and optimizing model performance across market regimes.`,
        href: "/programs"
    },
    {
        title: "Long/Short Equity Executives",
        description: `Lead the team in identifying improperly valued equities
        through fundamental research and valuation analysis. They manage portfolio positioning
        and ensure disciplined execution on both long and short ideas.`,
        href: "/programs"
    },    
]

  export default function PeoplePage() {
  return (
    <>
    <main>
      <Navigation />
      <Hero
        title="MARTLET FUND MCGILL"
        subtitle="Our People. Your Fund."
        description="Martlet Fund McGill is run entirely by undergraduate students who bring 
        intellectual discipline, market insight, and collaborative leadership to every aspect 
        of the fund's operations — from recruitment, to research, to execution."
        ctaText="Join Today"
        ctaLink="/programs"
        backgroundImage="/hero/people-hero.jpg"
      />

    <ContentSection
        title="OUR PRESIDENTS"
        subtitle="Vision. Integrity. Oversight."
        description="The Presidential Team provides high-level direction, ensures strategic 
        alignment across all divisions, and upholds the fund's core values. Each president 
        plays a cross-functional leadership role—driving performance, mentoring members, and 
        representing the fund externally."
        className="bg-white"
        id="presidents"
      >
        <SingleMemberGrid/>
      </ContentSection>

      <ContentSection
        title="STRATEGY EXECUTIVES"
        subtitle="Depth of Expertise. Discipline of Execution."
        description="Each strategy's fund is led by two executives who guide the direction, 
        mentorship, and performance of their respective divisions. These students serve as 
        both portfolio leads and technical mentors, maintaining professional research standards 
        and rigorous strategy design."
        className="bg-white"
        id="executives"
      >
        <ListBlocks items={strats}/>
        <TeamGrid/>
      </ContentSection>

      <ContentSection
        title="MANAGEMENT TEAM"
        subtitle="Operational Backbone. Strategic Support."
        description="The Management Team ensures that Martlet Fund McGill runs efficiently 
        and scales sustainably. From recruiting and education to marketing and analytics, 
        these members uphold the systems and structure that support the fund's mission."
        className="bg-white"
        id="management"
      >
        <PartnersGrid/>
      </ContentSection>

      <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}