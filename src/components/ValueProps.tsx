import { Phone, Users, Clock, Calendar, MessageSquare, ArrowRight, Send, Bell, RotateCcw, PhoneIncoming, CheckCircle, Database, TrendingUp, Repeat, Zap } from "lucide-react";

const ValueProps = () => {
  const values = [
    {
      metric: "40%",
      title: "More bookings",
      mobileTitle: "More jobs booked",
      description: "AI answers calls and texts instantly, qualifies inbound leads, and books jobs 24/7.",
      mobileDescription: "AI SMS handles your inbound leads, increasing booking and making the most of your ad spend.",
      visual: "booking"
    },
    {
      metric: "30%",
      title: "More repeat customers",
      mobileTitle: "More repeat customers",
      description: "AI remembers who they are, their car, past jobs, and conversations — and sends personalized follow-ups at the right time.",
      mobileDescription: "Personalized follow-ups based on their car, history, and timing.",
      visual: "retention"
    },
    {
      metric: "4hrs",
      title: "Saved per day",
      mobileTitle: "Saved daily",
      description: "Every call, text, lead, and job auto-logs into your calendar and CRM — whether AI or a human answered.",
      mobileDescription: "Every call, text, and job auto-logged. No data entry.",
      visual: "automation"
    }
  ];

  // Simplified Booking Visual - more visual, less dense
  const BookingVisual = () => (
    <div className="relative w-full h-full flex flex-col p-4 md:p-5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6 fade-in relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-muted-foreground md:text-white/60 uppercase tracking-wider">Inbound Leads</span>
        </div>
        <span className="text-[10px] px-2 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent">
          24/7 Active
        </span>
      </div>
      
      {/* Visual illustration - SMS conversation flow */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-4 relative z-10">
        {/* Incoming lead indicator */}
        <div className="flex items-center gap-3 w-full max-w-[240px] p-3 bg-muted md:bg-white/10 border border-border md:border-white/20 rounded-xl relative overflow-hidden">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-foreground md:text-white">New SMS Lead</div>
            <div className="text-xs text-muted-foreground md:text-white/60">"How much for a full detail?"</div>
          </div>
        </div>
        
        {/* Arrow down */}
        <div className="flex flex-col items-center gap-1">
          <div className="w-0.5 h-6 bg-accent/40" />
          <Zap className="w-5 h-5 text-accent animate-pulse" />
          <div className="text-[10px] text-accent font-medium">AI responds in 2s</div>
          <div className="w-0.5 h-6 bg-accent/40" />
        </div>
        
        {/* Result */}
        <div className="flex items-center gap-3 w-full max-w-[240px] p-3 bg-accent/10 border border-accent/30 rounded-xl">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-accent">Booked!</div>
            <div className="text-xs text-muted-foreground md:text-white/60">Tomorrow 10am · $220</div>
          </div>
          <CheckCircle className="w-5 h-5 text-accent" />
        </div>
      </div>
      
      {/* Summary stats */}
      <div className="mt-4 pt-3 border-t border-border md:border-white/20 flex items-center justify-between fade-in relative z-10">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-accent">$850</div>
            <div className="text-[9px] text-muted-foreground md:text-white/60">Today</div>
          </div>
          <div className="w-px h-8 bg-border md:bg-white/20" />
          <div className="text-center">
            <div className="text-lg font-bold text-foreground md:text-white">100%</div>
            <div className="text-[9px] text-muted-foreground md:text-white/60">Response</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] text-accent font-medium">AI Active</span>
        </div>
      </div>
    </div>
  );

  // Simplified Retention Visual - more visual, less dense
  const RetentionVisual = () => (
    <div className="relative w-full h-full flex flex-col p-4 md:p-5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6 fade-in relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-muted-foreground md:text-white/60 uppercase tracking-wider">AI Follow-ups</span>
        </div>
        <span className="text-[10px] px-2 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent">
          Personalized
        </span>
      </div>
      
      {/* Visual illustration - Customer memory */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-4 relative z-10">
        {/* Customer profile card */}
        <div className="w-full max-w-[260px] p-4 bg-muted md:bg-white/10 border border-border md:border-white/20 rounded-xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-lg font-bold text-accent">
              JD
            </div>
            <div>
              <div className="text-sm font-medium text-foreground md:text-white">John D.</div>
              <div className="text-xs text-muted-foreground md:text-white/60">2021 Tesla Model 3</div>
            </div>
          </div>
          
          {/* Memory points */}
          <div className="space-y-2 mb-3">
            <div className="flex items-center gap-2 text-xs">
              <Repeat className="w-3.5 h-3.5 text-accent" />
              <span className="text-foreground/80 md:text-white/80">Last detail: 45 days ago</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <TrendingUp className="w-3.5 h-3.5 text-accent" />
              <span className="text-foreground/80 md:text-white/80">$1,440 lifetime value</span>
            </div>
          </div>
          
          {/* AI action */}
          <div className="p-2 bg-accent/10 border border-accent/30 rounded-lg">
            <div className="flex items-center gap-2 text-xs text-accent font-medium mb-1">
              <Send className="w-3 h-3" />
              AI sent follow-up
            </div>
            <div className="text-[11px] text-muted-foreground md:text-white/70 italic">"Hey John! Your Model 3 is probably due..."</div>
          </div>
        </div>
        
        {/* Result badge */}
        <div className="flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full">
          <CheckCircle className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">Booked for Thursday</span>
        </div>
      </div>
      
      {/* Summary stats */}
      <div className="mt-4 pt-3 border-t border-border md:border-white/20 flex items-center justify-between fade-in relative z-10">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-accent">$650</div>
            <div className="text-[9px] text-muted-foreground md:text-white/60">Recovered</div>
          </div>
          <div className="w-px h-8 bg-border md:bg-white/20" />
          <div className="text-center">
            <div className="text-lg font-bold text-foreground md:text-white">67%</div>
            <div className="text-[9px] text-muted-foreground md:text-white/60">Rebook rate</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] text-accent font-medium">AI Active</span>
        </div>
      </div>
    </div>
  );

  // Simplified Automation Visual - more visual, less dense
  const AutomationVisual = () => (
    <div className="relative w-full h-full flex flex-col p-4 md:p-5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6 fade-in relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-muted-foreground md:text-white/60 uppercase tracking-wider">Auto-Sync</span>
        </div>
        <span className="text-[10px] px-2 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent">
          Zero Manual Entry
        </span>
      </div>
      
      {/* Visual illustration - Auto-logging flow */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-3 relative z-10">
        {/* Data sources */}
        <div className="flex items-center justify-center gap-3 w-full">
          {[
            { icon: Phone, label: "Calls" },
            { icon: MessageSquare, label: "Texts" },
            { icon: Calendar, label: "Jobs" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 p-3 bg-muted md:bg-white/10 border border-border md:border-white/20 rounded-xl">
              <item.icon className="w-5 h-5 text-muted-foreground md:text-white/70" />
              <span className="text-[10px] text-muted-foreground md:text-white/60">{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Arrows flowing down */}
        <div className="flex items-center justify-center gap-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-accent/40" />
              <div className="w-2 h-2 border-b-2 border-r-2 border-accent/60 rotate-45 -mt-1" />
            </div>
          ))}
        </div>
        
        {/* CRM destination */}
        <div className="w-full max-w-[260px] p-4 bg-accent/10 border border-accent/30 rounded-xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <Database className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-sm font-medium text-foreground md:text-white">Your CRM</div>
              <div className="text-xs text-accent">100% up to date</div>
            </div>
          </div>
          
          {/* Recent auto-logs */}
          <div className="space-y-1.5">
            {[
              { action: "Call logged", time: "Just now" },
              { action: "Job created", time: "2m ago" },
              { action: "SMS synced", time: "5m ago" }
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between text-xs py-1.5 border-b border-border/50 md:border-white/10 last:border-0">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-accent" />
                  <span className="text-foreground/80 md:text-white/80">{log.action}</span>
                </div>
                <span className="text-muted-foreground md:text-white/50 text-[10px]">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Summary stats */}
      <div className="mt-4 pt-3 border-t border-border md:border-white/20 flex items-center justify-between fade-in relative z-10">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-lg font-bold text-foreground md:text-white">142</div>
            <div className="text-[9px] text-muted-foreground md:text-white/60">Profiles</div>
          </div>
          <div className="w-px h-8 bg-border md:bg-white/20" />
          <div className="text-center">
            <div className="text-lg font-bold text-accent">0</div>
            <div className="text-[9px] text-muted-foreground md:text-white/60">Manual entry</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] text-accent font-medium">Synced</span>
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
    <section className="pt-16 pb-12 md:py-20 px-[3px] md:px-8 lg:px-16 bg-background md:bg-[hsl(0_0%_5%)] md:text-[hsl(0_0%_100%)]">
      <div className="container mx-auto">
        {/* Mobile-only intro - builds from hero vision */}
        <div className="md:hidden pt-0 mb-10 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">The Results</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground leading-[1.1]">
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
                <div className="pt-4 md:pt-0 text-5xl md:text-6xl lg:text-7xl font-bold text-foreground md:text-white tracking-tight">
                  {value.metric}
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground md:text-white">
                  <span className="md:hidden">{value.mobileTitle}</span>
                  <span className="hidden md:inline">{value.title}</span>
                </h3>
                <p className="text-sm md:text-base text-muted-foreground md:text-white/70 leading-snug max-w-lg">
                  <span className="md:hidden">{value.mobileDescription}</span>
                  <span className="hidden md:inline">{value.description}</span>
                </p>
              </div>
              
              {/* Visual */}
              <div className="relative h-[340px] md:h-80 lg:h-[420px] md:flex-1 bg-muted md:bg-[hsl(0_0%_8%)] border border-border md:border-white/10 rounded-xl md:rounded-2xl overflow-hidden">
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
