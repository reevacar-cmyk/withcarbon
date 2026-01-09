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

        {/* Desktop Layout - Distinctive bordered section */}
        <div className="hidden md:block">
          <div className="border border-border rounded-2xl p-10 lg:p-12 bg-[hsl(40_20%_97%)]">
            <div className="flex items-center justify-between">
              {/* Left - Main statement */}
              <div className="max-w-md">
                <h3 className="text-2xl lg:text-3xl font-semibold text-foreground leading-tight mb-2">
                  Built by engineers who've detailed cars
                </h3>
                <p className="text-sm text-muted-foreground">
                  We've been in the bay. We know what it takes.
                </p>
              </div>
              
              {/* Right - Credentials grid */}
              <div className="flex items-center gap-10 lg:gap-14">
                {/* Universities */}
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Team from</div>
                  <div className="flex items-center gap-2">
                    {['Cornell', 'MIT', 'BC', 'NEU'].map((uni, i) => (
                      <span key={i} className="text-sm font-medium text-foreground px-2.5 py-1 bg-background border border-border rounded-md">
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Divider */}
                <div className="w-px h-12 bg-border" />
                
                {/* Stats */}
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">40+</div>
                    <div className="text-xs text-muted-foreground">Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">MA & NY</div>
                    <div className="text-xs text-muted-foreground">Active regions</div>
                  </div>
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