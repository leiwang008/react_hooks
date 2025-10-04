import React, { useRef} from 'react';
import '../index.css';
import './comp.css';


function ColorPickerRef(params = {}){

  const desc = useRef();
  const color = useRef();

  function handleSubmit(event){
    event.preventDefault();
    console.log(`description: ${desc.current.value}, color: ${color.current.value}`);
  }
  
  return(
    <div className="font-sans max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">

      {/* Color Picker Section */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-left">ColorPicker with useRef</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' ref={desc} placeholder='sounds like ... '/>
          <input type='color' ref={color}/>
          <button
            type='submit'
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-2">Submit</button>
        </form>

      </section>

    </div>

  );
}


// Export the main component
export default ColorPickerRef;