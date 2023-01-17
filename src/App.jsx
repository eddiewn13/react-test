import { useState } from 'react'
import Bostadratt from './components/Bostadsratt'
import Villa from './components/Villa'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  }

  return(
    <div>
      <button
      onClick={toggler}
      >
        Villa/Bostadsrätt
      </button>
      {toggle ? <Bostadratt /> : <Villa />}
    </div>
)
}

export default App;