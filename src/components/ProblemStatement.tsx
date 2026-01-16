import { PhoneMissed, Users, AlertTriangle, DollarSign, UserX, UserMinus, Clock, Info } from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";

// Dust particle component for Thanos snap effect with varying sizes
const DustParticle = ({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) => (
  <div
    className="absolute rounded-full bg-[hsl(0_100%_50%)] opacity-0"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
      animation: `dustFloat 1.5s ease-out ${delay}s forwards`,
    }}
  />
);

// Count-up animation component with synced Thanos snap disintegration
const CountUpMetric = ({ 
  value, 
  prefix = "", 
  suffix = "",
  isDisintegrating = false,
  isReappearing = false 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string;
  isDisintegrating?: boolean;
  isReappearing?: boolean;
}) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Generate random dust particles with varying sizes - memoized to prevent regeneration
  const dustParticles = useMemo(() => Array.from({ length: 80 }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.8,
    x: Math.random() * 120 - 10,
    y: Math.random() * 120 - 10,
    size: Math.random() * 4 + 1, // 1px to 5px
  })), []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (resetTimeoutRef.current) {
            clearTimeout(resetTimeoutRef.current);
            resetTimeoutRef.current = null;
          }
          setIsInView(true);
        } else {
          setIsInView(false);
          resetTimeoutRef.current = setTimeout(() => {
            setCount(0);
            setHasAnimated(false);
          }, 10000);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);
    const duration = 1200;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quint - slows down more dramatically at the end
      const eased = 1 - Math.pow(1 - progress, 5);
      const current = Math.round(eased * value);
      
      setCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, hasAnimated, value]);

  return (
    <span ref={ref} className="relative inline-block">
      <span 
        className={`transition-all duration-1000 ${
          isDisintegrating ? 'opacity-0 blur-sm translate-x-4 -translate-y-2' : ''
        } ${isReappearing ? 'animate-[fadeIn_0.8s_ease-out_forwards]' : ''}`}
      >
        {prefix}{count}{suffix}
      </span>
      {isDisintegrating && (
        <span className="absolute inset-0 overflow-visible pointer-events-none">
          {dustParticles.map((particle) => (
            <DustParticle key={particle.id} delay={particle.delay} x={particle.x} y={particle.y} size={particle.size} />
          ))}
        </span>
      )}
    </span>
  );
};

