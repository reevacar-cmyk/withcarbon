import { PhoneMissed, UserX, DollarSign, UserMinus } from "lucide-react";

const ProblemStatement = () => {
  const problems = [
    { stat: "67%", label: "CALLS MISSED" },
    { stat: "23%", label: "NO-SHOWS" },
    { stat: "$2.4K", label: "LOST/MO" },
    { stat: "2:3", label: "DON'T RETURN" }
  ];

  return (
    <section className="pt-16 md:pt-20 pb-6 md:pb-16 px-[3px] md:px-12 lg:px-24 relative bg-[hsl(0_0%_5%)] md:bg-[hsl(40_20%_94%)]">
      <div className="container mx-auto max-w-5xl">
        {/* Mobile: Minimal industrial design - dark mode */}
        <div className="md:hidden">
          {/* Monospace label */}
          <div className="mb-3 fade-in">
            <span className="font-mono text-[10px] tracking-[0.2em] text-red-500 uppercase">
              THE PROBLEM
            </span>
          </div>

          {/* Industrial headline */}
          <h2 className="text-[32px] font-bold leading-[0.95] tracking-tight fade-in mb-8" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">Revenue</span>
            <br />
            <span className="text-red-500">bleeding out.</span>
          </h2>

          {/* Industrial grid - 2x2 with rounded corners */}
          <div className="border border-white/20 rounded-2xl overflow-hidden fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-2">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className={`p-4 ${index < 2 ? 'border-b border-white/20' : ''} ${index % 2 === 0 ? 'border-r border-white/20' : ''}`}
                >
                  <div className="text-3xl font-bold text-red-500 tracking-tight leading-none mb-1">
                    {problem.stat}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.15em] text-white/60 uppercase">
                    {problem.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom indicator line */}
          <div className="mt-6 flex items-center gap-3 fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="h-px flex-1 bg-red-500/30" />
            <span className="font-mono text-[9px] tracking-[0.15em] text-red-500/60 uppercase">
              While you work
            </span>
            <div className="h-px flex-1 bg-red-500/30" />
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