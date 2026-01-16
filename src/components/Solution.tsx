import { useState, useEffect, useRef } from "react";
import { Users, Database, MessageSquare, Phone, Calendar, Eye, AlertCircle, CheckCircle, TrendingUp, Zap } from "lucide-react";
import AbstractGraphic from "./AbstractGraphic";

const Solution = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  
  const DURATION = 5000; // 5 seconds
  const PROGRESS_INTERVAL = 50; // Update progress every 50ms

  useEffect(() => {
    // Progress bar animation
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (PROGRESS_INTERVAL / DURATION) * 100;
      });
    }, PROGRESS_INTERVAL);

    // Auto-advance timer
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
      setProgress(0);
    }, DURATION);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, []);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    
    // Reset timers
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (PROGRESS_INTERVAL / DURATION) * 100;
      });
    }, PROGRESS_INTERVAL);

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
      setProgress(0);
    }, DURATION);
  };

  const features = [
    {
      id: "unified",
      title: "All-in-one system that does the work",
      mobileTitle: "Everything connected",
      description: "Manages customers, jobs, conversations, and follow-ups with full historical context.",
      mobileDescription: "Calls, texts, jobs, and customer history — all in one place."
    },
    {
      id: "visibility",
      title: "Intentional automations",
      mobileTitle: "You stay in control",
      description: "Clear visibility into what's running, why it's running, and when AI escalates urgent issues.",
      mobileDescription: "See what AI does, why, and when it escalates to you."
    },
    {
      id: "learning",
      title: "Learns and improves over time",
      mobileTitle: "Gets smarter over time",
      description: "No static workflows. Carbon tests message timing, wording, and follow-ups automatically.",
      mobileDescription: "AI tests and improves what works for your customers."
    }
  ];

  // Visual for unified system - minimal industrial scientific style
  const UnifiedVisual = () => (
    <div className="h-full flex flex-col p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[10px] text-white/50 uppercase tracking-widest">SYS.UNIFIED</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-accent rounded-sm text-foreground font-medium">CONNECTED</span>
      </div>
      
      {/* Central hub diagram */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Center hub */}
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-sm bg-accent border border-accent flex items-center justify-center">
            <span className="text-xl font-bold text-foreground">C</span>
          </div>
        </div>
        
        {/* Connection lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 border border-white/10 rounded-sm rotate-45" />
        </div>
        
        {/* Connected nodes */}
        {[
          { label: "CALLS", position: "top-4 left-1/2 -translate-x-1/2" },
          { label: "TEXTS", position: "right-4 top-1/2 -translate-y-1/2" },
          { label: "JOBS", position: "bottom-4 left-1/2 -translate-x-1/2" },
          { label: "CRM", position: "left-4 top-1/2 -translate-y-1/2" }
        ].map((node, i) => (
          <div key={i} className={`absolute ${node.position}`}>
            <div className="px-2 py-1.5 bg-white/5 border border-white/20 rounded-sm">
              <span className="text-[9px] text-white/70 tracking-wider">{node.label}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Data grid */}
      <div className="border border-white/10 rounded-sm overflow-hidden mt-4">
        <div className="grid grid-cols-4 divide-x divide-white/10">
          {[
            { label: "Sources", value: "4" },
            { label: "Synced", value: "100%" },
            { label: "Latency", value: "<1s" },
            { label: "Status", value: "LIVE", isAccent: true }
          ].map((stat, i) => (
            <div key={i} className="p-2 text-center bg-white/[0.02]">
              <div className="text-[8px] text-white/40 uppercase tracking-wider mb-0.5">{stat.label}</div>
              <div className={`text-xs font-medium ${stat.isAccent ? 'text-accent' : 'text-white/80'}`}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Visual for visibility - minimal industrial scientific style
  const VisibilityVisual = () => (
    <div className="h-full flex flex-col p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-[10px] text-white/50 uppercase tracking-widest">SYS.MONITOR</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-white/10 border border-white/20 rounded-sm text-white/70">TRANSPARENT</span>
      </div>
      
      {/* Activity log */}
      <div className="flex-1 space-y-1">
        {[
          { 
            time: "09:42",
            action: "Follow-up sent", 
            target: "John D.",
            reason: "45d since last",
            status: "BOOKED",
            isHighlight: true
          },
          { 
            time: "09:38",
            action: "Call answered", 
            target: "New lead",
            reason: "AI qualified",
            status: "DONE",
            isHighlight: false
          },
          { 
            time: "09:35",
            action: "Escalated", 
            target: "Mike S.",
            reason: "Callback req",
            status: "URGENT",
            isHighlight: true
          },
          { 
            time: "09:31",
            action: "SMS sent", 
            target: "Sarah K.",
            reason: "Appt confirm",
            status: "SENT",
            isHighlight: false
          }
        ].map((item, i) => (
          <div 
            key={i} 
            className={`p-2 rounded-sm border ${
              item.status === 'URGENT' 
                ? 'bg-accent/10 border-accent/30' 
                : item.status === 'BOOKED'
                ? 'bg-accent/10 border-accent/30'
                : 'bg-white/[0.02] border-white/10'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="text-[9px] text-white/40 shrink-0">{item.time}</span>
                <span className="text-[10px] text-white/80 truncate">{item.action}</span>
                <span className="text-[10px] text-white/50 truncate">→ {item.target}</span>
              </div>
              <span className={`text-[8px] px-1.5 py-0.5 rounded-sm shrink-0 ${
                item.status === 'URGENT' || item.status === 'BOOKED'
                  ? 'bg-accent text-foreground' 
                  : 'bg-white/10 text-white/60'
              }`}>
                {item.status}
              </span>
            </div>
            <div className="text-[9px] text-white/40 mt-0.5 ml-9">{item.reason}</div>
          </div>
        ))}
      </div>
      
      {/* Footer stats */}
      <div className="border border-white/10 rounded-sm overflow-hidden mt-3">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          {[
            { label: "Active", value: "3" },
            { label: "Today", value: "47" },
            { label: "Escalated", value: "2", isAccent: true }
          ].map((stat, i) => (
            <div key={i} className="p-2 text-center bg-white/[0.02]">
              <div className="text-[8px] text-white/40 uppercase tracking-wider mb-0.5">{stat.label}</div>
              <div className={`text-xs font-medium ${stat.isAccent ? 'text-accent' : 'text-white/80'}`}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVisual = () => {
    switch (activeIndex) {
      case 0:
        return <UnifiedVisual />;
      case 1:
        return <VisibilityVisual />;
      case 2:
        return <AbstractGraphic variant="solution" />;
      default:
        return <UnifiedVisual />;
    }
  };

  const getVisualForIndex = (index: number) => {
    switch (index) {
      case 0:
        return <UnifiedVisual />;
      case 1:
        return <VisibilityVisual />;
      case 2:
        return <AbstractGraphic variant="solution" />;
      default:
        return <UnifiedVisual />;
    }
  };

  return (
    <section id="solution" className="pt-8 pb-24 md:pt-4 md:pb-32 px-[3px] md:px-8 lg:px-16 bg-card md:bg-[hsl(0_0%_5%)] md:text-[hsl(0_0%_100%)]">
      <div className="container mx-auto">
        {/* Mobile layout - light mode */}
        <div className="md:hidden">
          {/* Section label */}
          <div className="mb-3 fade-in">
            <span className="font-mono text-[10px] tracking-[0.2em] text-foreground uppercase">
              HOW IT WORKS
            </span>
          </div>
          
          {/* Number toggles */}
          <div className="flex gap-2 mb-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualSelect(index)}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-foreground/20 text-foreground border border-foreground/30' 
                    : 'bg-muted/50 text-muted-foreground border border-border/50'
                }`}
              >
                <span className="text-sm font-bold">{index + 1}</span>
                {activeIndex === index && (
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 40 40">
                    <circle
                      cx="20"
                      cy="20"
                      r="18"
                      fill="none"
                      stroke="hsl(var(--foreground))"
                      strokeWidth="2"
                      strokeDasharray={`${(progress / 100) * 113} 113`}
                      className="transition-all duration-75 ease-linear"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
          
          {/* Feature content with visual */}
          <div className="space-y-6">
            <div className="fade-in">
              <h3 className="text-lg font-medium mb-1 text-foreground">
                {features[activeIndex].mobileTitle}
              </h3>
              <p className="text-sm leading-snug text-muted-foreground">
                {features[activeIndex].mobileDescription}
              </p>
            </div>
            
            {/* Visual - light mode styling */}
            <div className="h-[320px] bg-[hsl(40_15%_8%)] border border-border/50 rounded-sm overflow-hidden">
              {getVisualForIndex(activeIndex)}
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          {/* Left side - toggles */}
          <div className="space-y-3">
            {/* Number toggles with content */}
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => handleManualSelect(index)}
                className={`w-full text-left flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-white/5' 
                    : 'hover:bg-white/[0.02]'
                }`}
              >
                {/* Number indicator */}
                <div className={`relative w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-accent/20 text-accent' 
                    : 'bg-white/10 text-white/40'
                }`}>
                  <span className="text-sm font-bold">{index + 1}</span>
                  {activeIndex === index && (
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 32 32">
                      <circle
                        cx="16"
                        cy="16"
                        r="14"
                        fill="none"
                        stroke="hsl(var(--accent))"
                        strokeWidth="2"
                        strokeDasharray={`${(progress / 100) * 88} 88`}
                        className="transition-all duration-75 ease-linear"
                      />
                    </svg>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-0.5">
                  <h3 className={`text-lg font-medium mb-1 transition-colors duration-300 ${
                    activeIndex === index ? 'text-white' : 'text-white/60'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm leading-snug transition-all duration-300 ${
                    activeIndex === index ? 'text-white/60 opacity-100' : 'text-white/40 opacity-70'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
          
          {/* Right side - Visual */}
          <div className="h-[420px] lg:h-[460px] bg-[hsl(40_15%_8%)] border border-white/10 rounded-sm overflow-hidden sticky top-8">
            {renderVisual()}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
