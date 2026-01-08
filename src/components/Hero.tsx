import { Button } from "@/components/ui/button";
import AbstractGraphic from "./AbstractGraphic";

const Hero = () => {
  const scrollToPartnerForm = () => {
    document.getElementById("partner-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-foreground fade-in">
              AI-native customer + job operations platform
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg fade-in fade-in-delay-1">
              Built for operators with hands busy cleaning cars, on the road, and answering calls — while customers, jobs, and follow-ups fall through the cracks.
            </p>
            <div className="flex flex-wrap items-center gap-4 fade-in fade-in-delay-2">
              <Button 
                onClick={scrollToPartnerForm}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8"
              >
                Become a design partner
              </Button>
              <button 
                onClick={scrollToHowItWorks}
                className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                See how it works
              </button>
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
