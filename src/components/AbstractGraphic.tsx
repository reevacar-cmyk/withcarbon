import { cn } from "@/lib/utils";

interface AbstractGraphicProps {
  variant?: "hero" | "solution";
  className?: string;
}

const AbstractGraphic = ({ variant = "hero", className }: AbstractGraphicProps) => {
  if (variant === "hero") {
    return (
      <div className={cn("relative w-full aspect-[4/3] bg-card rounded-lg overflow-hidden", className)}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full gap-px bg-border">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="bg-background" />
            ))}
          </div>
        </div>
        
        {/* Abstract dashboard elements */}
        <div className="absolute inset-6 space-y-4">
          {/* Header bar */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <div className="h-2 w-24 bg-muted rounded-full" />
            <div className="ml-auto h-2 w-16 bg-muted rounded-full" />
          </div>
          
          {/* Content blocks */}
          <div className="grid grid-cols-3 gap-3 pt-4">
            <div className="space-y-2">
              <div className="h-16 bg-muted/50 rounded" />
              <div className="h-2 w-full bg-muted/30 rounded-full" />
              <div className="h-2 w-2/3 bg-muted/30 rounded-full" />
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-muted/50 rounded" />
              <div className="h-2 w-full bg-muted/30 rounded-full" />
              <div className="h-2 w-3/4 bg-muted/30 rounded-full" />
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-accent/20 rounded border border-accent/30" />
              <div className="h-2 w-full bg-muted/30 rounded-full" />
              <div className="h-2 w-1/2 bg-muted/30 rounded-full" />
            </div>
          </div>
          
          {/* Timeline/chart */}
          <div className="pt-4">
            <div className="h-24 bg-muted/30 rounded flex items-end justify-between px-4 pb-3">
              {[40, 65, 45, 80, 55, 70, 85, 60].map((h, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-4 rounded-t",
                    i === 7 ? "bg-accent" : "bg-muted"
                  )}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
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
