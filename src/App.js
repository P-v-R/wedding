
import './App.css';
import Header from './components/Header';
import RoutesTree from './RoutesTree'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
      <Header className="z-20" />
      <RoutesTree />
      </ParallaxProvider>
    </div>
  );
}

export default App;
