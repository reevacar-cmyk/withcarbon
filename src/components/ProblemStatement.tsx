import { PhoneMissed, UserX, DollarSign, UserMinus, AlertTriangle } from "lucide-react";

const ProblemStatement = () => {
  const problems = [
    { stat: "67%", label: "CALLS MISSED", icon: PhoneMissed },
    { stat: "23%", label: "NO-SHOWS", icon: UserX },
    { stat: "$2.4K", label: "LOST/MO", icon: DollarSign },
    { stat: "2:3", label: "DON'T RETURN", icon: UserMinus }
  ];

  return (
    <section className="pt-16 md:pt-20 pb-6 md:pb-16 px-[3px] md:px-12 lg:px-24 relative bg-background md:bg-[hsl(40_20%_94%)]">
      <div className="container mx-auto max-w-5xl">
        {/* Mobile: Minimal industrial scientific design */}
        <div className="md:hidden">
          {/* Section label with warning indicator */}
          <div className="mb-4 fade-in flex items-center gap-2">
            <div className="w-5 h-5 rounded-sm bg-red-500/10 border border-red-500/30 flex items-center justify-center">
              <AlertTriangle className="w-3 h-3 text-red-500" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-red-500 uppercase font-medium">
              PROBLEM
            </span>
          </div>

          {/* Clinical headline */}
          <h2 className="text-[28px] font-bold leading-[1] tracking-tight fade-in mb-6" style={{ animationDelay: '0.1s' }}>
            Revenue bleeding out.
          </h2>

          {/* Industrial data grid - scientific aesthetic */}
          <div className="border border-border rounded-sm overflow-hidden fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Header row */}
            <div className="bg-muted/50 border-b border-border px-3 py-2 flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground uppercase">
                DIAGNOSTIC DATA
              </span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono text-[8px] text-red-500 uppercase">CRITICAL</span>
              </div>
            </div>
            
            {/* Data rows */}
            <div className="divide-y divide-border">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center justify-between px-3 py-3 bg-background"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-sm bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase">
                        {problem.label}
                      </span>
                    </div>
                    <div className="font-mono text-lg font-bold text-foreground tracking-tight">
                      {problem.stat}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom context line */}
          <div className="mt-4 px-3 py-2 border border-border rounded-sm bg-muted/30 fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.1em] text-muted-foreground uppercase">
                While you're working
              </span>
              <span className="font-mono text-[9px] tracking-[0.1em] text-red-500 uppercase font-medium">
                Revenue lost
              </span>
            </div>
          </div>
        </div>

        {/* Desktop header */}
        <div className="hidden md:block text-center mb-20">
          <p className="text-sm tracking-[0.3em] uppercase mb-6 fade-in text-red-500">
            The Problem
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Revenue</span>
            <br />
            <span className="text-red-500">bleeding out.</span>
          </h2>
        </div>

        {/* Desktop: Stats grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { stat: "67%", label: "of calls missed", description: "While you're polishing a hood", icon: PhoneMissed },
            { stat: "23%", label: "no-show rate", description: "Bookings that never confirm", icon: UserX },
            { stat: "$2.4k", label: "lost monthly", description: "From customers who don't rebook", icon: DollarSign },
            { stat: "2 in 3", label: "customers gone", description: "After their first detail", icon: UserMinus }
          ].map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="group text-center p-6 rounded-2xl bg-card/50 border border-border/50 transition-all duration-300 fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div 
                  className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgb(255 0 0 / 0.1)', border: '1px solid rgb(255 0 0 / 0.2)' }}
                >
                  <Icon className="w-5 h-5 text-red-500" />
                </div>
              <div className="text-4xl font-bold mb-1 text-red-500">
                {problem.stat}
              </div>
              <div className="text-sm text-foreground font-medium mb-2">
                {problem.label}
              </div>
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