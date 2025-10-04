import React, { useReducer} from 'react';
import '../index.css';
import './comp.css';


function AReducer(params = {}){
  const [count, setCount] = useReducer(
    (count, step) => {return count+step;}, // the returned value count+step will be set to reducer variable 'count'
    0
  );
  const [checked, toggle] = useReducer(
    (checked) => !checked,  // the returned !checked will be set to reducer variable 'checked'
    false
  );

  const initMessage = {
    "message": "hello"
  }

  // here we define a reducer function dispatch which will call 
  // sendMessage function whose returned result will be set to reducer variable 'state'
  // the initial value is initMessage for this reducer variable 'state'
  const [state, dispatch] = useReducer(sendMessage, initMessage);

  //  define the real reducer function
  function sendMessage(state, action) {
    console.log(`previous message ${state.message}`)
    switch(action.type) { // fixed typo: switch -> switch
      case "command":
        return {
          message: "do homework!"
        };
      case "salut":
        return {
          message: "good morning."
        };
      default:
        return {
          message: "unknown action"
        };
    }
  }

  return(
    <>
    {/* setCount is a reducer function */}
    <button onClick={() => setCount(2)}>Increment Counter</button>
    <div>counter: {count}</div>

    <br/>
    <div>define a toggle reducer function for variable 'checked'</div>
    <div>
      <input type='checkbox' checked={checked} onChange={toggle} id="toggle_checkbox"/>
      <label htmlFor='toggle_checkbox'>{checked? "checked":"unchecked"}</label>
    </div>

    <br/>
    <div>define a reducer function to send message.</div> 
    <p>Message: {state.message}</p>
    <button onClick={() => dispatch({"type":"command"})}>Command</button>
    <button onClick={() => dispatch({"type":"salut"})}>Salut</button>
    </>
  );
}


// Export the main component
export default AReducer;