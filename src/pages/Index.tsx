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
        <ValueProps />
        <DisjointedTools />
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
