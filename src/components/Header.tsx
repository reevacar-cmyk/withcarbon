import { Button } from "@/components/ui/button";
const Header = () => {
  const handleBookDemo = () => {
    window.open('https://calendly.com/az356/30min?back=1&month=2026-01', '_blank');
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl md:backdrop-blur-sm border-b border-border">
      <div className="container mx-auto md:px-12 lg:px-24 px-[20px]">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-xl font-semibold tracking-tight text-foreground">
            Carbon
          </a>
          <Button onClick={handleBookDemo} size="sm" className="bg-foreground hover:bg-foreground/90 text-background font-medium">
            Book a demo
          </Button>
        </div>
      </div>
    </header>;
};
export default Header;