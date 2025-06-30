import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"

export default function FamilyOfficePage() {
  return (
    <>
    <main>
      <Navigation />
      <Hero
        title="YOUR MODERN FAMILY OFFICE"
        subtitle="Building a Legacy Beyond Wealth"
        description="In today's evolving landscape, a successful family office is defined by more than financial
        excellence—it thrives through visionary leadership, intentional governance, agile solutions,
        and deep family unity. Align your values and aspirations strategically, creating a meaningful
        legacy that endures across generations."
        ctaText="Establish Your Family Office"
        ctaLink="/contact"
        backgroundImage="/hero/family-office-hero.jpg"
      />
    <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}
