// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState, useEffect } from "react";
import Reactprops from "./component/props";
import Reference from "./component/useRef";
import Input from "./component/inputValue";
import TodoList from "./component/todoList";
import Todo from "./component/todoList2";
import TodoMedium from "./component/mdTodo";
import Example from "./component/useEffect";
function App() {
  let data = "boy";
  let x = "abdushekur tech";
  let array = ["user1", "user2", "user3", "user4"];

  const [x1, setx1] = useState(0);
  const [person, setperson]=useState(0);
  const [x2,setx2]=useState(0)

  const btnClick = () => {
    console.log("Button clicked!");
    setx1(prev => prev + 1);
    setperson(person=>person +3);
  };

  function clickTrigger() {
    console.log("clicked");
    setperson(person +1);
    set(x2+1)
    
  }
  useEffect(() => {
    console.log("x1 updated:", x1);
    console.log("person updated:",person)

  }, [x1,person,x2]);

  return (
    <div>
      {/* conditional */}
      {data === "boy" ? <h1>boy</h1> : <h1>Girl</h1>}
      <Reactprops Color="red" Rooms="5" owner="abdushekur" name="burger" description="this is tasty beef burger" price="10"></Reactprops>
      <Reference></Reference>
      <TodoList></TodoList>

      <Input></Input>

      {/* event handling */}
      <button onClick={btnClick}>clicked</button>
      <button onClick={clickTrigger}>button two</button>
      <button onClick={clickTrigger}>button 3</button>
      {/* state display */}
      {x1}
      {/* mapping data */}
      {x }
      {array.map(user => <h2 key={user}>{user}</h2>)}
      <Todo></Todo>
      <TodoMedium></TodoMedium>
      <Example></Example>

    </div>
  );
}
export default App;
