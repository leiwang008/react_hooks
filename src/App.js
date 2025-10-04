import './App.css';
import StarRating from './components/Rating'
import TaskList from './components/TaskListUseState';
import Winner from './components/Winner';
import UserData from './components/UserData';
import TimerData from './components/Timer';
import AReducer from './components/AReducer';
import ColorPickerRef from './components/ColorPickerRef';
import ColorPickerRef2 from './components/ColorPickerRef2';
import ReducerCounter from './components/ReducerCounter'; 


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
      <div className='divider'/>
      <AReducer/>
      <div className='divider'/>
      <ColorPickerRef/>
      <div className='divider'/>
      <ColorPickerRef2/>
      <div className='divider'/>
      <ReducerCounter/>
    </div>
  );
}

export default App;
