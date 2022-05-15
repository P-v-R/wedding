
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import RoutesTree from './RoutesTree'

function App() {
  return (
    <div className="App">
      <Header class="sticky z-20" />
      <RoutesTree />
    </div>
  );
}

export default App;
