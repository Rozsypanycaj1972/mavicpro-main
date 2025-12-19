import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Completed the survey in 5 minutes and finished the tasks over the weekend. Now I'm capturing amazing aerial footage of my ranch. The drone quality exceeded my expectations.",
    name: "Michael Rodriguez",
    location: "Austin, TX"
  },
  {
    quote: "The process was straightforward and the tasks were actually quite enjoyable. My Mavic Pro arrived within two weeks and I've been using it for real estate photography ever since.",
    name: "Sarah Chen",
    location: "Portland, OR"
  },
  {
    quote: "I was skeptical at first, but after completing everything, I received my drone as promised. Perfect for beach photography and exploring the coastline from above.",
    name: "David Thompson",
    location: "Miami, FL"
  },
  {
    quote: "The survey was quick and the additional tasks took me about 6 hours spread over a few days. Truly amazing drone for capturing the Colorado mountains.",
    name: "Jennifer Walsh",
    location: "Denver, CO"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Success Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real people who completed the process and received their drones
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border">
              <CardContent className="p-6">
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;