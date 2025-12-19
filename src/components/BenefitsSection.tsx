import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const AFFILIATE_LINK = "https://trkio.org/aff_c?offer_id=1444&aff_id=3866&source=DroneTest";

const benefits = [
  "Capture stunning 4K aerial footage",
  "Explore new perspectives and locations",
  "Perfect for travel and adventure photography",
  "Share breathtaking content on social media",
  "Professional-grade stabilization technology",
  "Compact and portable design"
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Unlock New Creative Possibilities
            </h2>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              asChild
              size="lg" 
              className="px-8 py-6 text-lg font-semibold"
            >
              <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
                Get Started Today
              </a>
            </Button>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-xl border">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">DJI Mavic Pro</h3>
                <p className="text-muted-foreground">Professional Drone</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;