import { Calendar, FileText, Users, Globe, Check, Send, Clock, MapPin, Star } from "lucide-react";

const Essentials = () => {
  // Premium Calendar Visual - detailed weekly view with time blocks
  const CalendarVisual = () => (
    <div className="relative w-full h-full bg-[hsl(0_0%_8%)] rounded-xl border border-white/10 overflow-hidden p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="text-[11px] font-medium text-white">March 2024</div>
          <div className="flex gap-1">
            <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="white" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="white" strokeOpacity="0.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="px-2 py-0.5 rounded bg-accent/20 text-[9px] font-mono text-accent">Week View</div>
      </div>

      {/* Days header */}
      <div className="grid grid-cols-7 gap-1.5 mb-3">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
          <div key={i} className="text-center">
            <div className="text-[8px] text-white/40 font-mono mb-1">{day}</div>
            <div className={`text-[11px] font-medium w-6 h-6 mx-auto rounded-full flex items-center justify-center ${
              i === 2 ? 'bg-accent text-background' : 'text-white/70'
            }`}>
              {11 + i}
            </div>
          </div>
        ))}
      </div>

      {/* Time slots */}
      <div className="space-y-1.5">
        {/* 9 AM Row */}
        <div className="flex items-center gap-2">
          <div className="text-[8px] text-white/30 font-mono w-8">9 AM</div>
          <div className="flex-1 grid grid-cols-7 gap-1.5">
            <div className="h-6 rounded bg-white/5" />
            <div 
              className="h-6 rounded bg-accent/30 border border-accent/40 flex items-center justify-center relative overflow-hidden"
              style={{ animation: 'pulse 3s ease-in-out infinite' }}
            >
              <span className="text-[7px] text-accent font-mono relative z-10">Detail</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0" style={{ animation: 'shimmer 2.5s ease-in-out infinite' }} />
            </div>
            <div 
              className="h-6 rounded bg-accent flex items-center justify-center"
              style={{ animation: 'pulse 2s ease-in-out infinite' }}
            >
              <span className="text-[7px] text-background font-mono font-medium">Full</span>
            </div>
            <div className="h-6 rounded bg-white/5" />
            <div className="h-6 rounded bg-accent/20 flex items-center justify-center">
              <span className="text-[7px] text-accent/80 font-mono">Wash</span>
            </div>
            <div className="h-6 rounded bg-white/5" />
            <div className="h-6 rounded bg-white/5" />
          </div>
        </div>

        {/* 11 AM Row */}
        <div className="flex items-center gap-2">
          <div className="text-[8px] text-white/30 font-mono w-8">11 AM</div>
          <div className="flex-1 grid grid-cols-7 gap-1.5">
            <div className="h-6 rounded bg-accent/20 flex items-center justify-center">
              <span className="text-[7px] text-accent/80 font-mono">Polish</span>
            </div>
            <div className="h-6 rounded bg-white/5" />
            <div className="h-6 rounded bg-white/5" />
            <div className="h-6 rounded bg-accent/30 border border-accent/40 flex items-center justify-center">
              <span className="text-[7px] text-accent font-mono">Ceramic</span>
            </div>
            <div className="h-6 rounded bg-white/5" />
            <div className="h-6 rounded bg-accent/20 flex items-center justify-center">
              <span className="text-[7px] text-accent/80 font-mono">Detail</span>
            </div>
            <div className="h-6 rounded bg-white/5" />
          </div>
        </div>

        {/* 2 PM Row */}
        <div className="flex items-center gap-2">
          <div className="text-[8px] text-white/30 font-mono w-8">2 PM</div>
          <div className="flex-1 grid grid-cols-7 gap-1.5">
            <div className="h-6 rounded bg-white/5" />
            <div className="h-6 rounded bg-white/5" />
            <div className="h-6 rounded bg-accent/20 flex items-center justify-center">
              <span className="text-[7px] text-accent/80 font-mono">Interior</span>
            </div>
            <div className="h-6 rounded bg-white/5" />
            <div className="h-6 rounded bg-white/5" />
            <div className="h-6 rounded bg-white/5" />
            <div className="h-6 rounded bg-accent/30 border border-accent/40 flex items-center justify-center">
              <span className="text-[7px] text-accent font-mono">PPF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating tooltip */}
      <div 
        className="absolute bottom-3 right-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-2 shadow-xl"
        style={{ animation: 'float 4s ease-in-out infinite' }}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-2 h-2 rounded-full bg-accent" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
          <span className="text-[9px] font-medium text-white">Full Detail · Tesla Model 3</span>
        </div>
        <div className="flex items-center gap-3 text-[8px] text-white/50 font-mono">
          <span>9:00 AM</span>
          <span>·</span>
          <span>3 hrs</span>
          <span>·</span>
          <span className="text-accent">$485</span>
        </div>
      </div>

      {/* Stats badge */}
      <div className="absolute top-3 right-3 flex items-center gap-1 bg-accent/20 rounded-full px-2 py-0.5">
        <span className="text-[8px] font-mono text-accent font-medium">12 jobs</span>
        <span className="text-[8px] text-white/40">this week</span>
      </div>
    </div>
  );

  // Premium Invoicing Visual - detailed invoice flow
  const InvoicingVisual = () => (
    <div className="relative w-full h-full bg-[hsl(0_0%_8%)] rounded-xl border border-white/10 overflow-hidden p-4">
      <div className="flex gap-4 h-full">
        {/* Invoice Preview */}
        <div 
          className="flex-1 bg-white/5 rounded-lg border border-white/10 p-3 relative"
          style={{ animation: 'float 5s ease-in-out infinite' }}
        >
          {/* Invoice header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-[10px] font-medium text-white mb-0.5">INVOICE</div>
              <div className="text-[8px] text-white/40 font-mono">#INV-2024-0847</div>
            </div>
            <div className="px-1.5 py-0.5 rounded bg-accent/20 text-[7px] font-mono text-accent relative overflow-hidden">
              <span className="relative z-10">PAID</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/30 to-accent/0" style={{ animation: 'shimmer 2s ease-in-out infinite' }} />
            </div>
          </div>

          {/* Line items */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-[8px]">
              <span className="text-white/60">Full Detail Package</span>
              <span className="text-white/80 font-mono">$350</span>
            </div>
            <div className="flex justify-between text-[8px]">
              <span className="text-white/60">Ceramic Coating</span>
              <span className="text-white/80 font-mono">$200</span>
            </div>
            <div className="flex justify-between text-[8px]">
              <span className="text-white/60">Interior Protection</span>
              <span className="text-white/80 font-mono">$85</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-2">
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-white/60">Total</span>
              <span className="text-[12px] font-medium text-accent">$635</span>
            </div>
          </div>

          {/* Customer */}
          <div className="absolute bottom-3 left-3">
            <div className="text-[7px] text-white/30 mb-0.5">CUSTOMER</div>
            <div className="text-[8px] text-white/60">Marcus Chen</div>
          </div>
        </div>

        {/* Automation Flow */}
        <div className="w-24 flex flex-col items-center justify-center gap-3">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-1">
            <div 
              className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center relative"
              style={{ animation: 'pulse 2s ease-in-out infinite' }}
            >
              <Check className="w-4 h-4 text-accent" />
              <div className="absolute inset-0 rounded-full border border-accent/30" style={{ animation: 'ping 3s ease-in-out infinite' }} />
            </div>
            <span className="text-[7px] text-white/50 font-mono">Job Done</span>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center">
            <div className="w-px h-4 bg-gradient-to-b from-accent/50 to-white/20" />
            <svg 
              width="10" height="6" viewBox="0 0 10 6" fill="none"
              style={{ animation: 'bounce 2s ease-in-out infinite' }}
            >
              <path d="M1 1L5 5L9 1" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-1">
            <div 
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
              style={{ animation: 'pulse 2.5s ease-in-out infinite 0.5s' }}
            >
              <Send className="w-3.5 h-3.5 text-white/70" />
            </div>
            <span className="text-[7px] text-white/50 font-mono">Auto-Send</span>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center">
            <div className="w-px h-4 bg-gradient-to-b from-white/20 to-accent/50" />
            <svg 
              width="10" height="6" viewBox="0 0 10 6" fill="none"
              style={{ animation: 'bounce 2s ease-in-out infinite 0.3s' }}
            >
              <path d="M1 1L5 5L9 1" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-1">
            <div 
              className="w-8 h-8 rounded-full bg-accent flex items-center justify-center relative overflow-hidden"
              style={{ animation: 'pulse 3s ease-in-out infinite 1s' }}
            >
              <span className="text-[10px] font-medium text-background relative z-10">$</span>
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" style={{ animation: 'shimmer 2s ease-in-out infinite' }} />
            </div>
            <span className="text-[7px] text-accent font-mono">Collected</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute top-3 right-3 text-right">
        <div className="text-[8px] text-white/40 mb-0.5">This month</div>
        <div className="text-[11px] font-medium text-accent">$12,485</div>
        <div className="text-[7px] text-white/30 font-mono">collected</div>
      </div>
    </div>
  );

  // Premium Team Visual - dispatch board with live status
  const TeamVisual = () => (
    <div className="relative w-full h-full bg-[hsl(0_0%_8%)] rounded-xl border border-white/10 overflow-hidden p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="text-[11px] font-medium text-white">Team Status</div>
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-accent/20">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" style={{ animation: 'pulse 1.5s ease-in-out infinite' }} />
            <span className="text-[7px] font-mono text-accent">LIVE</span>
          </div>
        </div>
        <div className="text-[8px] text-white/40 font-mono">4 active</div>
      </div>

      {/* Team members */}
      <div className="space-y-2.5">
        {[
          { name: "Mike Rodriguez", role: "Lead", status: "on-site", job: "Tesla Model S · Full Detail", time: "2h 15m", avatar: "MR" },
          { name: "Sarah Kim", role: "Tech", status: "transit", job: "BMW X5 · Ceramic", time: "ETA 12m", avatar: "SK" },
          { name: "James Lee", role: "Tech", status: "available", job: "—", time: "Ready", avatar: "JL" },
          { name: "Emma Davis", role: "Jr", status: "on-site", job: "Audi Q7 · Interior", time: "45m", avatar: "ED" },
        ].map((member, i) => (
          <div 
            key={i}
            className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
            style={{ animation: `float ${4 + i * 0.3}s ease-in-out infinite ${i * 0.15}s` }}
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                <span className="text-[10px] font-medium text-accent">{member.avatar}</span>
              </div>
              <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[hsl(0_0%_8%)] ${
                member.status === 'on-site' ? 'bg-accent' : 
                member.status === 'transit' ? 'bg-amber-400' : 'bg-white/30'
              }`} style={member.status === 'on-site' ? { animation: 'pulse 2s ease-in-out infinite' } : undefined} />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-medium text-white truncate">{member.name}</span>
                <span className="text-[7px] text-white/30 font-mono">{member.role}</span>
              </div>
              <div className="flex items-center gap-1.5">
                {member.status === 'on-site' && <MapPin className="w-2.5 h-2.5 text-accent" />}
                {member.status === 'transit' && <Clock className="w-2.5 h-2.5 text-amber-400" />}
                <span className="text-[8px] text-white/50 truncate">{member.job}</span>
              </div>
            </div>

            {/* Time */}
            <div className="text-right">
              <div className={`text-[9px] font-mono ${
                member.status === 'on-site' ? 'text-accent' : 
                member.status === 'transit' ? 'text-amber-400' : 'text-white/40'
              }`}>
                {member.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom stats */}
      <div className="absolute bottom-3 right-3 flex items-center gap-3">
        <div className="text-right">
          <div className="text-[8px] text-white/30">Today</div>
          <div className="text-[11px] font-medium text-white">32.5 <span className="text-[8px] text-white/40">hrs</span></div>
        </div>
        <div className="w-px h-6 bg-white/10" />
        <div className="text-right">
          <div className="text-[8px] text-white/30">Revenue</div>
          <div className="text-[11px] font-medium text-accent">$2,840</div>
        </div>
      </div>
    </div>
  );

  // Premium Booking Visual - website widget with conversion
  const BookingVisual = () => (
    <div className="relative w-full h-full bg-[hsl(0_0%_8%)] rounded-xl border border-white/10 overflow-hidden p-4">
      {/* Browser chrome */}
      <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 mx-4 h-5 bg-white/5 rounded flex items-center px-2">
            <span className="text-[8px] text-white/30 font-mono">yourdetailing.com/book</span>
          </div>
        </div>

        {/* Booking widget */}
        <div className="p-4">
          <div className="text-[12px] font-medium text-white mb-1">Book Your Detail</div>
          <div className="text-[9px] text-white/50 mb-4">Select your service and preferred time</div>

          {/* Service cards */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {[
              { name: "Express Wash", price: "$45", time: "45 min", selected: false },
              { name: "Full Detail", price: "$285", time: "3 hrs", selected: true },
            ].map((service, i) => (
              <div 
                key={i}
                className={`p-2.5 rounded-lg border transition-all relative overflow-hidden ${
                  service.selected 
                    ? 'bg-accent/20 border-accent/50' 
                    : 'bg-white/5 border-white/10'
                }`}
                style={service.selected ? { animation: 'pulse 3s ease-in-out infinite' } : undefined}
              >
                {service.selected && (
                  <div className="absolute top-1.5 right-1.5">
                    <div className="w-4 h-4 rounded-full bg-accent flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-background" />
                    </div>
                  </div>
                )}
                <div className={`text-[10px] font-medium mb-1 ${service.selected ? 'text-accent' : 'text-white/70'}`}>
                  {service.name}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-medium ${service.selected ? 'text-white' : 'text-white/50'}`}>{service.price}</span>
                  <span className="text-[8px] text-white/30">·</span>
                  <span className="text-[8px] text-white/40">{service.time}</span>
                </div>
                {service.selected && (
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/10 to-accent/0" style={{ animation: 'shimmer 3s ease-in-out infinite' }} />
                )}
              </div>
            ))}
          </div>

          {/* Time slots */}
          <div className="mb-4">
            <div className="text-[9px] text-white/50 mb-2">Available Times · Wed, Mar 13</div>
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'].map((time, i) => (
                <div 
                  key={i}
                  className={`px-2.5 py-1.5 rounded border text-[9px] font-mono whitespace-nowrap ${
                    i === 1 
                      ? 'bg-accent text-background border-accent' 
                      : 'bg-white/5 text-white/60 border-white/10'
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full py-3 bg-accent rounded-lg flex items-center justify-center gap-2 relative overflow-hidden group">
            <span className="text-[11px] font-medium text-background relative z-10">Confirm Booking</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="relative z-10">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="hsl(var(--background))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/30 to-accent/0" style={{ animation: 'shimmer 2s ease-in-out infinite' }} />
          </button>
        </div>
      </div>

      {/* Conversion metrics */}
      <div 
        className="absolute -bottom-1 right-3 flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2"
        style={{ animation: 'float 4s ease-in-out infinite' }}
      >
        <div className="flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[11px] font-medium text-accent">+38%</span>
        </div>
        <div className="w-px h-4 bg-white/20" />
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 text-amber-400" style={{ fill: 'rgb(251 191 36)' }} />
          <span className="text-[10px] text-white/70">4.9</span>
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
    <section className="py-20 px-[3px] md:hidden bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-10">
          <div className="text-[10px] font-mono text-accent tracking-widest mb-3 fade-in">THE ESSENTIALS</div>
          <h2 className="text-2xl font-semibold text-foreground mb-3 fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
            Designed to feel better.<br />Built to work better.
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Carbon includes the essentials that are thoughtfully designed so everything feels simple, fast, and trustworthy.
          </p>
        </div>
        
        {/* Feature cards */}
        <div className="flex flex-col gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-border/30 bg-card/30 fade-in"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              {/* Visual */}
              <div className="aspect-[4/3] p-2">
                {feature.visual}
              </div>
              
              {/* Content */}
              <div className="p-5 pt-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-[9px] font-mono text-accent/70 tracking-wider">{feature.subtitle}</div>
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Essentials;
