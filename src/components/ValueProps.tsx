const ValueProps = () => {
  const values = [
    {
      metric: "40%",
      title: "Increase booking rate",
      description: "AI answers calls and texts instantly, qualifies inbound leads, and books jobs 24/7."
    },
    {
      metric: "30%",
      title: "Bring back more customers",
      description: "AI remembers who they are, their car, past jobs, and conversations — and sends personalized follow-ups at the right time."
    },
    {
      metric: "~4hrs",
      title: "Save every week",
      description: "Every call, text, lead, and job auto-logs into your calendar and CRM — whether AI or a human answered."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="space-y-4 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
                {value.metric}
              </div>
              <h3 className="text-xl font-medium text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
