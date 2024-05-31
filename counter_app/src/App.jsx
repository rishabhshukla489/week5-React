let state ={
  count :0
}

function onClickHandler(){
  state.count=state.count+1
  console.log(state.count)
}
function App(){
  return (
    <div>
      <button onClick={onClickHandler}>{state.count}</button>
    </div>
  )
}
export default App