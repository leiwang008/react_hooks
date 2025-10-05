import './App.css';
import StarRating from './components/Rating'
import TaskList from './components/TaskListUseState';
import Winner from './components/Winner';
import UserData from './components/UserData';
import TimerData from './components/Timer';
import ComponentsByReducer from './components/ComponentsByReducer';
import ColorPickerRef from './components/ColorPickerRef';
import ColorPickerRef2 from './components/ColorPickerRef2';
import ColorPickerCustomHook from './components/ColorPickerCustomHook';
import ShowContextTree from './components/ShowContextTree';
import ShowFetchData from './components/ShowFetchData';
import SettingManager from './components/SettingManager';

function App(properties) {
  console.log("props: ", properties);
  return (
    <div className="App">

      {/* Flex container for all sections */}
      <div className="font-sans bg-gray-50 py-10">
        {/* Shared container class */}

        <div className="font-sans max-w-6xl mx-auto p-8 bg-gray-50 min-h-fit">
          <h1 className="text-2xl font-bold mb-8 text-gray-800">
            Components implemented by <code className="bg-gray-200 px-1 rounded">useState</code>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <section className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">⭐ Star Rating</h2>
              <StarRating total={10} />
            </section>

            <section className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">📝 Task List</h2>
              <TaskList />
            </section>

            <section className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">🏆 Winner Picker</h2>
              <Winner />
            </section>
          </div>
        </div>

        <div className="font-sans max-w-6xl mx-auto p-8 bg-gray-50 min-h-fit">
          <h1 className="text-2xl font-bold mb-8 text-gray-800">
            Components implemented by <code className="bg-gray-200 px-1 rounded">useEffect</code>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <section className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <TimerData />
            </section>

            <section className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <UserData/>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <ShowFetchData login="leiwang008" />
            </section>
          </div>
          
        </div>


        <ComponentsByReducer/>


        <div className="font-sans max-w-6xl mx-auto p-8 bg-gray-50 min-h-fit">
          <h1 className="text-2xl font-bold mb-8 text-gray-800">
            ColorPicker implemented by <code className="bg-gray-200 px-1 rounded">different ways</code>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ColorPickerRef/>
            <ColorPickerRef2/>
            <ColorPickerCustomHook/>
          </div>
        </div>

        <div className="font-sans max-w-6xl mx-auto p-8 bg-gray-50 min-h-fit">
          <h1 className="text-2xl font-bold mb-8 text-gray-800">
            Component using <code className="bg-gray-200 px-1 rounded">createContext</code>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <section className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <ShowContextTree/>
            </section>
            <section className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-2">
              <SettingManager/>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
