import  { useReducer } from 'react'
type Action={
  type:"INCREMENT"|"DECREMENT"|"RESET"
}
export function counterReducer(state:number,action:Action) {
    if(action.type==="INCREMENT"){
        state++;
    }
    else if(action.type==="DECREMENT"){
       if(state>0){
            state--;
       }
    }
    else{
        state=0;
    }
    return state;
    
}

function App() {
    const[counterState,dispatch]=useReducer(counterReducer,0);
    function handleClick(value:Action['type']){
        dispatch({
            type:value
        })
    }
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={()=>handleClick("INCREMENT")}>Increment</button>
        <button onClick={()=>handleClick('DECREMENT')}>Decrement</button>
        <button onClick={()=>handleClick('RESET')}>Reset</button>
      </p>
      <p id="counter">{counterState}</p>
    </div>
  );
}

export default App;
