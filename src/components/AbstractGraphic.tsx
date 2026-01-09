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
        
        {/* Mobile gradient sweep animation */}
        <div 
          className="absolute inset-0 md:hidden pointer-events-none bg-gradient-to-r from-transparent via-accent/5 to-transparent"
          style={{ animation: 'shimmer 4s ease-in-out infinite' }}
        />
        
        {/* Main content area */}
        <div className="absolute inset-4 bottom-28 space-y-3 overflow-hidden">
          {/* Top bar - simulating app header */}
          <div className="flex items-center justify-between pb-2 border-b border-border/30">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Carbon AI</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 bg-accent/10 rounded-full relative overflow-hidden">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse relative z-10" />
              <span className="text-[9px] text-accent font-medium relative z-10">Working</span>
              {/* Mobile badge shimmer */}
              <span 
                className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0"
                style={{ animation: 'shimmer 2s ease-in-out infinite' }}
              />
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
                className="p-2 rounded-lg bg-accent/5 border border-accent/20 relative overflow-hidden"
                style={{ animation: `float ${3 + i * 0.3}s ease-in-out infinite` }}
              >
                {/* Mobile stat glow */}
                <div 
                  className="absolute inset-0 md:hidden bg-gradient-to-t from-accent/10 to-transparent"
                  style={{ animation: `pulse ${2 + i * 0.5}s ease-in-out infinite` }}
                />
                <div className="text-[9px] text-muted-foreground uppercase tracking-wider relative z-10">
                  {item.label}
                </div>
                <div className="text-lg font-bold text-accent leading-tight relative z-10">{item.value}</div>
                <div className="text-[8px] text-muted-foreground relative z-10">{item.sublabel}</div>
              </div>
            ))}
          </div>
          
          {/* AI Activity feed - Wins */}
          <div className="space-y-1.5 pt-1 flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">AI Wins</div>
              <div className="flex items-center gap-1 relative">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <div className="text-[9px] text-accent">Live</div>
                {/* Mobile live indicator ping */}
                <span 
                  className="absolute -inset-1 md:hidden rounded-full border border-accent/30"
                  style={{ animation: 'ping 2s ease-in-out infinite' }}
                />
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
                  "flex items-start justify-between p-2 rounded-lg transition-all relative overflow-hidden",
                  i === 0 
                    ? "bg-accent/15 border border-accent/30" 
                    : "bg-muted/20 border border-transparent"
                )}
              >
                {/* Mobile activity card animations */}
                {i === 0 && (
                  <div 
                    className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0"
                    style={{ animation: 'shimmer 2s ease-in-out infinite' }}
                  />
                )}
                <div 
                  className="absolute inset-0 md:hidden"
                  style={{ 
                    background: i === 0 ? 'radial-gradient(circle at 0% 50%, hsl(var(--accent) / 0.15) 0%, transparent 50%)' : 'none',
                    animation: 'float 3s ease-in-out infinite'
                  }}
                />
                
                <div className="flex items-start gap-2 min-w-0 flex-1 relative z-10">
                  <div className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 relative",
                    i === 0 ? "bg-accent text-background" : "bg-accent/30 text-accent"
                  )}>
                    ✓
                    {/* Mobile checkmark pulse for first item */}
                    {i === 0 && (
                      <span 
                        className="absolute inset-0 md:hidden rounded-full border border-accent"
                        style={{ animation: 'ping 1.5s ease-in-out infinite' }}
                      />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-foreground font-medium">{activity.action}</span>
                      <span className={cn(
                        "text-[8px] px-1.5 py-0.5 rounded font-semibold relative overflow-hidden",
                        activity.result.startsWith('+') 
                          ? "bg-accent/20 text-accent" 
                          : "bg-accent/10 text-accent"
                      )}>
                        <span className="relative z-10">{activity.result}</span>
                        {/* Mobile result badge shimmer */}
                        {activity.result.startsWith('+') && (
                          <span 
                            className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0"
                            style={{ animation: 'shimmer 1.5s ease-in-out infinite' }}
                          />
                        )}
                      </span>
                    </div>
                    <div className="text-[9px] text-muted-foreground">{activity.detail} · {activity.customer}</div>
                  </div>
                </div>
                <span className="text-[9px] text-muted-foreground shrink-0 ml-2 relative z-10">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom stats bar - positioned separately */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-card/95 border border-border/50 relative overflow-hidden">
          {/* Mobile stats bar glow */}
          <div 
            className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/5 via-transparent to-accent/5"
            style={{ animation: 'shimmer 5s ease-in-out infinite' }}
          />
          
          <div className="flex items-center gap-4 relative z-10">
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
        
        {/* Ambient glow - with mobile animation */}
        <div 
          className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        />
        <div 
          className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none"
          style={{ animation: 'float 5s ease-in-out infinite reverse' }}
        />
      </div>
    );
  }

  // Solution variant - A/B testing visualization
  return (
    <div className={cn("relative w-full h-full bg-[hsl(0_0%_8%)] rounded-lg overflow-hidden", className)}>
      <div className="absolute inset-5 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-white/60 uppercase tracking-wider">AI Learning</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-accent">Auto-optimizing</span>
        </div>

        {/* A/B Test cards */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 bg-white/10 rounded-xl border border-white/20">
            <div className="text-[10px] text-white/60 mb-2 uppercase tracking-wider">Variant A</div>
            <div className="space-y-1.5 mb-3">
              <div className="h-2 w-full bg-white/20 rounded-full" />
              <div className="h-2 w-3/4 bg-white/20 rounded-full" />
            </div>
            <div className="text-2xl font-bold text-white/60 mb-1">42%</div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[42%] h-full bg-white/40" />
            </div>
          </div>
          <div className="p-3 bg-accent/10 rounded-xl border border-accent/30">
            <div className="text-[10px] text-accent mb-2 uppercase tracking-wider flex items-center gap-1">
              Variant B <span className="text-accent">✓</span>
            </div>
            <div className="space-y-1.5 mb-3">
              <div className="h-2 w-full bg-accent/30 rounded-full" />
              <div className="h-2 w-2/3 bg-accent/30 rounded-full" />
            </div>
            <div className="text-2xl font-bold text-accent mb-1">58%</div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[58%] h-full bg-accent" />
            </div>
          </div>
        </div>

        {/* What AI learned */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-3 mb-4">
          <div className="text-[10px] text-white/60 uppercase tracking-wider mb-2">What AI learned</div>
          <div className="space-y-2">
            {[
              { insight: "Mentioning vehicle model increases response by 23%", status: "Applied" },
              { insight: "Messages sent at 10am outperform 2pm by 18%", status: "Applied" },
              { insight: "Follow-up on day 3 beats day 7", status: "Testing" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-[10px]">
                <span className="text-white/80">{item.insight}</span>
                <span className={`px-1.5 py-0.5 rounded text-[9px] ${
                  item.status === 'Applied' 
                    ? 'bg-accent/20 text-accent' 
                    : 'bg-white/10 text-white/60'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Response rate chart */}
        <div className="flex flex-col">
          <div className="text-[10px] text-white/60 uppercase tracking-wider mb-2">Response Rate Trend</div>
          <div className="flex items-end gap-1 h-12">
            {[25, 30, 35, 40, 38, 45, 52, 48, 55, 58, 62, 65].map((h, i) => (
              <div 
                key={i}
                className={`flex-1 rounded-t transition-all ${i >= 10 ? 'bg-accent' : 'bg-accent/40'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between mt-1 text-[9px] text-white/60">
            <span>Week 1</span>
            <span>Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbstractGraphic;
