import { Outlet } from "react-router-dom";
import Navigation from "./components/shared/header/navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
