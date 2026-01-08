import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters")
});

const DesignPartnerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = formSchema.safeParse({ name, email });
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
      .insert([{ name: validation.data.name, email: validation.data.email }]);

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
    setName("");
    setEmail("");
  };

  return (
    <section id="partner-form" className="py-16 md:py-32 px-3 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-xl">
        <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Become a design partner
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Only accepting 100 more teams
          </p>
        </div>

        <div className="space-y-3 md:space-y-4 mb-8 md:mb-12 fade-in fade-in-delay-1">
          <div className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            Early access to features
          </div>
          <div className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            Influence the product direction
          </div>
          <div className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
            Lifetime discounts before full launch
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 fade-in fade-in-delay-2">
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-card border-border text-foreground placeholder:text-muted-foreground h-12"
            required
            maxLength={100}
          />
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-card border-border text-foreground placeholder:text-muted-foreground h-12"
            required
            maxLength={255}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium h-12"
          >
            {isSubmitting ? "Submitting..." : "Become a design partner"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default DesignPartnerForm;
