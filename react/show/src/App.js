import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = "Show Tracker";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
