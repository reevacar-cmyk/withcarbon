import { PhoneMissed, Users, AlertTriangle, DollarSign, UserX, UserMinus, Clock } from "lucide-react";

const ProblemStatement = () => {
  return (
    <section className="pt-16 md:pt-20 pb-6 md:pb-16 px-[3px] md:px-12 lg:px-24 relative bg-background md:bg-[hsl(40_20%_94%)]">
      <div className="container mx-auto max-w-5xl">
        {/* Mobile: Bold problem visualization */}
        <div className="md:hidden">
          {/* Section label */}
          <div className="mb-3 fade-in flex items-center gap-2">
            <div className="w-5 h-5 rounded-sm bg-red-500/10 border border-red-500/30 flex items-center justify-center">
              <AlertTriangle className="w-3 h-3 text-red-500" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-red-500 uppercase font-medium">
              THE PROBLEM
            </span>
          </div>

          {/* Bold headline */}
          <h2 className="text-[32px] font-bold leading-[0.95] tracking-tight fade-in mb-2" style={{ animationDelay: '0.1s' }}>
            You're leaving money<br />
            <span className="text-red-500">on the table.</span>
          </h2>
          
          <p className="text-sm text-muted-foreground mb-6 fade-in" style={{ animationDelay: '0.15s' }}>
            Every day, revenue slips through the cracks.
          </p>

          {/* Three problem cards */}
          <div className="space-y-3">
            {/* Card 1: Missed Leads */}
            <div className="rounded-sm overflow-hidden fade-in bg-[hsl(40_15%_92%)]" style={{ animationDelay: '0.2s' }}>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <PhoneMissed className="w-4 h-4 text-red-500" />
                  <span className="font-mono text-[10px] tracking-[0.1em] text-red-500 uppercase font-medium">
                    Missed Leads
                  </span>
                </div>
                
                <div className="text-[40px] font-bold text-red-500 leading-none tracking-tight mb-1">
                  $34K
                </div>
                <div className="text-xs text-muted-foreground mb-4">
                  lost per year
                </div>
                
                {/* Simple breakdown */}
                <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground">
                  <span>10+ leads/day</span>
                  <span className="text-red-500">× 37% missed</span>
                  <span>× $250</span>
                </div>
              </div>
            </div>

            {/* Card 2: Untapped Customers */}
            <div className="rounded-sm overflow-hidden fade-in bg-[hsl(40_15%_92%)]" style={{ animationDelay: '0.3s' }}>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-red-500" />
                  <span className="font-mono text-[10px] tracking-[0.1em] text-red-500 uppercase font-medium">
                    Past Customers Not Returning
                  </span>
                </div>
                
                <div className="text-[40px] font-bold text-red-500 leading-none tracking-tight mb-1">
                  $175K
                </div>
                <div className="text-xs text-muted-foreground mb-4">
                  sitting untapped
                </div>
                
                {/* Simple breakdown */}
                <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground">
                  <span>1,000+ customers</span>
                  <span className="text-red-500">× 70% don't return</span>
                  <span>× $250</span>
                </div>
              </div>
            </div>

            {/* Card 3: Time Wasted on Admin */}
            <div className="rounded-sm overflow-hidden fade-in bg-[hsl(40_15%_92%)]" style={{ animationDelay: '0.4s' }}>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-red-500" />
                  <span className="font-mono text-[10px] tracking-[0.1em] text-red-500 uppercase font-medium">
                    Time Lost to Admin
                  </span>
                </div>
                
                <div className="text-[40px] font-bold text-red-500 leading-none tracking-tight mb-1">
                  14hrs
                </div>
                <div className="text-xs text-muted-foreground mb-4">
                  wasted per week
                </div>
                
                {/* Simple breakdown */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-mono text-muted-foreground">
                  <span>Logging into CRM</span>
                  <span>Tracking customers</span>
                  <span className="text-red-500">→ Not growing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom line */}
          <div className="mt-4 text-center fade-in" style={{ animationDelay: '0.5s' }}>
            <span className="text-xs text-muted-foreground">
              And it happens while you're busy doing the actual work.
            </span>
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
