import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import MatchaBlends from "@/components/MatchaBlends";
import About from "@/components/About";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <MatchaBlends />
      <About />
      <Location />
      <Footer />
    </main>
  );
};

export default Index;
