import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const emailSchema = z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters");

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = emailSchema.safeParse(email);
    if (!validation.success) {
      toast({
        title: "Invalid email",
        description: validation.error.errors[0].message,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email: validation.data }]);

    setIsSubmitting(false);

    if (error) {
      if (error.code === "23505") {
        toast({
          title: "Already subscribed",
          description: "You're already on our list!",
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
      title: "Subscribed!",
      description: "We'll keep you in the loop.",
    });
    setEmail("");
  };

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="container mx-auto max-w-xl">
        <div className="text-center space-y-4 mb-8 fade-in">
          <p className="text-lg text-muted-foreground">
            Not ready yet?
          </p>
          <p className="text-muted-foreground">
            Follow along as we share the wins, failures, and feature launches.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-3 fade-in fade-in-delay-1">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-card border-border text-foreground placeholder:text-muted-foreground h-12 flex-1"
            required
            maxLength={255}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            variant="secondary"
            className="h-12 px-6 font-medium"
          >
            {isSubmitting ? "..." : "Stay in the loop"}
          </Button>
        </form>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Carbon
          </span>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
