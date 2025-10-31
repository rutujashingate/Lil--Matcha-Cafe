import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-soft via-muted to-background pt-16">
      {/* Decorative background circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-primary font-script text-xl md:text-2xl">
                Welcome to
              </p>
              <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-primary leading-tight">
                Lil' Matcha Cafe
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-sans">
                Your cozy corner for authentic matcha moments
              </p>
            </div>

            <div className="bg-pink-soft/80 backdrop-blur-sm rounded-3xl p-8 space-y-4 border border-border shadow-card">
              <p className="font-serif text-2xl md:text-3xl text-foreground font-bold">
                Now Featuring
              </p>
              <p className="font-serif text-3xl md:text-4xl text-primary italic">
                Matcha Swirl Cheesecake
              </p>
              <p className="font-script text-lg md:text-xl text-foreground leading-relaxed">
                A limited time delight! Creamy, dreamy, and perfectly balanced with premium matcha.
              </p>
            </div>

            <Button 
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold group shadow-soft transition-all hover:shadow-lg hover:scale-105"
            >
              Order Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in-delay">
            <div className="relative z-10">
              <img 
                src={cafeInterior} 
                alt="Lil' Matcha Cafe interior - Cozy modern cafe with warm lighting and matcha drinks"
                className="rounded-3xl shadow-soft w-full object-cover aspect-square"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
