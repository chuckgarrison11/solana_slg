import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FAQs } from "@/components/FAQs";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <Footer />
    </>
  );
}
