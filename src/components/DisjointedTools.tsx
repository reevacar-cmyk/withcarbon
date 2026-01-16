import { useState, useEffect, useRef } from "react";
import { ChevronDown, RefreshCw, PhoneOff, Cog, X } from "lucide-react";

const TIMER_DURATION = 16000; // 16 seconds

const DisjointedTools = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const tools = [
    {
      name: "Traditional CRMs",
      price: "$200/mo",
      icon: RefreshCw,
      tagline: "You become the database",
      description: "Every call, every text, every job — you have to manually log it. Miss a day? Data goes stale. It's a full-time job just keeping it updated.",
      painPoints: [
        "4+ hours/week manual data entry",
        "Contacts go stale in days",
        "Disconnected from calls and texts"
      ]
    },
    {
      name: "AI Voice Tools",
      price: "$650/mo",
      icon: PhoneOff,
      tagline: "A robotic script reader",
      description: "Picks up the phone, reads a script, forgets everything. Never learns. Never improves. $650/mo for a fancy answering machine.",
      painPoints: [
        "Zero memory between calls",
        "Never learns or improves",
        "Overpriced script reader"
      ]
    },
    {
      name: "AI Agencies",
      price: "$1,200/mo",
      icon: Cog,
      tagline: "Pay thousands for white-labeled tools",
      description: "$700 setup fee. $1,200/mo for white-labeled automation tools that break. Need a change? Call the agency. More money.",
      painPoints: [
        "$700+ agency setup fees",
        "White-labeled tools that break",
        "Enterprise prices for basic workflows"
      ]
    }
  ];

  const startTimer = () => {
    // Clear existing timers
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    
    setProgress(0);
    
    // Progress animation (update every 50ms for smooth animation)
    progressRef.current = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (50 / TIMER_DURATION) * 100;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 50);
    
    // Auto-advance timer
    intervalRef.current = setTimeout(() => {
      setOpenIndex(prev => (prev + 1) % 3);
    }, TIMER_DURATION);
  };

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Only run timer when section is in view
  useEffect(() => {
    if (isInView) {
      startTimer();
    } else {
      // Pause timer when out of view
      if (intervalRef.current) clearTimeout(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    }
    
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [openIndex, isInView]);

  const toggleAccordion = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <section ref={sectionRef} className="pt-6 pb-24 md:py-24 px-[3px] md:px-8 lg:px-16 bg-background md:bg-[hsl(40_20%_94%)]">
      <div className="container mx-auto max-w-6xl">
        {/* Mobile Layout - Minimal industrial scientific */}
        <div className="md:hidden">
          {/* Section label with status indicator */}
          <div className="mb-4 fade-in flex items-center gap-2">
            <div className="w-5 h-5 rounded-sm bg-red-500/10 border border-red-500/30 flex items-center justify-center">
              <Cog className="w-3 h-3 text-red-500" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              STATUS QUO
            </span>
          </div>

          {/* Clinical headline */}
          <h2 className="text-[28px] font-bold leading-[1] tracking-tight fade-in mb-6" style={{ animationDelay: '0.1s' }}>
            Tools that don't work.
          </h2>

          {/* Industrial tool analysis grid */}
          <div className="border border-border rounded-sm overflow-hidden fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Header row */}
            <div className="bg-muted/50 border-b border-border px-3 py-2 flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground uppercase">
                TOOL ANALYSIS
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                <span className="font-mono text-[8px] text-muted-foreground uppercase">INEFFICIENT</span>
              </div>
            </div>
            
            {/* Tool rows with accordion */}
            <div className="divide-y divide-border">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                const isOpen = openIndex === index;
                
                return (
                  <div key={index} className="bg-background">
                    {/* Row header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between px-3 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-sm border flex items-center justify-center transition-colors ${
                          isOpen ? 'bg-foreground/10 border-foreground/30' : 'bg-muted border-border'
                        }`}>
                          <Icon className={`w-4 h-4 transition-colors ${isOpen ? 'text-foreground' : 'text-muted-foreground'}`} />
                        </div>
                        <div className="text-left">
                          <span className="font-mono text-[11px] text-foreground font-medium block">
                            {tool.name}
                          </span>
                          <span className="font-mono text-[9px] text-muted-foreground">
                            {tool.price}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {isOpen && (
                          <div className="h-1 w-12 bg-foreground/20 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-foreground transition-all duration-50 ease-linear"
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        )}
                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </button>

                    {/* Expandable content */}
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-3 pb-3 border-t border-border/50 pt-3 bg-muted/30">
                        {/* Tagline */}
                        <p className="font-mono text-[10px] text-foreground font-medium mb-2 uppercase tracking-wide">
                          "{tool.tagline}"
                        </p>
                        
                        {/* Pain points as data rows */}
                        <div className="space-y-1">
                          {tool.painPoints.map((point, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <X className="w-3 h-3 text-red-500 flex-shrink-0" />
                              <span className="font-mono text-[9px] text-muted-foreground">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-4 fade-in text-red-500">
              The Status Quo
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
              <span className="text-foreground">Tools that</span>{" "}
              <span className="text-red-500">don't work.</span>
            </h2>
          </div>
          
          {/* Desktop grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={index}
                  className="bg-background border border-red-500/20 rounded-2xl overflow-hidden fade-in group hover:border-red-500/40 transition-colors"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  {/* Icon header */}
                  <div className="h-32 bg-red-500/[0.03] border-b border-red-500/10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/15 transition-colors">
                      <Icon className="w-8 h-8 text-red-500" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
                        <p className="text-xs text-muted-foreground">{tool.tagline}</p>
                      </div>
                      <span className="text-sm font-bold text-red-500">{tool.price}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {tool.description}
                    </p>

                    {/* Pain points */}
                    <div className="space-y-2 pt-3 border-t border-border/50">
                      {tool.painPoints.map((point, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-red-600 font-medium">
                          <X className="w-4 h-4 flex-shrink-0" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Desktop total */}
          <div className="mt-12 text-center fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex flex-row items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full">
              <span className="text-sm text-muted-foreground">Total monthly cost:</span>
              <span className="text-xl font-bold text-red-500">$200–2,000/mo</span>
              <span className="text-sm text-muted-foreground">for tools that never learn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisjointedTools;