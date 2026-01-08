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
        {/* Mobile: Solution first, then ValueProps, then DisjointedTools */}
        <div className="md:hidden">
          <Solution />
        </div>
        <div className="md:hidden">
          <ValueProps />
        </div>
        <div className="md:hidden">
          <DisjointedTools />
        </div>
        {/* Desktop: ValueProps in normal position */}
        <div className="hidden md:block">
          <ValueProps />
        </div>
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
