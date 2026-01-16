import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Users, ArrowRight, Briefcase, UserCheck, TrendingUp, Clock, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const handleBookDemo = () => {
    window.open('https://calendly.com/az356/30min?back=1&month=2026-01', '_blank');
  };

  // Dark Mobile Hero with dashboard visuals and light beam
  const DarkMobileHero = () => {
    const [email, setEmail] = useState("");
    
    return (
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Dashboard visuals in background - arranged like a dashboard grid */}
        <div className="absolute inset-0 z-0 px-4 pt-24">
          {/* Dashboard grid container */}
          <div className="grid grid-cols-12 gap-3 max-w-[400px] mx-auto">
            {/* Large Revenue Chart - spans 7 cols, 2 rows height */}
            <div 
              className="col-span-7 row-span-2 bg-[hsl(0,0%,6%)] rounded-lg p-3 relative overflow-hidden"
              style={{ minHeight: '140px' }}
            >
              {/* Shiny border overlay - positioned at top-right where light touches */}
              <div 
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.4) 48%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.4) 52%, transparent 60%)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'xor',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                }}
              />
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] text-white/50 px-1.5 py-0.5 bg-white/10 rounded">Balance</span>
                  <span className="text-[9px] text-white/30">Card Spend</span>
                </div>
              </div>
              <div className="text-xl font-bold text-white mb-1">$1,652,342.90</div>
              <div className="text-[9px] text-white/40 mb-3">Current balance</div>
              <div className="h-16 flex items-end">
                {/* Chart line visualization */}
                <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M0,45 Q20,40 40,42 T80,35 T120,25 T160,30 T200,20" 
                    fill="none" 
                    stroke="hsl(var(--accent))" 
                    strokeWidth="2"
                  />
                  <path 
                    d="M0,45 Q20,40 40,42 T80,35 T120,25 T160,30 T200,20 L200,60 L0,60 Z" 
                    fill="url(#chartGradient)"
                  />
                </svg>
              </div>
              <div className="flex justify-between mt-2 text-[7px] text-white/30">
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </div>
            
            {/* Transactions Card - spans 5 cols, 2 rows */}
            <div 
              className="col-span-5 row-span-2 bg-[hsl(0,0%,6%)] rounded-lg p-3 relative overflow-hidden"
              style={{ minHeight: '140px' }}
            >
              {/* Shiny border - top edge where light hits */}
              <div 
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 3%, transparent 100%)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'xor',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                }}
              />
              <div className="text-[9px] text-white/40 mb-2">Transactions</div>
              <div className="space-y-2">
                {[
                  { icon: 'a', name: 'Amazon Associates', amount: '-$7,890.00', color: 'text-white/60' },
                  { icon: 'E', name: 'Etsy Partner Network', amount: '$34,993.71', color: 'text-emerald-400' },
                  { icon: 'M', name: 'Meta Platforms Inc.', amount: '-$12,287.89', color: 'text-white/60' },
                  { icon: 'A', name: 'Adobe Inc.', amount: '-$2,056.87', color: 'text-white/60' },
                ].map((tx, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded bg-white/10 flex items-center justify-center text-[8px] text-white/50">{tx.icon}</div>
                      <span className="text-[8px] text-white/60 truncate max-w-[60px]">{tx.name}</span>
                    </div>
                    <span className={`text-[8px] ${tx.color}`}>{tx.amount}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats Table Card - full width */}
            <div 
              className="col-span-12 bg-[hsl(0,0%,6%)] rounded-lg p-3 relative overflow-hidden"
            >
              {/* Left edge shiny border */}
              <div 
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, transparent 2%, transparent 100%)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'xor',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                }}
              />
              <div className="flex text-[8px] text-white/40 mb-2 border-b border-white/10 pb-1">
                <span className="flex-1">Card Name</span>
                <span className="w-16 text-center">Group</span>
                <span className="w-16 text-center">Spend Limits</span>
                <span className="w-12 text-right">Status</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { name: 'Primary Account', group: 'Marketing', limit: '$800,000', status: 'Active', statusColor: 'bg-emerald-500' },
                  { name: 'Virtual Account', group: 'Marketing', limit: '$300,000', status: 'Active', statusColor: 'bg-emerald-500' },
                  { name: 'Team Expenses', group: 'Operations', limit: 'No Limit', status: 'Paused', statusColor: 'bg-orange-500' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center text-[8px]">
                    <span className="flex-1 text-white/60">{row.name}</span>
                    <span className="w-16 text-center text-white/40">{row.group}</span>
                    <span className="w-16 text-center text-white/50">{row.limit}</span>
                    <div className="w-12 flex justify-end">
                      <span className={`${row.statusColor} text-white text-[6px] px-1.5 py-0.5 rounded-full`}>{row.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Static diagonal light beam */}
        <div 
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, transparent 30%, rgba(255,255,255,0.02) 38%, rgba(255,255,255,0.08) 42%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.08) 48%, rgba(255,255,255,0.02) 52%, transparent 60%, transparent 100%)',
          }}
        />
        
        {/* Secondary intense light core */}
        <div 
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, transparent 42%, rgba(255,255,255,0.25) 44.5%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.25) 45.5%, transparent 48%, transparent 100%)',
          }}
        />
        
        {/* Gradient fade for text readability - stronger at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-black via-black/95 to-transparent z-10 pointer-events-none" />
        
        {/* Content - positioned at bottom with increased spacing */}
        <div className="relative z-20 min-h-screen flex flex-col justify-end px-5 pb-16 pt-32">
          {/* Main headline with Playfair italic */}
          <div className="space-y-5 mb-8">
            <h1 className="text-[2.75rem] leading-[1.05] tracking-tight">
              <span className="font-playfair italic text-white">Your new AI</span>
              <br />
              <span className="font-medium text-white/90">business partner</span>
            </h1>
            
            <p className="text-base text-white/60 leading-relaxed max-w-[320px]">
              All-in-one system that manages all the busy work and gives each customer a white glove service.
            </p>
          </div>
          
          {/* Email + CTA in same pill */}
          <div className="mb-10">
            <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-1.5 max-w-[360px]">
              <input
                type="email"
                placeholder="What's your email?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder:text-white/40 text-sm px-4 py-2 outline-none min-w-0"
              />
              <Button 
                onClick={handleBookDemo}
                className="bg-white text-black hover:bg-white/90 font-medium text-sm px-5 py-2 h-auto rounded-full shrink-0"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Social proof stat */}
          <div className="space-y-1.5 border-t border-white/10 pt-6">
            <div className="text-2xl font-bold text-white">$2.4M+</div>
            <p className="text-sm text-white/50">in revenue managed by Carbon AI for 40+ detailing businesses</p>
          </div>
        </div>
      </div>
    );
  };
  
  // Original Mobile Hero Visual - kept for reference/desktop
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
    
    const [visibleActivities, setVisibleActivities] = useState<Array<typeof allActivities[0] & { id: number; isNew: boolean }>>(() => 
      allActivities.slice(0, 5).map((a, i) => ({ ...a, id: i, isNew: false }))
    );
    const [currentIndex, setCurrentIndex] = useState(5);
    const [animationKey, setAnimationKey] = useState(0);
    
    const contextItems = [
      { icon: Users, label: "Customers" },
      { icon: Calendar, label: "Calendar" },
      { icon: Briefcase, label: "Jobs" },
      { icon: UserCheck, label: "Employees" },
    ];
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prev => {
          const nextIndex = prev >= allActivities.length - 1 ? 0 : prev + 1;
          
          if (nextIndex === 0) {
            setVisibleActivities(allActivities.slice(0, 5).map((a, i) => ({ ...a, id: Date.now() + i, isNew: false })));
          } else {
            setVisibleActivities(current => {
              const newActivity = { ...allActivities[nextIndex], id: Date.now(), isNew: true };
              const existingCards = current.slice(0, 4).map(c => ({ ...c, isNew: false }));
              return [newActivity, ...existingCards];
            });
          }
          
          setAnimationKey(k => k + 1);
          return nextIndex;
        });
      }, 2500);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="relative w-full max-w-[320px] mx-auto">
        <div className="bg-card border border-border rounded-2xl overflow-hidden relative z-10">
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
          
          <div className="p-4 h-[240px] overflow-hidden relative">
            <div className="flex flex-col gap-2" key={animationKey}>
              {visibleActivities.map((activity, index) => (
                <div 
                  key={activity.id}
                  className={activity.isNew 
                    ? 'animate-[heroCardSlideIn_0.5s_ease-out]' 
                    : 'animate-[heroCardShiftDown_0.5s_ease-out]'
                  }
                >
                  <div className={`py-2.5 px-3 rounded-sm flex items-start gap-2 ${
                    index === 0 
                      ? 'bg-background border border-border' 
                      : 'bg-transparent border border-transparent'
                  }`}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-accent">
                      <span className="text-[10px] font-bold text-background">✓</span>
                    </div>
                    <div className="flex-1 min-w-0 flex items-start justify-between gap-2">
                      <p className={`text-[11px] leading-snug ${index === 0 ? 'text-foreground' : 'text-foreground/80'}`}>
                        {activity.action}
                      </p>
                      {activity.amount && (
                        <span className={`text-[10px] font-bold shrink-0 ${index === 0 ? 'text-emerald-600' : 'text-emerald-600/70'}`}>{activity.amount}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative h-12 w-full">
          <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 320 48" preserveAspectRatio="xMidYMid meet">
            <defs>
              <path id="line1" d="M 160 0 C 160 24, 40 24, 40 48" />
              <path id="line2" d="M 160 0 C 160 24, 120 24, 120 48" />
              <path id="line3" d="M 160 0 C 160 24, 200 24, 200 48" />
              <path id="line4" d="M 160 0 C 160 24, 280 24, 280 48" />
            </defs>
            
            <use href="#line1" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
            <use href="#line2" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
            <use href="#line3" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
            <use href="#line4" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
            
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
        
        <p className="text-center text-xs text-muted-foreground mt-4 leading-snug max-w-[300px] mx-auto">
          Everything in one system so Carbon can work on your business with full context.
        </p>
      </div>
    );
  };
  
  return (
    <>
      {/* Mobile: Dark dramatic hero */}
      <section className="md:hidden">
        <DarkMobileHero />
      </section>
      
      {/* Desktop: Original hero layout */}
      <section className="hidden md:block min-h-screen pb-8 px-6 lg:px-8 pt-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 pointer-events-none bg-background" />
        
        <div className="container mx-auto max-w-[1800px] relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left">
              <h1 className="fade-in fade-in-delay-1">
                <span className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">Turn customer conversations into booked jobs and repeat business.</span>
              </h1>
              
              <p className="text-xl max-w-2xl fade-in fade-in-delay-2 leading-snug">
                <span className="text-muted-foreground">All-in-one system that manages the busy work and gives each customer a white glove service.</span>
              </p>
              
              <div className="flex flex-wrap items-center gap-4 fade-in fade-in-delay-3 pt-2">
                <Button onClick={handleBookDemo} size="lg" className="bg-foreground hover:bg-foreground/90 text-background font-medium px-8">
                  Book a demo
                </Button>
              </div>
            </div>
            
            <div className="fade-in fade-in-delay-3">
              <DesktopHeroGraphic />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Desktop Hero Graphic - extracted from AbstractGraphic
const DesktopHeroGraphic = () => (
  <div className="relative w-full aspect-[4/5] bg-card/90 rounded-2xl overflow-hidden border border-border/50 backdrop-blur-sm">
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
      backgroundSize: '20px 20px'
    }} />
    
    <div className="absolute inset-4 bottom-28 space-y-3 overflow-hidden">
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
    
    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-card/95 border border-border/50">
      <div className="flex items-center gap-4">
        <div className="text-center">
          <div className="text-xl font-bold text-accent">98%</div>
          <div className="text-[9px] text-muted-foreground">Response Rate</div>
        </div>
        <div className="w-px h-10 bg-border/50" />
        <div className="text-center">
          <div className="text-xl font-bold text-accent">2.3s</div>
          <div className="text-[9px] text-muted-foreground">Avg Response</div>
        </div>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-[10px] text-accent font-medium">AI Active</span>
      </div>
    </div>
    
    <div 
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{
        background: 'radial-gradient(circle at 70% 30%, hsl(var(--accent) / 0.15), transparent 50%)',
      }}
    />
  </div>
);

export default Hero;
