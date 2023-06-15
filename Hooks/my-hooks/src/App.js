import logo from './logo.svg';
import './App.css';
import HookCounter from './componenets/HookCounter.js';
import HookCounterTwo from './componenets/HookCounterTwo.js';
import HookCounterThree from './componenets/HookCounterThree.js';
import HooksCounterFour from './componenets/HooksCounterFour.js';
import HookCounterFive from './componenets/HookCounterFive.js';

function App() {
  return (
    <>
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HooksCounterFour />
      <HookCounterFive />
    </>
  );
}

export default App;
