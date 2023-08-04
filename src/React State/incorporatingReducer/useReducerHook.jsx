import { useReducer } from 'react';


function ExampleUseReducer() {   //destructring 
    const [checked, setChecked] = useReducer(((checked) => !checked),false);
  return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={setChecked} />
      <label htmlFor="">{checked ? "Checked" : "Unchecked"}</label>
    </div>
  );
}

export default ExampleUseReducer;
