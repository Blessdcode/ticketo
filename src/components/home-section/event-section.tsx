import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Zap, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { features } from "@/utils/constant/event";

const EventSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="boxWidth mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            <Star className="w-3 h-3 mr-1" />
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for the Perfect Event Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            From discovery to attendance, we make every step of your event
            journey seamless and enjoyable.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-24 md:space-y-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={feature.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}>
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                  {/* Badge */}
                  <Badge variant="outline" className="text-sm">
                    <Icon className="w-4 h-4 mr-1" />
                    {feature.badge}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Button asChild size="lg">
                      <Link to={feature.ctaLink}>
                        {feature.ctaText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    {/* Image */}
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6"></div>
                    </div>

                    {/* Decorative element */}
                    <div
                      className={`absolute -top-4 ${
                        isEven ? "-right-4" : "-left-4"
                      } w-24 h-24 bg-primary/10 rounded-full blur-3xl`}
                    />
                    <div
                      className={`absolute -bottom-4 ${
                        isEven ? "-left-4" : "-right-4"
                      } w-32 h-32 bg-primary/20 rounded-full blur-3xl`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
          <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience Amazing Events?
          </h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Join thousands of event-goers who trust us to deliver unforgettable
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/events">
                Browse All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/auth/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
