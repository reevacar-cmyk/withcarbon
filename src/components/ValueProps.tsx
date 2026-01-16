import { Phone, Users, Clock, Calendar, MessageSquare, ArrowRight, Send, Bell, RotateCcw, PhoneIncoming, CheckCircle, Database, TrendingUp, Repeat, Zap } from "lucide-react";
import { useState, useEffect } from "react";

// Static metric display (no animation)
const StaticMetric = ({ value }: { value: string }) => {
  return <div>{value}</div>;
};

const ValueProps = () => {
  const values = [
    {
      metric: "37%",
      title: "More bookings",
      mobileTitle: "More jobs booked",
      description: "AI answers calls and texts instantly, qualifies inbound leads, and books jobs 24/7.",
      mobileDescription: "Connect all your lead sources and Carbon will respond within the first 30s to qualify and book.",
      visual: "booking"
    },
    {
      metric: "40%",
      title: "More repeat customers",
      mobileTitle: "More repeat customers",
      description: "AI remembers who they are, their car, past jobs, and conversations — and sends personalized follow-ups at the right time.",
      mobileDescription: "Knows all of your past customers and will send personalized follow-ups at the right time.",
      visual: "retention"
    },
    {
      metric: "14hrs",
      title: "Saved per week",
      mobileTitle: "Saved weekly",
      description: "Every call, text, lead, and job auto-logs into your calendar and CRM — whether AI or a human answered.",
      mobileDescription: "Every call, text, and job auto-logged. No data entry.",
      visual: "automation"
    }
  ];

  // Minimal Industrial Booking Visual
  const BookingVisual = () => (
    <div className="relative w-full h-full overflow-hidden">
      {/* Mobile */}
      <div className="md:hidden h-full flex flex-col p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Lead → Booking</span>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/20 border border-green-500/40 rounded-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-mono text-green-600 font-medium">LIVE</span>
          </div>
        </div>
        
        {/* Flow diagram */}
        <div className="flex-1 flex flex-col items-center justify-center gap-1">
          {/* Input node */}
          <div className="w-full max-w-[240px] p-4 bg-background border border-border rounded-sm shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-muted border border-border rounded-sm flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-mono text-muted-foreground uppercase">Inbound</div>
                <div className="text-xs text-foreground">"How much for a detail?"</div>
              </div>
            </div>
          </div>
          
          {/* Connector */}
          <div className="flex flex-col items-center">
            <div className="w-px h-6 bg-border" />
            <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
              <Zap className="w-3 h-3 text-accent-foreground" />
            </div>
            <div className="text-[9px] font-mono text-accent mt-1">2s response</div>
            <div className="w-px h-6 bg-border" />
          </div>
          
          {/* Output node */}
          <div className="w-full max-w-[240px] p-4 bg-accent border border-accent rounded-sm shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent-foreground/20 rounded-sm flex items-center justify-center">
                <Calendar className="w-4 h-4 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-mono text-accent-foreground/80 uppercase">Booked</div>
                <div className="text-xs text-accent-foreground">Tomorrow 10am · $220</div>
              </div>
              <CheckCircle className="w-4 h-4 text-accent-foreground" />
            </div>
          </div>
        </div>
        
        {/* Stats bar */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <div className="text-lg font-mono font-semibold text-accent">$850</div>
                <div className="text-[9px] font-mono text-muted-foreground uppercase">Today</div>
              </div>
              <div>
                <div className="text-lg font-mono font-semibold text-foreground">100%</div>
                <div className="text-[9px] font-mono text-muted-foreground uppercase">Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop */}
      <div className="hidden md:flex flex-col h-full p-6">
        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Lead → Booking</span>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/20 border border-green-500/40 rounded-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-mono text-green-400 font-medium">24/7</span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="w-full max-w-[260px] p-4 bg-white border border-white/20 rounded-sm shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-100 rounded-sm flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-neutral-500" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Inbound SMS</div>
                <div className="text-xs text-neutral-900">"How much for a full detail?"</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-white/20" />
            <div className="w-6 h-6 bg-accent rounded-sm flex items-center justify-center">
              <Zap className="w-3 h-3 text-accent-foreground" />
            </div>
            <div className="text-[9px] font-mono text-accent mt-1">AI · 2s</div>
            <div className="w-px h-8 bg-white/20" />
          </div>
          
          <div className="w-full max-w-[260px] p-4 bg-accent border border-accent rounded-sm shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent-foreground/20 rounded-sm flex items-center justify-center">
                <Calendar className="w-4 h-4 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-mono text-accent-foreground/80 uppercase">Confirmed</div>
                <div className="text-xs text-accent-foreground">Tomorrow 10am · $220</div>
              </div>
              <CheckCircle className="w-4 h-4 text-accent-foreground" />
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div>
              <div className="text-lg font-mono font-bold text-accent">$850</div>
              <div className="text-[9px] font-mono text-white/40 uppercase">Today</div>
            </div>
            <div>
              <div className="text-lg font-mono font-bold text-white">100%</div>
              <div className="text-[9px] font-mono text-white/40 uppercase">Response</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Animated Retention Visual with cycling customer cards
  const RetentionVisual = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState<number | null>(null);
    const [showFollowup, setShowFollowup] = useState(false);
    const [showRebooked, setShowRebooked] = useState(false);
    
    const customers = [
      { initials: "JD", name: "John D.", car: "Tesla Model 3", lastService: "45 days ago", ltv: "$1,440", followup: "Hey John! Your Model 3 is due for a detail..." },
      { initials: "SM", name: "Sarah M.", car: "BMW X5", lastService: "38 days ago", ltv: "$2,180", followup: "Hi Sarah! Time to keep that X5 looking fresh..." },
      { initials: "MR", name: "Mike R.", car: "Ford F-150", lastService: "52 days ago", ltv: "$890", followup: "Hey Mike! Your F-150 could use some love..." },
      { initials: "LK", name: "Lisa K.", car: "Mercedes GLC", lastService: "41 days ago", ltv: "$3,200", followup: "Hi Lisa! Ready to schedule your next detail?" },
      { initials: "DP", name: "David P.", car: "Audi Q7", lastService: "60 days ago", ltv: "$1,650", followup: "Hey David! It's been a while since your Q7..." },
      { initials: "AW", name: "Amy W.", car: "Porsche Cayenne", lastService: "33 days ago", ltv: "$4,100", followup: "Hi Amy! Your Cayenne deserves the best care..." },
      { initials: "TC", name: "Tom C.", car: "Chevy Tahoe", lastService: "48 days ago", ltv: "$1,120", followup: "Hey Tom! Time to get your Tahoe detailed..." },
    ];
    
    useEffect(() => {
      // Timeline per card:
      // 0ms: Card enters from right (entering phase)
      // 500ms: Followup slides up
      // 1500ms: Rebooked appears (1s after followup)
      // 3200ms: Rebooked disappears
      // 3700ms: Move to next card (500ms after rebooked disappears)
      
      let followupTimeout: NodeJS.Timeout;
      let rebookedTimeout: NodeJS.Timeout;
      let hideRebookedTimeout: NodeJS.Timeout;
      let nextCardTimeout: NodeJS.Timeout;
      let clearPrevTimeout: NodeJS.Timeout;
      
      // After card settles, show followup
      followupTimeout = setTimeout(() => {
        setShowFollowup(true);
      }, 500);
      
      // Show rebooked 1 second after followup
      rebookedTimeout = setTimeout(() => {
        setShowRebooked(true);
      }, 1500);
      
      // Hide rebooked before card transition
      hideRebookedTimeout = setTimeout(() => {
        setShowRebooked(false);
      }, 3200);
      
      // Transition to next card after rebooked disappears
      nextCardTimeout = setTimeout(() => {
        setShowFollowup(false);
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => (prev + 1) % customers.length);
      }, 3700);
      
      // Clear previous card after exit animation completes
      clearPrevTimeout = setTimeout(() => {
        setPrevIndex(null);
      }, 4200);
      
      return () => {
        clearTimeout(followupTimeout);
        clearTimeout(rebookedTimeout);
        clearTimeout(hideRebookedTimeout);
        clearTimeout(nextCardTimeout);
        clearTimeout(clearPrevTimeout);
      };
    }, [currentIndex, customers.length]);
    
    const customer = customers[currentIndex];
    const prevCustomer = prevIndex !== null ? customers[prevIndex] : null;
    
    return (
      <div className="relative w-full h-full overflow-hidden">
        {/* Mobile */}
        <div className="md:hidden h-full flex flex-col p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Customer → Rebook</span>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/20 border border-green-500/40 rounded-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-mono text-green-600 font-medium">AUTO</span>
            </div>
          </div>
          
          {/* Animated card container */}
          <div className="flex-1 flex flex-col items-center justify-center gap-3 relative overflow-hidden">
            <div className="relative w-full max-w-[260px] h-[230px]">
              {/* Previous card exiting to left */}
              {prevCustomer && (
                <div 
                  key={`prev-${prevIndex}`}
                  className="absolute inset-0 p-4 bg-background border border-border rounded-sm animate-[slideOutToLeft_0.5s_ease-out_forwards]"
                >
                  {/* Customer header */}
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-border">
                    <div className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center text-sm font-mono font-bold text-foreground">
                      {prevCustomer.initials}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-foreground">{prevCustomer.name}</div>
                      <div className="text-[10px] font-mono text-muted-foreground">{prevCustomer.car}</div>
                    </div>
                  </div>
                  
                  {/* Data points */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-mono text-muted-foreground uppercase">Last service</span>
                      <span className="text-foreground">{prevCustomer.lastService}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-mono text-muted-foreground uppercase">LTV</span>
                      <span className="text-foreground">{prevCustomer.ltv}</span>
                    </div>
                  </div>
                  
                  {/* AI action - visible on exiting card */}
                  <div className="p-3 bg-accent rounded-sm opacity-100">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-accent-foreground uppercase mb-1">
                      <Send className="w-3 h-3" />
                      AI Follow-up Sent
                    </div>
                    <div className="text-[10px] text-accent-foreground/80 line-clamp-2">"{prevCustomer.followup}"</div>
                  </div>
                </div>
              )}
              
              {/* Current card entering from right */}
              <div 
                key={currentIndex}
                className="absolute inset-0 p-4 bg-background border border-border rounded-sm animate-[slideInFromRight_0.5s_ease-out]"
              >
                {/* Customer header */}
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-border">
                  <div className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center text-sm font-mono font-bold text-foreground">
                    {customer.initials}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-foreground">{customer.name}</div>
                    <div className="text-[10px] font-mono text-muted-foreground">{customer.car}</div>
                  </div>
                </div>
                
                {/* Data points */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-mono text-muted-foreground uppercase">Last service</span>
                    <span className="text-foreground">{customer.lastService}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-mono text-muted-foreground uppercase">LTV</span>
                    <span className="text-foreground">{customer.ltv}</span>
                  </div>
                </div>
                
                {/* AI action - slides up */}
                <div 
                  className={`p-3 bg-accent rounded-sm transition-all duration-1000 ease-out ${
                    showFollowup 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="flex items-center gap-2 text-[10px] font-mono text-accent-foreground uppercase mb-1">
                    <Send className="w-3 h-3" />
                    AI Follow-up Sent
                  </div>
                  <div className="text-[10px] text-accent-foreground/80 line-clamp-2">"{customer.followup}"</div>
                </div>
              </div>
            </div>
            
            {/* Result - inline text */}
            <div className={`flex items-center justify-center gap-2 transition-all duration-300 ${
              showRebooked ? 'opacity-100' : 'opacity-0'
            }`}>
              <CheckCircle className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-mono font-bold text-accent">Rebooked</span>
            </div>
          </div>
        </div>
        
        {/* Desktop */}
        <div className="hidden md:flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Customer → Rebook</span>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/20 border border-green-500/40 rounded-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-mono text-green-400 font-medium">AUTO</span>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center gap-3 relative overflow-hidden">
            <div className="relative w-full max-w-[280px] h-[250px]">
              {/* Single card that animates in from right on key change */}
              <div 
                key={currentIndex}
                className="absolute inset-0 p-4 bg-white border border-white/20 rounded-sm animate-[slideInFromRight_0.5s_ease-out]"
              >
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-neutral-200">
                  <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center text-sm font-mono font-bold text-accent-foreground">
                    {customer.initials}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-neutral-900">{customer.name}</div>
                    <div className="text-[10px] font-mono text-neutral-500">{customer.car}</div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-mono text-neutral-400 uppercase">Last service</span>
                    <span className="text-neutral-900">{customer.lastService}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-mono text-neutral-400 uppercase">LTV</span>
                    <span className="text-neutral-900">{customer.ltv}</span>
                  </div>
                </div>
                
                <div 
                  className={`p-3 bg-accent rounded-sm transition-all duration-500 ease-out ${
                    showFollowup 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex items-center gap-2 text-[10px] font-mono text-accent-foreground uppercase mb-1">
                    <Send className="w-3 h-3" />
                    AI Follow-up
                  </div>
                  <div className="text-[10px] text-accent-foreground/80 line-clamp-2">"{customer.followup}"</div>
                </div>
              </div>
            </div>
            
            <div className={`flex items-center gap-2 px-4 py-2 bg-accent rounded-sm transition-all duration-300 ${
              showRebooked ? 'opacity-100' : 'opacity-0'
            }`}>
              <CheckCircle className="w-3.5 h-3.5 text-accent-foreground" />
              <span className="text-xs font-mono text-accent-foreground">Rebooked</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Minimal Industrial Automation Visual
  const AutomationVisual = () => (
    <div className="relative w-full h-full overflow-hidden">
      {/* Mobile */}
      <div className="md:hidden h-full flex flex-col p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Data → CRM</span>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/20 border border-green-500/40 rounded-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-mono text-green-600 font-medium">SYNC</span>
          </div>
        </div>
        
        {/* Flow diagram */}
        <div className="flex-1 flex flex-col items-center justify-center gap-1">
          {/* Input sources */}
          <div className="flex items-center justify-center gap-4 w-full">
            {[
              { icon: Phone, label: "Calls" },
              { icon: MessageSquare, label: "Texts" },
              { icon: Calendar, label: "Jobs" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 p-3 bg-background border border-border rounded-sm shadow-sm">
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-[9px] font-mono text-muted-foreground uppercase">{item.label}</span>
              </div>
            ))}
          </div>
          
          {/* Connectors */}
          <div className="flex items-center justify-center gap-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-px h-6 bg-border" />
            ))}
          </div>
          
          {/* Central processor */}
          <div className="w-full max-w-[240px] p-4 bg-accent rounded-sm shadow-sm">
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-accent-foreground/20">
              <div className="w-8 h-8 bg-accent-foreground/20 rounded-sm flex items-center justify-center">
                <Database className="w-4 h-4 text-accent-foreground" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-accent-foreground uppercase">CRM</div>
                <div className="text-xs text-accent-foreground">Auto-synced</div>
              </div>
            </div>
            
            {/* Log entries */}
            <div className="space-y-2">
              {[
                { action: "Call logged", time: "Now" },
                { action: "Job created", time: "2m" },
                { action: "SMS synced", time: "5m" }
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-accent-foreground" />
                    <span className="text-accent-foreground/90">{log.action}</span>
                  </div>
                  <span className="font-mono text-accent-foreground/60">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats bar */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <div className="text-lg font-mono font-semibold text-foreground">142</div>
                <div className="text-[9px] font-mono text-muted-foreground uppercase">Profiles</div>
              </div>
              <div>
                <div className="text-lg font-mono font-semibold text-accent">0</div>
                <div className="text-[9px] font-mono text-muted-foreground uppercase">Manual</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop */}
      <div className="hidden md:flex flex-col h-full p-6">
        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Data → CRM</span>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/20 border border-green-500/40 rounded-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[9px] font-mono text-green-400 font-medium">LIVE</span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-4 w-full">
            {[
              { icon: Phone, label: "Calls" },
              { icon: MessageSquare, label: "Texts" },
              { icon: Calendar, label: "Jobs" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 p-3 bg-white border border-white/20 rounded-sm shadow-sm">
                <item.icon className="w-4 h-4 text-neutral-500" />
                <span className="text-[9px] font-mono text-neutral-400 uppercase">{item.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-px h-6 bg-white/20" />
            ))}
          </div>
          
          <div className="w-full max-w-[260px] p-4 bg-accent rounded-sm shadow-sm">
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-accent-foreground/20">
              <div className="w-8 h-8 bg-accent-foreground/20 rounded-sm flex items-center justify-center">
                <Database className="w-4 h-4 text-accent-foreground" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-accent-foreground uppercase">CRM</div>
                <div className="text-xs text-accent-foreground">Auto-synced</div>
              </div>
            </div>
            
            <div className="space-y-2">
              {[
                { action: "Call logged", time: "Now" },
                { action: "Job created", time: "2m" },
                { action: "SMS synced", time: "5m" }
              ].map((log, i) => (
                <div key={i} className="flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-accent-foreground" />
                    <span className="text-accent-foreground/90">{log.action}</span>
                  </div>
                  <span className="font-mono text-accent-foreground/60">{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div>
              <div className="text-lg font-mono font-bold text-white">142</div>
              <div className="text-[9px] font-mono text-white/40 uppercase">Profiles</div>
            </div>
            <div>
              <div className="text-lg font-mono font-bold text-accent">0</div>
              <div className="text-[9px] font-mono text-white/40 uppercase">Manual</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVisual = (visual: string) => {
    switch (visual) {
      case "booking":
        return <BookingVisual />;
      case "retention":
        return <RetentionVisual />;
      case "automation":
        return <AutomationVisual />;
      default:
        return null;
    }
  };

  return (
    <section className="pt-16 pb-12 md:py-20 px-[3px] md:px-8 lg:px-16 bg-background md:bg-[hsl(0_0%_10%)] md:text-[hsl(0_0%_100%)]">
      <div className="container mx-auto">
        {/* Mobile-only intro - builds from hero vision */}
        <div className="md:hidden pt-0 mb-6 text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">The Results</span>
          <h2 className="text-3xl font-normal tracking-tight text-foreground leading-[1.1]">
            Here's what that looks like
          </h2>
        </div>

        {/* Desktop intro */}
        <div className="hidden md:block pt-0 mb-16 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-white/50">What is Carbon?</span>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
            One system to run your customer operations.
          </h2>
        </div>
        
        <div className="space-y-14 md:space-y-16 lg:space-y-24">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-12 lg:gap-16 fade-in ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Content */}
              <div className="space-y-1 md:space-y-3 md:flex-1">
                <div className="pt-4 md:pt-0 text-5xl md:text-6xl lg:text-7xl font-bold text-accent md:text-white tracking-tight">
                  <StaticMetric value={value.metric} />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-accent md:text-white">
                  <span className="md:hidden">{value.mobileTitle}</span>
                  <span className="hidden md:inline">{value.title}</span>
                </h3>
                <p className="text-sm md:text-base text-muted-foreground md:text-white/70 leading-snug max-w-lg">
                  <span className="md:hidden">{value.mobileDescription}</span>
                  <span className="hidden md:inline">{value.description}</span>
                </p>
              </div>
              
              {/* Visual */}
              <div className="relative h-[340px] md:h-80 lg:h-[420px] md:flex-1 bg-muted md:bg-[hsl(0_0%_14%)] md:border md:border-white/10 rounded-xl md:rounded-2xl overflow-hidden">
                {renderVisual(value.visual)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
