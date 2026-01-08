const Insights = () => {
  const insights = [
    "Customer segments",
    "Services per customer",
    "Upsell opportunities",
    "Job duration trends",
    "Revenue per customer"
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12 fade-in">
          Insights you didn't know you had
        </h2>
        <ul className="space-y-4">
          {insights.map((insight, index) => (
            <li 
              key={index}
              className="text-lg text-muted-foreground flex items-center gap-4 fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {insight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Insights;
