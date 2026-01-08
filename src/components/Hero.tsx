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
    <section className="min-h-screen pb-8 px-3 md:px-12 lg:px-4 pt-24 md:pt-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-foreground fade-in">
              AI-native customer + job operations platform
            </h1>
            <p className="text-base md:text-xl text-muted-foreground max-w-lg fade-in fade-in-delay-1">
              For operators too busy to answer every call — while customers, jobs, and revenue slip away.
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