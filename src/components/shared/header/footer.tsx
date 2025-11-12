import { Link } from "react-router-dom";
import { Ticket, Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { footerLinks, socialLinks } from "@/utils/constant/footer-contants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription");
  };

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-slate-800">
        <div className="boxWidth mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Never Miss an Event
              </h3>
              <p className="text-slate-300">
                Subscribe to get updates on upcoming events, exclusive offers,
                and more.
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex w-full md:w-auto gap-2 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-400 focus-visible:ring-primary"
                required
              />
              <Button type="submit" size="icon" className="flex-shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="boxWidth mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Ticket className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl text-white">Ticketo</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Your premier destination for discovering and booking tickets to
              amazing events. Making memories, one ticket at a time.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-slate-400">
                  123 Event Street, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+234123456789"
                  className="text-slate-400 hover:text-primary transition-colors">
                  +234 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@ticketo.com"
                  className="text-slate-400 hover:text-primary transition-colors">
                  hello@ticketo.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary flex items-center justify-center transition-colors group"
                    aria-label={social.label}>
                    <Icon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Discover Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Discover
            </h4>
            <ul className="space-y-3">
              {footerLinks.discover.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizers Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              For Organizers
            </h4>
            <ul className="space-y-3">
              {footerLinks.organizers.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Bottom Bar */}
      <div className="boxWidth mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-1">
            <span>© {currentYear} Ticketo</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link
              to="/privacy"
              className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link
              to="/cookies"
              className="hover:text-primary transition-colors">
              Cookies
            </Link>
            <Link
              to="/accessibility"
              className="hover:text-primary transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
