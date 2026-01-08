import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import ValueProps from "@/components/ValueProps";
import DisjointedTools from "@/components/DisjointedTools";
import Solution from "@/components/Solution";
import Insights from "@/components/Insights";
import SocialProof from "@/components/SocialProof";
import DesignPartnerForm from "@/components/DesignPartnerForm";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        {/* Mobile: Solution appears after Carbon intro (inside ValueProps), then DisjointedTools */}
        <div className="md:hidden">
          <Solution />
        </div>
        <div className="md:hidden">
          <DisjointedTools />
        </div>
        <ValueProps />
        {/* Desktop: DisjointedTools appears after ValueProps, then Solution */}
        <div className="hidden md:block">
          <DisjointedTools />
        </div>
        <div className="hidden md:block">
          <Solution />
        </div>
        <Insights />
        <SocialProof />
        <DesignPartnerForm />
        <Newsletter />
      </main>
    </div>
  );
};

export default Index;
