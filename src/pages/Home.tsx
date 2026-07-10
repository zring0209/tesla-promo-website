import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Metrics from "@/components/Metrics";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink-900">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <Workflow />
        <Metrics />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
