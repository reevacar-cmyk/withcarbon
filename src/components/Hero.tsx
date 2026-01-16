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
          <div className="grid grid-cols-12 gap-2.5 max-w-[380px] mx-auto">
            
            {/* Calendar with Booked Jobs - spans 7 cols */}
            <div 
              className="col-span-7 bg-[hsl(0,0%,6%)] rounded-lg p-3 relative overflow-hidden"
              style={{ minHeight: '130px' }}
            >
              {/* Shiny border - top-right corner where diagonal light hits */}
              <div 
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, transparent 60%, rgba(255,255,255,0.15) 75%, rgba(255,255,255,0.5) 85%, rgba(255,255,255,0.8) 90%, rgba(255,255,255,0.5) 95%, transparent 100%)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'xor',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                }}
              />
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] text-white/50 uppercase tracking-wider">Booked Jobs</span>
                <Calendar className="w-3 h-3 text-accent" />
              </div>
              <div className="grid grid-cols-7 gap-0.5 text-[6px] text-white/30 mb-1">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                  <div key={i} className="text-center">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-0.5">
                {Array.from({ length: 21 }, (_, i) => {
                  const isBooked = [3, 5, 8, 10, 12, 15, 17, 19].includes(i);
                  const isToday = i === 10;
                  return (
                    <div 
                      key={i} 
                      className={`aspect-square rounded-sm text-[6px] flex items-center justify-center ${
                        isToday ? 'bg-accent text-white ring-1 ring-accent' : 
                        isBooked ? 'bg-accent/30 text-white/70' : 
                        'text-white/25'
                      }`}
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>
              <div className="mt-2 text-[8px] text-white/40">8 jobs this week</div>
            </div>
            
            {/* AI SMS Follow-ups - spans 5 cols */}
            <div 
              className="col-span-5 bg-[hsl(0,0%,6%)] rounded-lg p-3 relative overflow-hidden"
              style={{ minHeight: '130px' }}
            >
              {/* Shiny border - top edge where light grazes */}
              <div 
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 5%, transparent 15%, transparent 100%)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'xor',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                }}
              />
              <div className="flex items-center gap-1.5 mb-2">
                <MessageSquare className="w-2.5 h-2.5 text-accent" />
                <span className="text-[9px] text-white/50 uppercase tracking-wider">Follow-ups</span>
              </div>
              <div className="space-y-1.5">
                {[
                  { name: 'Mike R.', msg: 'Time for your next detail?', status: 'Sent' },
                  { name: 'Sarah K.', msg: 'How was your ceramic coat?', status: 'Replied' },
                  { name: 'John D.', msg: 'Ready for spring clean?', status: 'Booked' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="text-[8px] text-white/60 truncate">{item.name}</div>
                      <div className="text-[7px] text-white/30 truncate">{item.msg}</div>
                    </div>
                    <span className={`text-[6px] px-1 py-0.5 rounded ${
                      item.status === 'Booked' ? 'bg-emerald-500/20 text-emerald-400' :
                      item.status === 'Replied' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-white/10 text-white/40'
                    }`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Inbound Leads - spans 6 cols */}
            <div 
              className="col-span-6 bg-[hsl(0,0%,6%)] rounded-lg p-3 relative overflow-hidden"
            >
              {/* Shiny border - left edge where light passes */}
              <div 
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 3%, transparent 10%, transparent 100%)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'xor',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                }}
              />
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] text-white/50 uppercase tracking-wider">Inbound Leads</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded bg-[#4267B2]/30 flex items-center justify-center text-[6px] text-[#4267B2]">f</div>
                  <div className="w-3 h-3 rounded bg-[#EA4335]/30 flex items-center justify-center text-[6px] text-[#EA4335]">G</div>
                </div>
              </div>
              <div className="space-y-1.5">
                {[
                  { source: 'Google', name: 'New lead: Alex M.', time: '2m ago', color: 'text-[#EA4335]' },
                  { source: 'Facebook', name: 'Quote request: Lisa P.', time: '8m ago', color: 'text-[#4267B2]' },
                  { source: 'Google', name: 'Booking: Tom W.', time: '15m ago', color: 'text-[#EA4335]' },
                ].map((lead, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[7px] ${lead.color}`}>{lead.source}</span>
                      <span className="text-[8px] text-white/60 truncate max-w-[70px]">{lead.name}</span>
                    </div>
                    <span className="text-[7px] text-white/30">{lead.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 pt-1.5 border-t border-white/5 flex justify-between">
                <span className="text-[8px] text-white/40">AI responded to all</span>
                <span className="text-[8px] text-emerald-400">✓</span>
              </div>
            </div>
            
            {/* Employee Management - spans 6 cols */}
            <div 
              className="col-span-6 bg-[hsl(0,0%,6%)] rounded-lg p-3 relative overflow-hidden"
            >
              {/* Shiny border - bottom-left where light exits */}
              <div 
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, transparent 85%, rgba(255,255,255,0.2) 92%, rgba(255,255,255,0.4) 95%, transparent 100%)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'xor',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                }}
              />
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] text-white/50 uppercase tracking-wider">Team</span>
                <Users className="w-3 h-3 text-accent" />
              </div>
              <div className="space-y-1.5">
                {[
                  { name: 'Josh T.', role: 'Lead Detailer', status: 'On Job', statusColor: 'bg-emerald-500' },
                  { name: 'Mike S.', role: 'Detailer', status: 'Available', statusColor: 'bg-blue-500' },
                  { name: 'Chris L.', role: 'Detailer', status: 'Break', statusColor: 'bg-orange-500' },
                ].map((emp, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <div className="text-[8px] text-white/60">{emp.name}</div>
                      <div className="text-[7px] text-white/30">{emp.role}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${emp.statusColor}`} />
                      <span className="text-[7px] text-white/40">{emp.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Static diagonal light beam - subtle but bright like reference */}
        <div 
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, transparent 35%, rgba(255,255,255,0.01) 40%, rgba(255,255,255,0.04) 43%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.04) 47%, rgba(255,255,255,0.01) 50%, transparent 55%, transparent 100%)',
          }}
        />
        
        {/* Core light line - thin bright streak */}
        <div 
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, transparent 44%, rgba(255,255,255,0.12) 44.8%, rgba(255,255,255,0.25) 45%, rgba(255,255,255,0.12) 45.2%, transparent 46%, transparent 100%)',
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
