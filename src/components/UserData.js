import React, {useState, useEffect} from 'react';
import '../index.css';
import './comp.css'



function UserData(params = {}){
  const [data, setData] = useState([]);
  
  useEffect(
    () => {
      fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(response => setData(response))
    }, []
  );

  if (data) {
    return (
      <>
        <button onClick={() => setData([])}>Clear Users</button>
        <ul className='user-list'>
          {
            data.map(user => (
              <li key={user.id}>{user.login}</li>
            ))
          }
        </ul>
      </>
    )
  }

  return <p>No user!</p>
     
}


// Export the main component
export default UserData;