import { PhoneMissed, UserX, DollarSign, UserMinus, AlertTriangle, Users } from "lucide-react";

const ProblemStatement = () => {
  // Calculations:
  // Missed leads: 20 leads/day × 37% missed × $250 × 365 days = $67,525/year
  // Untapped customers: 3,000 past customers × 70% don't return × $250 = $525,000

  const missedLeadsRevenue = Math.round(20 * 0.37 * 250 * 365);
  const untappedRevenue = Math.round(3000 * 0.70 * 250);

  return (
    <section className="pt-16 md:pt-20 pb-6 md:pb-16 px-[3px] md:px-12 lg:px-24 relative bg-background md:bg-[hsl(40_20%_94%)]">
      <div className="container mx-auto max-w-5xl">
        {/* Mobile: Revenue quantification design */}
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

          {/* Revenue Loss Card 1: Missed Leads */}
          <div className="border border-border rounded-sm overflow-hidden fade-in mb-3" style={{ animationDelay: '0.2s' }}>
            {/* Header */}
            <div className="bg-muted/50 border-b border-border px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PhoneMissed className="w-3.5 h-3.5 text-red-500" />
                <span className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground uppercase">
                  MISSED LEADS
                </span>
              </div>
              <span className="font-mono text-[8px] text-red-500 uppercase font-medium">LOST REVENUE</span>
            </div>
            
            {/* Big number */}
            <div className="px-3 py-4 bg-background">
              <div className="text-3xl font-bold text-red-500 font-mono tracking-tight mb-3">
                ${missedLeadsRevenue.toLocaleString()}<span className="text-lg text-red-400">/yr</span>
              </div>
              
              {/* Breakdown */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-muted-foreground">Daily leads</span>
                  <span className="text-foreground">20</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-muted-foreground">Missed rate</span>
                  <span className="text-red-500 font-medium">37%</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-muted-foreground">Avg service value</span>
                  <span className="text-foreground">$250</span>
                </div>
                <div className="h-px bg-border my-2" />
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-muted-foreground">Missed/day</span>
                  <span className="text-foreground">≈ 7 jobs × $250 = <span className="text-red-500">$1,850</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Loss Card 2: Untapped Past Customers */}
          <div className="border border-border rounded-sm overflow-hidden fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Header */}
            <div className="bg-muted/50 border-b border-border px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-red-500" />
                <span className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground uppercase">
                  UNTAPPED CUSTOMERS
                </span>
              </div>
              <span className="font-mono text-[8px] text-red-500 uppercase font-medium">POTENTIAL</span>
            </div>
            
            {/* Big number */}
            <div className="px-3 py-4 bg-background">
              <div className="text-3xl font-bold text-red-500 font-mono tracking-tight mb-3">
                ${untappedRevenue.toLocaleString()}<span className="text-lg text-red-400"> sitting</span>
              </div>
              
              {/* Breakdown */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-muted-foreground">Past customers</span>
                  <span className="text-foreground">3,000</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-muted-foreground">Return rate</span>
                  <span className="text-foreground">30%</span>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-muted-foreground">Not returning</span>
                  <span className="text-red-500 font-medium">70% (2,100)</span>
                </div>
                <div className="h-px bg-border my-2" />
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-muted-foreground">Each worth</span>
                  <span className="text-foreground">$250 avg = <span className="text-red-500">$525K</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom summary */}
          <div className="mt-4 px-3 py-3 border border-red-500/30 rounded-sm bg-red-500/5 fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase">
                Total opportunity cost
              </span>
              <span className="font-mono text-sm font-bold text-red-500">
                ${(missedLeadsRevenue + untappedRevenue).toLocaleString()}/yr
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