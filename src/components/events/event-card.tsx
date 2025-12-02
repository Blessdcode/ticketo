import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Calendar as CalendarIcon,
  Heart,
  DollarSign,
} from "lucide-react";
// import { format } from "date-fns";
import { MOCK_EVENTS } from "@/utils/constant/event";


const EventsCards = () => {
    const [wishlist, setWishlist] = useState<string[]>([]);

    const toggleWishlist = (eventId: string) => {
      setWishlist((prev) =>
        prev.includes(eventId)
          ? prev.filter((id) => id !== eventId)
          : [...prev, eventId]
      );
    };


  return (
    <div>
      <p className="text-muted-foreground mb-6">
        Showing {MOCK_EVENTS.length} events
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_EVENTS.map((event) => (
          <Link key={event.id} to={`/events/${event.id}`} className="group">
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[16/9] bg-muted">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(event.id);
                  }}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors">
                  <Heart
                    className={`h-5 w-5 ${
                      wishlist.includes(event.id)
                        ? "fill-red-500 text-red-500"
                        : "text-foreground"
                    }`}
                  />
                </button>
                {/* Free Badge */}
                {event.isFree && (
                  <Badge className="absolute top-3 left-3 bg-green-500">
                    Free
                  </Badge>
                )}
              </div>

              {/* Event Details */}
              <div className="p-4 space-y-3">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {event.category}
                  </Badge>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    <span>
                   {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-semibold text-foreground">
                      {event.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventsCards;
