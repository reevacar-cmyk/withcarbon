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
        {/* Mobile: DisjointedTools appears after Carbon intro (inside ValueProps) */}
        <div className="md:hidden">
          <DisjointedTools />
        </div>
        <ValueProps />
        {/* Desktop: DisjointedTools appears after ValueProps */}
        <div className="hidden md:block">
          <DisjointedTools />
        </div>
        <Solution />
        <Insights />
        <SocialProof />
        <DesignPartnerForm />
        <Newsletter />
      </main>
    </div>
  );
};

export default Index;
