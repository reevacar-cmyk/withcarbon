import { TrendingUp, Users, DollarSign, Clock, Target } from "lucide-react";

const Insights = () => {
  const insights = [
    {
      title: "Customer segments",
      description: "AI-identified patterns in your customer base",
      icon: Users,
      visual: "segments"
    },
    {
      title: "Upsell opportunities",
      description: "Revenue potential from existing customers",
      icon: Target,
      visual: "upsell"
    },
    {
      title: "Job duration trends",
      description: "Time patterns across service types",
      icon: Clock,
      visual: "duration"
    },
    {
      title: "Revenue per customer",
      description: "Lifetime value insights and forecasts",
      icon: DollarSign,
      visual: "revenue"
    }
  ];

  // Mini visualization components
  const SegmentVisual = () => (
    <div className="flex items-end gap-1 h-16">
      {[40, 65, 85, 55, 30].map((height, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div 
            className="w-6 rounded-t bg-gradient-to-t from-accent/60 to-accent/20"
            style={{ height: `${height}%` }}
          />
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
        </div>
      ))}
    </div>
  );

  const UpsellVisual = () => (
    <div className="relative h-16 w-full">
      <div className="absolute inset-0 flex items-center">
        <div className="h-px w-full bg-border/50" />
      </div>
      <svg className="w-full h-full" viewBox="0 0 120 64" preserveAspectRatio="none">
        <path
          d="M0 50 Q20 48 40 35 T80 20 T120 8"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          className="animate-pulse"
        />
        <circle cx="120" cy="8" r="4" fill="hsl(var(--accent))" className="animate-pulse" />
      </svg>
      <div className="absolute top-0 right-0 text-xs text-accent font-mono">+24%</div>
    </div>
  );

  const DurationVisual = () => (
    <div className="flex flex-col gap-2 w-full">
      {[
        { label: "Detail", value: 75 },
        { label: "Wash", value: 45 },
        { label: "Coating", value: 90 }
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-[10px] text-muted-foreground w-12 font-mono">{item.label}</span>
          <div className="flex-1 h-1.5 bg-muted/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent/70 rounded-full"
              style={{ width: `${item.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const RevenueVisual = () => (
    <div className="relative h-16 w-full">
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-1">
        {[35, 42, 38, 55, 48, 62, 58, 70].map((height, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t transition-all duration-300 ${
              i >= 6 ? 'bg-accent' : 'bg-muted-foreground/20'
            }`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="absolute -top-1 right-0 flex items-center gap-1">
        <TrendingUp className="w-3 h-3 text-accent" />
        <span className="text-xs text-accent font-mono">↑</span>
      </div>
    </div>
  );

  const getVisual = (type: string) => {
    switch (type) {
      case "segments": return <SegmentVisual />;
      case "upsell": return <UpsellVisual />;
      case "duration": return <DurationVisual />;
      case "revenue": return <RevenueVisual />;
      default: return null;
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 fade-in">
          Insights you didn't know you had
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl fade-in" style={{ animationDelay: '0.1s' }}>
          Carbon surfaces patterns hidden in your data, turning everyday operations into strategic advantages.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-accent/30 transition-all duration-300 fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground">{insight.title}</h3>
                </div>
                
                <div className="h-20 mb-4 flex items-end">
                  {getVisual(insight.visual)}
                </div>
                
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {insight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Insights;
