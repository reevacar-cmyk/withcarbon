const SocialProof = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-card">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-8 fade-in">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            Built by a small team of engineers and former detailers{" "}
            <span className="inline-block">🧼</span>
          </p>
          <p className="text-lg text-muted-foreground">
            Cornell, MIT, Boston College, Northeastern
          </p>
          <p className="text-lg text-muted-foreground">
            Currently working with 40 detailers and shops across Massachusetts and New York.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
