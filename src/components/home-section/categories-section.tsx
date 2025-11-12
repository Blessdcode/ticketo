import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { categories } from "@/utils/constant/categories";

const CategoriesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="boxWidth mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f172b]">
            Explore by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover events tailored to your interests. From music festivals to
            business conferences, find exactly what you're looking for.
          </p>
        </div>

        <div className="relative">
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-4 pb-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Link
                    key={category.id}
                    to={`/events?category=${category.id}`}
                    className="group flex-shrink-0">
                    <Card className="w-[160px] h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-slate-900/50">
                      <CardContent className="p-4 flex flex-col items-center text-center space-y-2">
                        {/* Icon with Gradient Background */}
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-800 to-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        {/* Category Name */}
                        <h3 className="font-semibold text-sm transition-colors">
                          {category.name}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {category.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Tablet & Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.id}
                  to={`/events?category=${category.id}`}
                  className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 hover:border-slate-900/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                      {/* Icon with Gradient Background */}
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-slate-900 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Category Name */}
                      <h3 className="font-semibold text-base transition-colors">
                        {category.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-muted-foreground">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/*
          <div className="md:hidden flex justify-center gap-1 mt-4">
            {[...Array(Math.ceil(categories.length / 3))].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
