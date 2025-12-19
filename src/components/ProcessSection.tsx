import { Button } from "@/components/ui/button";

const AFFILIATE_LINK = "https://trkio.org/aff_c?offer_id=1444&aff_id=3866&source=DroneTest";

const steps = [
  {
    number: "1",
    title: "Quick Survey",
    description: "Complete a brief survey in just a few minutes"
  },
  {
    number: "2",
    title: "Complete Tasks",
    description: "Finish simple tasks at your own pace"
  },
  {
    number: "3",
    title: "Receive Drone",
    description: "Get your DJI Mavic Pro delivered to you"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Simple Process
        </h2>
        <p className="text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Get your drone reward in three easy steps
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 text-primary-foreground text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <Button 
          asChild
          size="lg" 
          className="px-8 py-6 text-lg font-semibold"
        >
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer">
            Begin Process
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ProcessSection;