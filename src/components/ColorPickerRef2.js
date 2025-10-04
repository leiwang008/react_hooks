import React, {  useState} from 'react';
import '../index.css';
import './comp.css';


function ColorPickerRef2(params = {}){

  const initialColor = "#000000";
  const initialDesc = "";
  const [desc, setDesc] = useState(initialDesc);
  const [color, setColor] = useState(initialColor);

  function handleSubmit(event){
    event.preventDefault();
    console.log(`description: ${desc}, color: ${color}`);
    // reset the form
    setDesc(initialDesc);
    setColor(initialColor);

  }
  
  return(
    <div className="font-sans max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">

      {/* Color Picker Section */}
      <section>
        <h2 className="text-lg font-semibold mb-2 text-left">ColorPicker with useState</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' value={desc} placeholder='sounds like ... ' onChange={(e)=>setDesc(e.target.value)}/>
          <input type='color' value={color} onChange={(e) => setColor(e.target.value)}/>
          <button
            type='submit'
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-2">Submit</button>
        </form>

      </section>

    </div>

  );
}


// Export the main component
export default ColorPickerRef2;