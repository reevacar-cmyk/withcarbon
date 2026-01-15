import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Users, TrendingUp, Zap, Database } from "lucide-react";

const Hero = () => {
  const scrollToPartnerForm = () => {
    document.getElementById("partner-form")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  // Mobile Hero Visual - Central hub concept showing everything connected
  const MobileHeroVisual = () => (
    <div className="relative w-full aspect-square max-w-[320px] mx-auto">
      {/* Central hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center z-10">
        <div className="text-center">
          <span className="text-3xl font-bold text-accent">C</span>
          <div className="text-[8px] text-accent/80 uppercase tracking-wider mt-0.5">Carbon</div>
        </div>
        <div className="absolute inset-0 rounded-2xl border-2 border-accent/20 animate-ping" style={{ animationDuration: '2s' }} />
      </div>
      
      {/* Orbiting elements */}
      {[
        { icon: MessageSquare, label: "SMS", angle: -45, delay: "0s" },
        { icon: Calendar, label: "Jobs", angle: 45, delay: "0.5s" },
        { icon: Users, label: "Customers", angle: 135, delay: "1s" },
        { icon: TrendingUp, label: "Metrics", angle: 225, delay: "1.5s" }
      ].map((item, i) => {
        const Icon = item.icon;
        const radians = (item.angle * Math.PI) / 180;
        const radius = 100;
        const x = Math.cos(radians) * radius;
        const y = Math.sin(radians) * radius;
        
        return (
          <div 
            key={i}
            className="absolute top-1/2 left-1/2 fade-in"
            style={{ 
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              animationDelay: item.delay
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <Icon className="w-6 h-6 text-white/80" />
              </div>
              <span className="text-[10px] text-white/60 font-medium">{item.label}</span>
            </div>
          </div>
        );
      })}
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {[-45, 45, 135, 225].map((angle, i) => {
          const radians = (angle * Math.PI) / 180;
          const innerRadius = 48;
          const outerRadius = 80;
          const cx = 160;
          const cy = 160;
          const x1 = cx + Math.cos(radians) * innerRadius;
          const y1 = cy + Math.sin(radians) * innerRadius;
          const x2 = cx + Math.cos(radians) * outerRadius;
          const y2 = cy + Math.sin(radians) * outerRadius;
          
          return (
            <line 
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          );
        })}
      </svg>
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
  
  return (
    <section className="min-h-screen pb-16 md:pb-8 px-[3px] md:px-8 lg:px-12 pt-24 md:pt-32 relative overflow-hidden bg-[hsl(0_0%_4%)] md:bg-background">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none md:bg-background" />
      
      {/* Mobile dark mode grid pattern */}
      <div className="absolute inset-0 md:hidden opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto max-w-none md:max-w-[1600px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-4 md:space-y-8">
            {/* Mobile: Grand, bold headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] fade-in">
              <span className="md:hidden text-white">
                Your new AI<br />
                <span className="text-accent">business partner.</span>
              </span>
              <span className="hidden md:inline text-foreground">Turn customer conversations into booked jobs and repeat business.</span>
            </h1>
            <p className="text-base md:text-xl max-w-lg fade-in fade-in-delay-1">
              <span className="md:hidden text-white/70">From calendar to AI automations — everything designed to improve real metrics, all centralized for full business context.</span>
              <span className="hidden md:inline text-muted-foreground">Carbon is an AI-native CRM that manages calls, booking, and follow-ups with full context.</span>
            </p>
            <div className="flex flex-wrap items-center gap-4 fade-in fade-in-delay-2">
              <Button onClick={scrollToPartnerForm} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 w-full sm:w-auto">
                Book a demo
              </Button>
            </div>
          </div>
          
          {/* Mobile: Central hub visual */}
          <div className="md:hidden fade-in fade-in-delay-3 py-8">
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