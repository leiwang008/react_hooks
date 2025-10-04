import React, {useState, useEffect} from 'react';
import '../index.css';
import './comp.css'

function UserData(params = {}){
  const [data, setData] = useState([]);
  const loadData = () => {
      fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(response => setData(response))
    }
  
  useEffect(
    loadData, []
  );

  if (data) {
    return (
      <>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed" 
          onClick={() => setData([])}
          disabled={data.length === 0}
        >
          Clear Users
        </button>

        <button 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed" 
              onClick={loadData}
              disabled={data.length>0}
        >Load Users</button>
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