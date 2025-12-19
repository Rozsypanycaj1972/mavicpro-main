import { Button } from "@/components/ui/button";

const AFFILIATE_LINK = "https://trkio.org/aff_c?offer_id=1444&aff_id=3866&source=DroneTest";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-2 mb-6 text-sm font-medium tracking-wide bg-muted/20 border border-muted/30 rounded-full text-[hsl(var(--hero-text-muted))]">
          EXCLUSIVE OFFER
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[hsl(var(--hero-text))]">
          Get Your
          <br />
          <span className="text-primary">DJI Mavic Pro</span>
          <br />
          Drone Reward
        </h1>
        
        <p className="text-lg md:text-xl text-[hsl(var(--hero-text-muted))] mb-10 max-w-2xl mx-auto">
          Complete a quick survey and simple tasks to qualify for your professional-grade aerial photography drone
        </p>
        
        <Button 
          asChild
          size="lg" 
          className="px-8 py-6 text-lg font-semibold rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
            Start Survey Now
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;