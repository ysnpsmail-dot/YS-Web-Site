import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <HeaderNav />
      <Hero />
      <WorkSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <FloatingWhatsApp />
    </main>
  );
}
