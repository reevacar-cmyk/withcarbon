const DisjointedTools = () => {
  const tools = [
    {
      name: "CRM",
      price: "$200/month",
      time: "4 hours/week",
      issues: ["Manual data entry", "Just a calendar and contacts"]
    },
    {
      name: "AI Voice Tools",
      price: "$650/month",
      time: null,
      issues: ["Only answers calls", "No memory", "No job context", "Built by agencies using basic prompts"]
    },
    {
      name: "Automation Platforms",
      price: "$150–$1200/month",
      time: null,
      issues: ["Over-complex", "Static workflows", "Sold back to you by agencies for $700/month"]
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-card">
      <div className="container mx-auto">
        <div className="border-t border-border pt-16">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-12 fade-in">
            What most detailers are stuck using today
          </h2>
          
          <div className="space-y-12">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="grid md:grid-cols-[200px_1fr] gap-6 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <h3 className="text-xl font-medium text-foreground">{tool.name}</h3>
                  <div className="text-muted-foreground mt-1">{tool.price}</div>
                  {tool.time && (
                    <div className="text-muted-foreground">{tool.time}</div>
                  )}
                </div>
                <ul className="space-y-2">
                  {tool.issues.map((issue, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-3">
                      <span className="text-muted-foreground/50 mt-1.5">—</span>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisjointedTools;
