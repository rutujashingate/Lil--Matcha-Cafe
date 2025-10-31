import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sparkles, Heart, Star } from "lucide-react";

const blends = [
  {
    name: "Classic Ceremonial",
    description: "Pure, traditional matcha with rich umami notes and natural sweetness",
    icon: Leaf,
    color: "from-primary/20 to-primary/10"
  },
  {
    name: "Vanilla Dream",
    description: "Smooth matcha paired with creamy vanilla for a delicate balance",
    icon: Sparkles,
    color: "from-accent/20 to-accent/10"
  },
  {
    name: "Strawberry Bliss",
    description: "Fresh strawberry meets vibrant matcha in perfect harmony",
    icon: Heart,
    color: "from-pink-soft/40 to-pink-soft/20"
  },
  {
    name: "Honey Lavender",
    description: "Floral lavender and sweet honey complement earthy matcha",
    icon: Star,
    color: "from-purple-200/30 to-purple-100/20"
  }
];

const MatchaBlends = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Explore Our Matcha Blends
          </h2>
          <p className="font-script text-2xl text-primary">
            Discover your perfect flavor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {blends.map((blend, index) => {
            const Icon = blend.icon;
            return (
              <Card 
                key={blend.name}
                className="border-border bg-card hover:shadow-card transition-all hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${blend.color} flex items-center justify-center mx-auto`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {blend.name}
                    </h3>
                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                      {blend.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MatchaBlends;
