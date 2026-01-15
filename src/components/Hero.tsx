import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Users, ArrowRight, Briefcase, UserCheck } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const scrollToPartnerForm = () => {
    document.getElementById("partner-form")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  // Mobile Hero Visual - Animated AI activity feed with fixed height
  const MobileHeroVisual = () => {
    const allActivities = [
      { action: "AI answered inbound call and booked a full detail for Mike R.", amount: "+$280" },
      { action: "Sent personalized follow-up to customer who booked 52 days ago", amount: "" },
      { action: "Josh took a call — interior clean scheduled for tomorrow AM", amount: "+$120" },
      { action: "New Google Ads lead qualified via AI SMS and booked", amount: "+$180" },
      { action: "Job completed — customer and payment synced to CRM", amount: "" },
      { action: "AI scheduled window tint appointment for Friday", amount: "+$350" },
      { action: "Appointment reminder sent to Sarah K. for tomorrow", amount: "" },
      { action: "Recovered no-show from last week — rescheduled for Monday", amount: "+$95" },
      { action: "Customer replied 'yes' to quote — job confirmed via SMS", amount: "+$220" },
      { action: "3 new appointments synced to team calendar", amount: "" },
    ];
    
    const [visibleActivities, setVisibleActivities] = useState<Array<typeof allActivities[0] & { id: number }>>(() => 
      allActivities.slice(0, 5).map((a, i) => ({ ...a, id: i }))
    );
    const [currentIndex, setCurrentIndex] = useState(5);
    
    const contextItems = [
      { icon: Users, label: "Customers" },
      { icon: Calendar, label: "Calendar" },
      { icon: Briefcase, label: "Jobs" },
      { icon: UserCheck, label: "Employees" },
    ];
    
    // Rotate activities - new one appears at top, pushes others down
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev => {
          const nextIndex = prev >= allActivities.length - 1 ? 0 : prev + 1;
          
          // Reset to beginning if we've cycled through all 10
          if (nextIndex === 0) {
            setVisibleActivities(allActivities.slice(0, 5).map((a, i) => ({ ...a, id: Date.now() + i })));
          } else {
            setVisibleActivities(current => {
              const newActivity = { ...allActivities[nextIndex], id: Date.now() };
              return [newActivity, ...current.slice(0, 4)];
            });
          }
          
          return nextIndex;
        });
      }, 2500);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-full max-w-[320px] mx-auto">
        {/* Main card - simulated AI activity */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg relative z-10">
          {/* Header */}
          <div className="px-4 py-3 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-sm font-bold text-background">C</span>
              </div>
              <span className="text-sm font-medium text-foreground">Carbon AI</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded-full border border-accent/20">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] text-accent font-medium">Live</span>
            </div>
          </div>
          
          {/* Fixed height activity feed - new card slides in, others transition down */}
          <div className="p-4 h-[240px] overflow-hidden relative">
            <div className="flex flex-col gap-2">
              {visibleActivities.map((activity, index) => (
                <div 
                  key={activity.id}
                  className={index === 0 
                    ? 'animate-[heroCardSlideIn_0.5s_ease-out]' 
                    : 'animate-[heroCardShiftDown_0.5s_ease-out]'
                  }
                >
                  {/* All cards same size - top card uses darker bone white */}
                  <div className={`py-2.5 px-3 rounded-xl flex items-start gap-2 ${
                    index === 0 
                      ? 'bg-[hsl(40_20%_92%)] border border-[hsl(40_15%_85%)]' 
                      : 'bg-muted/30 border border-border/20'
                  }`}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-accent">
                      <span className="text-[10px] font-bold text-background">✓</span>
                    </div>
                    <div className="flex-1 min-w-0 flex items-start justify-between gap-2">
                      <p className={`text-[11px] leading-snug ${index === 0 ? 'text-foreground' : 'text-foreground/80'}`}>
                        {activity.action}
                      </p>
                      {activity.amount && (
                        <span className={`text-[10px] font-bold shrink-0 ${index === 0 ? 'text-accent' : 'text-muted-foreground'}`}>{activity.amount}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Curved lines connecting icons to bottom center of visual - start/end vertical, curve in middle */}
        <div className="relative h-12 w-full">
          <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 320 48" preserveAspectRatio="xMidYMid meet">
            {/* Define paths for reuse */}
            <defs>
              {/* Paths now go from center to icons */}
              <path id="line1" d="M 160 0 C 160 24, 40 24, 40 48" />
              <path id="line2" d="M 160 0 C 160 24, 120 24, 120 48" />
              <path id="line3" d="M 160 0 C 160 24, 200 24, 200 48" />
              <path id="line4" d="M 160 0 C 160 24, 280 24, 280 48" />
            </defs>
            
            {/* Static dashed lines */}
            <use href="#line1" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
            <use href="#line2" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
            <use href="#line3" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
            <use href="#line4" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Single dots that travel one way, disappear, pause, then go back */}
            <circle r="2.5" fill="hsl(var(--accent))">
              <animateMotion dur="2.4s" repeatCount="indefinite" keyPoints="0;1;1;0;0" keyTimes="0;0.35;0.5;0.85;1" calcMode="spline" keySplines="0.4 0 0.6 1; 0 0 1 1; 0.4 0 0.6 1; 0 0 1 1">
                <mpath href="#line1" />
              </animateMotion>
              <animate attributeName="opacity" values="1;1;0;0;1;1;0;0" keyTimes="0;0.33;0.35;0.5;0.52;0.83;0.85;1" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle r="2.5" fill="hsl(var(--accent))">
              <animateMotion dur="2.2s" repeatCount="indefinite" begin="0.3s" keyPoints="0;1;1;0;0" keyTimes="0;0.35;0.5;0.85;1" calcMode="spline" keySplines="0.4 0 0.6 1; 0 0 1 1; 0.4 0 0.6 1; 0 0 1 1">
                <mpath href="#line2" />
              </animateMotion>
              <animate attributeName="opacity" values="1;1;0;0;1;1;0;0" keyTimes="0;0.33;0.35;0.5;0.52;0.83;0.85;1" dur="2.2s" repeatCount="indefinite" begin="0.3s" />
            </circle>
            <circle r="2.5" fill="hsl(var(--accent))">
              <animateMotion dur="2.2s" repeatCount="indefinite" begin="0.15s" keyPoints="0;1;1;0;0" keyTimes="0;0.35;0.5;0.85;1" calcMode="spline" keySplines="0.4 0 0.6 1; 0 0 1 1; 0.4 0 0.6 1; 0 0 1 1">
                <mpath href="#line3" />
              </animateMotion>
              <animate attributeName="opacity" values="1;1;0;0;1;1;0;0" keyTimes="0;0.33;0.35;0.5;0.52;0.83;0.85;1" dur="2.2s" repeatCount="indefinite" begin="0.15s" />
            </circle>
            <circle r="2.5" fill="hsl(var(--accent))">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.5s" keyPoints="0;1;1;0;0" keyTimes="0;0.35;0.5;0.85;1" calcMode="spline" keySplines="0.4 0 0.6 1; 0 0 1 1; 0.4 0 0.6 1; 0 0 1 1">
                <mpath href="#line4" />
              </animateMotion>
              <animate attributeName="opacity" values="1;1;0;0;1;1;0;0" keyTimes="0;0.33;0.35;0.5;0.52;0.83;0.85;1" dur="2.4s" repeatCount="indefinite" begin="0.5s" />
            </circle>
          </svg>
        </div>
        
        {/* Connected source icons in circles - 4 icons */}
        <div className="flex items-center justify-between px-2">
          {contextItems.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center">
                <item.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <span className="text-[9px] text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Caption */}
        <p className="text-center text-xs text-muted-foreground mt-4 leading-snug max-w-[300px] mx-auto">
          Everything in one system so Carbon can work on your business with full context.
        </p>
      </div>
    );
  };
  
  return (
    <section className="min-h-screen pb-4 md:pb-8 px-6 md:px-8 lg:px-12 pt-24 md:pt-32 relative overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-background" />
      
      <div className="container mx-auto max-w-none md:max-w-[1600px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-4 md:space-y-8 text-center md:text-left">
            {/* Mobile: Tertiary callout badge */}
            <div className="md:hidden flex items-center justify-center gap-2 fade-in">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-sm">
                <span className="px-2 py-0.5 rounded bg-foreground text-background text-xs font-medium">NEW</span>
                <span className="text-foreground">AI-powered operations</span>
                <ArrowRight className="w-3.5 h-3.5 text-foreground" />
              </span>
            </div>
            
            {/* Mobile: Large title with lighter weight */}
            <h1 className="fade-in fade-in-delay-1">
              <span className="md:hidden block text-[2.75rem] font-medium tracking-tight leading-[0.95] text-foreground">
                Your new AI<br />
                business partner.
              </span>
              <span className="hidden md:inline text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">Turn customer conversations into booked jobs and repeat business.</span>
            </h1>
            
            <p className="text-base md:text-xl max-w-md fade-in fade-in-delay-2 md:mx-0 mx-auto leading-snug">
              <span className="md:hidden text-muted-foreground">Manage the busy work and give each customer a white glove service.</span>
              <span className="hidden md:inline text-muted-foreground">Carbon is an AI-native CRM that manages calls, booking, and follow-ups with full context.</span>
            </p>
            
            <div className="flex flex-wrap items-center gap-4 fade-in fade-in-delay-3 justify-center md:justify-start pt-2">
              <Button onClick={scrollToPartnerForm} size="lg" className="md:bg-foreground md:hover:bg-foreground/90 md:text-background bg-accent hover:bg-accent/90 text-background font-medium px-8 w-full sm:w-auto">
                Book a demo
              </Button>
            </div>
          </div>
          
          {/* Mobile: Central hub visual */}
          <div className="md:hidden fade-in fade-in-delay-3">
            <MobileHeroVisual />
          </div>
          
          {/* Desktop: Keep existing AbstractGraphic would go here - using inline for now */}
          <div className="hidden md:block fade-in fade-in-delay-3">
            <DesktopHeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};

// Desktop Hero Graphic - extracted from AbstractGraphic
const DesktopHeroGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-card/90 rounded-2xl overflow-hidden border border-border/50 backdrop-blur-sm">
    {/* Grid pattern background */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
      backgroundSize: '20px 20px'
    }} />
    
    {/* Main content area */}
    <div className="absolute inset-4 bottom-28 space-y-3 overflow-hidden">
      {/* Top bar - simulating app header */}
      <div className="flex items-center justify-between pb-2 border-b border-border/30">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Carbon AI</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-accent/10 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[9px] text-accent font-medium">Working</span>
        </div>
      </div>
      
      {/* AI Impact Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Time Saved", value: "4.2h", sublabel: "today" },
          { label: "Revenue", value: "$840", sublabel: "recovered" },
          { label: "Customers", value: "12", sublabel: "retained" }
        ].map((item, i) => (
          <div 
            key={i} 
            className="p-2 rounded-lg bg-accent/5 border border-accent/20"
          >
            <div className="text-[9px] text-muted-foreground uppercase tracking-wider">
              {item.label}
            </div>
            <div className="text-lg font-bold text-accent leading-tight">{item.value}</div>
            <div className="text-[8px] text-muted-foreground">{item.sublabel}</div>
          </div>
        ))}
      </div>
      
      {/* AI Activity feed - Wins */}
      <div className="space-y-1.5 pt-1 flex-1">
        <div className="flex items-center justify-between mb-2">
          <div className="text-[10px] text-muted-foreground uppercase tracking-wider">AI Wins</div>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <div className="text-[9px] text-accent">Live</div>
          </div>
        </div>
        {[
          { action: "Answered call", result: "+$180", detail: "Full detail booked", customer: "John D.", time: "Just now" },
          { action: "Follow-up sent", result: "Won", detail: "Quote accepted", customer: "Sarah M.", time: "1m ago" },
          { action: "Lead recovered", result: "Saved", detail: "Rescheduled no-show", customer: "Mike R.", time: "3m ago" },
          { action: "Upsold service", result: "+$60", detail: "Ceramic coat added", customer: "Lisa K.", time: "5m ago" },
          { action: "Booking confirmed", result: "Locked", detail: "Tomorrow 9am", customer: "David P.", time: "8m ago" }
        ].map((activity, i) => (
          <div 
            key={i} 
            className={`flex items-start justify-between p-2 rounded-lg transition-all ${
              i === 0 
                ? "bg-accent/15 border border-accent/30" 
                : "bg-muted/20 border border-transparent"
            }`}
          >
            <div className="flex items-start gap-2 min-w-0 flex-1">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                i === 0 ? "bg-accent text-background" : "bg-accent/30 text-accent"
              }`}>
                ✓
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-foreground font-medium">{activity.action}</span>
                  <span className={`text-[8px] px-1.5 py-0.5 rounded font-semibold ${
                    activity.result.startsWith('+') 
                      ? "bg-accent/20 text-accent" 
                      : "bg-accent/10 text-accent"
                  }`}>
                    {activity.result}
                  </span>
                </div>
                <div className="text-[9px] text-muted-foreground">{activity.detail} · {activity.customer}</div>
              </div>
            </div>
            <span className="text-[9px] text-muted-foreground shrink-0 ml-2">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
    
    {/* Bottom stats bar - positioned separately */}
    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-card/95 border border-border/50">
      <div className="flex items-center gap-4">
        <div className="text-center">
          <div className="text-xl font-bold text-accent">98%</div>
          <div className="text-[9px] text-muted-foreground">Response Rate</div>
        </div>
        <div className="w-px h-10 bg-border/50" />
        <div className="text-center">
          <div className="text-xl font-bold text-foreground">2.3s</div>
          <div className="text-[9px] text-muted-foreground">Avg. Answer</div>
        </div>
        <div className="w-px h-10 bg-border/50" />
        <div className="text-center">
          <div className="text-xl font-bold text-foreground">24/7</div>
          <div className="text-[9px] text-muted-foreground">Coverage</div>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-accent/15 rounded-full border border-accent/30">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-[10px] text-accent font-medium">AI Active</span>
      </div>
    </div>
    
    {/* Ambient glow */}
    <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
  </div>
);

export default Hero;