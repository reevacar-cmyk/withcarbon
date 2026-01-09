import { X, RefreshCw, PhoneOff, Cog } from "lucide-react";

const DisjointedTools = () => {
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
          <h2 className="text-[32px] font-bold leading-[0.95] tracking-tight fade-in mb-8" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Tools that</span>
            <br />
            <span className="text-red-500">don't work.</span>
          </h2>

          {/* Stacked drawback cards */}
          <div className="space-y-4">
            {/* Traditional CRMs */}
            <div className="border border-border/60 rounded-2xl overflow-hidden fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">Traditional CRMs</h3>
                      <span className="text-xs text-red-500 font-medium">$200/mo</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                  <p className="text-sm text-foreground/80 font-medium mb-2">You become the database.</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Every call, every text, every job — you have to manually log it. Miss a day? Data goes stale. It's a full-time job just keeping it updated.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Voice Tools */}
            <div className="border border-border/60 rounded-2xl overflow-hidden fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                      <PhoneOff className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">AI Voice Tools</h3>
                      <span className="text-xs text-red-500 font-medium">$650/mo</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                  <p className="text-sm text-foreground/80 font-medium mb-2">A Vapi wrapper. That's it.</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Picks up the phone, reads a script, forgets everything. Never learns. Never improves. $650/mo for a fancy answering machine.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Builders */}
            <div className="border border-border/60 rounded-2xl overflow-hidden fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                      <Cog className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-foreground">AI Builders</h3>
                      <span className="text-xs text-red-500 font-medium">$1,200/mo</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                  <p className="text-sm text-foreground/80 font-medium mb-2">Pay an agency. Pay again. Repeat.</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    $700 setup fee. $1,200/mo for static automations that break. Need a change? Call the agency. More money.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Total burn rate */}
          <div className="mt-6 border border-red-500/40 bg-red-500/5 p-4 rounded-2xl fade-in" style={{ animationDelay: '0.5s' }}>
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
            {/* Traditional CRMs */}
            <div className="bg-background border border-red-500/20 rounded-2xl overflow-hidden fade-in group hover:border-red-500/40 transition-colors" style={{ animationDelay: '0.2s' }}>
              <div className="h-48 bg-red-500/[0.03] border-b border-red-500/10 p-6 flex flex-col justify-center">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-red-500/60 uppercase tracking-wider">Manual entry required</span>
                  </div>
                  {["Log call with Mike", "Update vehicle info", "Add service notes", "Schedule follow-up"].map((task, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-muted-foreground/60">
                      <div className="w-3 h-3 rounded border border-muted-foreground/30" />
                      {task}
                    </div>
                  ))}
                  <div className="text-[10px] text-red-500/60 pt-2">↻ Repeat daily or data goes stale</div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Traditional CRMs</h3>
                    <p className="text-xs text-muted-foreground">You become the database</p>
                  </div>
                  <span className="text-sm font-bold text-red-500">$200/mo</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Every call, text, and job needs manual logging. Skip a day and your data is useless. 4+ hours/week just doing data entry.
                </p>
              </div>
            </div>

            {/* AI Voice Tools */}
            <div className="bg-background border border-red-500/20 rounded-2xl overflow-hidden fade-in group hover:border-red-500/40 transition-colors" style={{ animationDelay: '0.3s' }}>
              <div className="h-48 bg-red-500/[0.03] border-b border-red-500/10 p-5 flex flex-col justify-center">
                <div className="space-y-3">
                  <div className="bg-muted/30 border border-border/50 rounded-lg p-2.5">
                    <div className="text-[9px] text-muted-foreground mb-1">Returning customer</div>
                    <div className="text-[11px] text-foreground/80">"Hey, I called last week about my BMW..."</div>
                  </div>
                  <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-2.5">
                    <div className="text-[9px] text-red-500/60 mb-1 flex items-center gap-1">
                      <PhoneOff className="w-2.5 h-2.5" />
                      Vapi Bot
                    </div>
                    <div className="text-[11px] text-muted-foreground">"Hi! How can I help you today?"</div>
                  </div>
                  <div className="text-[10px] text-red-500/60 text-center">No memory. No context. Every call starts from zero.</div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">AI Voice Tools</h3>
                    <p className="text-xs text-muted-foreground">Vapi wrapper. That's it.</p>
                  </div>
                  <span className="text-sm font-bold text-red-500">$650/mo</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Picks up, reads a script, hangs up. Never learns. Never improves. You're paying $650/mo for a fancy answering machine.
                </p>
              </div>
            </div>

            {/* AI Builders */}
            <div className="bg-background border border-red-500/20 rounded-2xl overflow-hidden fade-in group hover:border-red-500/40 transition-colors" style={{ animationDelay: '0.4s' }}>
              <div className="h-48 bg-red-500/[0.03] border-b border-red-500/10 p-5 flex flex-col justify-center">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-muted-foreground/60">Agency setup</span>
                    <span className="text-red-500 font-medium">$700</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-muted-foreground/60">Monthly platform</span>
                    <span className="text-red-500 font-medium">$1,200</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-muted-foreground/60">Change request</span>
                    <span className="text-red-500 font-medium">$150/hr</span>
                  </div>
                  <div className="border-t border-red-500/20 pt-2 mt-2">
                    <div className="text-[10px] text-red-500/60 font-mono">
                      IF workflow.breaks → call_agency( ) → pay_more( )
                    </div>
                  </div>
                  <div className="text-[10px] text-muted-foreground/50 text-center pt-1">Static automations. Zero adaptability.</div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">AI Builders</h3>
                    <p className="text-xs text-muted-foreground">Agency fee machine</p>
                  </div>
                  <span className="text-sm font-bold text-red-500">$1,200/mo</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pay $700 to set it up. Pay $1,200/mo for brittle automations. Need changes? Pay the agency again. It never ends.
                </p>
              </div>
            </div>
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