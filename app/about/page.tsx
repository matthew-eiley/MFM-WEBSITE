import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import ContentSection from "@/components/content-section"
import Footer from "@/components/footer"
import Subscribe from "@/components/subscribe"
import Quote from "@/components/quote"
import ValuesGrid from "@/components/values-grid"

export default function AboutPage() {
  return (
    <>
    <main>
      <Navigation />
      <Hero
        title="ABOUT US"
        subtitle="Empowering You, Protecting Your Legacy"
        description="At Leutner Wealth, we empower you to confidently
        grow, protect, and preserve your wealth for
        generations. Guided by client-first service,
        innovative financial strategies, and unwavering
        excellence, we are your trusted partner in achieving
        lasting financial success"
        ctaText="Connect With Us"
        ctaLink="/contact"
        backgroundImage="/hero/about-us-hero.jpg"
      />

      <ContentSection
        title="ABOUT US"
        subtitle="Empowering Growth, Securing Legacies"
        description="At Leutner Wealth, we deliver institutional expertise with boutique-level precision, guiding individuals,
        families, corporations, foundations, and endowments through each financial milestone. Driven by a relentless
        commitment to excellence, integrity, and personalized service, we protect your wealth and preserve your
        legacy, empowering you to confidently shape your financial future."
        ctaText="Secure Your Legacy Today"
        ctaLink="/contact"
        className="bg-white"
      >
        <Quote
        quote="At Leutner Wealth, our clients always come first. Our culture defines us — it shapes our identity and
        drives our success. Integrity, dedication, and excellence aren't just principles; they're the very
        foundation of what we call 'Made of Trust.'"
        author="Miles Leutner, Founder of Leutner Wealth">
        </Quote>
      </ContentSection>

      <ContentSection
        title="WHO WE ARE"
        subtitle="Our Legacy of Trust and Expertise"
        description="Since our founding in 1984, Leutner Wealth has consistently embodied resilience, integrity, and an unwavering
        pursuit of excellence. Combining strategic foresight with meticulous execution, we deliver tailored financial solutions
        that align precisely with your most ambitious objectives thinking strategically for the long term while acting decisively
        today to safeguard your legacy.
        Drawing on over a century of collective expertise, our advisors support individuals,entrpreneurs families, businesses,
        foundations ,corporations and endowments and institutions. Through sophisticated financial planning, expert
        investment counsel, and comprehensive wealth management services, we enable clients to achieve financial clarity,
        confidence, and lasting success.
        Today, Leutner Wealth stands as a trusted leader in investment management and advisory services. Our clients
        benefit from personalized strategies and dedicated attention from seasoned advisors, supported by an extensive
        global network. Specialists in estate planning, trust administration, private banking, and alternative investments
        collaborate seamlessly, ensuring integrated solutions tailored to your evolving financial needs."
        className="bg-white"
        ctaText="Contact Us"
        ctaLink="/contact"
        id="who"
      >
      </ContentSection>

      <ContentSection
        title="OUR VALUES"
        subtitle="We are deeply committed to upholding our core values"
        description="At Leutner Wealth, our values shape every decision we make and define how we serve our clients. Grounded in
        integrity, driven by excellence, and committed to fostering enduring partnerships, we consistently deliver
        exceptional outcomes that secure your financial future and preserve your legacy for generations."
        ctaText="Schedule a Consultation Today"
        ctaLink="/contact"
        className="bg-white"
        id="values"
      >
        <ValuesGrid/>
        <Quote
        quote="Partnering with Leutner Wealth fundamentally reshaped our approach to wealth management. Their
        tailored financial strategies and sophisticated technologies give us extraordinary clarity and confident
        control over our financial future."
        author="Valued Leutner Wealth Client"
        >
        </Quote>
      </ContentSection>

      <ContentSection
        title="OUR PEOPLE AND LEADERSHIP"
        subtitle="Unwavering Dedication to Growth and Innovation"
        description="At Leutner Wealth, our people drive our distinction. Their commitment and professional expertise
        underpin our culture of excellence and innovation. Each team member delivers unique insights, directly
        contributing to your financial success and sustained growth."
        className="bg-white"
        ctaText="Meet Our Team"
        ctaLink="/people"
        id="people"
      >
      </ContentSection>

      <ContentSection
        title="JOB OPPORTUNITIES"
        subtitle="Careers at Leutner Wealth"
        description="Leutner Wealth invests in talent. Join a dynamic team dedicated to excellence and professional
        growth. Whether through internships, cooperative placements, or experienced professional roles,
        discover exceptional opportunities for mentorship and advancement in a collaborative culture built
        on integrity and innovation."
        className="bg-white"
        ctaText="Explore Our Open Career Opportunities"
        ctaLink="/careers"
        id="careers"
      >
      </ContentSection>


    <Subscribe/>
    </main>
    <Footer/>
    </>
  )
}
