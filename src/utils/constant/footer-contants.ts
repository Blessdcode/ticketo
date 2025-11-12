import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
 
} from "lucide-react";

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  discover: [
    { label: "Browse Events", href: "/events" },
    { label: "Popular Events", href: "/events?popular=true" },
    { label: "This Weekend", href: "/events?weekend=true" },
    { label: "Free Events", href: "/events?free=true" },
    { label: "Virtual Events", href: "/events?virtual=true" },
  ],
  organizers: [
    { label: "Create Event", href: "/organizer/create-event" },
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", href: "/resources" },
    { label: "Help Center", href: "/help" },
    { label: "Event Guidelines", href: "/guidelines" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "FAQs", href: "/faq" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

export const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];
