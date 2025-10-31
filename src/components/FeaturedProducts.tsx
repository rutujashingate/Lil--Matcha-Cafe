import matchaFrappe from "@/assets/matcha-frappe.jpg";
import matchaCheesecake from "@/assets/matcha-cheesecake.jpg";
import { Card, CardContent } from "@/components/ui/card";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Matcha Cheesecake",
      description: "Creamy matcha cheesecake with swirled frosting and delicate lotus decoration",
      image: matchaCheesecake,
      tag: "Limited Time",
    },
    {
      id: 2,
      name: "Strawberry Matcha Swirl Frappe",
      description: "Refreshing blend of premium matcha and sweet strawberry, topped with swirled soft serve",
      image: matchaFrappe,
      tag: "New",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Featured Creations
          </h2>
          <p className="font-script text-2xl text-primary">
            Our Signature Matcha Swirl Collection
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group overflow-hidden border-border hover:shadow-soft transition-all duration-500 animate-scale-in bg-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={product.image} 
                    alt={`${product.name} - ${product.description}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-sans text-sm font-semibold shadow-lg">
                      {product.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3 bg-gradient-to-b from-card to-muted">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground font-sans">
                    {product.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
