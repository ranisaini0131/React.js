import './App.css';
import NavBar from './NavBar.js';
import Home from './Home.js';
import Home1 from './Home1.js';
import Home2 from './Home2.js'


function App() {

  return (
    <div className="App">
      <NavBar />
      <div className='content'>
        {/* <Home />
        <Home1 /> */}
        <Home2 />

      </div>
    </div>
  );
}

export default App;
