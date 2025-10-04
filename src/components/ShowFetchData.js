import React from 'react';
import '../index.css';
import {useFetch} from '../lib/useFetch.js';

function ShowFetchData(params = {}){
  const login = params.login || "mojombo";
  const {loading, data, error} = useFetch(`https://api.github.com/users/${login}`);
  if (loading) return <p>Loading...</p>;
  if (error) return <pre>Error: {JSON.stringify(error)}</pre>;
  if (!data) return <p>No data!</p>;

  console.log("ShowFetchData:", data);

  return (
    <div>
      <div className="flex flex-col gap-2">
         <img src={data.avatar_url} alt="avatar" width="100" height="100"/>
         <div className="text-lg font-semibold mb-2 text-left">User: {data.login}, ID: {data.id}</div>
         <div className="text-lg font-semibold mb-2 text-left">URL: {data.html_url}</div>
         <div className="text-lg font-semibold mb-2 text-left">Type: {data.type}</div>
         <div className="text-lg font-semibold mb-2 text-left">Site Admin: {data.site_admin.toString()}</div>
      </div>
      <div className="text-lg font-semibold mb-2 text-left">Full Data:</div>
      <div>
        <pre style={{ backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '6px', overflowX: 'auto' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
  
}


// Export the main component
export default ShowFetchData;