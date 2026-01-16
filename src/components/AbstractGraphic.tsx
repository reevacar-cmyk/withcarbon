import { cn } from "@/lib/utils";

interface AbstractGraphicProps {
  variant?: "hero" | "solution";
  className?: string;
}

const AbstractGraphic = ({ variant = "hero", className }: AbstractGraphicProps) => {
  if (variant === "hero") {
    return (
      <div className={cn("relative w-full aspect-[4/5] bg-card/90 rounded-2xl overflow-hidden border border-border/50 backdrop-blur-sm", className)}>
        {/* Grid pattern background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
        
        {/* Main content area */}
        <div className="absolute inset-4 bottom-28 space-y-3 overflow-hidden">
          {/* Top bar - simulating app header */}
          <div className="flex items-center justify-between pb-2 border-b border-border/30">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Carbon AI</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-accent/10 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[9px] text-accent font-medium">Working</span>
            </div>
          </div>
          
          {/* AI Impact Stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Time Saved", value: "4.2h", sublabel: "today" },
              { label: "Revenue", value: "$840", sublabel: "recovered" },
              { label: "Customers", value: "12", sublabel: "retained" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="p-2 rounded-lg bg-accent/5 border border-accent/20"
              >
                <div className="text-[9px] text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-lg font-bold text-accent leading-tight">{item.value}</div>
                <div className="text-[8px] text-muted-foreground">{item.sublabel}</div>
              </div>
            ))}
          </div>
          
          {/* AI Activity feed - Wins */}
          <div className="space-y-1.5 pt-1 flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">AI Wins</div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <div className="text-[9px] text-accent">Live</div>
              </div>
            </div>
            {[
              { action: "Answered call", result: "+$180", detail: "Full detail booked", customer: "John D.", time: "Just now" },
              { action: "Follow-up sent", result: "Won", detail: "Quote accepted", customer: "Sarah M.", time: "1m ago" },
              { action: "Lead recovered", result: "Saved", detail: "Rescheduled no-show", customer: "Mike R.", time: "3m ago" },
              { action: "Upsold service", result: "+$60", detail: "Ceramic coat added", customer: "Lisa K.", time: "5m ago" },
              { action: "Booking confirmed", result: "Locked", detail: "Tomorrow 9am", customer: "David P.", time: "8m ago" }
            ].map((activity, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex items-start justify-between p-2 rounded-lg transition-all",
                  i === 0 
                    ? "bg-accent/15 border border-accent/30" 
                    : "bg-muted/20 border border-transparent"
                )}
              >
                <div className="flex items-start gap-2 min-w-0 flex-1">
                  <div className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0",
                    i === 0 ? "bg-accent text-background" : "bg-accent/30 text-accent"
                  )}>
                    ✓
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-foreground font-medium">{activity.action}</span>
                      <span className={cn(
                        "text-[8px] px-1.5 py-0.5 rounded font-semibold",
                        activity.result.startsWith('+') 
                          ? "bg-accent/20 text-accent" 
                          : "bg-accent/10 text-accent"
                      )}>
                        {activity.result}
                      </span>
                    </div>
                    <div className="text-[9px] text-muted-foreground">{activity.detail} · {activity.customer}</div>
                  </div>
                </div>
                <span className="text-[9px] text-muted-foreground shrink-0 ml-2">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom stats bar - positioned separately */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-card/95 border border-border/50">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-xl font-bold text-accent">98%</div>
              <div className="text-[9px] text-muted-foreground">Response Rate</div>
            </div>
            <div className="w-px h-10 bg-border/50" />
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">2.3s</div>
              <div className="text-[9px] text-muted-foreground">Avg. Answer</div>
            </div>
            <div className="w-px h-10 bg-border/50" />
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">24/7</div>
              <div className="text-[9px] text-muted-foreground">Coverage</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-accent/15 rounded-full border border-accent/30">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] text-accent font-medium">AI Active</span>
          </div>
        </div>
        
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
      </div>
    );
  }

  // Solution variant - Learning/optimization visualization - minimal industrial scientific style
  return (
    <div className={cn("relative w-full h-full bg-[hsl(40_15%_8%)] rounded-sm overflow-hidden font-mono", className)}>
      <div className="absolute inset-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[hsl(40_20%_85%)]" />
            <span className="text-[10px] text-white/50 uppercase tracking-widest">SYS.OPTIMIZE</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 bg-[hsl(40_20%_85%)] rounded-sm text-[hsl(40_15%_15%)] font-medium">LEARNING</span>
        </div>

        {/* A/B Test comparison */}
        <div className="grid grid-cols-2 gap-1 mb-3">
          <div className="p-3 bg-white/[0.02] border border-white/10 rounded-sm">
            <div className="text-[9px] text-white/40 mb-2 uppercase tracking-wider">VARIANT.A</div>
            <div className="space-y-1 mb-2">
              <div className="h-1.5 w-full bg-white/10 rounded-sm" />
              <div className="h-1.5 w-3/4 bg-white/10 rounded-sm" />
            </div>
            <div className="text-xl font-bold text-white/50 mb-1">42%</div>
            <div className="h-1 bg-white/10 rounded-sm overflow-hidden">
              <div className="w-[42%] h-full bg-white/30" />
            </div>
          </div>
          <div className="p-3 bg-[hsl(40_20%_85%)]/10 border border-[hsl(40_20%_85%)]/30 rounded-sm">
            <div className="text-[9px] text-[hsl(40_20%_85%)] mb-2 uppercase tracking-wider flex items-center gap-1">
              VARIANT.B <span className="text-[hsl(40_20%_85%)]">✓</span>
            </div>
            <div className="space-y-1 mb-2">
              <div className="h-1.5 w-full bg-[hsl(40_20%_85%)]/20 rounded-sm" />
              <div className="h-1.5 w-2/3 bg-[hsl(40_20%_85%)]/20 rounded-sm" />
            </div>
            <div className="text-xl font-bold text-[hsl(40_20%_85%)] mb-1">58%</div>
            <div className="h-1 bg-white/10 rounded-sm overflow-hidden">
              <div className="w-[58%] h-full bg-[hsl(40_20%_85%)]" />
            </div>
          </div>
        </div>

        {/* Learnings log */}
        <div className="border border-white/10 rounded-sm overflow-hidden mb-3">
          <div className="px-2 py-1.5 bg-white/[0.02] border-b border-white/10">
            <span className="text-[9px] text-white/40 uppercase tracking-wider">LEARNINGS.LOG</span>
          </div>
          <div className="divide-y divide-white/5">
            {[
              { insight: "Vehicle model mention → +23% response", status: "APPLIED" },
              { insight: "10am send time → +18% vs 2pm", status: "APPLIED" },
              { insight: "Day 3 follow-up vs Day 7", status: "TESTING" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between px-2 py-1.5 text-[9px]">
                <span className="text-white/70">{item.insight}</span>
                <span className={`px-1.5 py-0.5 rounded-sm ${
                  item.status === 'APPLIED' 
                    ? 'bg-[hsl(40_20%_85%)] text-[hsl(40_15%_15%)]' 
                    : 'bg-white/10 text-white/50'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance chart */}
        <div className="flex-1 flex flex-col">
          <div className="text-[9px] text-white/40 uppercase tracking-wider mb-2">RESPONSE.TREND</div>
          <div className="flex items-end gap-0.5 flex-1 min-h-[48px]">
            {[25, 30, 35, 40, 38, 45, 52, 48, 55, 58, 62, 65].map((h, i) => (
              <div 
                key={i}
                className={`flex-1 rounded-sm transition-all ${i >= 10 ? 'bg-[hsl(40_20%_85%)]' : 'bg-white/20'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-white/10">
            <span className="text-[8px] text-white/40">W1</span>
            <span className="text-[8px] text-[hsl(40_20%_85%)]">+160%</span>
            <span className="text-[8px] text-white/40">NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbstractGraphic;
