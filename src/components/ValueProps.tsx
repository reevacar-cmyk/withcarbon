import { Phone, Users, Clock, Calendar, MessageSquare, ArrowRight, Send, Bell, RotateCcw, PhoneIncoming, CheckCircle, Database } from "lucide-react";

const ValueProps = () => {
  const values = [
    {
      metric: "40%",
      title: "Increase booking rate",
      description: "AI answers calls and texts instantly, qualifies inbound leads, and books jobs 24/7.",
      visual: "booking"
    },
    {
      metric: "30%",
      title: "Bring back more customers",
      description: "AI remembers who they are, their car, past jobs, and conversations — and sends personalized follow-ups at the right time.",
      visual: "retention"
    },
    {
      metric: "~4hrs",
      title: "Save every week",
      description: "Every call, text, lead, and job auto-logs into your calendar and CRM — whether AI or a human answered.",
      visual: "automation"
    }
  ];

  const BookingVisual = () => (
    <div className="relative w-full h-full flex flex-col p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 fade-in">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Live Leads</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-accent">24/7 Active</span>
      </div>
      
      {/* Lead cards */}
      <div className="flex-1 space-y-3 overflow-hidden">
        {[
          { 
            name: "New Lead",
            phone: "(555) 123-4567",
            source: "Missed call",
            time: "Just now",
            aiAction: "Answered & qualified",
            request: "Full detail for BMW X5",
            outcome: "Booked",
            slot: "Tomorrow 10am",
            value: "$220",
            crmStatus: "Synced"
          },
          { 
            name: "Maria G.",
            phone: "(555) 987-6543",
            source: "Text message",
            time: "2 min ago",
            aiAction: "Sent quote",
            request: "Ceramic coating estimate",
            outcome: "Quote sent",
            slot: null,
            value: "$450",
            crmStatus: "Synced"
          },
          { 
            name: "David L.",
            phone: "(555) 456-7890",
            source: "Website form",
            time: "5 min ago",
            aiAction: "Auto-responded",
            request: "Interior + exterior",
            outcome: "Booked",
            slot: "Friday 2pm",
            value: "$180",
            crmStatus: "Synced"
          }
        ].map((lead, i) => (
          <div 
            key={i} 
            className="bg-card/80 border border-border/50 rounded-xl p-3 fade-in hover:border-accent/30 transition-colors"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {/* Lead header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center">
                  <PhoneIncoming className="w-3.5 h-3.5 text-accent" />
                </div>
                <div>
                  <div className="text-xs font-medium text-foreground">{lead.name}</div>
                  <div className="text-[10px] text-muted-foreground">{lead.source} · {lead.time}</div>
                </div>
              </div>
              <div className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                lead.outcome === 'Booked' 
                  ? 'bg-accent/20 text-accent' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {lead.outcome}
              </div>
            </div>
            
            {/* Request */}
            <div className="bg-muted/30 rounded-lg px-2 py-1.5 mb-2">
              <p className="text-[11px] text-foreground">"{lead.request}"</p>
            </div>
            
            {/* AI action + result row */}
            <div className="flex items-center justify-between text-[10px]">
              <div className="flex items-center gap-1 text-accent">
                <CheckCircle className="w-3 h-3" />
                <span>{lead.aiAction}</span>
              </div>
              {lead.slot && (
                <div className="flex items-center gap-1 text-foreground">
                  <Calendar className="w-3 h-3 text-accent/70" />
                  <span>{lead.slot}</span>
                </div>
              )}
            </div>
            
            {/* Bottom row - value + CRM sync */}
            <div className="mt-2 pt-2 border-t border-border/30 flex items-center justify-between">
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <Database className="w-3 h-3 text-accent/70" />
                <span>{lead.crmStatus}</span>
              </div>
              <span className="text-xs font-bold text-accent">{lead.value}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Summary stats */}
      <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-base font-bold text-accent">$850</div>
            <div className="text-[8px] text-muted-foreground">Today</div>
          </div>
          <div className="w-px h-6 bg-border/50" />
          <div className="text-center">
            <div className="text-base font-bold text-foreground">100%</div>
            <div className="text-[8px] text-muted-foreground">Answered</div>
          </div>
          <div className="w-px h-6 bg-border/50" />
          <div className="text-center">
            <div className="text-base font-bold text-foreground">3/3</div>
            <div className="text-[8px] text-muted-foreground">CRM synced</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] text-accent font-medium">AI Active</span>
        </div>
      </div>
    </div>
  );

  const RetentionVisual = () => (
    <div className="relative w-full h-full flex flex-col p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 fade-in">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">AI Follow-ups</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-accent">Personalized</span>
      </div>
      
      {/* Main conversation thread */}
      <div className="flex-1 space-y-3 overflow-hidden">
        {[
          { 
            name: "John D.", 
            vehicle: "2021 Tesla Model 3",
            lastService: "Full detail · 45 days ago",
            message: "Hey John! Your Model 3 is probably due for another detail. Want me to book you in this week?",
            response: "Yes! Thursday works",
            outcome: "Booked",
            value: "$180"
          },
          { 
            name: "Sarah M.", 
            vehicle: "2019 BMW X5",
            lastService: "Ceramic coat · 6 months ago",
            message: "Hi Sarah, your ceramic coating maintenance is coming up. Ready for a quick refresh?",
            response: "Can you do Saturday?",
            outcome: "Booked",
            value: "$120"
          },
          { 
            name: "Mike R.", 
            vehicle: "2022 Ford F-150",
            lastService: "Interior clean · 30 days ago",
            message: "Mike, noticed you do a lot of highway miles. Time for a paint correction?",
            response: null,
            outcome: "Sent",
            value: "$350"
          }
        ].map((customer, i) => (
          <div 
            key={i} 
            className="bg-card/80 border border-border/50 rounded-xl p-3 fade-in hover:border-accent/30 transition-colors"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {/* Customer header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center text-[10px] font-bold text-accent">
                  {customer.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-xs font-medium text-foreground">{customer.name}</div>
                  <div className="text-[10px] text-muted-foreground">{customer.vehicle}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                  customer.outcome === 'Booked' 
                    ? 'bg-accent/20 text-accent' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {customer.outcome}
                </div>
              </div>
            </div>
            
            {/* Context */}
            <div className="text-[10px] text-muted-foreground mb-2 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {customer.lastService}
            </div>
            
            {/* AI Message */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-2 mb-2">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Send className="w-2.5 h-2.5 text-accent" />
                </div>
                <p className="text-[11px] text-foreground/90 leading-relaxed">"{customer.message}"</p>
              </div>
            </div>
            
            {/* Customer response if exists */}
            {customer.response && (
              <div className="flex justify-end">
                <div className="bg-muted/50 rounded-lg px-2 py-1.5 max-w-[70%]">
                  <p className="text-[11px] text-foreground">"{customer.response}"</p>
                </div>
              </div>
            )}
            
            {/* Value indicator for booked */}
            {customer.outcome === 'Booked' && (
              <div className="mt-2 pt-2 border-t border-border/30 flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">Revenue recovered</span>
                <span className="text-xs font-bold text-accent">{customer.value}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Summary stats */}
      <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-base font-bold text-accent">$650</div>
            <div className="text-[8px] text-muted-foreground">Recovered</div>
          </div>
          <div className="w-px h-6 bg-border/50" />
          <div className="text-center">
            <div className="text-base font-bold text-foreground">67%</div>
            <div className="text-[8px] text-muted-foreground">Response rate</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] text-accent font-medium">AI Active</span>
        </div>
      </div>
    </div>
  );

  const AutomationVisual = () => (
    <div className="relative w-full h-full flex flex-col p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 fade-in">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">CRM Dashboard</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-accent">Auto-sync</span>
      </div>
      
      {/* Main content - Customer profile card */}
      <div className="flex-1 space-y-3 overflow-hidden">
        {/* Featured customer profile */}
        <div className="bg-card/80 border border-accent/30 rounded-xl p-4 fade-in">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">
              JD
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-foreground">John Davidson</div>
                <div className="text-[10px] px-1.5 py-0.5 bg-accent/20 text-accent rounded">VIP</div>
              </div>
              <div className="text-[10px] text-muted-foreground">2021 Tesla Model 3 · Black</div>
            </div>
          </div>
          
          {/* Customer stats */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="text-center p-2 bg-muted/30 rounded-lg">
              <div className="text-sm font-bold text-foreground">8</div>
              <div className="text-[9px] text-muted-foreground">Visits</div>
            </div>
            <div className="text-center p-2 bg-muted/30 rounded-lg">
              <div className="text-sm font-bold text-accent">$1,440</div>
              <div className="text-[9px] text-muted-foreground">Lifetime</div>
            </div>
            <div className="text-center p-2 bg-muted/30 rounded-lg">
              <div className="text-sm font-bold text-foreground">45d</div>
              <div className="text-[9px] text-muted-foreground">Avg. cycle</div>
            </div>
          </div>
          
          {/* Recent activity log */}
          <div className="space-y-1.5">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2">Activity Log</div>
            {[
              { action: "Call answered", detail: "Booked full detail", time: "Today", icon: Phone },
              { action: "SMS sent", detail: "Appointment reminder", time: "Yesterday", icon: MessageSquare },
              { action: "Service completed", detail: "Full detail + ceramic", time: "45d ago", icon: CheckCircle }
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between text-[10px] py-1 border-b border-border/20 last:border-0">
                <div className="flex items-center gap-2">
                  <log.icon className="w-3 h-3 text-accent/70" />
                  <span className="text-foreground">{log.action}</span>
                  <span className="text-muted-foreground">· {log.detail}</span>
                </div>
                <span className="text-muted-foreground">{log.time}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Other customers in CRM */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { initials: "SM", name: "Sarah M.", vehicle: "BMW X5", visits: 5, value: "$920" },
            { initials: "MR", name: "Mike R.", vehicle: "Ford F-150", visits: 3, value: "$540" }
          ].map((customer, i) => (
            <div 
              key={i} 
              className="bg-card/60 border border-border/50 rounded-lg p-2.5 fade-in hover:border-accent/30 transition-colors"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-[9px] font-bold text-accent">
                  {customer.initials}
                </div>
                <div>
                  <div className="text-[11px] font-medium text-foreground">{customer.name}</div>
                  <div className="text-[9px] text-muted-foreground">{customer.vehicle}</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-muted-foreground">{customer.visits} visits</span>
                <span className="text-accent font-medium">{customer.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Summary stats */}
      <div className="mt-4 pt-3 border-t border-border/30 flex items-center justify-between fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-base font-bold text-foreground">142</div>
            <div className="text-[8px] text-muted-foreground">Profiles</div>
          </div>
          <div className="w-px h-6 bg-border/50" />
          <div className="text-center">
            <div className="text-base font-bold text-accent">100%</div>
            <div className="text-[8px] text-muted-foreground">Up to date</div>
          </div>
          <div className="w-px h-6 bg-border/50" />
          <div className="text-center">
            <div className="text-base font-bold text-foreground">0</div>
            <div className="text-[8px] text-muted-foreground">Manual entry</div>
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
    <section className="py-24 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="space-y-24 lg:space-y-32">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center fade-in ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Content */}
              <div className={`space-y-5 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
                  {value.metric}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-snug max-w-lg">
                  {value.description}
                </p>
              </div>
              
              {/* Visual */}
              <div className={`relative h-80 lg:h-[420px] bg-muted/20 border border-border/50 rounded-2xl overflow-hidden ${
                index % 2 === 1 ? 'lg:col-start-1' : ''
              }`}>
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
