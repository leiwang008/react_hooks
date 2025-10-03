import logo from './logo.svg';
import './App.css';

function App(properties) {
  console.log("props: ", properties);
  return (
    <div className="App">
      <h1>Hello {properties.name} {properties.task}!</h1>
    </div>
  );
}

export default App;
