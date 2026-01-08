import { cn } from "@/lib/utils";

interface AbstractGraphicProps {
  variant?: "hero" | "solution";
  className?: string;
}

const AbstractGraphic = ({ variant = "hero", className }: AbstractGraphicProps) => {
  if (variant === "hero") {
    return (
      <div className={cn("relative w-full aspect-[4/3] bg-card/80 rounded-2xl overflow-hidden border border-border/50 backdrop-blur-sm", className)}>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full gap-px">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border-b border-r border-border/30" />
            ))}
          </div>
        </div>
        
        {/* Main content area */}
        <div className="absolute inset-5 space-y-4">
          {/* Top bar - simulating app header */}
          <div className="flex items-center justify-between pb-3 border-b border-border/30">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Carbon AI</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-0.5 bg-accent/10 rounded text-[9px] text-accent font-mono">LIVE</div>
            </div>
          </div>
          
          {/* Active job cards row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Incoming", count: "3", status: "active" },
              { label: "Scheduled", count: "12", status: "normal" },
              { label: "Completed", count: "28", status: "normal" }
            ].map((item, i) => (
              <div 
                key={i} 
                className={cn(
                  "p-3 rounded-lg border",
                  item.status === "active" 
                    ? "bg-accent/10 border-accent/30" 
                    : "bg-muted/30 border-border/50"
                )}
              >
                <div className="text-[10px] text-muted-foreground mb-1">{item.label}</div>
                <div className={cn(
                  "text-2xl font-bold",
                  item.status === "active" ? "text-accent" : "text-foreground"
                )}>
                  {item.count}
                </div>
              </div>
            ))}
          </div>
          
          {/* Recent activity feed */}
          <div className="space-y-2 pt-2 pb-16">
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-3">Recent Activity</div>
            {[
              { action: "Call answered", customer: "John D.", time: "Just now", highlight: true },
              { action: "Job booked", customer: "Sarah M.", time: "2m ago", highlight: false },
              { action: "Follow-up sent", customer: "Mike R.", time: "5m ago", highlight: false }
            ].map((activity, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex items-center justify-between p-2 rounded-lg transition-all",
                  activity.highlight 
                    ? "bg-accent/10 border border-accent/20" 
                    : "bg-muted/20"
                )}
              >
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    activity.highlight ? "bg-accent animate-pulse" : "bg-muted-foreground/50"
                  )} />
                  <span className="text-[11px] text-foreground">{activity.action}</span>
                  <span className="text-[11px] text-muted-foreground">• {activity.customer}</span>
                </div>
                <span className="text-[10px] text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
          
          {/* Bottom stats bar */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pt-3 border-t border-border/30">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-accent">98%</div>
                <div className="text-[9px] text-muted-foreground">Response Rate</div>
              </div>
              <div className="w-px h-8 bg-border/50" />
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">2.3s</div>
                <div className="text-[9px] text-muted-foreground">Avg. Answer</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[9px] text-accent font-medium">AI Active</span>
            </div>
          </div>
        </div>
        
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
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
