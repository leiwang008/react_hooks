import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {FaStar} from 'react-icons/fa'

const createArray = (len) => [...Array(len)];

function Star(params = {}){
  const selected = params.selected
  return (<FaStar color={selected? "red":"gray"} onClick={params.onSelect}/>);
}

function StarRating(params = {}){
  const total = params.total || 5;
  const [count, setCount] = useState(0);

  return(
    <>
    {createArray(total).map(
      (n, i)=>(
      <Star key={i} selected={count>i} onSelect={()=>setCount(i+1)}/>
      )
    )}
    <div>{count} out of {total} stars have been selected.</div>
    </>
  );
}

function App(){
  return(
    <StarRating total={8}/>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
