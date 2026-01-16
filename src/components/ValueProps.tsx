import { Phone, Users, Clock, Calendar, MessageSquare, ArrowRight, Send, Bell, RotateCcw, PhoneIncoming, Database, TrendingUp, Repeat, Zap } from "lucide-react";
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

  // Animated Booking Visual with cycling lead cards
  const BookingVisual = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showLead, setShowLead] = useState(false);
    const [pulsePhase, setPulsePhase] = useState<'idle' | 'toCenter' | 'loading' | 'toBottom'>('idle');
    const [showBooked, setShowBooked] = useState(false);
    
    const leads = [
      { source: "google", message: "Price for a detail?" },
      { source: "meta", message: "Do ceramic coating?" },
      { source: "google", message: "Available today?" },
      { source: "meta", message: "Interior only price?" },
      { source: "google", message: "Open this weekend?" },
      { source: "meta", message: "Mobile detailing?" },
      { source: "google", message: "Full detail cost?" },
    ];
    
    const bookings = [
      "Tomorrow 10am · $220",
      "Today 3pm · $450",
      "Saturday 9am · $180",
      "Today 5pm · $95",
      "Sunday 11am · $320",
      "Tomorrow 2pm · $280",
      "Friday 4pm · $240",
    ];
    
    useEffect(() => {
      // Timeline per cycle:
      // 0ms: Start fresh
      // 100ms: Lead card appears
      // 600ms: Pulse starts traveling to center
      // 1100ms: Pulse reaches center, loading state starts
      // 2100ms: Loading ends, pulse travels to bottom
      // 2600ms: Booked card appears
      // 4200ms: Everything fades, cycle to next
      
      let showLeadTimeout: NodeJS.Timeout;
      let pulseStartTimeout: NodeJS.Timeout;
      let loadingTimeout: NodeJS.Timeout;
      let pulseToBottomTimeout: NodeJS.Timeout;
      let showBookedTimeout: NodeJS.Timeout;
      let resetTimeout: NodeJS.Timeout;
      
      // Show lead card
      showLeadTimeout = setTimeout(() => {
        setShowLead(true);
      }, 100);
      
      // Start pulse to center
      pulseStartTimeout = setTimeout(() => {
        setPulsePhase('toCenter');
      }, 600);
      
      // Pulse reaches center, start loading
      loadingTimeout = setTimeout(() => {
        setPulsePhase('loading');
      }, 1100);
      
      // Loading ends, pulse to bottom
      pulseToBottomTimeout = setTimeout(() => {
        setPulsePhase('toBottom');
      }, 2100);
      
      // Show booked card
      showBookedTimeout = setTimeout(() => {
        setShowBooked(true);
        setPulsePhase('idle');
      }, 2600);
      
      // Reset and cycle
      resetTimeout = setTimeout(() => {
        setShowLead(false);
        setShowBooked(false);
        setPulsePhase('idle');
        setCurrentIndex((prev) => (prev + 1) % leads.length);
      }, 4200);
      
      return () => {
        clearTimeout(showLeadTimeout);
        clearTimeout(pulseStartTimeout);
        clearTimeout(loadingTimeout);
        clearTimeout(pulseToBottomTimeout);
        clearTimeout(showBookedTimeout);
        clearTimeout(resetTimeout);
      };
    }, [currentIndex, leads.length]);
    
    const lead = leads[currentIndex];
    const booking = bookings[currentIndex];
    
    // Google logo SVG
    const GoogleLogo = () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    );
    
    // Meta logo SVG
    const MetaLogo = () => (
      <svg viewBox="0 0 24 24" className="w-4 h-4">
        <path fill="#0081FB" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    );
    
    return (
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
          <div className="flex-1 flex flex-col items-center justify-center gap-0">
            {/* Lead card */}
            <div className={`w-full max-w-[240px] px-3 py-2.5 bg-background border border-border rounded-sm shadow-sm transition-all duration-700 ease-out ${
              showLead ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-6 scale-95'
            }`}>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-muted border border-border rounded-sm flex items-center justify-center flex-shrink-0">
                  {lead.source === 'google' ? <GoogleLogo /> : <MetaLogo />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] font-mono text-muted-foreground uppercase">
                    {lead.source === 'google' ? 'Google Ads' : 'Meta Ads'}
                  </div>
                  <div className="text-[11px] text-foreground leading-tight">"{lead.message}"</div>
                </div>
              </div>
            </div>
            
            {/* Connector with pulse */}
            <div className="flex flex-col items-center relative">
              {/* Top line with pulse */}
              <div className="w-px h-6 bg-border relative overflow-visible z-0">
                {pulsePhase === 'toCenter' && (
                  <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent animate-[pulseDown_0.5s_ease-out_forwards]" />
                )}
              </div>
              
              {/* Center icon */}
              <div className={`relative z-10 w-6 h-6 rounded-sm flex items-center justify-center transition-colors duration-200 ${
                pulsePhase === 'toCenter' || pulsePhase === 'loading' || pulsePhase === 'toBottom' || showBooked ? 'bg-accent' : 'bg-muted border border-border'
              }`}>
                {pulsePhase === 'loading' ? (
                  <div className="w-3 h-3 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Zap className={`w-3 h-3 transition-colors ${pulsePhase === 'toCenter' || pulsePhase === 'toBottom' || showBooked ? 'text-accent-foreground fill-accent-foreground' : 'text-muted-foreground'}`} />
                )}
              </div>
              <div className={`text-[9px] font-mono mt-1 transition-colors ${pulsePhase === 'toCenter' || pulsePhase === 'loading' || pulsePhase === 'toBottom' || showBooked ? 'text-accent' : 'text-muted-foreground'}`}>
                2s response
              </div>
              
              {/* Bottom line with pulse */}
              <div className="w-px h-6 bg-border relative overflow-visible z-0">
                {pulsePhase === 'toBottom' && (
                  <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent animate-[pulseDown_0.5s_ease-out_forwards]" />
                )}
              </div>
            </div>
            
            {/* Booked card */}
            <div className={`w-full max-w-[240px] px-3 py-2.5 bg-accent border border-accent rounded-sm shadow-sm transition-all duration-500 ${
              showBooked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-accent-foreground/20 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-accent-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[9px] font-mono text-accent-foreground/80 uppercase">Booked</div>
                  <div className="text-[11px] text-accent-foreground leading-tight">{booking}</div>
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
  };

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
              <span className="text-xs font-mono text-accent-foreground">Rebooked</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Animated Automation Visual with curved lines and flowing dots
  const AutomationVisual = () => {
    const [counters, setCounters] = useState([483, 728, 611]);
    const [checkPulse, setCheckPulse] = useState<number | null>(null);
    
    const sources = [
      { icon: Phone, label: "Calls" },
      { icon: MessageSquare, label: "Texts" },
      { icon: Calendar, label: "Jobs" }
    ];
    
    const logEntries = [
      { action: "Call logged" },
      { action: "SMS synced" },
      { action: "Job created" }
    ];
    
    // Increment counters based on dot timing
    useEffect(() => {
      // Dot 1: 0.9s duration, starts at 0s
      // Dot 2: 0.75s duration, starts at 0.3s
      // Dot 3: 0.9s duration, starts at 0.6s
      
      const incrementCounter = (index: number) => {
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = newCounters[index] + 1;
          return newCounters;
        });
        setCheckPulse(index);
        setTimeout(() => setCheckPulse(null), 200);
      };
      
      // Set up intervals matching each dot's cycle
      const interval1 = setInterval(() => incrementCounter(0), 900);
      const interval2 = setInterval(() => incrementCounter(1), 750);
      const interval3 = setInterval(() => incrementCounter(2), 900);
      
      // Stagger the starts to match animation delays
      const timeout2 = setTimeout(() => {
        incrementCounter(1);
      }, 300 + 750);
      
      const timeout3 = setTimeout(() => {
        incrementCounter(2);
      }, 600 + 900);
      
      // Initial increment for first dot
      const timeout1 = setTimeout(() => {
        incrementCounter(0);
      }, 900);
      
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      };
    }, []);
    
    return (
      <div className="relative w-full h-full overflow-hidden">
        {/* Mobile */}
        <div className="md:hidden h-full flex flex-col p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Data → CRM</span>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/20 border border-green-500/40 rounded-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-mono text-green-600 font-medium">SYNC</span>
            </div>
          </div>
          
          {/* Flow diagram */}
          <div className="flex-1 flex flex-col items-center justify-center gap-0">
            {/* Input sources - icons in circles */}
            <div className="flex items-center justify-between w-full max-w-[220px] px-2">
              {sources.map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <span className="text-[9px] font-mono text-muted-foreground uppercase">{item.label}</span>
                </div>
              ))}
            </div>
            
            {/* Curved lines with animated dots - SVG */}
            <div className="relative w-full max-w-[220px] h-10">
              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 220 40" preserveAspectRatio="xMidYMid meet">
                {/* Define curved paths - from icons down to center */}
                <defs>
                  <path id="autoLine1" d="M 27 0 C 27 20, 110 20, 110 40" />
                  <path id="autoLine2" d="M 110 0 L 110 40" />
                  <path id="autoLine3" d="M 193 0 C 193 20, 110 20, 110 40" />
                </defs>
                
                {/* Static dashed lines */}
                <use href="#autoLine1" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
                <use href="#autoLine2" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
                <use href="#autoLine3" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Animated dots traveling down the paths */}
                <circle r="3" fill="hsl(var(--accent))">
                  <animateMotion dur="0.9s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.6 1">
                    <mpath href="#autoLine1" />
                  </animateMotion>
                  <animate attributeName="opacity" values="1;1;0" keyTimes="0;0.8;1" dur="0.9s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="hsl(var(--accent))">
                  <animateMotion dur="0.75s" repeatCount="indefinite" begin="0.3s" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.6 1">
                    <mpath href="#autoLine2" />
                  </animateMotion>
                  <animate attributeName="opacity" values="1;1;0" keyTimes="0;0.8;1" dur="0.75s" repeatCount="indefinite" begin="0.3s" />
                </circle>
                <circle r="3" fill="hsl(var(--accent))">
                  <animateMotion dur="0.9s" repeatCount="indefinite" begin="0.6s" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.6 1">
                    <mpath href="#autoLine3" />
                  </animateMotion>
                  <animate attributeName="opacity" values="1;1;0" keyTimes="0;0.8;1" dur="0.9s" repeatCount="indefinite" begin="0.6s" />
                </circle>
              </svg>
            </div>
            
            {/* Central CRM card */}
            <div className="w-full max-w-[220px] px-3 py-3 bg-accent rounded-sm shadow-sm">
              <div className="flex items-center gap-3 mb-2 pb-2 border-b border-accent-foreground/20">
                <div className="w-7 h-7 bg-accent-foreground/20 rounded-sm flex items-center justify-center">
                  <Database className="w-3.5 h-3.5 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-[9px] font-mono text-accent-foreground uppercase">CRM</div>
                  <div className="text-[11px] text-accent-foreground">Auto-synced</div>
                </div>
              </div>
              
              {/* Log entries with counter */}
              <div className="space-y-1.5">
                {logEntries.map((log, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between text-[10px]"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-accent-foreground">{log.action}</span>
                    </div>
                    <span className="font-mono text-accent-foreground/80">{counters[i]}</span>
                  </div>
                ))}
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
              {sources.map((item, i) => (
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
                {logEntries.map((log, i) => (
                  <div key={i} className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2">
                      <span className="text-accent-foreground">{log.action}</span>
                    </div>
                    <span className="font-mono text-accent-foreground/80">{counters[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
