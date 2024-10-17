import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert("Button Clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

    <div style={{
      display: 'flex', gap: '8px', justifyContent: 'center'
    }}>

    <button onClick={handleClick}>Click Me</button>
      
      <button onClick={() => {alert('Second is Clicked')}}>Second Button</button>

      <button onClick={() => addToFive(3)}>Third</button>
    </div>
    </>
  )
}

export default App