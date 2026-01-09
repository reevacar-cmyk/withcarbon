import { PhoneOff, CalendarX, DollarSign, UserX } from "lucide-react";

const ProblemStatement = () => {
  const problems = [
    {
      icon: PhoneOff,
      stat: "67%",
      label: "of calls missed",
      description: "While you're polishing a hood",
      mobileLabel: "calls missed"
    },
    {
      icon: CalendarX,
      stat: "23%",
      label: "no-show rate",
      description: "Bookings that never confirm",
      mobileLabel: "no-shows"
    },
    {
      icon: DollarSign,
      stat: "$2.4k",
      label: "lost monthly",
      description: "From customers who don't rebook",
      mobileLabel: "lost/month"
    },
    {
      icon: UserX,
      stat: "2 in 3",
      label: "customers gone",
      description: "After their first detail",
      mobileLabel: "don't return"
    }
  ];

  // Bright red for urgency
  const red = "#FF0000";

  return (
    <section className="pt-16 md:pt-4 pb-6 md:pb-16 px-[3px] md:px-12 lg:px-24 relative bg-card md:bg-[hsl(40_20%_94%)]">
      <div className="container mx-auto max-w-5xl">
        {/* Mobile: Urgent banner-style header */}
        <div className="md:hidden mb-8">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 fade-in"
            style={{ backgroundColor: `${red}15`, border: `1px solid ${red}30` }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse mobile-glow" style={{ backgroundColor: red }} />
            <span className="text-xs font-medium tracking-wide uppercase" style={{ color: red }}>
              Revenue leak
            </span>
          </div>
          <h2 className="text-4xl font-bold leading-[1.05] fade-in text-foreground" style={{ animationDelay: '0.1s' }}>
            While you work,<br />
            <span style={{ color: red }}>money walks away.</span>
          </h2>
        </div>

        {/* Desktop header */}
        <div className="hidden md:block text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase mb-6 fade-in" style={{ color: red }}>
            The Problem
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
            You're too busy detailing cars to run your business.
          </h2>
        </div>

        {/* Mobile: Compact urgent stats strip */}
        <div className="md:hidden grid grid-cols-4 gap-1 mb-6 fade-in" style={{ animationDelay: '0.2s' }}>
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="text-center py-4 px-1 rounded-xl"
              style={{ backgroundColor: `${red}08`, border: `1px solid ${red}15` }}
            >
              <div className="text-2xl font-bold mb-0.5" style={{ color: red }}>
                {problem.stat}
              </div>
              <div className="text-[10px] text-muted-foreground leading-tight">
                {problem.mobileLabel}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Single urgent callout */}
        <div 
          className="md:hidden p-4 rounded-2xl fade-in"
          style={{ 
            animationDelay: '0.3s',
            backgroundColor: `${red}10`,
            border: `1px solid ${red}25`
          }}
        >
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mobile-pulse-subtle"
              style={{ backgroundColor: `${red}20` }}
            >
              <DollarSign className="w-5 h-5" style={{ color: red }} />
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">Every missed call costs you</div>
              <div className="text-xs text-muted-foreground">$150–400 in lost bookings</div>
            </div>
          </div>
        </div>
        
        {/* Desktop: Stats grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            
            return (
              <div 
                key={index}
                className="group text-center p-6 rounded-2xl bg-card/50 border border-border/50 transition-all duration-300 fade-in"
                style={{ 
                  animationDelay: `${0.2 + index * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div 
                  className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ 
                    backgroundColor: `${red}15`,
                    borderWidth: 1,
                    borderColor: `${red}30`
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: red }} strokeWidth={1.5} />
                </div>
                
                {/* Stat */}
                <div className="text-4xl font-bold mb-1" style={{ color: red }}>
                  {problem.stat}
                </div>
                
                {/* Label */}
                <div className="text-sm text-foreground font-medium mb-2">
                  {problem.label}
                </div>
                
                {/* Description */}
                <p className="text-xs text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;