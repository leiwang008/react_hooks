import React, {useContext} from 'react';
import '../index.css';
import {TreesContext} from '../context/TreeContext.js';

function ShowContextTree(params = {}){
  const result = useContext(TreesContext);
  console.log("ShowContextTree: trees from context", result);

  return (
    <div>
      <div > {/* add flex and spacing here */}
        {result.map((tree) => (<li key={tree.id}>{tree.name} </li>))}
      </div>
      <div className="text-lg font-semibold mb-2 text-left">{result.length} Context Tree Data.</div>
    </div>
  );
  
}


// Export the main component
export default ShowContextTree;