import './App.css';
import StarRating from './components/Rating'
import TaskList from './components/Answer';

function App(properties) {
  console.log("props: ", properties);
  return (
    <div className="App">
      <StarRating total={8}/>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
