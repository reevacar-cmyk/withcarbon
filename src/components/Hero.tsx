import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Users, ArrowRight, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const scrollToPartnerForm = () => {
    document.getElementById("partner-form")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  // Mobile Hero Visual - Animated AI activity feed
  const MobileHeroVisual = () => {
    const allActivities = [
      { id: 1, action: "AI booked new customer", detail: "Full detail + ceramic coat", highlight: true, amount: "+$280" },
      { id: 2, action: "Follow-up sent", detail: "Customer from 52 days ago", highlight: false },
      { id: 3, action: "Josh took call", detail: "Booked interior clean for tomorrow", highlight: true, amount: "+$120" },
      { id: 4, action: "New lead qualified", detail: "Google Ads → AI SMS → Booked", highlight: true, amount: "+$180" },
      { id: 5, action: "CRM updated", detail: "Job details synced automatically", highlight: false },
      { id: 6, action: "AI answered call", detail: "Scheduled window tint for Friday", highlight: true, amount: "+$350" },
      { id: 7, action: "Reminder sent", detail: "Appointment confirmation for Mike R.", highlight: false },
      { id: 8, action: "Lead recovered", detail: "Rescheduled no-show from last week", highlight: true, amount: "+$95" },
    ];
    
    const [activities, setActivities] = useState(allActivities.slice(0, 3));
    const [activityIndex, setActivityIndex] = useState(3);
    
    const contextItems = [
      { icon: Users, label: "Customers" },
      { icon: Calendar, label: "Calendar" },
      { icon: Briefcase, label: "Jobs" },
    ];
    
    const [contextIndex, setContextIndex] = useState(0);
    
    // Rotate activities - new one pops at top
    useEffect(() => {
      const interval = setInterval(() => {
        setActivityIndex(prev => {
          const nextIndex = (prev + 1) % allActivities.length;
          setActivities(current => {
            const newActivity = { ...allActivities[nextIndex], id: Date.now() };
            return [newActivity, ...current.slice(0, 2)];
          });
          return nextIndex;
        });
      }, 3000);
      return () => clearInterval(interval);
    }, []);
    
    // Cycle context icons
    useEffect(() => {
      const interval = setInterval(() => {
        setContextIndex(prev => (prev + 1) % contextItems.length);
      }, 2500);
      return () => clearInterval(interval);
    }, []);
    
    const CurrentContextIcon = contextItems[contextIndex].icon;
    
    return (
      <div className="relative w-full max-w-[320px] mx-auto">
        {/* Main card - simulated AI activity */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
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
          
          {/* Animated Activity feed */}
          <div className="p-4 space-y-3 min-h-[180px]">
            {activities.map((activity, index) => (
              <div 
                key={activity.id}
                className={`transition-all duration-500 ease-out ${
                  index === 0 ? 'animate-[slideDown_0.4s_ease-out]' : ''
                }`}
              >
                {activity.highlight ? (
                  <div className="p-3 bg-accent/10 border border-accent/20 rounded-xl">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                          <span className="text-xs font-bold text-background">✓</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">{activity.action}</span>
                      </div>
                      {activity.amount && (
                        <span className="text-xs font-bold text-accent">{activity.amount}</span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground pl-8">{activity.detail}</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between py-2 border-b border-border/30">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-[10px] text-muted-foreground">✓</span>
                      </div>
                      <div>
                        <div className="text-xs font-medium text-foreground">{activity.action}</div>
                        <div className="text-[10px] text-muted-foreground">{activity.detail}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Bottom - cycling context icons */}
          <div className="px-4 py-3 bg-muted/30 border-t border-border/30 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] text-muted-foreground">Connected sources</span>
            </div>
            <div className="flex items-center gap-2 min-w-[100px] justify-end">
              <div 
                key={contextIndex}
                className="flex items-center gap-1.5 animate-[fadeInOut_2.5s_ease-in-out]"
              >
                <CurrentContextIcon className="w-4 h-4 text-foreground" />
                <span className="text-xs font-medium text-foreground">{contextItems[contextIndex].label}</span>
              </div>
            </div>
          </div>
        </div>
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
              <span className="md:hidden text-muted-foreground">One centralized system for calendar, customers, and AI automations — designed to improve real metrics and build lasting relationships.</span>
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