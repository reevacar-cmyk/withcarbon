import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import ValueProps from "@/components/ValueProps";
import DisjointedTools from "@/components/DisjointedTools";
import Solution from "@/components/Solution";
import Insights from "@/components/Insights";
import Essentials from "@/components/Essentials";
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
        <DisjointedTools />
        {/* Mobile: ValueProps, then Solution */}
        <div className="md:hidden">
          <ValueProps />
        </div>
        <div className="md:hidden">
          <Solution />
        </div>
        {/* Desktop: ValueProps after DisjointedTools, then Solution */}
        <div className="hidden md:block">
          <ValueProps />
        </div>
        <div className="hidden md:block">
          <Solution />
        </div>
        <Insights />
        <Essentials />
        <SocialProof />
        <DesignPartnerForm />
        <Newsletter />
      </main>
    </div>
  );
};

export default Index;
