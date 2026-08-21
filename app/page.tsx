import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Products from "@/components/Products";
import CmsSection from "@/components/CmsSection";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Industries />
        <Products />
        <CmsSection />
        <WhyUs />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
