import { PhoneOff, CalendarX, DollarSign, UserX } from "lucide-react";

const ProblemStatement = () => {
  const problems = [
    {
      icon: PhoneOff,
      stat: "67%",
      label: "of calls missed",
      description: "While you're polishing a hood"
    },
    {
      icon: CalendarX,
      stat: "23%",
      label: "no-show rate",
      description: "Bookings that never confirm"
    },
    {
      icon: DollarSign,
      stat: "$2,400",
      label: "lost monthly",
      description: "From customers who don't rebook"
    },
    {
      icon: UserX,
      stat: "1 in 3",
      label: "customers gone",
      description: "After their first detail"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Centered header */}
        <div className="text-center mb-20">
          <p className="text-accent text-sm tracking-[0.3em] uppercase mb-6 fade-in">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
            You're too busy detailing cars to run your business.
          </h2>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            
            return (
              <div 
                key={index}
                className="group text-center p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-accent/30 transition-all duration-300 fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                
                {/* Stat */}
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
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
