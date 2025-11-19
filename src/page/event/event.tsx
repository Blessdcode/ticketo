import EventsCards from "@/components/events/event-card";
// import EventSidebar from "@/components/events/event-sidebar";
import EventsHeroPage from "@/components/events/heropage";
import { Button } from "@/components/ui/button";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <EventsHeroPage />
      <div className="boxWidth mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* <EventSidebar /> */}
          <div className="flex-1">
            <EventsCards />
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline">
                Load More Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
