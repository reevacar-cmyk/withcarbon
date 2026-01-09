import { MapPin, Users, Calendar } from "lucide-react";

const SocialProof = () => {
  // University logos as styled text badges
  const universities = [
    { name: "Cornell", mobileColor: "bg-red-500/20 text-red-400 border-red-500/30", desktopColor: "md:bg-red-100 md:text-red-700 md:border-red-200" },
    { name: "MIT", mobileColor: "bg-zinc-500/20 text-zinc-300 border-zinc-500/30", desktopColor: "md:bg-zinc-200 md:text-zinc-700 md:border-zinc-300" },
    { name: "Boston College", mobileColor: "bg-amber-500/20 text-amber-400 border-amber-500/30", desktopColor: "md:bg-amber-100 md:text-amber-700 md:border-amber-200" },
    { name: "Northeastern", mobileColor: "bg-red-500/20 text-red-400 border-red-500/30", desktopColor: "md:bg-red-100 md:text-red-700 md:border-red-200" },
  ];

  const stats = [
    { value: "40+", label: "Active Partners", icon: Users },
    { value: "6", label: "Months Building", icon: Calendar },
  ];

  return (
    <section className="py-16 md:py-32 px-[3px] md:px-12 lg:px-24 bg-black md:bg-background">
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
              <span className="text-muted-foreground">who've detailed cars</span>
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

        {/* Desktop Layout - Distinctive horizontal band */}
        <div className="hidden md:block">
          <div className="relative py-8 px-12 lg:px-16 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 border-y border-accent/20 -mx-12 lg:-mx-24">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--accent) / 0.15) 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }} />
            
            <div className="relative flex items-center justify-between gap-8 max-w-6xl mx-auto">
              {/* Left - Team identity */}
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['C', 'M', 'B', 'N'].map((letter, i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-background border-2 border-accent/30 flex items-center justify-center text-sm font-bold text-foreground shadow-sm"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Engineers who've detailed cars</p>
                  <p className="text-xs text-muted-foreground">Cornell · MIT · Boston College · Northeastern</p>
                </div>
              </div>
              
              {/* Center - Stats */}
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground font-mono">40+</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Partners</div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground font-mono">6</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Months</div>
                </div>
              </div>
              
              {/* Right - Location */}
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <div className="text-sm">
                  <span className="text-muted-foreground">Active in </span>
                  <span className="text-foreground font-medium">MA</span>
                  <span className="text-muted-foreground"> & </span>
                  <span className="text-foreground font-medium">NY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;