import { TrendingUp, Users, DollarSign, Clock, Target } from "lucide-react";

const Insights = () => {
  const insights = [
    {
      title: "Customer segments",
      description: "AI-identified patterns in your customer base",
      icon: Users,
      visual: "segments"
    },
    {
      title: "Upsell opportunities",
      description: "Revenue potential from existing customers",
      icon: Target,
      visual: "upsell"
    },
    {
      title: "Job duration trends",
      description: "Time patterns across service types",
      icon: Clock,
      visual: "duration"
    },
    {
      title: "Revenue per customer",
      description: "Lifetime value insights and forecasts",
      icon: DollarSign,
      visual: "revenue"
    }
  ];

  // Mini visualization components
  
  // Customer segments - shows distinct customer clusters with interconnected nodes
  const SegmentVisual = () => (
    <div className="relative w-full h-full overflow-hidden">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 80" preserveAspectRatio="xMidYMid meet">
        <line x1="25" y1="25" x2="50" y2="40" stroke="hsl(var(--muted-foreground))" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="75" y1="20" x2="50" y2="40" stroke="hsl(var(--muted-foreground))" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="20" y1="60" x2="50" y2="40" stroke="hsl(var(--muted-foreground))" strokeOpacity="0.2" strokeWidth="1" />
        <line x1="80" y1="55" x2="50" y2="40" stroke="hsl(var(--muted-foreground))" strokeOpacity="0.2" strokeWidth="1" />
        {/* Mobile animated connection pulse */}
        <circle className="md:hidden" cx="50" cy="40" r="3" fill="none" stroke="hsl(var(--accent))" strokeOpacity="0.3">
          <animate attributeName="r" values="3;20;3" dur="3s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
      
      {/* Segment clusters - with mobile floating animation */}
      <div className="absolute top-2 left-1 md:top-3 md:left-3 flex -space-x-1" style={{ animation: 'float 3s ease-in-out infinite' }}>
        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent/80 border border-background md:animate-none" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent/60 border border-background" />
        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent/40 border border-background" />
      </div>
      <div className="absolute top-1 right-2 md:right-4 flex -space-x-1" style={{ animation: 'float 3.5s ease-in-out infinite reverse' }}>
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-muted-foreground/40 border border-background" />
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-muted-foreground/30 border border-background" />
      </div>
      <div className="absolute bottom-2 left-1 md:bottom-3 md:left-2" style={{ animation: 'float 4s ease-in-out infinite' }}>
        <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent/50 border border-background" />
      </div>
      <div className="absolute bottom-2 right-1 md:bottom-2 md:right-3 flex -space-x-1" style={{ animation: 'float 3.2s ease-in-out infinite reverse' }}>
        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-muted-foreground/50 border border-background" />
        <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-muted-foreground/35 border border-background" />
        <div className="hidden md:block w-4 h-4 rounded-full bg-muted-foreground/25 border border-background" />
        <div className="hidden md:block w-4 h-4 rounded-full bg-muted-foreground/15 border border-background" />
      </div>
      
      {/* Center hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-accent animate-pulse" />
        {/* Mobile glow ring */}
        <div className="absolute inset-0 md:hidden rounded-full border border-accent/50" style={{ animation: 'ping 2s ease-in-out infinite' }} />
      </div>
      
      {/* Labels */}
      <div className="absolute top-3 left-8 md:top-4 md:left-10 text-[8px] md:text-[9px] font-mono text-accent">Premium</div>
      <div className="absolute bottom-1 right-6 md:right-14 text-[8px] md:text-[9px] font-mono text-muted-foreground">Regular</div>
    </div>
  );

  // Upsell opportunities - shows current vs potential revenue comparison
  const UpsellVisual = () => (
    <div className="relative w-full h-full flex items-end gap-1.5 md:gap-3 px-1 md:px-2 overflow-hidden">
      {/* Current revenue stack */}
      <div className="flex-1 flex flex-col items-center min-w-0">
        <div className="w-full flex flex-col-reverse gap-0.5">
          <div className="h-6 md:h-8 w-full bg-muted-foreground/30 rounded-sm" />
          <div className="h-4 md:h-5 w-full bg-muted-foreground/20 rounded-sm" />
          <div className="h-2 md:h-3 w-full bg-muted-foreground/10 rounded-sm" />
        </div>
        <span className="text-[8px] md:text-[9px] text-muted-foreground mt-1 font-mono">Current</span>
      </div>
      
      {/* Arrow - with mobile animation */}
      <div className="flex flex-col items-center justify-center pb-3 md:pb-4 flex-shrink-0">
        <svg width="14" height="10" viewBox="0 0 20 12" fill="none" className="md:w-5 md:h-3" style={{ animation: 'bounceX 1.5s ease-in-out infinite' }}>
          <path d="M0 6H16M16 6L11 1M16 6L11 11" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Potential revenue stack */}
      <div className="flex-1 flex flex-col items-center min-w-0">
        <div className="w-full flex flex-col-reverse gap-0.5 relative">
          <div className="h-6 md:h-8 w-full bg-accent/80 rounded-sm" />
          <div className="h-4 md:h-5 w-full bg-accent/60 rounded-sm" />
          <div className="h-2 md:h-3 w-full bg-accent/40 rounded-sm" />
          <div className="h-3 md:h-4 w-full bg-accent/90 rounded-sm border border-dashed border-accent animate-pulse relative overflow-hidden">
            {/* Mobile shimmer on upsell bar */}
            <div className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0" style={{ animation: 'shimmer 1.5s ease-in-out infinite' }} />
          </div>
          {/* Mobile stack glow */}
          <div 
            className="absolute inset-0 md:hidden bg-gradient-to-t from-accent/20 to-transparent pointer-events-none"
            style={{ animation: 'pulse 2s ease-in-out infinite' }}
          />
        </div>
        <span className="text-[8px] md:text-[9px] text-accent mt-1 font-mono">+$2.4k</span>
      </div>
    </div>
  );

  // Job duration trends - shows time distribution with clock-inspired visual
  const DurationVisual = () => (
    <div className="relative w-full h-full flex items-center gap-2 md:gap-4 overflow-hidden">
      {/* Mini clock */}
      <div className="relative w-10 h-10 md:w-14 md:h-14 flex-shrink-0">
        <div className="absolute inset-0 rounded-full border border-border/50" />
        <div className="absolute inset-0.5 md:inset-1 rounded-full border border-muted-foreground/20" />
        {/* Hour markers */}
        {[0, 90, 180, 270].map((deg, i) => (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 w-0.5 h-1 md:h-1.5 bg-muted-foreground/40 origin-bottom"
            style={{ transform: `translate(-50%, -100%) rotate(${deg}deg) translateY(-14px)` }}
          />
        ))}
        {/* Clock hands - with mobile rotation animation */}
        <div 
          className="absolute top-1/2 left-1/2 w-0.5 h-3 md:h-4 bg-accent origin-bottom -translate-x-1/2 -translate-y-full"
          style={{ animation: 'clockHand 8s linear infinite', transform: 'translateX(-50%) translateY(-100%) rotate(60deg)' }}
        />
        <div className="absolute top-1/2 left-1/2 w-0.5 h-2 md:h-3 bg-muted-foreground/60 origin-bottom -translate-x-1/2 -translate-y-full rotate-[-30deg]" />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2" />
        {/* Mobile clock glow */}
        <div 
          className="absolute inset-0 md:hidden rounded-full border-2 border-accent/20"
          style={{ animation: 'pulse 3s ease-in-out infinite' }}
        />
      </div>
      
      {/* Time breakdown */}
      <div className="flex-1 flex flex-col gap-1 md:gap-1.5 min-w-0">
        <div className="flex items-center gap-1 md:gap-2">
          <span className="text-[8px] md:text-[9px] text-muted-foreground w-6 md:w-10 font-mono">Avg</span>
          <div className="flex-1 h-1.5 md:h-2 bg-accent/20 rounded-full overflow-hidden relative">
            <div 
              className="h-full w-[65%] bg-accent rounded-full relative overflow-hidden"
              style={{ animation: 'progressPulse 2s ease-in-out infinite' }}
            >
              {/* Mobile bar shimmer */}
              <div className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/0 via-white/30 to-accent/0" style={{ animation: 'shimmer 2s ease-in-out infinite' }} />
            </div>
          </div>
          <span className="text-[8px] md:text-[9px] text-accent font-mono">2.4h</span>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <span className="text-[8px] md:text-[9px] text-muted-foreground w-6 md:w-10 font-mono">Peak</span>
          <div className="flex-1 h-1.5 md:h-2 bg-muted-foreground/10 rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-muted-foreground/40 rounded-full" />
          </div>
          <span className="text-[8px] md:text-[9px] text-muted-foreground font-mono">3.1h</span>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <span className="text-[8px] md:text-[9px] text-muted-foreground w-6 md:w-10 font-mono">Min</span>
          <div className="flex-1 h-1.5 md:h-2 bg-muted-foreground/10 rounded-full overflow-hidden">
            <div className="h-full w-[35%] bg-muted-foreground/30 rounded-full" />
          </div>
          <span className="text-[8px] md:text-[9px] text-muted-foreground font-mono">1.2h</span>
        </div>
      </div>
    </div>
  );

  // Revenue per customer - shows individual customer value with comparison
  const RevenueVisual = () => (
    <div className="relative w-full h-full overflow-hidden">
      {/* Customer value cards */}
      <div className="flex gap-1 md:gap-2 h-full items-end">
        {[
          { value: "$340", label: "Low", height: 35, active: false },
          { value: "$580", label: "Avg", height: 55, active: false },
          { value: "$1.2k", label: "High", height: 85, active: true },
        ].map((customer, i) => (
          <div 
            key={i} 
            className="flex-1 flex flex-col items-center min-w-0"
          >
            <div 
              className={`w-full rounded-t flex flex-col items-center justify-end pb-0.5 md:pb-1 transition-all relative overflow-hidden ${
                customer.active 
                  ? 'bg-gradient-to-t from-accent to-accent/40' 
                  : 'bg-gradient-to-t from-muted-foreground/30 to-muted-foreground/10'
              }`}
              style={{ height: `${customer.height}%` }}
            >
              {/* Mobile bar animations */}
              {customer.active && (
                <>
                  <div 
                    className="absolute inset-0 md:hidden bg-gradient-to-t from-accent/30 to-transparent"
                    style={{ animation: 'pulse 2s ease-in-out infinite' }}
                  />
                  <div 
                    className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/0 via-white/20 to-accent/0"
                    style={{ animation: 'shimmer 2s ease-in-out infinite' }}
                  />
                </>
              )}
              <span className={`text-[8px] md:text-[10px] font-mono font-medium relative z-10 ${
                customer.active ? 'text-background' : 'text-muted-foreground'
              }`}>
                {customer.value}
              </span>
            </div>
            <span className={`text-[7px] md:text-[8px] mt-0.5 md:mt-1 font-mono ${
              customer.active ? 'text-accent' : 'text-muted-foreground'
            }`}>
              {customer.label}
            </span>
          </div>
        ))}
      </div>
      
      {/* Target indicator - with mobile animation */}
      <div className="absolute top-1 right-0 md:top-2 flex items-center gap-0.5 md:gap-1">
        <div className="h-px w-4 md:w-6 border-t border-dashed border-accent/50" />
        <TrendingUp 
          className="w-2.5 h-2.5 md:w-3 md:h-3 text-accent"
          style={{ animation: 'bounce 2s ease-in-out infinite' }}
        />
      </div>
    </div>
  );

  const getVisual = (type: string) => {
    switch (type) {
      case "segments": return <SegmentVisual />;
      case "upsell": return <UpsellVisual />;
      case "duration": return <DurationVisual />;
      case "revenue": return <RevenueVisual />;
      default: return null;
    }
  };

  return (
    <section className="pt-16 pb-8 md:py-32 px-[3px] md:px-12 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        <span className="text-xs md:text-sm font-mono text-accent tracking-wider uppercase mb-2 block fade-in">The Data</span>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-3 md:mb-4 fade-in">
          Insights you didn't know you had
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-8 md:mb-12 max-w-xl fade-in" style={{ animationDelay: '0.1s' }}>
          Carbon surfaces patterns hidden in your data, turning everyday operations into strategic advantages.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div
                key={index}
                className="group p-4 md:p-6 rounded-xl bg-card/50 border border-border/50 hover:border-accent/30 transition-all duration-300 fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-3 md:w-4 h-3 md:h-4 text-accent" />
                  </div>
                  <h3 className="text-xs md:text-sm font-medium text-foreground">{insight.title}</h3>
                </div>
                
                <div className="h-20 md:h-24 mb-3 md:mb-4">
                  {getVisual(insight.visual)}
                </div>
                
                <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
                  {insight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Insights;
