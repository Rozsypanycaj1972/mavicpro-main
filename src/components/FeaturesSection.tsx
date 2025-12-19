import { Camera, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const AFFILIATE_LINK = "https://trkio.org/aff_c?offer_id=1444&aff_id=3866&source=DroneTest";

const features = [
  {
    icon: Camera,
    title: "4K Video Recording",
    description: "Capture cinema-quality footage with professional stabilization"
  },
  {
    icon: Clock,
    title: "27-Minute Flight Time",
    description: "Extended flight time for comprehensive aerial exploration"
  },
  {
    icon: MapPin,
    title: "7km Control Range",
    description: "Explore vast distances with reliable connection"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Why the DJI Mavic Pro?
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Experience the freedom of flight with professional-grade aerial photography capabilities
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <Button 
          asChild
          size="lg" 
          className="px-8 py-6 text-lg font-semibold"
        >
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
            Claim Your Drone
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FeaturesSection;