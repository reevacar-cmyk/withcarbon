import { Calendar, FileText, Users, Globe, Check, Send, Clock, MapPin, Star } from "lucide-react";

const Essentials = () => {
  // Light mode Calendar Visual - detailed weekly view
  const CalendarVisual = () => (
    <div className="relative w-full h-full bg-card rounded-2xl border border-border/50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/30">
        <div className="flex items-center gap-3">
          <div className="text-sm font-medium text-foreground">March 2024</div>
          <div className="flex gap-1">
            <div className="w-6 h-6 rounded-lg bg-muted/50 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" className="text-muted-foreground" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-6 h-6 rounded-lg bg-muted/50 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" className="text-muted-foreground" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="px-2.5 py-1 rounded-lg bg-accent/10 text-[10px] font-mono text-accent">Week View</div>
      </div>

      {/* Days header */}
      <div className="grid grid-cols-7 gap-2 px-4 py-3 border-b border-border/20">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
          <div key={i} className="text-center">
            <div className="text-[9px] text-muted-foreground font-mono mb-1.5">{day}</div>
            <div className={`text-sm font-medium w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
              i === 2 ? 'bg-accent text-background' : 'text-foreground/70'
            }`} style={i === 2 ? { animation: 'pulse 3s ease-in-out infinite' } : undefined}>
              {11 + i}
            </div>
          </div>
        ))}
      </div>

      {/* Time slots */}
      <div className="px-4 py-3 space-y-2">
        {/* 9 AM Row */}
        <div className="flex items-center gap-3">
          <div className="text-[10px] text-muted-foreground font-mono w-10">9 AM</div>
          <div className="flex-1 grid grid-cols-7 gap-2">
            <div className="h-8 rounded-lg bg-muted/30" />
            <div 
              className="h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center relative overflow-hidden"
              style={{ animation: 'pulse 3s ease-in-out infinite' }}
            >
              <span className="text-[9px] text-accent font-mono font-medium relative z-10">Detail</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0" style={{ animation: 'shimmer 2.5s ease-in-out infinite' }} />
            </div>
            <div 
              className="h-8 rounded-lg bg-accent flex items-center justify-center"
              style={{ animation: 'pulse 2s ease-in-out infinite' }}
            >
              <span className="text-[9px] text-background font-mono font-medium">Full</span>
            </div>
            <div className="h-8 rounded-lg bg-muted/30" />
            <div className="h-8 rounded-lg bg-accent/15 flex items-center justify-center">
              <span className="text-[9px] text-accent/80 font-mono">Wash</span>
            </div>
            <div className="h-8 rounded-lg bg-muted/30" />
            <div className="h-8 rounded-lg bg-muted/30" />
          </div>
        </div>

        {/* 11 AM Row */}
        <div className="flex items-center gap-3">
          <div className="text-[10px] text-muted-foreground font-mono w-10">11 AM</div>
          <div className="flex-1 grid grid-cols-7 gap-2">
            <div className="h-8 rounded-lg bg-accent/15 flex items-center justify-center">
              <span className="text-[9px] text-accent/80 font-mono">Polish</span>
            </div>
            <div className="h-8 rounded-lg bg-muted/30" />
            <div className="h-8 rounded-lg bg-muted/30" />
            <div className="h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
              <span className="text-[9px] text-accent font-mono">Ceramic</span>
            </div>
            <div className="h-8 rounded-lg bg-muted/30" />
            <div className="h-8 rounded-lg bg-accent/15 flex items-center justify-center">
              <span className="text-[9px] text-accent/80 font-mono">Detail</span>
            </div>
            <div className="h-8 rounded-lg bg-muted/30" />
          </div>
        </div>

        {/* 2 PM Row */}
        <div className="flex items-center gap-3">
          <div className="text-[10px] text-muted-foreground font-mono w-10">2 PM</div>
          <div className="flex-1 grid grid-cols-7 gap-2">
            <div className="h-8 rounded-lg bg-muted/30" />
            <div className="h-8 rounded-lg bg-muted/30" />
            <div className="h-8 rounded-lg bg-accent/15 flex items-center justify-center">
              <span className="text-[9px] text-accent/80 font-mono">Interior</span>
            </div>
            <div className="h-8 rounded-lg bg-muted/30" />
            <div className="h-8 rounded-lg bg-muted/30" />
            <div className="h-8 rounded-lg bg-muted/30" />
            <div className="h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
              <span className="text-[9px] text-accent font-mono">PPF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating tooltip */}
      <div 
        className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm border border-border rounded-xl p-3 shadow-lg"
        style={{ animation: 'float 4s ease-in-out infinite' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-accent" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
          <span className="text-[11px] font-medium text-foreground">Full Detail · Tesla Model 3</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-muted-foreground font-mono">
          <span>9:00 AM</span>
          <span>·</span>
          <span>3 hrs</span>
          <span>·</span>
          <span className="text-accent font-medium">$485</span>
        </div>
      </div>

      {/* Stats badge */}
      <div className="absolute top-3 right-4 flex items-center gap-1.5 bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
        <span className="text-[10px] font-mono text-accent font-medium">12 jobs</span>
        <span className="text-[10px] text-muted-foreground">this week</span>
      </div>
    </div>
  );

  // Light mode Invoicing Visual
  const InvoicingVisual = () => (
    <div className="relative w-full h-full bg-card rounded-2xl border border-border/50 overflow-hidden p-4">
      <div className="flex gap-4 h-full">
        {/* Invoice Preview */}
        <div 
          className="flex-1 bg-background rounded-xl border border-border p-4 relative shadow-sm"
          style={{ animation: 'float 5s ease-in-out infinite' }}
        >
          {/* Invoice header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="text-xs font-medium text-foreground mb-1">INVOICE</div>
              <div className="text-[10px] text-muted-foreground font-mono">#INV-2024-0847</div>
            </div>
            <div className="px-2 py-1 rounded-lg bg-accent/15 text-[9px] font-mono text-accent font-medium relative overflow-hidden">
              <span className="relative z-10">PAID</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0" style={{ animation: 'shimmer 2s ease-in-out infinite' }} />
            </div>
          </div>

          {/* Line items */}
          <div className="space-y-3 mb-5">
            <div className="flex justify-between text-[11px]">
              <span className="text-muted-foreground">Full Detail Package</span>
              <span className="text-foreground font-mono">$350</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-muted-foreground">Ceramic Coating</span>
              <span className="text-foreground font-mono">$200</span>
            </div>
            <div className="flex justify-between text-[11px]">
              <span className="text-muted-foreground">Interior Protection</span>
              <span className="text-foreground font-mono">$85</span>
            </div>
          </div>

          {/* Divider & Total */}
          <div className="border-t border-border pt-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Total</span>
              <span className="text-base font-semibold text-accent">$635</span>
            </div>
          </div>

          {/* Customer */}
          <div className="absolute bottom-4 left-4">
            <div className="text-[9px] text-muted-foreground/60 mb-0.5 font-mono">CUSTOMER</div>
            <div className="text-[11px] text-foreground">Marcus Chen</div>
          </div>
        </div>

        {/* Automation Flow */}
        <div className="w-20 flex flex-col items-center justify-center gap-4">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-1.5">
            <div 
              className="w-10 h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center relative"
              style={{ animation: 'pulse 2s ease-in-out infinite' }}
            >
              <Check className="w-5 h-5 text-accent" />
              <div className="absolute inset-0 rounded-full border border-accent/20" style={{ animation: 'ping 3s ease-in-out infinite' }} />
            </div>
            <span className="text-[9px] text-muted-foreground font-mono">Job Done</span>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center">
            <div className="w-px h-5 bg-gradient-to-b from-accent/40 to-border" />
            <svg 
              width="12" height="8" viewBox="0 0 10 6" fill="none"
              style={{ animation: 'bounce 2s ease-in-out infinite' }}
            >
              <path d="M1 1L5 5L9 1" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-1.5">
            <div 
              className="w-10 h-10 rounded-full bg-muted/50 border border-border flex items-center justify-center"
              style={{ animation: 'pulse 2.5s ease-in-out infinite 0.5s' }}
            >
              <Send className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="text-[9px] text-muted-foreground font-mono">Auto-Send</span>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center">
            <div className="w-px h-5 bg-gradient-to-b from-border to-accent/40" />
            <svg 
              width="12" height="8" viewBox="0 0 10 6" fill="none"
              style={{ animation: 'bounce 2s ease-in-out infinite 0.3s' }}
            >
              <path d="M1 1L5 5L9 1" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-1.5">
            <div 
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center relative overflow-hidden"
              style={{ animation: 'pulse 3s ease-in-out infinite 1s' }}
            >
              <span className="text-sm font-semibold text-background relative z-10">$</span>
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" style={{ animation: 'shimmer 2s ease-in-out infinite' }} />
            </div>
            <span className="text-[9px] text-accent font-mono font-medium">Collected</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute top-4 right-4 text-right">
        <div className="text-[10px] text-muted-foreground mb-0.5">This month</div>
        <div className="text-sm font-semibold text-accent">$12,485</div>
        <div className="text-[9px] text-muted-foreground font-mono">collected</div>
      </div>
    </div>
  );

  // Light mode Team Visual
  const TeamVisual = () => (
    <div className="relative w-full h-full bg-card rounded-2xl border border-border/50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/30">
        <div className="flex items-center gap-2.5">
          <div className="text-sm font-medium text-foreground">Team Status</div>
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20">
            <div className="w-2 h-2 rounded-full bg-accent" style={{ animation: 'pulse 1.5s ease-in-out infinite' }} />
            <span className="text-[9px] font-mono text-accent font-medium">LIVE</span>
          </div>
        </div>
        <div className="text-[11px] text-muted-foreground font-mono">4 active</div>
      </div>

      {/* Team members */}
      <div className="p-3 space-y-2.5">
        {[
          { name: "Mike Rodriguez", role: "Lead", status: "on-site", job: "Tesla Model S · Full Detail", time: "2h 15m", avatar: "MR" },
          { name: "Sarah Kim", role: "Tech", status: "transit", job: "BMW X5 · Ceramic", time: "ETA 12m", avatar: "SK" },
          { name: "James Lee", role: "Tech", status: "available", job: "—", time: "Ready", avatar: "JL" },
          { name: "Emma Davis", role: "Jr", status: "on-site", job: "Audi Q7 · Interior", time: "45m", avatar: "ED" },
        ].map((member, i) => (
          <div 
            key={i}
            className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border/50 hover:border-border transition-colors"
            style={{ animation: `float ${4 + i * 0.3}s ease-in-out infinite ${i * 0.15}s` }}
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center">
                <span className="text-xs font-medium text-accent">{member.avatar}</span>
              </div>
              <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-card ${
                member.status === 'on-site' ? 'bg-accent' : 
                member.status === 'transit' ? 'bg-amber-400' : 'bg-muted-foreground/30'
              }`} style={member.status === 'on-site' ? { animation: 'pulse 2s ease-in-out infinite' } : undefined} />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-medium text-foreground truncate">{member.name}</span>
                <span className="text-[9px] text-muted-foreground/60 font-mono">{member.role}</span>
              </div>
              <div className="flex items-center gap-1.5">
                {member.status === 'on-site' && <MapPin className="w-3 h-3 text-accent" />}
                {member.status === 'transit' && <Clock className="w-3 h-3 text-amber-500" />}
                <span className="text-[10px] text-muted-foreground truncate">{member.job}</span>
              </div>
            </div>

            {/* Time */}
            <div className="text-right">
              <div className={`text-xs font-mono font-medium ${
                member.status === 'on-site' ? 'text-accent' : 
                member.status === 'transit' ? 'text-amber-500' : 'text-muted-foreground/60'
              }`}>
                {member.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom stats */}
      <div className="absolute bottom-3 right-3 flex items-center gap-4 bg-background/80 backdrop-blur-sm border border-border rounded-xl px-4 py-2.5">
        <div className="text-right">
          <div className="text-[9px] text-muted-foreground font-mono">Today</div>
          <div className="text-sm font-medium text-foreground">32.5 <span className="text-[10px] text-muted-foreground">hrs</span></div>
        </div>
        <div className="w-px h-7 bg-border" />
        <div className="text-right">
          <div className="text-[9px] text-muted-foreground font-mono">Revenue</div>
          <div className="text-sm font-medium text-accent">$2,840</div>
        </div>
      </div>
    </div>
  );

  // Light mode Booking Visual
  const BookingVisual = () => (
    <div className="relative w-full h-full bg-card rounded-2xl border border-border/50 overflow-hidden">
      {/* Browser chrome */}
      <div className="bg-background rounded-xl border border-border overflow-hidden m-3 shadow-sm">
        {/* Browser bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 bg-muted/30 border-b border-border/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 mx-2 h-6 bg-muted/50 rounded-lg flex items-center px-3">
            <span className="text-[10px] text-muted-foreground font-mono">yourdetailing.com/book</span>
          </div>
        </div>

        {/* Booking widget */}
        <div className="p-5">
          <div className="text-base font-medium text-foreground mb-1">Book Your Detail</div>
          <div className="text-xs text-muted-foreground mb-5">Select your service and preferred time</div>

          {/* Service cards */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {[
              { name: "Express Wash", price: "$45", time: "45 min", selected: false },
              { name: "Full Detail", price: "$285", time: "3 hrs", selected: true },
            ].map((service, i) => (
              <div 
                key={i}
                className={`p-3.5 rounded-xl border transition-all relative overflow-hidden ${
                  service.selected 
                    ? 'bg-accent/10 border-accent/40 shadow-sm' 
                    : 'bg-muted/30 border-border/50'
                }`}
                style={service.selected ? { animation: 'pulse 3s ease-in-out infinite' } : undefined}
              >
                {service.selected && (
                  <div className="absolute top-2.5 right-2.5">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shadow-sm">
                      <Check className="w-3 h-3 text-background" />
                    </div>
                  </div>
                )}
                <div className={`text-xs font-medium mb-1.5 ${service.selected ? 'text-accent' : 'text-foreground/70'}`}>
                  {service.name}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-semibold ${service.selected ? 'text-foreground' : 'text-muted-foreground'}`}>{service.price}</span>
                  <span className="text-[10px] text-muted-foreground">·</span>
                  <span className="text-[10px] text-muted-foreground">{service.time}</span>
                </div>
                {service.selected && (
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0" style={{ animation: 'shimmer 3s ease-in-out infinite' }} />
                )}
              </div>
            ))}
          </div>

          {/* Time slots */}
          <div className="mb-5">
            <div className="text-xs text-muted-foreground mb-2.5">Available Times · Wed, Mar 13</div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'].map((time, i) => (
                <div 
                  key={i}
                  className={`px-4 py-2 rounded-lg border text-xs font-mono whitespace-nowrap transition-all ${
                    i === 1 
                      ? 'bg-accent text-background border-accent shadow-sm' 
                      : 'bg-muted/30 text-foreground/70 border-border/50 hover:border-border'
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full py-3.5 bg-accent rounded-xl flex items-center justify-center gap-2 relative overflow-hidden shadow-sm">
            <span className="text-sm font-medium text-background relative z-10">Confirm Booking</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="relative z-10">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="hsl(var(--background))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-background/20 to-accent/0" style={{ animation: 'shimmer 2s ease-in-out infinite' }} />
          </button>
        </div>
      </div>

      {/* Conversion metrics */}
      <div 
        className="absolute bottom-3 right-3 flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-2 shadow-sm"
        style={{ animation: 'float 4s ease-in-out infinite' }}
      >
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm font-semibold text-accent">+38%</span>
        </div>
        <div className="w-px h-5 bg-border" />
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 text-amber-400" style={{ fill: 'rgb(251 191 36)' }} />
          <span className="text-xs text-foreground font-medium">4.9</span>
        </div>
      </div>
    </div>
  );

  const features = [
    {
      title: "Clear scheduling",
      subtitle: "CALENDAR",
      description: "A clean modern calendar built for real operations. See your week at a glance, drag to reschedule, and never double-book again.",
      visual: <CalendarVisual />
    },
    {
      title: "Smart invoicing",
      subtitle: "BILLING",
      description: "Invoices that send themselves the moment a job is done. Automatic payment reminders and collection tracking built in.",
      visual: <InvoicingVisual />
    },
    {
      title: "Team coordination",
      subtitle: "DISPATCH",
      description: "Manage employee communication, dispatching, and hours with real-time location and status tracking.",
      visual: <TeamVisual />
    },
    {
      title: "Website booking",
      subtitle: "CONVERSION",
      description: "A personalized booking experience that matches your brand and converts visitors into customers.",
      visual: <BookingVisual />
    }
  ];

  return (
    <section className="py-20 md:hidden bg-background">
      <div className="px-[3px]">
        {/* Section header */}
        <div className="mb-10 px-1">
          <div className="text-[10px] font-mono text-accent tracking-widest mb-3 fade-in">THE ESSENTIALS</div>
          <h2 className="text-2xl font-semibold text-foreground mb-3 fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
            Designed to feel better.<br />Built to work better.
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Carbon includes the essentials that are thoughtfully designed so everything feels simple, fast, and trustworthy.
          </p>
        </div>
      </div>
      
      {/* Feature blocks - edge to edge */}
      <div className="flex flex-col gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="fade-in"
            style={{ animationDelay: `${(index + 3) * 0.1}s` }}
          >
            {/* Visual - full width, edge to edge */}
            <div className="h-[320px] px-1">
              {feature.visual}
            </div>
            
            {/* Content */}
            <div className="px-4 pt-5">
              <div className="text-[9px] font-mono text-accent/70 tracking-wider mb-1.5">{feature.subtitle}</div>
              <h3 className="text-lg font-medium text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Essentials;
