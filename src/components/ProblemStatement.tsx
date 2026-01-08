const ProblemStatement = () => {
  const problems = [
    "Our customers run multiple businesses at once.",
    "Calls come in while they're on the road.",
    "CRMs don't get updated.",
    "Past customers disappear."
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-6">
          {problems.map((problem, index) => (
            <p 
              key={index}
              className="text-xl md:text-2xl text-muted-foreground fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {problem}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
