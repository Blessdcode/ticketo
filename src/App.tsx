import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./components/shared/header/navigation";
import Footer from "./components/shared/header/footer";
import { Toaster } from "sonner";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
