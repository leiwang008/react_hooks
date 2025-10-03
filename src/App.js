import './App.css';
import StarRating from './components/Rating'
import TaskList from './components/Task';
import Winner from './components/Winner';

function App(properties) {
  console.log("props: ", properties);
  return (
    <div className="App">
      <StarRating total={8}/>
      <TaskList></TaskList>
      <Winner></Winner>
    </div>
  );
}

export default App;
