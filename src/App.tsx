import { Outlet } from "react-router-dom";
import Navigation from "./components/shared/header/navigation";
import Footer from "./components/shared/header/footer";

const App = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
