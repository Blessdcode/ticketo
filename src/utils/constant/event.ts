import { Ticket, Calendar, Users, Shield } from "lucide-react";

export const features = [
  {
    id: 1,
    badge: "Discover Events",
    title: "Find Your Perfect Event in Seconds",
    description:
      "Browse thousands of events happening near you. From intimate concerts to major festivals, we've got something for everyone. Our smart filters help you discover events that match your interests.",
    highlights: [
      "10,000+ events across 50+ cities",
      "Real-time availability updates",
      "Personalized recommendations",
      "Advanced search & filters",
    ],
    image: "/assets/party.jpg",
    imageAlt: "People enjoying a music festival",
    icon: Calendar,
    ctaText: "Explore Events",
    ctaLink: "/events",
  },
  {
    id: 2,
    badge: "Seamless Booking",
    title: "Book Tickets in Just a Few Clicks",
    description:
      "Our streamlined checkout process makes booking tickets effortless. Secure payment options, instant confirmation, and digital tickets delivered straight to your phone.",
    highlights: [
      "Instant ticket delivery",
      "Secure payment processing",
      "Mobile-friendly tickets",
      "Easy ticket transfers",
    ],
    image: "/assets/mobile.jpg",
    imageAlt: "Mobile phone showing ticket booking",
    icon: Ticket,
    ctaText: "See How It Works",
    ctaLink: "/about",
  },
  {
    id: 3,
    badge: "Community",
    title: "Join a Community of Event Lovers",
    description:
      "Connect with like-minded people who share your passion for events. Read reviews, share experiences, and stay updated on the hottest events in your city.",
    highlights: [
      "500,000+ active members",
      "Verified event reviews",
      "Social sharing features",
      "Exclusive member perks",
    ],
    image: "/assets/friends.jpg",
    imageAlt: "Group of friends at an event",
    icon: Users,
    ctaText: "Join Community",
    ctaLink: "/auth/signup",
  },
  {
    id: 4,
    badge: "Safe & Secure",
    title: "Your Security is Our Priority",
    description:
      "Shop with confidence knowing your personal information and payments are protected by industry-leading security measures. 100% buyer protection guarantee.",
    highlights: [
      "SSL encrypted transactions",
      "Fraud protection guarantee",
      "24/7 customer support",
      "Verified event organizers",
    ],
    image: "/assets/payment.jpg",
    imageAlt: "Secure payment illustration",
    icon: Shield,
    ctaText: "Learn More",
    ctaLink: "/about",
  },
];
