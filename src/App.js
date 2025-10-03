import './App.css';
import StarRating from './components/Rating'
import TaskList from './components/Task';
import Winner from './components/Winner';
import UserData from './components/UserData';
import TimerData from './components/Timer';

function App(properties) {
  console.log("props: ", properties);
  return (
    <div className="App">
      <StarRating total={8}/>
      <div className='divider'/>
      <TaskList></TaskList>
      <div className='divider'/>
      <Winner></Winner>
      <div className='divider'/>
      <UserData></UserData>
      <div className='divider'/>
      <TimerData/>
    </div>
  );
}

export default App;
