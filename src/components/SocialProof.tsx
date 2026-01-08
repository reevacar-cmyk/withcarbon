import { MapPin, Users, Calendar } from "lucide-react";

const SocialProof = () => {
  // University logos as styled text badges
  const universities = [
    { name: "Cornell", mobileColor: "bg-red-500/20 text-red-400 border-red-500/30", desktopColor: "md:bg-red-900/20 md:text-red-400/80 md:border-red-900/30" },
    { name: "MIT", mobileColor: "bg-zinc-500/20 text-zinc-300 border-zinc-500/30", desktopColor: "md:bg-zinc-700/30 md:text-zinc-300 md:border-zinc-600/30" },
    { name: "Boston College", mobileColor: "bg-amber-500/20 text-amber-400 border-amber-500/30", desktopColor: "md:bg-amber-900/20 md:text-amber-500/80 md:border-amber-900/30" },
    { name: "Northeastern", mobileColor: "bg-red-500/20 text-red-400 border-red-500/30", desktopColor: "md:bg-red-950/20 md:text-red-500/70 md:border-red-950/30" },
  ];

  const stats = [
    { value: "40+", label: "Active Partners", icon: Users },
    { value: "6", label: "Months Building", icon: Calendar },
  ];

  return (
    <section className="py-16 md:py-32 px-[3px] md:px-12 lg:px-24 bg-black md:bg-card">
      <div className="container mx-auto max-w-5xl">
        
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Mobile Header */}
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-mono mb-3 block">
              Who We Are
            </span>
            <h2 className="text-2xl font-semibold text-white leading-tight mb-2">
              Built by engineers
              <br />
              <span className="text-muted-foreground">who've worked the detail bay</span>
            </h2>
          </div>

          {/* Mobile University Badges - Horizontal scroll */}
          <div className="flex justify-center flex-wrap gap-2 mb-10 px-2">
            {universities.map((uni, index) => (
              <div
                key={index}
                className={`px-3 py-1.5 rounded-full border ${uni.mobileColor} font-mono text-[10px] tracking-wide`}
              >
                {uni.name}
              </div>
            ))}
          </div>

          {/* Mobile Stats - Card style */}
          <div className="grid grid-cols-2 gap-3 mb-10 px-2">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-center"
                >
                  <Icon className="w-4 h-4 text-muted-foreground mx-auto mb-2" />
                  <div className="text-2xl font-semibold text-white mb-0.5 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-[9px] text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Location */}
          <div className="text-center px-2">
            <div className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2">
              <MapPin className="w-3 h-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Working with detailers in</span>
            </div>
            <div className="flex items-center justify-center gap-3 mt-3">
              <span className="text-sm text-white font-medium">Massachusetts</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span className="text-sm text-white font-medium">New York</span>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original */}
        <div className="hidden md:block">
          {/* Main headline */}
          <div className="text-center mb-16 fade-in">
            <p className="text-2xl lg:text-3xl text-foreground leading-relaxed font-medium">
              Built by engineers who've been in the bay
            </p>
            <p className="text-base text-muted-foreground mt-3">
              A team of former detailers and software engineers from
            </p>
          </div>

          {/* University badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 fade-in" style={{ animationDelay: '0.1s' }}>
            {universities.map((uni, index) => (
              <div
                key={index}
                className={`px-5 py-2.5 rounded-full border ${uni.desktopColor} font-mono text-sm tracking-wide`}
              >
                {uni.name}
              </div>
            ))}
          </div>

          {/* Divider with icon */}
          <div className="flex items-center justify-center gap-4 mb-16 fade-in" style={{ animationDelay: '0.15s' }}>
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-border" />
            <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-accent" />
            </div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 justify-center gap-12 max-w-md mx-auto mb-16 fade-in" style={{ animationDelay: '0.2s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-semibold text-foreground mb-1 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Location context */}
          <div className="text-center fade-in" style={{ animationDelay: '0.25s' }}>
            <p className="text-base text-muted-foreground">
              Working with detailers across
            </p>
            <div className="flex items-center justify-center gap-4 mt-3">
              <span className="text-base text-foreground font-medium">Massachusetts</span>
              <span className="text-muted-foreground/50">•</span>
              <span className="text-base text-foreground font-medium">New York</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;