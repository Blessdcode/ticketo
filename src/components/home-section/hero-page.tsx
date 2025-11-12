import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRight, Ticket } from "lucide-react";
// import { Input } from "../ui/input";

const HeroPage = () => {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/hero-page.jpg"
          alt="Events background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative flexCenter flex-col text-center px-4 py-20 min-h-[90vh]">
        <div className="boxWidth max-w-4xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 backdrop-blur-sm border border-secondary/20">
            <Ticket className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">
              Trusted by 100,000+ event lovers
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Bringing you closer to all the{" "}
            <span className="text-primary">events you love</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Find events and make memories that last a lifetime. Your next great
            experience is just a click away.
          </p>

          {/* Search Bar */}
          {/* <div className="max-w-2xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-lg shadow-2xl">
              <div className="flex-1 flex items-center gap-2 px-3">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for events, artists, or venues..."
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button size="lg" className="sm:w-auto w-full">
                Search Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto text-base">
              <Link to="/events">
                <Ticket className="mr-2 h-5 w-5" />
                Browse All Events
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white">
              <Link to="/events?featured=true">
                Trending Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="text-center space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-white">
                10K+
              </div>
              <div className="text-sm text-gray-300">Events Listed</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-white">
                500K+
              </div>
              <div className="text-sm text-gray-300">Tickets Sold</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-white">
                50+
              </div>
              <div className="text-sm text-gray-300">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce ">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
