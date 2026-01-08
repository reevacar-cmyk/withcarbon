import AbstractGraphic from "./AbstractGraphic";

const Solution = () => {
  const features = [
    {
      title: "All-in-one system that does the work",
      description: "Manages customers, jobs, conversations, and follow-ups with full historical context."
    },
    {
      title: "Intentional automations",
      description: "Clear visibility into what's running, why it's running, and when AI escalates urgent issues."
    },
    {
      title: "Learns and improves over time",
      description: "No static workflows. Carbon tests message timing, wording, and follow-ups automatically."
    }
  ];

  return (
    <section id="solution" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="mb-16 fade-in">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground mb-4">
            Carbon
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl">
            Centralized, AI-native customer and job operations platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="space-y-3 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="fade-in fade-in-delay-3">
            <AbstractGraphic variant="solution" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
