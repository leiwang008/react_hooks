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


      // Color Picker Section 
      <section className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-lg font-semibold mb-2 text-left">ColorPicker with useRef</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' ref={desc} placeholder='sounds like ... '/>
          <input type='color' ref={color}/>
          <button
            type='submit'
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-2">Submit</button>
        </form>

      </section>


  );
}


// Export the main component
export default ColorPickerRef;