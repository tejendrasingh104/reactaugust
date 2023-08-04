import { useState } from "react";

function useInput(initialvalue) {
    const [value,setValue] = useState(initialvalue);
    return [
        {
          value, 
          onChange: (e) => setValue(e.target.value)
        },
        () => setValue(initialvalue)
    ];
}





export default function CustomHook(){
    const [titleProps, resetTitle] = useInput("");
    const [colorProps, resetColor] = useInput("#000000");

    const submit = (e) =>{
        e.preventDefault();
        alert(`${titleProps.value}, ${colorProps.value}`);
        resetTitle();
        resetColor();
    };
    return(
        <form onSubmit={submit}>
            <input 
                {...titleProps}
                type="text"
                placeholder="color title..." 
                
            />
            <input 
                {...colorProps}
                type="color"  
            />
            <button>Add</button>
        </form>
    );
}