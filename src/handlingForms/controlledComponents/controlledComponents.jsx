import { useState } from "react";

export default function Ccomponent(){
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = (e) =>{
        e.preventDefault();
        alert(`${title}, ${color}`);
        setTitle("");
        setColor("#000000");
    };
    return(
        <form onSubmit={submit}>
            <input 
                type="text"
                placeholder="color title..." 
                value={title} 
                onChange={(event)=>{
                    setTitle(event.target.value)
                }}
            />
            <input 
                type="color"  
                value={color}
                onChange={(event)=>{
                    setColor(event.target.value)
                }}
            />
            <button>Add</button>
        </form>
    );
}