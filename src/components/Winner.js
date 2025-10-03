import React, {useState, useEffect} from 'react';
import '../index.css';
import './comp.css'



function Winner(params = {}){
  const [winner, setWinner] = useState("tom");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(
    () => { document.title = `celebrate ${winner}`;}, [winner]
  );

  useEffect(
    () => {
      console.log(`the user ${winner} is ${loggedIn? "logged in": "not logged in."}`);
    }, [loggedIn, winner]
  );

  return(
    <>
    <section>
      <h1 className='winner-heading'>congradulation {winner}!</h1>
      <div className='button-group'>
        <button onClick={()=>setWinner("jerry")}>Change Winner</button>
        <button onClick={()=>setLoggedIn(true)}>LogIn</button>
      </div>
    </section>
    </>
  );
}


// Export the main component
export default Winner;