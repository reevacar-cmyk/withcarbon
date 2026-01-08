import { Button } from "@/components/ui/button";
import AbstractGraphic from "./AbstractGraphic";
import heroPrismBg from "@/assets/hero-prism-bg.jpg";

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
    <section className="min-h-screen pb-12 px-6 md:px-12 lg:px-4 pt-[180px] relative overflow-hidden">
      {/* Background prism image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={heroPrismBg} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-foreground fade-in">
              AI-native customer + job operations platform
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg fade-in fade-in-delay-1">
              Built for operators with hands busy cleaning cars, on the road, and answering calls — while customers, jobs, and follow-ups fall through the cracks.
            </p>
            <div className="flex flex-wrap items-center gap-4 fade-in fade-in-delay-2">
              <Button onClick={scrollToPartnerForm} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8">
                Become a design partner
              </Button>
              <button onClick={scrollToHowItWorks} className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4">
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