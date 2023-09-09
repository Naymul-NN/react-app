
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';
function App() {

  function handleClick(){
    alert('button clicked')

  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  

  return (
    <>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
      <Counter></Counter>
      <h2>react core concept part 2</h2>
      <button onClick={handleClick}>Click me</button>
       <button onClick={() => addToFive(7)}>add</button> 
      
    </>
  )
}

export default App
