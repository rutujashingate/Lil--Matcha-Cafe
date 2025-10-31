import { MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import cafeInterior from "@/assets/cafe-interior.jpg";

const Location = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-pink-soft/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Visit Us
          </h2>
          <p className="font-script text-2xl text-primary">
            Your tranquil matcha escape awaits
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative animate-scale-in">
            <img 
              src={cafeInterior} 
              alt="Lil' Matcha Cafe interior - modern minimalist Japanese-inspired cafe space"
              className="rounded-3xl shadow-soft w-full h-full object-cover min-h-[400px]"
            />
          </div>

          <div className="space-y-6 animate-fade-in-delay">
            <Card className="border-border bg-card hover:shadow-card transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      Location
                    </h3>
                    <p className="text-muted-foreground font-sans">
                      22 Petal Row<br />
                      Maplewood, OR 97401
                    </p>
                    <Button 
                      variant="link" 
                      className="text-primary hover:text-primary/80 px-0 mt-2 font-sans"
                    >
                      Get Directions →
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:shadow-card transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      Hours
                    </h3>
                    <p className="text-muted-foreground font-sans">
                      Open Daily<br />
                      <span className="text-foreground font-semibold">9:00 AM - 8:00 PM</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-to-br from-primary/10 to-accent/10 hover:shadow-card transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-3 rounded-full">
                    <Instagram className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      Follow Our Journey
                    </h3>
                    <p className="text-muted-foreground font-sans mb-3">
                      Share your Matcha Swirl moments with us!
                    </p>
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-sans font-semibold"
                    >
                      @lilmatchacafe
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
