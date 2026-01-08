import { useState } from "react";
import { Phone, Users, Clock, Calendar, MessageSquare, ArrowRight } from "lucide-react";

const ValueProps = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Customer profiles */}
      <div className="grid grid-cols-2 gap-3 max-w-xs">
        {[
          { name: "John D.", vehicle: "Honda Accord", days: "30 days ago" },
          { name: "Sarah M.", vehicle: "Toyota Camry", days: "45 days ago" },
          { name: "Mike R.", vehicle: "Ford F-150", days: "60 days ago" },
          { name: "Lisa K.", vehicle: "Chevy Malibu", days: "90 days ago" }
        ].map((customer, i) => (
          <div 
            key={i} 
            className="p-3 bg-muted/30 border border-border/50 rounded-lg fade-in group hover:border-accent/30 transition-colors"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-accent/70" />
              <span className="text-xs font-medium text-foreground">{customer.name}</span>
            </div>
            <p className="text-[10px] text-muted-foreground">{customer.vehicle}</p>
            <p className="text-[10px] text-accent/70">{customer.days}</p>
          </div>
        ))}
      </div>
      
      {/* Follow-up indicator */}
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-lg fade-in" style={{ animationDelay: '0.5s' }}>
          <MessageSquare className="w-3 h-3 text-accent" />
          <span className="text-[10px] text-accent">Follow-up sent</span>
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

  const renderVisual = () => {
    switch (values[activeIndex].visual) {
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
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Tabs and content */}
          <div className="space-y-8">
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-3">
              {values.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50"
                  }`}
                >
                  {value.metric}
                </button>
              ))}
            </div>
            
            {/* Active content */}
            <div className="space-y-4 min-h-[140px]">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight fade-in" key={`metric-${activeIndex}`}>
                {values[activeIndex].metric}
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground fade-in" style={{ animationDelay: '0.05s' }} key={`title-${activeIndex}`}>
                {values[activeIndex].title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg fade-in" style={{ animationDelay: '0.1s' }} key={`desc-${activeIndex}`}>
                {values[activeIndex].description}
              </p>
            </div>
          </div>
          
          {/* Right: Visual */}
          <div className="relative h-80 lg:h-96 bg-muted/20 border border-border/50 rounded-2xl overflow-hidden" key={`visual-${activeIndex}`}>
            {renderVisual()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
