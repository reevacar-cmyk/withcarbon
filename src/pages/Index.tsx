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
        {/* Mobile: Vision-first storytelling flow */}
        <div className="md:hidden">
          {/* Metrics come right after hero vision */}
          <ValueProps />
          {/* Then problem and status quo */}
          <ProblemStatement />
          <DisjointedTools />
          {/* How it works / solution */}
          <Solution />
          {/* The data */}
          <Insights />
          {/* Essentials */}
          <Essentials />
        </div>
        {/* Desktop: Original order */}
        <div className="hidden md:block">
          <ProblemStatement />
          <DisjointedTools />
          <ValueProps />
          <Solution />
          <Insights />
          <Essentials />
        </div>
        <SocialProof />
        <DesignPartnerForm />
        <Newsletter />
      </main>
    </div>
  );
};

export default Index;
