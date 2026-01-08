import { Button } from "@/components/ui/button";
const Header = () => {
  const scrollToPartnerForm = () => {
    document.getElementById("partner-form")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto md:px-12 lg:px-24 px-[20px]">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-semibold tracking-tight text-foreground">
            Carbon
          </a>
          <Button onClick={scrollToPartnerForm} size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
            Become a design partner
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;