import { MapPin } from "lucide-react";

const SocialProof = () => {
  // University logos as styled text badges (abstract representation)
  const universities = [
    { name: "Cornell", color: "bg-red-900/20 text-red-400/80 border-red-900/30" },
    { name: "MIT", color: "bg-zinc-700/30 text-zinc-300 border-zinc-600/30" },
    { name: "Boston College", color: "bg-amber-900/20 text-amber-500/80 border-amber-900/30" },
    { name: "Northeastern", color: "bg-red-950/20 text-red-500/70 border-red-950/30" },
  ];

  const stats = [
    { value: "40+", label: "Active Partners" },
    { value: "6", label: "Months Building" },
  ];

  return (
    <section className="py-12 md:py-32 px-[3px] md:px-12 lg:px-24 bg-card">
      <div className="container mx-auto max-w-5xl">
        {/* Main headline */}
        <div className="text-center mb-6 md:mb-16 fade-in">
          <p className="text-lg md:text-2xl lg:text-3xl text-foreground leading-relaxed font-medium">
            Built by engineers who've been in the bay
          </p>
          <p className="text-xs md:text-base text-muted-foreground mt-1.5 md:mt-3">
            A team of former detailers and software engineers from
          </p>
        </div>

        {/* University badges */}
        <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 mb-6 md:mb-16 fade-in" style={{ animationDelay: '0.1s' }}>
          {universities.map((uni, index) => (
            <div
              key={index}
              className={`px-2.5 md:px-5 py-1.5 md:py-2.5 rounded-full border ${uni.color} font-mono text-[10px] md:text-sm tracking-wide`}
            >
              {uni.name}
            </div>
          ))}
        </div>

        {/* Stats + Location - condensed for mobile */}
        <div className="flex flex-col md:block">
          {/* Divider with icon - hidden on mobile */}
          <div className="hidden md:flex items-center justify-center gap-4 mb-16 fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-border" />
            <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-accent" />
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Stats - inline on mobile */}
          <div className="flex md:grid md:grid-cols-2 justify-center gap-6 md:gap-12 md:max-w-md md:mx-auto mb-4 md:mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-0.5 md:mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-[9px] md:text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Location context */}
          <div className="text-center fade-in" style={{ animationDelay: '0.25s' }}>
            <p className="text-xs md:text-base text-muted-foreground">
              Working with detailers across
            </p>
            <div className="flex items-center justify-center gap-2 md:gap-4 mt-1 md:mt-3">
              <span className="text-xs md:text-base text-foreground font-medium">Massachusetts</span>
              <span className="text-muted-foreground/50">•</span>
              <span className="text-xs md:text-base text-foreground font-medium">New York</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;