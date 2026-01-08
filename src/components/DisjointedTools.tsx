import { X, AlertTriangle, DollarSign, Clock, Unplug, Brain, Workflow } from "lucide-react";

const DisjointedTools = () => {
  const tools = [
    {
      name: "Traditional CRMs",
      price: "$200/mo",
      icon: Clock,
      tagline: "Built for desk workers",
      painPoints: [
        "4+ hours/week manual data entry",
        "Contacts go stale in days",
        "No connection to calls or texts"
      ],
      visual: "crm"
    },
    {
      name: "AI Voice Tools",
      price: "$650/mo",
      icon: Brain,
      tagline: "Dumb bots with no memory",
      painPoints: [
        "Forgets customers instantly",
        "No job or vehicle context",
        "Generic scripts, zero personalization"
      ],
      visual: "voice"
    },
    {
      name: "Automation Platforms",
      price: "$1,200/mo",
      icon: Workflow,
      tagline: "Complexity you'll never use",
      painPoints: [
        "Requires technical setup",
        "Agencies charge $700+ to configure",
        "Breaks when anything changes"
      ],
      visual: "automation"
    }
  ];

  // Visual for CRM - showing manual disconnected data
  const CRMVisual = () => (
    <div className="h-full flex flex-col justify-center p-4 space-y-2">
      {[
        { field: "Name", value: "John ???", missing: true },
        { field: "Vehicle", value: "—", missing: true },
        { field: "Last service", value: "—", missing: true },
        { field: "Notes", value: "Called about something", missing: false }
      ].map((row, i) => (
        <div key={i} className="flex items-center gap-3 text-[11px]">
          <span className="text-muted-foreground w-16">{row.field}</span>
          <span className={row.missing ? "text-red-500/70" : "text-muted-foreground/50"}>
            {row.value}
          </span>
          {row.missing && <AlertTriangle className="w-3 h-3 text-red-500/50" />}
        </div>
      ))}
      <div className="pt-3 mt-2 border-t border-red-500/20">
        <div className="text-[10px] text-red-500/60 flex items-center gap-1">
          <Unplug className="w-3 h-3" />
          Last updated 3 weeks ago
        </div>
      </div>
    </div>
  );

  // Visual for Voice - showing disconnected conversations
  const VoiceVisual = () => (
    <div className="h-full flex flex-col justify-center p-4 space-y-3">
      <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-2.5">
        <div className="text-[10px] text-muted-foreground mb-1">Incoming call</div>
        <div className="text-[11px] text-foreground/80">"Hi, I called last week about my BMW..."</div>
      </div>
      <div className="bg-muted/30 border border-border/50 rounded-lg p-2.5">
        <div className="text-[10px] text-red-500/60 mb-1 flex items-center gap-1">
          <X className="w-3 h-3" />
          AI Response
        </div>
        <div className="text-[11px] text-muted-foreground">"I don't have any record of that. Can you tell me your name again?"</div>
      </div>
      <div className="text-[10px] text-red-500/60 flex items-center gap-1 pt-1">
        <AlertTriangle className="w-3 h-3" />
        Customer hung up
      </div>
    </div>
  );

  // Visual for Automation - showing complexity
  const AutomationVisual = () => (
    <div className="h-full flex flex-col justify-center p-4">
      <div className="space-y-2">
        {[
          "IF contact.tag = 'lead' AND days_since > 7...",
          "THEN send_email(template_42)...",
          "WAIT 3 days → check open_rate...",
          "ERROR: Workflow failed at step 12"
        ].map((line, i) => (
          <div 
            key={i} 
            className={`text-[10px] font-mono ${
              i === 3 ? "text-red-500/70" : "text-muted-foreground/60"
            }`}
          >
            {line}
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-red-500/20 flex items-center justify-between">
        <div className="text-[10px] text-red-500/60">Setup time: 40+ hours</div>
        <div className="text-[10px] text-muted-foreground/50">Agency fee: $700</div>
      </div>
    </div>
  );

  const renderVisual = (visual: string) => {
    switch (visual) {
      case "crm": return <CRMVisual />;
      case "voice": return <VoiceVisual />;
      case "automation": return <AutomationVisual />;
      default: return null;
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 fade-in" style={{ color: "#FF0000" }}>
            The Status Quo
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
            Disconnected tools that drain time and money.
          </h2>
        </div>
        
        {/* Tools grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div 
                key={index}
                className="bg-background border border-red-500/20 rounded-2xl overflow-hidden fade-in group hover:border-red-500/40 transition-colors"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Visual area */}
                <div className="h-44 bg-red-500/[0.03] border-b border-red-500/10">
                  {renderVisual(tool.visual)}
                </div>
                
                {/* Content */}
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
                      <p className="text-xs text-muted-foreground">{tool.tagline}</p>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-red-500/10 rounded-full">
                      <DollarSign className="w-3 h-3" style={{ color: "#FF0000" }} />
                      <span className="text-xs font-medium" style={{ color: "#FF0000" }}>{tool.price}</span>
                    </div>
                  </div>
                  
                  {/* Pain points */}
                  <ul className="space-y-2">
                    {tool.painPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <X className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#FF0000" }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Total cost callout */}
        <div className="mt-12 text-center fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full">
            <span className="text-sm text-muted-foreground">Total monthly cost:</span>
            <span className="text-xl font-bold" style={{ color: "#FF0000" }}>$2,050+</span>
            <span className="text-sm text-muted-foreground">for tools that don't talk to each other</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisjointedTools;
