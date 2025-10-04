import React, {useState} from 'react';
import '../index.css';
import {FaStar} from 'react-icons/fa'

const createArray = (len) => [...Array(len)];

function Star(params = {}){
  const selected = params.selected
  return (<FaStar color={selected? "red":"gray"} onClick={params.onSelect}/>);
}

function StarRating(params = {}){
  const total = params.total || 5;
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex space-x-1"> {/* add flex and spacing here */}
        {createArray(total).map((n, i) => (
          <Star key={i} selected={count > i} onSelect={() => setCount(i + 1)} />
        ))}
      </div>
      <div className="text-lg font-semibold mb-2 text-left">{count} out of {total} stars have been selected.</div>
    </div>
  );
  
}


// Export the main component
export default StarRating;