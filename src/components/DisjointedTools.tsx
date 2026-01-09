import { useState } from "react";
import { ChevronDown, RefreshCw, PhoneOff, Cog, X } from "lucide-react";

const DisjointedTools = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const tools = [
    {
      name: "Traditional CRMs",
      price: "$200/mo",
      icon: RefreshCw,
      tagline: "You become the database",
      description: "Every call, every text, every job — you have to manually log it. Miss a day? Data goes stale. It's a full-time job just keeping it updated.",
      painPoints: [
        "4+ hours/week manual data entry",
        "Contacts go stale in days",
        "Disconnected from calls and texts"
      ]
    },
    {
      name: "AI Voice Tools",
      price: "$650/mo",
      icon: PhoneOff,
      tagline: "A Vapi wrapper. That's it.",
      description: "Picks up the phone, reads a script, forgets everything. Never learns. Never improves. $650/mo for a fancy answering machine.",
      painPoints: [
        "Zero memory between calls",
        "Never learns or improves",
        "Overpriced script reader"
      ]
    },
    {
      name: "AI Builders",
      price: "$1,200/mo",
      icon: Cog,
      tagline: "Pay an agency. Pay again. Repeat.",
      description: "$700 setup fee. $1,200/mo for static automations that break. Need a change? Call the agency. More money.",
      painPoints: [
        "$700+ agency setup fees",
        "Static automations that break",
        "Enterprise prices for basic workflows"
      ]
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-6 pb-24 md:py-24 px-[3px] md:px-8 lg:px-16 bg-card md:bg-[hsl(40_20%_94%)]">
      <div className="container mx-auto max-w-6xl">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Monospace label */}
          <div className="mb-3 fade-in">
            <span className="font-mono text-[10px] tracking-[0.2em] text-red-500 uppercase">
              STATUS QUO
            </span>
          </div>

          {/* Industrial headline */}
          <h2 className="text-[32px] font-bold leading-[0.95] tracking-tight fade-in mb-6" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Tools that</span>
            <br />
            <span className="text-red-500">don't work.</span>
          </h2>

          {/* Accordion cards */}
          <div className="space-y-3 fade-in" style={{ animationDelay: '0.2s' }}>
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-red-500/40 bg-red-500/[0.02]' : 'border-border/60'
                  }`}
                >
                  {/* Header - always visible */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isOpen ? 'bg-red-500/15' : 'bg-muted/50'
                      }`}>
                        <Icon className={`w-5 h-5 transition-colors ${isOpen ? 'text-red-500' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-sm font-semibold text-foreground">{tool.name}</h3>
                        <span className={`text-xs font-medium transition-colors ${isOpen ? 'text-red-500' : 'text-muted-foreground'}`}>
                          {tool.price}
                        </span>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Expandable content */}
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 pb-4">
                      {/* Tagline */}
                      <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-3 mb-3">
                        <p className="text-sm font-medium text-foreground/90">{tool.tagline}</p>
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        {tool.description}
                      </p>

                      {/* Pain points */}
                      <div className="space-y-1.5">
                        {tool.painPoints.map((point, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-red-500/80">
                            <X className="w-3 h-3 flex-shrink-0" />
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Total burn rate */}
          <div className="mt-6 border border-red-500/40 bg-red-500/5 p-4 rounded-2xl fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-[9px] tracking-[0.2em] text-red-500/60 uppercase mb-1">
                  Monthly burn
                </div>
                <div className="text-2xl font-bold text-red-500 tracking-tight">
                  $200–2K
                </div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground uppercase">
                  For tools that
                </div>
                <div className="font-mono text-[9px] tracking-[0.15em] text-red-500 uppercase">
                  don't learn
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase mb-4 fade-in text-red-500">
              The Status Quo
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
              Tools that cost you money and never get better.
            </h2>
          </div>
          
          {/* Desktop grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div 
                  key={index}
                  className="bg-background border border-red-500/20 rounded-2xl overflow-hidden fade-in group hover:border-red-500/40 transition-colors"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  {/* Icon header */}
                  <div className="h-32 bg-red-500/[0.03] border-b border-red-500/10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/15 transition-colors">
                      <Icon className="w-8 h-8 text-red-500" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
                        <p className="text-xs text-muted-foreground">{tool.tagline}</p>
                      </div>
                      <span className="text-sm font-bold text-red-500">{tool.price}</span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {tool.description}
                    </p>

                    {/* Pain points */}
                    <div className="space-y-2 pt-3 border-t border-border/50">
                      {tool.painPoints.map((point, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-red-500/80">
                          <X className="w-4 h-4 flex-shrink-0" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Desktop total */}
          <div className="mt-12 text-center fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex flex-row items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full">
              <span className="text-sm text-muted-foreground">Total monthly cost:</span>
              <span className="text-xl font-bold text-red-500">$200–2,000/mo</span>
              <span className="text-sm text-muted-foreground">for tools that never learn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisjointedTools;