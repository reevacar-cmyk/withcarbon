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

  // Visual for unified system - simplified, more visual
  const UnifiedVisual = () => (
    <div className="h-full flex flex-col p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-white/60 uppercase tracking-wider">All-in-One</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-accent">Connected</span>
      </div>
      
      {/* Visual - Central hub with spokes */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Center hub */}
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center">
            <span className="text-2xl font-bold text-accent">C</span>
          </div>
          <div className="absolute inset-0 rounded-2xl border border-accent/20" style={{ animation: 'ping 2s ease-in-out infinite' }} />
        </div>
        
        {/* Connected nodes */}
        {[
          { icon: "📞", label: "Calls", position: "-translate-x-24 -translate-y-12" },
          { icon: "💬", label: "Texts", position: "translate-x-24 -translate-y-12" },
          { icon: "📅", label: "Jobs", position: "-translate-x-24 translate-y-12" },
          { icon: "👤", label: "Customers", position: "translate-x-24 translate-y-12" }
        ].map((node, i) => (
          <div key={i} className={`absolute ${node.position}`}>
            <div className="flex flex-col items-center gap-1">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-lg">
                {node.icon}
              </div>
              <span className="text-[10px] text-white/60">{node.label}</span>
            </div>
            {/* Connection line would go here in a real implementation */}
          </div>
        ))}
      </div>
      
      {/* Stats */}
      <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
        <div className="text-[10px] text-white/60">Everything in one place</div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] text-accent font-medium">Live</span>
        </div>
      </div>
    </div>
  );

  // Visual for visibility - simplified, more explanatory
  const VisibilityVisual = () => (
    <div className="h-full flex flex-col p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-white/60 uppercase tracking-wider">Transparency</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-accent">You see everything</span>
      </div>
      
      {/* Visual - Simple automation feed */}
      <div className="flex-1 space-y-3">
        {[
          { 
            action: "Sent follow-up to John D.", 
            reason: "45 days since last detail",
            status: "Booked",
            isHighlight: true
          },
          { 
            action: "Answered call from new lead", 
            reason: "AI qualified and booked",
            status: "Done",
            isHighlight: false
          },
          { 
            action: "Escalated to you", 
            reason: "Customer requested callback",
            status: "Urgent",
            isHighlight: true
          }
        ].map((item, i) => (
          <div 
            key={i} 
            className={`p-3 rounded-xl border ${
              item.status === 'Urgent' 
                ? 'bg-accent/10 border-accent/30' 
                : 'bg-white/5 border-white/10'
            }`}
          >
            <div className="flex items-start justify-between mb-1">
              <span className="text-sm text-white font-medium">{item.action}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                item.status === 'Urgent' 
                  ? 'bg-accent/20 text-accent' 
                  : item.status === 'Booked'
                  ? 'bg-accent/20 text-accent'
                  : 'bg-white/10 text-white/60'
              }`}>
                {item.status}
              </span>
            </div>
            <div className="text-xs text-white/50">{item.reason}</div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
        <div className="text-[10px] text-white/60">AI shows you what it does & why</div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] text-accent font-medium">3 active</span>
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
            <span className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
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
                    ? 'bg-accent/20 text-accent border border-accent/30' 
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
                      stroke="hsl(var(--accent))"
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
            <div className="h-[320px] bg-[hsl(0_0%_8%)] border border-border/50 rounded-2xl overflow-hidden">
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
          <div className="h-[420px] lg:h-[460px] bg-[hsl(0_0%_8%)] border border-white/10 rounded-2xl overflow-hidden sticky top-8">
            {renderVisual()}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
