
import './App.css'
import Counter from './components/Counter';
import Friends from './components/Friends';
import Team from './components/Team';
import Users from './components/Users';

function App() {
  // const [count, setCount] = useState(0)
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("button 2 clicked")
  }

  const addToFive = (number) => {
    alert(number + 5);
  }

  return (
    // fragment
    <>
    <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <h1>React Core Concept</h1>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={() => {alert("button clicked")}}>Click</button>
      <button onClick={() => addToFive(3)}>Click</button>
      
  </>
  )
}

export default App
