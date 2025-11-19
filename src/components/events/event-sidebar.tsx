import { useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { Slider } from "@radix-ui/react-slider";
import { categories } from "@/utils/constant/categories";



const EventSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [dateFilter, setDateFilter] = useState<Date | undefined>();
  const [showFreeOnly, setShowFreeOnly] = useState(false);

  const clearFilters = () => {
    setSelectedCategory("All Events");
    setSelectedLocation("All Locations");
    setPriceRange([0, 100000]);
    setDateFilter(undefined);
    setShowFreeOnly(false);
  };

  const hasActiveFilters =
    selectedCategory !== "All Events" ||
    selectedLocation !== "All Locations" ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 100000 ||
    dateFilter !== undefined ||
    showFreeOnly;
  return (
    <aside className="hidden lg:block w-64 flex-shrink-0 space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                selectedCategory === category.name
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <h3 className="font-semibold">Price Range</h3>
        <p className="text-sm text-muted-foreground">
          ₦{priceRange[0].toLocaleString()} - ₦{priceRange[1].toLocaleString()}
        </p>
        <Slider
          min={0}
          max={100000}
          step={1000}
          value={priceRange}
          onValueChange={setPriceRange}
        />
      </div>

      {/* Free Events */}
      <div className="flex items-center justify-between p-3 border rounded-lg">
        <span className="text-sm font-medium">Free Events Only</span>
        <Button
          variant={showFreeOnly ? "default" : "outline"}
          size="sm"
          onClick={() => setShowFreeOnly(!showFreeOnly)}>
          {showFreeOnly ? "On" : "Off"}
        </Button>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button variant="ghost" className="w-full" onClick={clearFilters}>
          <X className="h-4 w-4 mr-2" />
          Clear All Filters
        </Button>
      )}
    </aside>
  );
};

export default EventSidebar;
