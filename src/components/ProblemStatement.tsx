import { Phone, Database, Users, Clock } from "lucide-react";

const ProblemStatement = () => {
  const problems = [
    {
      icon: Users,
      text: "Our customers run multiple businesses at once.",
      highlight: "multiple businesses"
    },
    {
      icon: Phone,
      text: "Calls come in while they're on the road.",
      highlight: "on the road"
    },
    {
      icon: Database,
      text: "CRMs don't get updated.",
      highlight: "don't get updated"
    },
    {
      icon: Clock,
      text: "Past customers disappear.",
      highlight: "disappear"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 relative">
      {/* Subtle accent line */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      
      <div className="container mx-auto max-w-4xl">
        {/* Section label */}
        <p className="text-accent text-sm tracking-[0.3em] uppercase mb-8 fade-in">
          The Reality
        </p>
        
        {/* Main headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 leading-tight fade-in" style={{ animationDelay: '0.1s' }}>
          Field service operators don't work at desks.
        </h2>
        
        {/* Problem grid */}
        <div className="grid gap-8 md:gap-10">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const parts = problem.text.split(problem.highlight);
            
            return (
              <div 
                key={index}
                className="flex items-start gap-5 group fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Icon container */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/5 border border-accent/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-accent/70" strokeWidth={1.5} />
                </div>
                
                {/* Text with highlight */}
                <p className="text-xl md:text-2xl text-muted-foreground pt-2 leading-relaxed">
                  {parts[0]}
                  <span className="text-foreground font-medium">{problem.highlight}</span>
                  {parts[1]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
