import { Calendar, FileText, Users, Globe } from "lucide-react";

const Essentials = () => {
  const features = [
    {
      title: "Clear scheduling",
      description: "A clean modern calendar built for real operations",
      icon: Calendar,
      visual: "calendar"
    },
    {
      title: "Smart invoicing",
      description: "Invoices that send themselves and followups happen automatically",
      icon: FileText,
      visual: "invoicing"
    },
    {
      title: "Team coordination",
      description: "Manage employee communication, dispatching, and hours easily",
      icon: Users,
      visual: "team"
    },
    {
      title: "Website booking",
      description: "A personalized booking experience for each customer that converts",
      icon: Globe,
      visual: "booking"
    }
  ];

  // Calendar Visual - shows a mini calendar with scheduled jobs
  const CalendarVisual = () => (
    <div className="relative w-full h-full overflow-hidden">
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-0.5 mb-1.5">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
          <div key={i} className="text-[6px] text-center text-muted-foreground font-mono">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {Array.from({ length: 28 }, (_, i) => {
          const isBooked = [5, 8, 12, 15, 19, 22].includes(i);
          const isToday = i === 12;
          return (
            <div 
              key={i}
              className={`aspect-square rounded-sm flex items-center justify-center text-[7px] font-mono relative ${
                isToday 
                  ? 'bg-accent text-background' 
                  : isBooked 
                    ? 'bg-accent/30 text-accent' 
                    : 'bg-muted-foreground/10 text-muted-foreground/60'
              }`}
              style={isToday ? { animation: 'pulse 2s ease-in-out infinite' } : undefined}
            >
              {i + 1}
              {isBooked && !isToday && (
                <div 
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                  style={{ animation: 'pulse 3s ease-in-out infinite' }}
                />
              )}
            </div>
          );
        })}
      </div>
      {/* Floating appointment card */}
      <div 
        className="absolute -bottom-1 right-0 bg-accent/20 border border-accent/30 rounded px-1.5 py-0.5"
        style={{ animation: 'float 3s ease-in-out infinite' }}
      >
        <div className="text-[7px] text-accent font-mono">9:00 AM · Detail</div>
      </div>
    </div>
  );

  // Invoicing Visual - shows invoice with auto-send animation
  const InvoicingVisual = () => (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center gap-2">
      {/* Invoice document */}
      <div 
        className="w-14 bg-card border border-border/50 rounded-sm p-1.5 relative"
        style={{ animation: 'float 4s ease-in-out infinite' }}
      >
        <div className="w-4 h-0.5 bg-muted-foreground/30 mb-1" />
        <div className="space-y-0.5">
          <div className="flex justify-between items-center">
            <div className="w-5 h-0.5 bg-muted-foreground/20" />
            <div className="w-3 h-0.5 bg-muted-foreground/20" />
          </div>
          <div className="flex justify-between items-center">
            <div className="w-6 h-0.5 bg-muted-foreground/20" />
            <div className="w-2 h-0.5 bg-muted-foreground/20" />
          </div>
        </div>
        <div className="mt-1.5 pt-1 border-t border-border/30">
          <div className="flex justify-between items-center">
            <div className="text-[6px] font-mono text-muted-foreground">Total</div>
            <div className="text-[7px] font-mono text-accent">$285</div>
          </div>
        </div>
        {/* Sent badge with shimmer */}
        <div className="absolute -top-1 -right-1 bg-accent rounded-full px-1 py-0.5 relative overflow-hidden">
          <div className="text-[5px] font-mono text-background relative z-10">SENT</div>
          <div 
            className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/40 to-accent/0"
            style={{ animation: 'shimmer 2s ease-in-out infinite' }}
          />
        </div>
      </div>
      
      {/* Auto arrow */}
      <div className="flex flex-col items-center gap-0.5">
        <svg 
          width="16" height="10" viewBox="0 0 20 12" fill="none"
          style={{ animation: 'bounceX 1.5s ease-in-out infinite' }}
        >
          <path d="M0 6H16M16 6L11 1M16 6L11 11" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="text-[5px] font-mono text-muted-foreground">AUTO</div>
      </div>
      
      {/* Checkmark confirmation */}
      <div 
        className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center relative"
        style={{ animation: 'pulse 2s ease-in-out infinite' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path 
            d="M5 13l4 4L19 7" 
            stroke="hsl(var(--accent))" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        <div 
          className="absolute inset-0 rounded-full border border-accent/30"
          style={{ animation: 'ping 2s ease-in-out infinite' }}
        />
      </div>
    </div>
  );

  // Team Visual - shows dispatch/coordination interface
  const TeamVisual = () => (
    <div className="relative w-full h-full overflow-hidden">
      {/* Team members list */}
      <div className="space-y-1.5">
        {[
          { name: "Mike R.", status: "on-site", color: "accent" },
          { name: "Sarah K.", status: "in-transit", color: "muted-foreground" },
          { name: "James L.", status: "available", color: "accent" }
        ].map((member, i) => (
          <div 
            key={i} 
            className="flex items-center justify-between bg-muted-foreground/5 rounded px-1.5 py-1"
            style={{ animation: `float ${3 + i * 0.5}s ease-in-out infinite ${i * 0.2}s` }}
          >
            <div className="flex items-center gap-1.5">
              <div 
                className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center"
              >
                <span className="text-[6px] font-mono text-accent">{member.name[0]}</span>
              </div>
              <span className="text-[8px] font-mono text-foreground">{member.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <div 
                className={`w-1.5 h-1.5 rounded-full ${
                  member.status === 'on-site' ? 'bg-accent' : 
                  member.status === 'in-transit' ? 'bg-amber-400' : 'bg-muted-foreground/40'
                }`}
                style={member.status === 'on-site' ? { animation: 'pulse 2s ease-in-out infinite' } : undefined}
              />
              <span className="text-[6px] font-mono text-muted-foreground">{member.status}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Hours counter */}
      <div 
        className="absolute bottom-0 right-0 bg-accent/10 border border-accent/20 rounded px-1.5 py-0.5"
        style={{ animation: 'float 3.5s ease-in-out infinite reverse' }}
      >
        <div className="text-[6px] text-muted-foreground font-mono">Today</div>
        <div className="text-[9px] text-accent font-mono font-medium">24.5 hrs</div>
      </div>
    </div>
  );

  // Booking Visual - shows website booking widget
  const BookingVisual = () => (
    <div className="relative w-full h-full overflow-hidden">
      {/* Browser frame */}
      <div 
        className="w-full bg-card border border-border/50 rounded overflow-hidden"
        style={{ animation: 'float 4s ease-in-out infinite' }}
      >
        {/* Browser bar */}
        <div className="flex items-center gap-1 px-1.5 py-0.5 bg-muted-foreground/5 border-b border-border/30">
          <div className="flex gap-0.5">
            <div className="w-1 h-1 rounded-full bg-red-400/60" />
            <div className="w-1 h-1 rounded-full bg-amber-400/60" />
            <div className="w-1 h-1 rounded-full bg-green-400/60" />
          </div>
          <div className="flex-1 mx-1.5 h-2 bg-muted-foreground/10 rounded-sm" />
        </div>
        
        {/* Booking content */}
        <div className="p-1.5">
          <div className="text-[7px] font-mono text-foreground mb-1">Book Your Detail</div>
          
          {/* Service selector */}
          <div className="space-y-0.5 mb-1.5">
            {['Interior Clean', 'Full Detail'].map((service, i) => (
              <div 
                key={i}
                className={`flex items-center gap-1 px-1 py-0.5 rounded text-[6px] font-mono ${
                  i === 1 ? 'bg-accent/20 text-accent border border-accent/30' : 'bg-muted-foreground/10 text-muted-foreground'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-accent' : 'border border-muted-foreground/30'}`} />
                {service}
              </div>
            ))}
          </div>
          
          {/* Book button with shimmer */}
          <div className="w-full py-1 bg-accent rounded flex items-center justify-center relative overflow-hidden">
            <span className="text-[7px] font-mono text-background relative z-10">Book Now</span>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/30 to-accent/0"
              style={{ animation: 'shimmer 2s ease-in-out infinite' }}
            />
          </div>
        </div>
      </div>
      
      {/* Conversion indicator */}
      <div 
        className="absolute -bottom-0.5 -right-0.5 flex items-center gap-0.5 bg-accent/20 rounded-full px-1.5 py-0.5"
        style={{ animation: 'pulse 2s ease-in-out infinite' }}
      >
        <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-[6px] font-mono text-accent">+32%</span>
      </div>
    </div>
  );

  const getVisual = (type: string) => {
    switch (type) {
      case "calendar": return <CalendarVisual />;
      case "invoicing": return <InvoicingVisual />;
      case "team": return <TeamVisual />;
      case "booking": return <BookingVisual />;
      default: return null;
    }
  };

  return (
    <section className="py-16 px-[3px] md:hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-xl font-semibold text-foreground mb-2 fade-in">
          Designed to feel better. Built to work better.
        </h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-xl fade-in" style={{ animationDelay: '0.1s' }}>
          Carbon includes the essentials that are thoughtfully designed so everything feels simple, fast, and trustworthy.
        </p>
        
        <div className="grid grid-cols-2 gap-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-4 rounded-xl bg-card/50 border border-border/50 hover:border-accent/30 transition-all duration-300 fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-3 h-3 text-accent" />
                  </div>
                  <h3 className="text-xs font-medium text-foreground">{feature.title}</h3>
                </div>
                
                <div className="h-20 mb-3">
                  {getVisual(feature.visual)}
                </div>
                
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Essentials;
