import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Gallery from "@/components/Gallery";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import { EstimateProvider } from "@/components/EstimateProvider";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-[80] focus:top-3 focus:left-3 focus:bg-cyan focus:text-void focus:px-4 focus:py-2">
        К содержимому
      </a>
      <Header />
      <main id="main" className="relative z-10">
        <Hero />
        <EstimateProvider>
          <Calculator />
          <div className="divider mx-auto max-w-content" aria-hidden />
          <Gallery />
          <Approach />
          <Contact />
        </EstimateProvider>
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
