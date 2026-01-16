import { Button } from "@/components/ui/button";
import iconDirectAccess from "@/assets/icon-direct-access.png";
import iconShapeProduct from "@/assets/icon-shape-product.png";
import iconLifetimeBenefits from "@/assets/icon-lifetime-benefits.png";

const DesignPartnerForm = () => {
  const handleBookDemo = () => {
    // Open calendly or contact form
    window.open('https://calendly.com', '_blank');
  };

  const benefits = [
    {
      icon: iconDirectAccess,
      title: "Direct Access",
      description: "Weekly or bi-weekly calls with our engineering team"
    },
    {
      icon: iconShapeProduct,
      title: "Shape the Product",
      description: "Your feedback directly influences what we build next"
    },
    {
      icon: iconLifetimeBenefits,
      title: "Lifetime Benefits",
      description: "Locked-in discounts and priority access forever"
    }
  ];

  return (
    <section id="partner-form" className="py-16 md:pt-16 md:pb-32 px-[3px] md:px-12 lg:px-24 bg-black">
      <div className="container mx-auto max-w-3xl">
        {/* Grand header */}
        <div className="text-center space-y-4 md:space-y-6 mb-10 md:mb-14 fade-in">
          <span className="text-xs uppercase tracking-[0.2em] text-white md:text-accent font-mono">
            Limited Availability
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Shape the future<br />
            <span className="text-white md:text-accent">with us.</span>
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-lg mx-auto leading-relaxed">
            We're looking for 100 detail businesses to join our design partner program — 
            work directly with our team to build the AI platform you actually need.
          </p>
        </div>

        {/* What you get - with shiny icons */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-14 fade-in fade-in-delay-1">
          {benefits.map((item, i) => (
            <div 
              key={i} 
              className="text-center flex flex-col items-center"
            >
              <div className="w-72 h-72 md:w-[360px] md:h-[360px] mb-6 relative">
                <img 
                  src={item.icon} 
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed max-w-[200px]">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Spots remaining indicator */}
        <div className="flex items-center justify-center gap-3 mb-8 fade-in fade-in-delay-1">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-white/20 md:bg-accent/20 border-2 border-[hsl(0_0%_10%)] flex items-center justify-center">
                <span className="text-[10px] text-white md:text-accent font-bold">✓</span>
              </div>
            ))}
          </div>
          <span className="text-sm text-white/60">40+ partners already joined</span>
        </div>

        {/* CTA Button only */}
        <div className="fade-in fade-in-delay-2 max-w-md mx-auto text-center">
          <Button 
            onClick={handleBookDemo}
            className="w-full bg-white hover:bg-white/90 text-neutral-900 md:bg-accent md:hover:bg-accent/90 md:text-accent-foreground font-semibold h-12 text-base"
          >
            Book a demo
          </Button>
          <p className="text-[11px] text-white/40 mt-4">
            We'll reach out within 48 hours to schedule your first call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignPartnerForm;
