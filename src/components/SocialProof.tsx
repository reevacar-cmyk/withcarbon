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
    <section className="py-16 md:py-16 px-[3px] md:px-12 lg:px-24 bg-black md:bg-background">
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
              <span className="text-muted-foreground">who've detailed 300+ cars</span>
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

        {/* Desktop Layout - Bold dark card */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden rounded-2xl bg-[hsl(0_0%_8%)] p-10 lg:p-14">
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
            
            <div className="relative">
              {/* Top row - Large statement */}
              <div className="mb-10">
                <h3 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] max-w-2xl">
                  Built by engineers who've 
                  <span className="text-accent"> detailed 300+ cars</span>
                </h3>
              </div>
              
              {/* Bottom row - Credentials */}
              <div className="flex items-end justify-between">
                {/* Left - Tagline */}
                <p className="text-base text-white/60 max-w-xs">
                  We've been in the bay. We know what it takes to run a detail business.
                </p>
                
                {/* Right - Stats and schools */}
                <div className="flex items-center gap-10">
                  {/* Schools */}
                  <div className="flex items-center gap-3">
                    {['Cornell', 'MIT', 'BC', 'NEU'].map((uni, i) => (
                      <span key={i} className="text-xs font-medium text-white/50 px-3 py-1.5 border border-white/10 rounded-full">
                        {uni}
                      </span>
                    ))}
                  </div>
                  
                  {/* Divider */}
                  <div className="w-px h-8 bg-white/20" />
                  
                  {/* Stats */}
                  <div className="flex items-center gap-6">
                    <div>
                      <span className="text-2xl font-bold text-white">40+</span>
                      <span className="text-sm text-white/50 ml-2">partners</span>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-white">MA</span>
                      <span className="text-sm text-white/50 mx-1">&</span>
                      <span className="text-2xl font-bold text-white">NY</span>
                    </div>
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