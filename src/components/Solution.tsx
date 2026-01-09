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

  // Visual for unified system - showing connected data
  const UnifiedVisual = () => (
    <div className="h-full flex flex-col p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-white/60 uppercase tracking-wider">Customer 360</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-accent">Connected</span>
      </div>
      
      {/* Customer profile with connected data */}
      <div className="flex-1 space-y-3">
        <div className="bg-white/10 border border-accent/30 rounded-xl p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">
              JD
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">John Davidson</div>
              <div className="text-[10px] text-white/60">2021 Tesla Model 3 · Black</div>
            </div>
          </div>
          
          {/* Connected data streams */}
          <div className="space-y-2">
            {[
              { icon: Phone, label: "Last call", value: "Today 2:15pm", status: "Booked full detail" },
              { icon: MessageSquare, label: "Last text", value: "Yesterday", status: "Confirmed appointment" },
              { icon: Calendar, label: "Next job", value: "Tomorrow 10am", status: "$220 full detail" },
              { icon: Database, label: "History", value: "8 visits", status: "$1,440 lifetime" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-white/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <item.icon className="w-3.5 h-3.5 text-accent/70" />
                  <span className="text-[10px] text-white/60">{item.label}</span>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-white">{item.value}</div>
                  <div className="text-[9px] text-accent">{item.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
        <div className="text-[10px] text-white/60">All data auto-synced</div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] text-accent font-medium">Live</span>
        </div>
      </div>
    </div>
  );

  // Visual for visibility - showing automation dashboard
  const VisibilityVisual = () => (
    <div className="h-full flex flex-col p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-white/60 uppercase tracking-wider">Automation Status</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-accent">Transparent</span>
      </div>
      
      {/* Active automations */}
      <div className="flex-1 space-y-2">
        {[
          { 
            name: "Follow-up after detail", 
            status: "active", 
            triggered: "3 today",
            reason: "Service completed > 24hrs ago"
          },
          { 
            name: "Quote reminder", 
            status: "active", 
            triggered: "1 today",
            reason: "Quote sent > 48hrs, no response"
          },
          { 
            name: "Re-engagement campaign", 
            status: "active", 
            triggered: "5 this week",
            reason: "Last visit > 60 days"
          },
          { 
            name: "Urgent escalation", 
            status: "escalated", 
            triggered: "Just now",
            reason: "Customer requested callback"
          }
        ].map((auto, i) => (
          <div 
            key={i} 
            className={`p-3 rounded-lg border ${
              auto.status === 'escalated' 
                ? 'bg-accent/10 border-accent/30' 
                : 'bg-white/10 border-white/20'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                {auto.status === 'escalated' ? (
                  <AlertCircle className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <CheckCircle className="w-3.5 h-3.5 text-accent/70" />
                )}
                <span className="text-[11px] font-medium text-white">{auto.name}</span>
              </div>
              <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                auto.status === 'escalated' 
                  ? 'bg-accent/20 text-accent font-medium' 
                  : 'bg-white/10 text-white/60'
              }`}>
                {auto.triggered}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[9px] text-white/60 pl-5">
              <Eye className="w-3 h-3" />
              {auto.reason}
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
        <div className="text-[10px] text-white/60">You see exactly what AI does</div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded-full">
          <Zap className="w-3 h-3 text-accent" />
          <span className="text-[10px] text-accent font-medium">4 active</span>
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
    <section id="solution" className="pt-8 pb-24 md:pt-4 md:pb-32 px-[3px] md:px-8 lg:px-16 bg-[hsl(0_0%_5%)] text-[hsl(0_0%_100%)]">
      <div className="container mx-auto">
        {/* Mobile layout */}
        <div className="md:hidden">
          {/* Number toggles */}
          <div className="flex gap-2 mb-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualSelect(index)}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-accent/20 text-accent border border-accent/30' 
                    : 'bg-white/10 text-white/60 border border-white/20'
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
              <h3 className="text-lg font-medium mb-1 text-white">
                {features[activeIndex].mobileTitle}
              </h3>
              <p className="text-sm leading-snug text-white/60">
                {features[activeIndex].mobileDescription}
              </p>
            </div>
            
            {/* Visual */}
            <div className="h-[320px] bg-[hsl(0_0%_8%)] border border-white/10 rounded-2xl overflow-hidden">
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
