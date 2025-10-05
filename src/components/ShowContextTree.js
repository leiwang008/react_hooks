import React from 'react';
import '../index.css';
import {useTrees} from '../context/TreeContext.js';

function ShowContextTree(params = {}){
  const result = useTrees()
  console.log("ShowContextTree: trees from context", result);

  return (
  <div>
    <div className="text-lg font-semibold mb-4 text-left">
      {result.length} Context Tree {result.length === 1 ? "Item" : "Items"}
    </div>

    <ul className="space-y-2 list-disc list-inside text-gray-800 text-left">
      {result.map((tree) => (
        <li key={tree.id} className="pl-2">
          {tree.name}
        </li>
      ))}
    </ul>
  </div>

  );
  
}


// Export the main component
export default ShowContextTree;