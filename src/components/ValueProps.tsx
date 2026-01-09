import { Phone, Users, Clock, Calendar, MessageSquare, ArrowRight, Send, Bell, RotateCcw, PhoneIncoming, CheckCircle, Database } from "lucide-react";

const ValueProps = () => {
  const values = [
    {
      metric: "40%",
      title: "More bookings",
      mobileTitle: "More jobs booked",
      description: "AI answers calls and texts instantly, qualifies inbound leads, and books jobs 24/7.",
      mobileDescription: "AI answers every call and text — even when you're working.",
      visual: "booking"
    },
    {
      metric: "30%",
      title: "More repeat customers",
      mobileTitle: "Customers come back",
      description: "AI remembers who they are, their car, past jobs, and conversations — and sends personalized follow-ups at the right time.",
      mobileDescription: "Personalized follow-ups based on their car, history, and timing.",
      visual: "retention"
    },
    {
      metric: "4hrs",
      title: "Saved per day",
      mobileTitle: "Saved daily",
      description: "Every call, text, lead, and job auto-logs into your calendar and CRM — whether AI or a human answered.",
      mobileDescription: "Every call, text, and job auto-logged. No data entry.",
      visual: "automation"
    }
  ];

  const BookingVisual = () => (
    <div className="relative w-full h-full flex flex-col p-3 md:p-5 overflow-hidden">
      {/* Mobile gradient shine overlay */}
      <div className="absolute inset-0 md:hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"
          style={{ transform: 'translateX(-100%)', animation: 'shimmer 3s ease-in-out infinite' }}
        />
      </div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-2 md:mb-4 fade-in relative z-10">
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-accent animate-pulse md:animate-pulse" />
          <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider">Live Leads</span>
        </div>
        <span className="text-[8px] md:text-[10px] px-1.5 md:px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-accent relative overflow-hidden">
          <span className="relative z-10">24/7 Active</span>
          <span className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 animate-[shimmer_2s_ease-in-out_infinite]" />
        </span>
      </div>
      
      {/* Lead cards */}
      <div className="flex-1 space-y-2 md:space-y-3 overflow-hidden relative z-10">
        {[
          { 
            name: "New Lead",
            phone: "(555) 123-4567",
            source: "Missed call",
            time: "Just now",
            aiAction: "Answered & qualified",
            request: "Full detail for BMW X5",
            outcome: "Booked",
            slot: "Tomorrow 10am",
            value: "$220",
            crmStatus: "Synced"
          },
          { 
            name: "Maria G.",
            phone: "(555) 987-6543",
            source: "Text message",
            time: "2 min ago",
            aiAction: "Sent quote",
            request: "Ceramic coating estimate",
            outcome: "Quote sent",
            slot: null,
            value: "$450",
            crmStatus: "Synced"
          },
          { 
            name: "David L.",
            phone: "(555) 456-7890",
            source: "Website form",
            time: "5 min ago",
            aiAction: "Auto-responded",
            request: "Interior + exterior",
            outcome: "Booked",
            slot: "Friday 2pm",
            value: "$180",
            crmStatus: "Synced"
          }
        ].map((lead, i) => (
          <div 
            key={i} 
            className="bg-white/10 border border-white/20 rounded-lg md:rounded-xl p-2 md:p-3 fade-in hover:border-accent/30 transition-colors relative overflow-hidden group"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {/* Mobile card glow effect */}
            <div 
              className="absolute inset-0 md:hidden opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ 
                background: 'radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.1) 0%, transparent 70%)',
                animation: `cardGlow ${2 + i * 0.5}s ease-in-out infinite`
              }}
            />
            
            {/* Lead header */}
            <div className="flex items-center justify-between mb-1.5 md:mb-2 relative z-10">
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-5 md:w-7 h-5 md:h-7 rounded-full bg-accent/10 flex items-center justify-center relative">
                  <PhoneIncoming className="w-2.5 md:w-3.5 h-2.5 md:h-3.5 text-accent" />
                  {/* Mobile pulse ring */}
                  <span className="absolute inset-0 md:hidden rounded-full border border-accent/30 animate-ping" style={{ animationDuration: '2s' }} />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-medium text-white">{lead.name}</div>
                  <div className="text-[8px] md:text-[10px] text-white/60">{lead.source} · {lead.time}</div>
                </div>
              </div>
              <div className={`text-[8px] md:text-[10px] px-1 md:px-1.5 py-0.5 rounded font-medium relative overflow-hidden ${
                lead.outcome === 'Booked' 
                  ? 'bg-accent/20 text-accent' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {lead.outcome}
                {lead.outcome === 'Booked' && (
                  <span className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 animate-[shimmer_1.5s_ease-in-out_infinite]" />
                )}
              </div>
            </div>
            
            {/* Request */}
            <div className="bg-white/10 rounded-md md:rounded-lg px-1.5 md:px-2 py-1 md:py-1.5 mb-1.5 md:mb-2 relative z-10">
              <p className="text-[9px] md:text-[11px] text-white truncate">"{lead.request}"</p>
            </div>
            
            {/* AI action + result row */}
            <div className="flex items-center justify-between text-[8px] md:text-[10px] relative z-10">
              <div className="flex items-center gap-1 text-accent">
                <CheckCircle className="w-2.5 md:w-3 h-2.5 md:h-3" />
                <span className="truncate">{lead.aiAction}</span>
              </div>
              {lead.slot && (
                <div className="flex items-center gap-1 text-white">
                  <Calendar className="w-2.5 md:w-3 h-2.5 md:h-3 text-accent/70" />
                  <span>{lead.slot}</span>
                </div>
              )}
            </div>
            
            {/* Bottom row - value + CRM sync */}
            <div className="mt-1.5 md:mt-2 pt-1.5 md:pt-2 border-t border-white/20 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-1 text-[8px] md:text-[10px] text-white/60">
                <Database className="w-2.5 md:w-3 h-2.5 md:h-3 text-accent/70" />
                <span>{lead.crmStatus}</span>
              </div>
              <span className="text-[10px] md:text-xs font-bold text-accent">{lead.value}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Summary stats */}
      <div className="mt-2 md:mt-4 pt-2 md:pt-3 border-t border-white/20 flex items-center justify-between fade-in relative z-10" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="text-center">
            <div className="text-sm md:text-base font-bold text-accent">{/* Mobile number counter effect */}$850</div>
            <div className="text-[7px] md:text-[8px] text-white/60">Today</div>
          </div>
          <div className="w-px h-4 md:h-6 bg-white/20" />
          <div className="text-center">
            <div className="text-sm md:text-base font-bold text-white">100%</div>
            <div className="text-[7px] md:text-[8px] text-white/60">Answered</div>
          </div>
          <div className="w-px h-4 md:h-6 bg-white/20" />
          <div className="text-center">
            <div className="text-sm md:text-base font-bold text-white">3/3</div>
            <div className="text-[7px] md:text-[8px] text-white/60">CRM synced</div>
          </div>
        </div>
        <div className="flex items-center gap-1 md:gap-1.5 px-1.5 md:px-2 py-0.5 md:py-1 bg-accent/10 rounded-full relative overflow-hidden">
          <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-accent animate-pulse relative z-10" />
          <span className="text-[8px] md:text-[10px] text-accent font-medium relative z-10">AI Active</span>
          {/* Mobile glow pulse */}
          <span className="absolute inset-0 md:hidden bg-accent/20 animate-ping rounded-full" style={{ animationDuration: '2s' }} />
        </div>
      </div>
    </div>
  );

  const RetentionVisual = () => (
    <div className="relative w-full h-full flex flex-col p-3 md:p-5 overflow-hidden">
      {/* Mobile gradient shine overlay */}
      <div className="absolute inset-0 md:hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          style={{ animation: 'shimmer 4s ease-in-out infinite' }}
        />
      </div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-2 md:mb-4 fade-in relative z-10">
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider">AI Follow-ups</span>
        </div>
        <span className="text-[8px] md:text-[10px] px-1.5 md:px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-accent relative overflow-hidden">
          <span className="relative z-10">Personalized</span>
          <span className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 animate-[shimmer_2s_ease-in-out_infinite]" />
        </span>
      </div>
      
      {/* Main conversation thread */}
      <div className="flex-1 space-y-2 md:space-y-3 overflow-hidden relative z-10">
        {[
          { 
            name: "John D.", 
            vehicle: "2021 Tesla Model 3",
            lastService: "Full detail · 45 days ago",
            message: "Hey John! Your Model 3 is probably due for another detail.",
            response: "Yes! Thursday works",
            outcome: "Booked",
            value: "$180"
          },
          { 
            name: "Sarah M.", 
            vehicle: "2019 BMW X5",
            lastService: "Ceramic coat · 6 months ago",
            message: "Hi Sarah, your ceramic coating maintenance is coming up.",
            response: "Can you do Saturday?",
            outcome: "Booked",
            value: "$120"
          },
          { 
            name: "Mike R.", 
            vehicle: "2022 Ford F-150",
            lastService: "Interior clean · 30 days ago",
            message: "Mike, noticed you do a lot of highway miles.",
            response: null,
            outcome: "Sent",
            value: "$350"
          }
        ].map((customer, i) => (
          <div 
            key={i} 
            className="bg-white/10 border border-white/20 rounded-lg md:rounded-xl p-2 md:p-3 fade-in hover:border-accent/30 transition-colors relative overflow-hidden"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {/* Mobile subtle glow */}
            <div 
              className="absolute inset-0 md:hidden"
              style={{ 
                background: 'radial-gradient(ellipse at 20% 50%, hsl(var(--accent) / 0.08) 0%, transparent 60%)',
                animation: `float ${3 + i * 0.3}s ease-in-out infinite`
              }}
            />
            
            {/* Customer header */}
            <div className="flex items-center justify-between mb-1.5 md:mb-2 relative z-10">
              <div className="flex items-center gap-1.5 md:gap-2">
                <div className="w-5 md:w-7 h-5 md:h-7 rounded-full bg-accent/10 flex items-center justify-center text-[8px] md:text-[10px] font-bold text-accent relative">
                  {customer.name.split(' ').map(n => n[0]).join('')}
                  {/* Mobile avatar ring animation */}
                  <span className="absolute inset-0 md:hidden rounded-full border border-accent/40" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-medium text-white">{customer.name}</div>
                  <div className="text-[8px] md:text-[10px] text-white/60 truncate max-w-[80px] md:max-w-none">{customer.vehicle}</div>
                </div>
              </div>
              <div className={`text-[8px] md:text-[10px] px-1 md:px-1.5 py-0.5 rounded font-medium relative overflow-hidden ${
                customer.outcome === 'Booked' 
                  ? 'bg-accent/20 text-accent' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {customer.outcome}
                {customer.outcome === 'Booked' && (
                  <span className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0 animate-[shimmer_1.5s_ease-in-out_infinite]" />
                )}
              </div>
            </div>
            
            {/* Context */}
            <div className="text-[8px] md:text-[10px] text-white/60 mb-1.5 md:mb-2 flex items-center gap-1 relative z-10">
              <Clock className="w-2.5 md:w-3 h-2.5 md:h-3" />
              {customer.lastService}
            </div>
            
            {/* AI Message */}
            <div className="bg-accent/5 border border-accent/20 rounded-md md:rounded-lg p-1.5 md:p-2 mb-1.5 md:mb-2 relative overflow-hidden z-10">
              {/* Mobile message typing effect */}
              <div className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0" style={{ animation: 'shimmer 3s ease-in-out infinite' }} />
              <div className="flex items-start gap-1.5 md:gap-2 relative z-10">
                <div className="w-3 md:w-4 h-3 md:h-4 rounded bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Send className="w-2 md:w-2.5 h-2 md:h-2.5 text-accent" />
                </div>
                <p className="text-[9px] md:text-[11px] text-white/90 leading-relaxed line-clamp-2">"{customer.message}"</p>
              </div>
            </div>
            
            {/* Customer response if exists */}
            {customer.response && (
              <div className="flex justify-end relative z-10">
                <div className="bg-white/10 rounded-md md:rounded-lg px-1.5 md:px-2 py-1 md:py-1.5 max-w-[70%] relative overflow-hidden">
                  <p className="text-[9px] md:text-[11px] text-white relative z-10">"{customer.response}"</p>
                  {/* Mobile response glow */}
                  <div className="absolute inset-0 md:hidden bg-gradient-to-l from-white/5 via-transparent to-transparent" style={{ animation: 'float 2s ease-in-out infinite' }} />
                </div>
              </div>
            )}
            
            {/* Value indicator for booked */}
            {customer.outcome === 'Booked' && (
              <div className="mt-1.5 md:mt-2 pt-1.5 md:pt-2 border-t border-white/20 flex items-center justify-between relative z-10">
                <span className="text-[8px] md:text-[10px] text-white/60">Revenue recovered</span>
                <span className="text-[10px] md:text-xs font-bold text-accent">{customer.value}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Summary stats */}
      <div className="mt-2 md:mt-4 pt-2 md:pt-3 border-t border-white/20 flex items-center justify-between fade-in relative z-10" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="text-center">
            <div className="text-sm md:text-base font-bold text-accent">$650</div>
            <div className="text-[7px] md:text-[8px] text-white/60">Recovered</div>
          </div>
          <div className="w-px h-4 md:h-6 bg-white/20" />
          <div className="text-center">
            <div className="text-sm md:text-base font-bold text-white">67%</div>
            <div className="text-[7px] md:text-[8px] text-white/60">Response rate</div>
          </div>
        </div>
        <div className="flex items-center gap-1 md:gap-1.5 px-1.5 md:px-2 py-0.5 md:py-1 bg-accent/10 rounded-full relative overflow-hidden">
          <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-accent animate-pulse relative z-10" />
          <span className="text-[8px] md:text-[10px] text-accent font-medium relative z-10">AI Active</span>
          <span className="absolute inset-0 md:hidden bg-accent/20 animate-ping rounded-full" style={{ animationDuration: '2s' }} />
        </div>
      </div>
    </div>
  );

  const AutomationVisual = () => (
    <div className="relative w-full h-full flex flex-col p-3 md:p-5 overflow-hidden">
      {/* Mobile gradient shine overlay */}
      <div className="absolute inset-0 md:hidden pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          style={{ animation: 'shimmer 3.5s ease-in-out infinite' }}
        />
      </div>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-2 md:mb-4 fade-in relative z-10">
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider">CRM Dashboard</span>
        </div>
        <span className="text-[8px] md:text-[10px] px-1.5 md:px-2 py-0.5 bg-accent/10 border border-accent/20 rounded-full text-accent relative overflow-hidden">
          <span className="relative z-10">Auto-sync</span>
          <span className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 animate-[shimmer_2s_ease-in-out_infinite]" />
        </span>
      </div>
      
      {/* Main content - Customer profile card */}
      <div className="flex-1 space-y-2 md:space-y-3 overflow-hidden relative z-10">
        {/* Featured customer profile */}
        <div className="bg-white/10 border border-accent/30 rounded-lg md:rounded-xl p-2.5 md:p-4 fade-in relative overflow-hidden">
          {/* Mobile profile glow */}
          <div 
            className="absolute inset-0 md:hidden"
            style={{ 
              background: 'radial-gradient(circle at 30% 30%, hsl(var(--accent) / 0.15) 0%, transparent 50%)',
              animation: 'float 4s ease-in-out infinite'
            }}
          />
          
          <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3 relative z-10">
            <div className="w-7 md:w-10 h-7 md:h-10 rounded-full bg-accent/10 flex items-center justify-center text-[10px] md:text-sm font-bold text-accent relative">
              JD
              {/* Mobile VIP ring */}
              <span className="absolute inset-0 md:hidden rounded-full border-2 border-accent/30" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <div className="text-[11px] md:text-sm font-medium text-white truncate">John Davidson</div>
                <div className="text-[8px] md:text-[10px] px-1 md:px-1.5 py-0.5 bg-accent/20 text-accent rounded flex-shrink-0 relative overflow-hidden">
                  VIP
                  <span className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 animate-[shimmer_1.5s_ease-in-out_infinite]" />
                </div>
              </div>
              <div className="text-[8px] md:text-[10px] text-white/60 truncate">2021 Tesla Model 3</div>
            </div>
          </div>
          
          {/* Customer stats */}
          <div className="grid grid-cols-3 gap-1.5 md:gap-2 mb-2 md:mb-3 relative z-10">
            {[
              { value: "8", label: "Visits", isAccent: false },
              { value: "$1,440", label: "Lifetime", isAccent: true },
              { value: "45d", label: "Avg. cycle", isAccent: false }
            ].map((stat, i) => (
              <div key={i} className="text-center p-1.5 md:p-2 bg-white/10 rounded-md md:rounded-lg relative overflow-hidden">
                <div className={`text-[11px] md:text-sm font-bold ${stat.isAccent ? 'text-accent' : 'text-white'}`}>{stat.value}</div>
                <div className="text-[7px] md:text-[9px] text-white/60">{stat.label}</div>
                {/* Mobile stat highlight */}
                {stat.isAccent && (
                  <div 
                    className="absolute inset-0 md:hidden bg-gradient-to-t from-accent/10 to-transparent"
                    style={{ animation: 'pulse 3s ease-in-out infinite' }}
                  />
                )}
              </div>
            ))}
          </div>
          
          {/* Recent activity log */}
          <div className="space-y-1 relative z-10">
            <div className="text-[8px] md:text-[10px] text-white/60 uppercase tracking-wider mb-1 md:mb-2">Activity Log</div>
            {[
              { action: "Call answered", detail: "Booked", time: "Today", icon: Phone },
              { action: "SMS sent", detail: "Reminder", time: "Yday", icon: MessageSquare },
              { action: "Completed", detail: "Full detail", time: "45d", icon: CheckCircle }
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between text-[8px] md:text-[10px] py-0.5 md:py-1 border-b border-white/10 last:border-0 relative">
                <div className="flex items-center gap-1 md:gap-2 min-w-0">
                  <log.icon className="w-2.5 md:w-3 h-2.5 md:h-3 text-accent/70 flex-shrink-0" />
                  <span className="text-white truncate">{log.action}</span>
                  <span className="text-white/60 hidden md:inline">· {log.detail}</span>
                </div>
                <span className="text-white/60 flex-shrink-0">{log.time}</span>
                {/* Mobile log entry flash */}
                {i === 0 && (
                  <div 
                    className="absolute inset-0 md:hidden bg-gradient-to-r from-accent/10 via-accent/5 to-transparent"
                    style={{ animation: 'shimmer 4s ease-in-out infinite' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Other customers in CRM */}
        <div className="grid grid-cols-2 gap-1.5 md:gap-2">
          {[
            { initials: "SM", name: "Sarah M.", vehicle: "BMW X5", visits: 5, value: "$920" },
            { initials: "MR", name: "Mike R.", vehicle: "F-150", visits: 3, value: "$540" }
          ].map((customer, i) => (
            <div 
              key={i} 
              className="bg-white/10 border border-white/20 rounded-md md:rounded-lg p-2 md:p-2.5 fade-in hover:border-accent/30 transition-colors relative overflow-hidden"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              {/* Mobile card shimmer */}
              <div 
                className="absolute inset-0 md:hidden bg-gradient-to-r from-transparent via-white/5 to-transparent"
                style={{ animation: `shimmer ${3 + i * 0.5}s ease-in-out infinite` }}
              />
              
              <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2 relative z-10">
                <div className="w-5 md:w-6 h-5 md:h-6 rounded-full bg-accent/10 flex items-center justify-center text-[7px] md:text-[9px] font-bold text-accent">
                  {customer.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] md:text-[11px] font-medium text-white truncate">{customer.name}</div>
                  <div className="text-[7px] md:text-[9px] text-white/60 truncate">{customer.vehicle}</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-[8px] md:text-[10px] relative z-10">
                <span className="text-white/60">{customer.visits} visits</span>
                <span className="text-accent font-medium">{customer.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Summary stats */}
      <div className="mt-2 md:mt-4 pt-2 md:pt-3 border-t border-white/20 flex items-center justify-between fade-in relative z-10" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="text-center">
            <div className="text-sm md:text-base font-bold text-white">142</div>
            <div className="text-[7px] md:text-[8px] text-white/60">Profiles</div>
          </div>
          <div className="w-px h-4 md:h-6 bg-white/20" />
          <div className="text-center">
            <div className="text-sm md:text-base font-bold text-accent">100%</div>
            <div className="text-[7px] md:text-[8px] text-white/60">Up to date</div>
          </div>
          <div className="w-px h-4 md:h-6 bg-white/20" />
          <div className="text-center">
            <div className="text-sm md:text-base font-bold text-white">0</div>
            <div className="text-[7px] md:text-[8px] text-white/60">Manual</div>
          </div>
        </div>
        <div className="flex items-center gap-1 md:gap-1.5 px-1.5 md:px-2 py-0.5 md:py-1 bg-accent/10 rounded-full relative overflow-hidden">
          <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-accent animate-pulse relative z-10" />
          <span className="text-[8px] md:text-[10px] text-accent font-medium relative z-10">Synced</span>
          <span className="absolute inset-0 md:hidden bg-accent/20 animate-ping rounded-full" style={{ animationDuration: '2s' }} />
        </div>
      </div>
    </div>
  );

  const renderVisual = (visual: string) => {
    switch (visual) {
      case "booking":
        return <BookingVisual />;
      case "retention":
        return <RetentionVisual />;
      case "automation":
        return <AutomationVisual />;
      default:
        return null;
    }
  };

  return (
    <section className="pt-16 pb-16 md:py-24 px-[3px] md:px-8 lg:px-16 bg-[hsl(0_0%_5%)] text-[hsl(0_0%_100%)]">
      <div className="container mx-auto">
        {/* Mobile-only intro */}
        <div className="md:hidden pt-0 mb-10 text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-white/50">What is Carbon?</span>
          <h2 className="text-4xl font-bold tracking-tight text-white leading-[1.1]">
            One system to run your customer operations.
          </h2>
        </div>

        {/* Desktop intro */}
        <div className="hidden md:block pt-0 mb-16 text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-white/50">What is Carbon?</span>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
            One system to run your customer operations.
          </h2>
        </div>
        
        <div className="space-y-14 md:space-y-16 lg:space-y-24">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-12 lg:gap-16 fade-in ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Content */}
              <div className="space-y-1 md:space-y-3 md:flex-1">
                <div className="pt-4 md:pt-0 text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                  {value.metric}
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                  <span className="md:hidden">{value.mobileTitle}</span>
                  <span className="hidden md:inline">{value.title}</span>
                </h3>
                <p className="text-sm md:text-base text-white/70 leading-snug max-w-lg">
                  <span className="md:hidden">{value.mobileDescription}</span>
                  <span className="hidden md:inline">{value.description}</span>
                </p>
              </div>
              
              {/* Visual */}
              <div className="relative h-[340px] md:h-80 lg:h-[420px] md:flex-1 bg-[hsl(0_0%_8%)] border border-white/10 rounded-xl md:rounded-2xl overflow-hidden">
                {renderVisual(value.visual)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
