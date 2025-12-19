import { Button } from "@/components/ui/button";

const AFFILIATE_LINK = "https://trkio.org/aff_c?offer_id=1444&aff_id=3866&source=DroneTest";

const CTASection = () => {
  return (
    <section className="hero-gradient py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--hero-text))]">
          Ready to Soar to New Heights?
        </h2>
        <p className="text-[hsl(var(--hero-text-muted))] text-lg mb-10 max-w-2xl mx-auto">
          Join thousands who have already claimed their DJI Mavic Pro drone through our exclusive offer
        </p>
        
        <Button 
          asChild
          size="lg" 
          className="px-8 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground mb-6"
        >
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
            Start Your Survey
          </a>
        </Button>
        
        <p className="text-sm text-[hsl(var(--hero-text-muted))]">
          Survey takes a few minutes • Tasks can be completed at your pace
        </p>
      </div>
    </section>
  );
};

export default CTASection;