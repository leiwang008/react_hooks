import React, {  useState} from 'react';
import '../index.css';
import './comp.css';


// custom hook to manage <input> state
export function useInput(initialValue){
  const [value, setValue] = useState(initialValue);

  return [
    // an object with 2 elements: value, onChange handler: match <input> props
    {
      value: value, 
      onChange: (e) => setValue(e.target.value)
    },  
    // a function to reset the input value to initialValue
    () => setValue(initialValue)  
  ];
}

function ColorPickerCustomHook(params = {}){

  const initialColor = "#000000";
  const initialDesc = "";
  // use the custom hook useInput to manage the state of desc and color inputs
  const [descProps, resetDesc] = useInput(initialDesc);
  const [colorProps, resetColor] = useInput(initialColor);  


  function handleSubmit(event){
    event.preventDefault();
    console.log(`description: ${descProps.value}, color: ${colorProps.value}`);
    // reset the form
    resetDesc();
    resetColor(); 
  }
  
  return(

      <section className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-lg font-semibold mb-2 text-left">ColorPicker with custom hook useInput</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' {...descProps} placeholder='sounds like ... ' />
          <input type='color' {...colorProps} />
          <button
            type='submit'
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-2">Submit</button>
        </form>

      </section>


  );
}

// Export the main component
export default ColorPickerCustomHook;