import { Button } from "@/components/ui/button";
import AbstractGraphic from "./AbstractGraphic";

const Hero = () => {
  const scrollToPartnerForm = () => {
    document.getElementById("partner-form")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const scrollToHowItWorks = () => {
    document.getElementById("solution")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  return (
    <section className="min-h-screen pb-16 md:pb-8 px-[3px] md:px-8 lg:px-12 pt-24 md:pt-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background pointer-events-none" />
      
      <div className="container mx-auto max-w-none md:max-w-[1600px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-4 md:space-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-foreground fade-in">
              <span className="md:hidden">Turn customer conversations into booked jobs and repeat business.</span>
              <span className="hidden md:inline">Turn customer conversations into booked jobs and repeat business.</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-lg fade-in fade-in-delay-1">
              <span className="md:hidden">Carbon is an AI-native CRM that manages calls, booking, and follow-ups with full context.</span>
              <span className="hidden md:inline">Carbon is an AI-native CRM that manages calls, booking, and follow-ups with full context.</span>
            </p>
            <div className="flex flex-wrap items-center gap-4 fade-in fade-in-delay-2">
              <Button onClick={scrollToPartnerForm} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 w-full sm:w-auto">
                Book a demo
              </Button>
            </div>
          </div>
          <div className="fade-in fade-in-delay-3">
            <AbstractGraphic variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;