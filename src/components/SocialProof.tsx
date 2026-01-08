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
    <section className="py-16 md:py-32 px-3 md:px-12 lg:px-24 bg-card">
      <div className="container mx-auto max-w-5xl">
        {/* Main headline */}
        <div className="text-center mb-10 md:mb-16 fade-in">
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed font-medium">
            Built by engineers who've been in the bay
          </p>
          <p className="text-sm md:text-base text-muted-foreground mt-2 md:mt-3">
            A team of former detailers and software engineers from
          </p>
        </div>

        {/* University badges */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-16 fade-in" style={{ animationDelay: '0.1s' }}>
          {universities.map((uni, index) => (
            <div
              key={index}
              className={`px-3 md:px-5 py-2 md:py-2.5 rounded-full border ${uni.color} font-mono text-xs md:text-sm tracking-wide`}
            >
              {uni.name}
            </div>
          ))}
        </div>

        {/* Divider with icon */}
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-16 fade-in" style={{ animationDelay: '0.15s' }}>
          <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-border" />
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
            <MapPin className="w-3 md:w-4 h-3 md:h-4 text-accent" />
          </div>
          <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-border" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-md mx-auto mb-10 md:mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-1 font-mono">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Location context */}
        <div className="text-center fade-in" style={{ animationDelay: '0.25s' }}>
          <p className="text-sm md:text-base text-muted-foreground">
            Currently working with detailers and shops across
          </p>
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-2 md:mt-3">
            <span className="text-sm md:text-base text-foreground font-medium">Massachusetts</span>
            <span className="text-muted-foreground/50">•</span>
            <span className="text-sm md:text-base text-foreground font-medium">New York</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;