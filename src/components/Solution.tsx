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
      description: "Manages customers, jobs, conversations, and follow-ups with full historical context."
    },
    {
      id: "visibility",
      title: "Intentional automations",
      description: "Clear visibility into what's running, why it's running, and when AI escalates urgent issues."
    },
    {
      id: "learning",
      title: "Learns and improves over time",
      description: "No static workflows. Carbon tests message timing, wording, and follow-ups automatically."
    }
  ];

  // Visual for unified system - showing connected data
  const UnifiedVisual = () => (
    <div className="h-full flex flex-col p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Customer 360</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-accent">Connected</span>
      </div>
      
      {/* Customer profile with connected data */}
      <div className="flex-1 space-y-3">
        <div className="bg-card/80 border border-accent/30 rounded-xl p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">
              JD
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-foreground">John Davidson</div>
              <div className="text-[10px] text-muted-foreground">2021 Tesla Model 3 · Black</div>
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
              <div key={i} className="flex items-center justify-between p-2 bg-muted/20 rounded-lg">
                <div className="flex items-center gap-2">
                  <item.icon className="w-3.5 h-3.5 text-accent/70" />
                  <span className="text-[10px] text-muted-foreground">{item.label}</span>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-foreground">{item.value}</div>
                  <div className="text-[9px] text-accent">{item.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between">
        <div className="text-[10px] text-muted-foreground">All data auto-synced</div>
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
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Automation Status</span>
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
                : 'bg-card/80 border-border/50'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                {auto.status === 'escalated' ? (
                  <AlertCircle className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <CheckCircle className="w-3.5 h-3.5 text-accent/70" />
                )}
                <span className="text-[11px] font-medium text-foreground">{auto.name}</span>
              </div>
              <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                auto.status === 'escalated' 
                  ? 'bg-accent/20 text-accent font-medium' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {auto.triggered}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[9px] text-muted-foreground pl-5">
              <Eye className="w-3 h-3" />
              {auto.reason}
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between">
        <div className="text-[10px] text-muted-foreground">You see exactly what AI does</div>
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
    <section id="solution" className="py-16 md:py-32 px-3 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="mb-10 md:mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground mb-3 md:mb-4">
            Carbon
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
            Centralized, AI-native customer and job operations platform
          </p>
        </div>

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
                    : 'bg-muted text-muted-foreground border border-border/50'
                }`}
              >
                <span className="text-sm font-bold">{index + 1}</span>
                {activeIndex === index && (
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
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
          <div className="space-y-4">
            <div className="fade-in">
              <h3 className="text-lg font-medium mb-1 text-foreground">
                {features[activeIndex].title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {features[activeIndex].description}
              </p>
            </div>
            
            {/* Visual */}
            <div className="h-[320px] bg-muted/20 border border-border/50 rounded-2xl overflow-hidden">
              {getVisualForIndex(activeIndex)}
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Feature toggles */}
          <div className="space-y-4 flex flex-col justify-center">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => handleManualSelect(index)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 fade-in relative overflow-hidden ${
                  activeIndex === index 
                    ? 'bg-accent/5 border-accent/30' 
                    : 'bg-card/50 border-border/50 hover:border-border'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Progress bar */}
                {activeIndex === index && (
                  <div 
                    className="absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                )}
                <div className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    activeIndex === index 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <span className="text-sm font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-1 transition-colors ${
                      activeIndex === index ? 'text-foreground' : 'text-foreground/80'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors ${
                      activeIndex === index ? 'text-muted-foreground' : 'text-muted-foreground/70'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          {/* Dynamic visual */}
          <div className="h-[480px] bg-muted/20 border border-border/50 rounded-2xl overflow-hidden fade-in fade-in-delay-3">
            {renderVisual()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
