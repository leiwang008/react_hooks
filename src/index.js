import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function App(){
  const [checked, setChecked] = useState(false);
  return(
    <div>
      <input type="checkbox" value={checked}
          onChange={() => setChecked(!checked)}></input>
      <h1>{checked? "checked":"not checked"}</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Lei" task="learn react hooks"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
