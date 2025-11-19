import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Slider } from "@/components/ui/slider";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Search,
  // SlidersHorizontal,
  MapPin,
  Calendar as CalendarIcon,
  // X,
} from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

const LOCATIONS = [
  "All Locations",
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
];

const EventsHeroPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [priceRange, setPriceRange] = useState([0, 100000]);
  const [dateFilter, setDateFilter] = useState<Date | undefined>();
  // const [showFreeOnly, setShowFreeOnly] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  // const clearFilters = () => {
  //   setPriceRange([0, 100000]);
  //   setDateFilter(undefined);
  //   setShowFreeOnly(false);
  // };

  // const hasActiveFilters =
  //   priceRange[0] !== 0 ||
  //   priceRange[1] !== 100000 ||
  //   dateFilter !== undefined ||
  //   showFreeOnly;

  return (
    <div className="relative min-h-[500px] bg-[url('https://tix.africa/assets/images/about-e2cb67bcd330b6e3b6d2ed5fd297dc15.png')] bg-cover bg-no-repeat bg-center">
      {/* Gradient Overlay - Multiple layers for smooth blend */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#d31103]/40 to-black/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 boxWidth mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Discover Events
          </h1>
          <p className="text-lg text-gray-200">
            Find events and make memories that last a lifetime
          </p>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search events, artists, or venues..."
              className="pl-12 h-14 text-lg bg-white/95 backdrop-blur-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-[180px] bg-white/95 backdrop-blur-sm">
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {LOCATIONS.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[180px] bg-white/95 backdrop-blur-sm">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  {dateFilter ? format(dateFilter, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dateFilter}
                  onSelect={setDateFilter}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsHeroPage;
