import { useState } from "react";



function App(){
  const [todos,setTodos]=useState([{
    title: "goto gym",
    description: "at 7"
    ,completed: false
  },{
    title: "complete gym",
    description: "at 7"
    ,completed: true
  },{
    title: "complete gym",
    description: "at 7"
    ,completed: true
  }]);

  function addTodo(){
    console.log("d");
    setTodos([...todos,{
      title: "new todo",
      description:"sds",
      completed:true
    }]);
  }
  
  
  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {/* <Todo title={todos[0].title} description={todos[0].description} completed={todos[0].completed}></Todo> */}
      {todos.map((todo)=>{
        return  <Todo title={todo.title} description={todo.description} completed={todo.completed}></Todo>
      })}
    </div>
  )
}
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <h2>{props.completed}</h2>
  </div>
}
// function CustomButton(props){
//   function onClickHandler(){
//     props.setCount(props.count+1)
//   };
//   return <button onClick={onClickHandler}>
//     {props.count}
//   </button>
// }
export default App