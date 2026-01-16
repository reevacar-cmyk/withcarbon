import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters")
});

const DesignPartnerForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = formSchema.safeParse({ email });
    if (!validation.success) {
      toast({
        title: "Invalid input",
        description: validation.error.errors[0].message,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase
      .from("design_partners")
      .insert([{ name: "", email: validation.data.email }]);

    setIsSubmitting(false);

    if (error) {
      if (error.code === "23505") {
        toast({
          title: "Already registered",
          description: "This email is already on our list. We'll be in touch soon!",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive"
        });
      }
      return;
    }

    toast({
      title: "You're in!",
      description: "We'll reach out soon with next steps.",
    });
    setEmail("");
  };

  return (
    <section id="partner-form" className="py-16 md:pt-16 md:pb-32 px-[3px] md:px-12 lg:px-24 bg-[hsl(0_0%_5%)]">
      <div className="container mx-auto max-w-2xl">
        {/* Grand header */}
        <div className="text-center space-y-4 md:space-y-6 mb-10 md:mb-14 fade-in">
          <span className="text-xs uppercase tracking-[0.2em] text-[hsl(40_20%_85%)] md:text-accent font-mono">
            Limited Availability
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Shape the future<br />
            <span className="text-[hsl(40_20%_85%)] md:text-accent">with us.</span>
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-lg mx-auto leading-relaxed">
            We're looking for 100 detail businesses to join our design partner program — 
            work directly with our team to build the AI platform you actually need.
          </p>
        </div>

        {/* What you get */}
        <div className="grid md:grid-cols-3 gap-4 mb-10 md:mb-12 fade-in fade-in-delay-1">
          {[
            {
              title: "Direct Access",
              description: "Weekly or bi-weekly calls with our engineering team"
            },
            {
              title: "Shape the Product",
              description: "Your feedback directly influences what we build next"
            },
            {
              title: "Lifetime Benefits",
              description: "Locked-in discounts and priority access forever"
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className="p-4 md:p-5 bg-white/5 border border-white/10 rounded-xl text-center"
            >
              <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
              <p className="text-xs text-white/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Spots remaining indicator */}
        <div className="flex items-center justify-center gap-3 mb-8 fade-in fade-in-delay-1">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-[hsl(40_20%_85%)]/20 md:bg-accent/20 border-2 border-[hsl(0_0%_5%)] flex items-center justify-center">
                <span className="text-[10px] text-[hsl(40_20%_85%)] md:text-accent font-bold">✓</span>
              </div>
            ))}
          </div>
          <span className="text-sm text-white/60">40+ partners already joined</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 fade-in fade-in-delay-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 focus:border-[hsl(40_20%_85%)] md:focus:border-accent"
            required
            maxLength={255}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[hsl(40_20%_85%)] hover:bg-[hsl(40_20%_80%)] text-[hsl(40_15%_15%)] md:bg-accent md:hover:bg-accent/90 md:text-accent-foreground font-semibold h-12 text-base"
          >
            {isSubmitting ? "Submitting..." : "Book a demo"}
          </Button>
          <p className="text-[11px] text-white/40 text-center">
            We'll reach out within 48 hours to schedule your first call.
          </p>
        </form>
      </div>
    </section>
  );
};

export default DesignPartnerForm;