const ProblemStatement = () => {
  const [isDisintegrating, setIsDisintegrating] = useState(false);
  const [isReappearing, setIsReappearing] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const disintegrateTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reappearTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cycleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const calculations = [
    "10+ leads/day × 37% missed × $250 avg job",
    "1,000+ customers × 70% don't return × $250 avg job",
    "Logging into CRM + Tracking customers → Not growing"
  ];

  const showTooltip = (index: number) => {
    if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    setActiveTooltip(index);
    tooltipTimeoutRef.current = setTimeout(() => {
      setActiveTooltip(null);
    }, 5000);
  };

  const hideTooltip = () => {
    if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    setActiveTooltip(null);
  };

  // Close tooltip on any tap outside
  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.info-tooltip-trigger') && !target.closest('.info-tooltip')) {
        hideTooltip();
      }
    };
    
    document.addEventListener('click', handleClick);
    document.addEventListener('touchstart', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleClick);
      if (tooltipTimeoutRef.current) clearTimeout(tooltipTimeoutRef.current);
    };
  }, []);

  const startDisintegrationCycle = () => {
    setIsDisintegrating(true);
    setIsReappearing(false);
    
    // After 2s of disintegrating, wait 3s then reappear
    reappearTimeoutRef.current = setTimeout(() => {
      setIsDisintegrating(false);
      setIsReappearing(true);
      
      // After reappear animation, schedule next cycle
      setTimeout(() => {
        setIsReappearing(false);
        cycleTimeoutRef.current = setTimeout(() => {
          startDisintegrationCycle();
        }, 6000);
      }, 1000);
    }, 5000); // 2s disintegrate + 3s hidden
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Start first cycle after 6 seconds
          if (!isDisintegrating && !isReappearing) {
            disintegrateTimeoutRef.current = setTimeout(() => {
              startDisintegrationCycle();
            }, 6000);
          }
        } else {
          // Clear all timers when out of view
          if (disintegrateTimeoutRef.current) clearTimeout(disintegrateTimeoutRef.current);
          if (reappearTimeoutRef.current) clearTimeout(reappearTimeoutRef.current);
          if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current);
          setIsDisintegrating(false);
          setIsReappearing(false);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (disintegrateTimeoutRef.current) clearTimeout(disintegrateTimeoutRef.current);
      if (reappearTimeoutRef.current) clearTimeout(reappearTimeoutRef.current);
      if (cycleTimeoutRef.current) clearTimeout(cycleTimeoutRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-16 md:pt-20 pb-6 md:pb-16 px-[3px] md:px-12 lg:px-24 relative bg-background md:bg-[hsl(40_20%_94%)]">
      <div className="container mx-auto max-w-5xl">
        {/* Mobile: Bold problem visualization */}
        <div className="md:hidden">
          {/* Section label */}
          <div className="mb-3 fade-in flex items-center gap-2">
            <div className="w-5 h-5 rounded-sm bg-red-500/10 border border-red-500/30 flex items-center justify-center">
              <AlertTriangle className="w-3 h-3 text-red-500" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase font-medium">
              THE PROBLEM
            </span>
          </div>

          {/* Bold headline */}
          <h2 className="text-[32px] font-bold leading-[0.95] tracking-tight fade-in mb-2" style={{ animationDelay: '0.1s' }}>
            You're leaving money<br />
            on the table.
          </h2>
          
          <p className="text-sm text-muted-foreground mb-6 fade-in" style={{ animationDelay: '0.15s' }}>
            Every day, revenue slips through the cracks.
          </p>

          {/* Three problem items */}
          <div className="space-y-8">
            {/* Item 1: Missed Leads */}
            <div className="fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <PhoneMissed className="w-4 h-4 text-foreground" />
                    <span className="font-mono text-[10px] tracking-[0.1em] text-foreground uppercase font-medium">
                      Missed Leads
                    </span>
                  </div>
                  
                  <div className="text-5xl font-bold text-[hsl(0_100%_50%)] leading-none tracking-tight mb-1">
                    <CountUpMetric value={34} prefix="$" suffix="K+" isDisintegrating={isDisintegrating} isReappearing={isReappearing} />
                  </div>
                  <div className="text-xs text-foreground/70">
                    lost per year
                  </div>
                </div>
                
                <div className="relative">
                  <button 
                    className="info-tooltip-trigger p-2 rounded-full hover:bg-muted/50 transition-colors"
                    onClick={(e) => { e.stopPropagation(); showTooltip(0); }}
                  >
                    <Info className="w-4 h-4 text-muted-foreground" />
                  </button>
                  {activeTooltip === 0 && (
                    <div className="info-tooltip absolute right-0 top-full mt-2 w-48 p-3 bg-foreground text-background text-[11px] font-mono rounded-sm shadow-lg z-50">
                      {calculations[0]}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Item 2: Untapped Customers */}
            <div className="fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-foreground" />
                    <span className="font-mono text-[10px] tracking-[0.1em] text-foreground uppercase font-medium">
                      Past Customers Not Returning
                    </span>
                  </div>
                  
                  <div className="text-5xl font-bold text-[hsl(0_100%_50%)] leading-none tracking-tight mb-1">
                    <CountUpMetric value={175} prefix="$" suffix="K+" isDisintegrating={isDisintegrating} isReappearing={isReappearing} />
                  </div>
                  <div className="text-xs text-foreground/70">
                    sitting untapped
                  </div>
                </div>
                
                <div className="relative">
                  <button 
                    className="info-tooltip-trigger p-2 rounded-full hover:bg-muted/50 transition-colors"
                    onClick={(e) => { e.stopPropagation(); showTooltip(1); }}
                  >
                    <Info className="w-4 h-4 text-muted-foreground" />
                  </button>
                  {activeTooltip === 1 && (
                    <div className="info-tooltip absolute right-0 top-full mt-2 w-52 p-3 bg-foreground text-background text-[11px] font-mono rounded-sm shadow-lg z-50">
                      {calculations[1]}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Item 3: Time Wasted on Admin */}
            <div className="fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-foreground" />
                    <span className="font-mono text-[10px] tracking-[0.1em] text-foreground uppercase font-medium">
                      Time Lost to Admin
                    </span>
                  </div>
                  
                  <div className="text-5xl font-bold text-[hsl(0_100%_50%)] leading-none tracking-tight mb-1">
                    <CountUpMetric value={14} suffix="hrs+" isDisintegrating={isDisintegrating} isReappearing={isReappearing} />
                  </div>
                  <div className="text-xs text-foreground/70">
                    wasted per week
                  </div>
                </div>
                
                <div className="relative">
                  <button 
                    className="info-tooltip-trigger p-2 rounded-full hover:bg-muted/50 transition-colors"
                    onClick={(e) => { e.stopPropagation(); showTooltip(2); }}
                  >
                    <Info className="w-4 h-4 text-muted-foreground" />
                  </button>
                  {activeTooltip === 2 && (
                    <div className="info-tooltip absolute right-0 top-full mt-2 w-52 p-3 bg-foreground text-background text-[11px] font-mono rounded-sm shadow-lg z-50">
                      {calculations[2]}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-4 text-center fade-in" style={{ animationDelay: '0.5s' }}>
            <span className="text-xs text-muted-foreground">
              And it happens while you're busy doing the actual work.
            </span>
          </div>
        </div>

        {/* Desktop header */}
        <div className="hidden md:block text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase mb-6 fade-in text-red-500">
            The Problem
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Revenue</span>
            <br />
            <span className="text-red-500">bleeding out.</span>
          </h2>
        </div>

        {/* Desktop: Stats grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { stat: "67%", label: "of calls missed", description: "While you're polishing a hood", icon: PhoneMissed },
            { stat: "23%", label: "no-show rate", description: "Bookings that never confirm", icon: UserX },
            { stat: "$2.4k", label: "lost monthly", description: "From customers who don't rebook", icon: DollarSign },
            { stat: "2 in 3", label: "customers gone", description: "After their first detail", icon: UserMinus }
          ].map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="group text-center p-6 rounded-2xl bg-card/50 border border-border/50 transition-all duration-300 fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div 
                  className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgb(255 0 0 / 0.1)', border: '1px solid rgb(255 0 0 / 0.2)' }}
                >
                  <Icon className="w-5 h-5 text-red-500" />
                </div>
                <div className="text-4xl font-bold mb-1 text-red-500">
                  {problem.stat}
                </div>
                <div className="text-sm text-foreground font-medium mb-2">
                  {problem.label}
                </div>
                <p className="text-xs text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
