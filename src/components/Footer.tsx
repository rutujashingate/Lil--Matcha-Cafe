import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-script text-3xl text-primary">
              Lil' Matcha Cafe
            </h3>
            <p className="text-background/80 font-sans text-sm">
              Crafting premium matcha experiences, one swirl at a time.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-background">
              Visit Us
            </h4>
            <div className="space-y-2 text-background/80 font-sans text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>22 Petal Row, Maplewood, OR 97401</span>
              </p>
              <p>Open Daily: 9:00 AM - 8:00 PM</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-background">
              Connect
            </h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-background/10 hover:bg-primary p-3 rounded-full transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-background/10 hover:bg-primary p-3 rounded-full transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 text-center text-background/60 font-sans text-sm">
          <p>© 2025 Lil' Matcha Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
