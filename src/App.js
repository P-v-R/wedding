import "./App.css";
import Header from "./components/Header";
import RoutesTree from "./RoutesTree";
import { ParallaxProvider } from "react-scroll-parallax";
import MobileHeader from "./components/MobileHeader";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Header className="hidden md:block" />
        <MobileHeader className="md:hidden sticky z-40" />
        <RoutesTree />
      </ParallaxProvider>
    </div>
  );
}

export default App;
