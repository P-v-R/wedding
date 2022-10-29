import "./App.css";
import Header from "./components/Header";
import RoutesTree from "./RoutesTree";
import { ParallaxProvider } from "react-scroll-parallax";
import MobileHeader from "./components/MobileHeader";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Why are you here? go away!");
    console.log(
      "Thanks for looking at our website. I built this over the course of a few months, it was a pain in the ass. - Perry"
    );
  }, []);
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
