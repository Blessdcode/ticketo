import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Ticket, User, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navLinks } from "@/nav-links";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAuthenticated = false;
  const user = { name: "John Doe", email: "john@example.com" };

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <nav className="boxWidth w-full h-16 flex items-center justify-between p-2">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <Ticket className="h-6 w-6 text-primary" />
        <span className="font-bold text-xl">Ticketo</span>
      </Link>

      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive(link.path) ? "text-primary" : "text-muted-foreground"
            }`}>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Auth Section */}
      <div className="hidden md:flex items-center space-x-4">
        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{user.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/dashboard" className="cursor-pointer">
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dashboard/tickets" className="cursor-pointer">
                  My Tickets
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dashboard/bookings" className="cursor-pointer">
                  My Bookings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/dashboard/settings" className="cursor-pointer">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer text-destructive">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Button variant="ghost" asChild>
              <Link to="/auth/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/auth/signup">Sign Up</Link>
            </Button>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild className="md:hidden ">
          <Button variant="ghost" size="lg">
            <Menu className="h-8 w-8" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full p-1">
          <SheetHeader></SheetHeader>

          <div className="mt-8 flex flex-col space-y-4">
            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                }`}>
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t space-y-3">
              {isAuthenticated ? (
                <>
                  <div className="px-4 py-2">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-md hover:bg-accent">
                    Dashboard
                  </Link>
                  <Link
                    to="/dashboard/tickets"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-md hover:bg-accent">
                    My Tickets
                  </Link>
                  <Link
                    to="/dashboard/bookings"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-md hover:bg-accent">
                    My Bookings
                  </Link>
                  <Link
                    to="/dashboard/settings"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-md hover:bg-accent">
                    Settings
                  </Link>
                  <Button
                    variant="destructive"
                    className="w-full"
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="w-full" asChild>
                    <Link
                      to="/auth/login"
                      onClick={() => setMobileMenuOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button className="w-full" asChild>
                    <Link
                      to="/auth/signup"
                      onClick={() => setMobileMenuOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navigation;
