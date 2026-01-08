import { Phone, Users, Clock, Calendar, MessageSquare, ArrowRight, Send, Bell, RotateCcw } from "lucide-react";

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
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Incoming calls visualization */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-3">
        {[1, 2, 3].map((i) => (
          <div 
            key={i} 
            className="flex items-center gap-2 px-3 py-2 bg-muted/50 border border-border/50 rounded-lg fade-in"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <Phone className="w-4 h-4 text-accent" />
            <span className="text-xs text-muted-foreground">Incoming</span>
          </div>
        ))}
      </div>
      
      {/* Arrow flow */}
      <div className="flex items-center gap-2 mx-8">
        <ArrowRight className="w-5 h-5 text-accent/50" />
        <div className="w-16 h-px bg-gradient-to-r from-accent/50 to-accent" />
        <ArrowRight className="w-5 h-5 text-accent" />
      </div>
      
      {/* Booked jobs */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 space-y-2">
        {["9:00 AM", "11:30 AM", "2:00 PM"].map((time, i) => (
          <div 
            key={i} 
            className="flex items-center gap-2 px-3 py-2 bg-accent/10 border border-accent/30 rounded-lg fade-in"
            style={{ animationDelay: `${0.5 + i * 0.15}s` }}
          >
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-xs text-foreground font-medium">{time}</span>
          </div>
        ))}
      </div>
      
      {/* Conversion indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="text-xs text-accent font-medium">24/7 Active</span>
      </div>
    </div>
  );

  const RetentionVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      {/* Customer journey timeline */}
      <div className="w-full max-w-md">
        {/* Timeline header */}
        <div className="flex items-center justify-between mb-6 fade-in">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Customer Timeline</span>
          <span className="text-xs text-accent">Auto-triggered</span>
        </div>
        
        {/* Timeline with customers */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-border" />
          
          {/* Timeline events */}
          <div className="space-y-4">
            {[
              { name: "John D.", action: "Service completed", time: "30 days ago", status: "followup", message: "Time for your next oil change?" },
              { name: "Sarah M.", action: "Estimate sent", time: "7 days ago", status: "reminder", message: "Ready to schedule your brake service?" },
              { name: "Mike R.", action: "Missed call", time: "2 days ago", status: "urgent", message: "We tried reaching you about your appointment" }
            ].map((event, i) => (
              <div 
                key={i} 
                className="relative pl-14 fade-in"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 top-3 w-4 h-4 rounded-full border-2 ${
                  event.status === 'urgent' ? 'bg-accent border-accent' : 
                  event.status === 'followup' ? 'bg-accent/20 border-accent' : 
                  'bg-muted border-border'
                }`}>
                  {event.status === 'urgent' && (
                    <Bell className="w-2 h-2 text-accent-foreground absolute top-0.5 left-0.5" />
                  )}
                </div>
                
                {/* Event card */}
                <div className="bg-muted/30 border border-border/50 rounded-lg p-3 hover:border-accent/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-3 h-3 text-accent/70" />
                      <span className="text-sm font-medium text-foreground">{event.name}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{event.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{event.action}</p>
                  
                  {/* Auto-sent message preview */}
                  <div className="flex items-start gap-2 p-2 bg-accent/5 border border-accent/20 rounded-md">
                    <Send className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-[11px] text-foreground/80 italic">"{event.message}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats bar */}
        <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-accent" />
            <span className="text-xs text-foreground">12 customers re-engaged this week</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] text-accent font-medium">AI Active</span>
          </div>
        </div>
      </div>
    </div>
  );

  const AutomationVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Timeline visualization */}
      <div className="w-full max-w-sm">
        <div className="relative">
          {/* Timeline bar */}
          <div className="h-1 bg-border rounded-full mb-6">
            <div className="h-full w-3/4 bg-gradient-to-r from-accent/50 to-accent rounded-full" />
          </div>
          
          {/* Auto-logged events */}
          <div className="space-y-3">
            {[
              { icon: Phone, label: "Call logged", time: "9:15 AM", auto: true },
              { icon: MessageSquare, label: "Text synced", time: "9:22 AM", auto: true },
              { icon: Calendar, label: "Job scheduled", time: "9:25 AM", auto: true },
              { icon: Users, label: "CRM updated", time: "9:25 AM", auto: true }
            ].map((event, i) => {
              const Icon = event.icon;
              return (
                <div 
                  key={i} 
                  className="flex items-center justify-between px-3 py-2 bg-muted/30 border border-border/50 rounded-lg fade-in"
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-accent/70" />
                    <span className="text-xs text-foreground">{event.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground">{event.time}</span>
                    {event.auto && (
                      <span className="text-[9px] px-1.5 py-0.5 bg-accent/10 text-accent rounded">AUTO</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Time saved indicator */}
      <div className="absolute bottom-2 right-2 flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
        <Clock className="w-3 h-3 text-accent" />
        <span className="text-xs text-accent font-medium">Zero manual entry</span>
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
    <section className="py-24 px-6 md:px-12 lg:px-24">
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
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight">
                  {value.metric}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
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
