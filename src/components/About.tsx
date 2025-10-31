import matchaPowder from "@/assets/matcha-powder.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Crafted with Love,
              <span className="block text-primary mt-2">
                Served with Passion
              </span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                At Lil' Matcha Cafe, we believe in the art of premium matcha. 
                Each cup and creation is carefully crafted using the finest 
                ceremonial-grade matcha, sourced directly from Japan.
              </p>
              
              <p>
                Our signature Matcha Swirl collection represents the perfect 
                harmony of traditional Japanese tea culture and modern cafe 
                innovation. From our creamy matcha cheesecake to our refreshing 
                strawberry matcha frappés, every item is made fresh daily with 
                love and attention to detail.
              </p>
              
              <p className="text-primary font-semibold">
                Experience matcha like never before - it's not just a drink, 
                it's a moment of tranquility in your day.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-serif font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground font-sans">Ceremonial Grade</p>
              </div>
              <div className="w-px bg-border" />
              <div className="space-y-1">
                <p className="text-3xl font-serif font-bold text-primary">Fresh</p>
                <p className="text-sm text-muted-foreground font-sans">Made Daily</p>
              </div>
              <div className="w-px bg-border" />
              <div className="space-y-1">
                <p className="text-3xl font-serif font-bold text-primary">Premium</p>
                <p className="text-sm text-muted-foreground font-sans">Quality Ingredients</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-delay">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-card">
              <img 
                src={matchaPowder} 
                alt="Premium ceremonial grade matcha powder on wooden spoon"
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-accent/30 to-primary/20 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
