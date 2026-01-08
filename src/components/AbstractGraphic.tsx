import { cn } from "@/lib/utils";

interface AbstractGraphicProps {
  variant?: "hero" | "solution";
  className?: string;
}

const AbstractGraphic = ({ variant = "hero", className }: AbstractGraphicProps) => {
  if (variant === "hero") {
    return (
      <div className={cn("relative w-full aspect-[4/5] bg-card/90 rounded-2xl overflow-hidden border border-border/50 backdrop-blur-sm", className)}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-10 h-full w-full gap-px">
            {Array.from({ length: 120 }).map((_, i) => (
              <div key={i} className="border-b border-r border-border/30" />
            ))}
          </div>
        </div>
        
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
                    "w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0",
                    i === 0 ? "bg-accent text-background" : "bg-accent/30 text-accent"
                  )}>
                    {activity.result.startsWith('+') ? activity.result : '✓'}
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
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-accent/15 rounded-full border border-accent/30">
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

  // Solution variant - A/B testing visualization
  return (
    <div className={cn("relative w-full aspect-[4/3] bg-card rounded-lg overflow-hidden", className)}>
      <div className="absolute inset-6 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs text-muted-foreground font-mono">AI Message Testing</span>
          </div>
          <div className="text-xs text-muted-foreground font-mono">Live</div>
        </div>

        {/* A/B Test cards */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="p-3 bg-muted/30 rounded border border-border">
            <div className="text-xs text-muted-foreground mb-2">Variant A</div>
            <div className="space-y-1">
              <div className="h-2 w-full bg-muted/50 rounded-full" />
              <div className="h-2 w-3/4 bg-muted/50 rounded-full" />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">42%</span>
              <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                <div className="w-[42%] h-full bg-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="p-3 bg-accent/10 rounded border border-accent/30">
            <div className="text-xs text-accent mb-2">Variant B — Winner</div>
            <div className="space-y-1">
              <div className="h-2 w-full bg-accent/30 rounded-full" />
              <div className="h-2 w-2/3 bg-accent/30 rounded-full" />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-accent">58%</span>
              <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                <div className="w-[58%] h-full bg-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="pt-4">
          <div className="text-xs text-muted-foreground mb-2">Response Rate Over Time</div>
          <div className="h-20 flex items-end gap-1">
            {[25, 30, 35, 40, 38, 45, 52, 48, 55, 58, 62, 58].map((h, i) => (
              <div 
                key={i}
                className="flex-1 bg-accent/40 rounded-t"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbstractGraphic;
