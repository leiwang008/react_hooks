import React from 'react';
import '../index.css';
import {useTrees} from '../context/TreeContext.js';

function ShowContextTree(params = {}){
  const result = useTrees()
  console.log("ShowContextTree: trees from context", result);

  return (
    <div>
      <div className="text-lg font-semibold mb-2 text-left">{result.length} Context Tree Data.</div>
      <div > {/* add flex and spacing here */}
        {result.map((tree) => (<li key={tree.id}>{tree.name} </li>))}
      </div>
    </div>
  );
  
}


// Export the main component
export default ShowContextTree;