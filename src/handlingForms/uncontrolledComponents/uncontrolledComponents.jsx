import { useRef } from "react";

export default function Ucomponent(){
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = (e) =>{
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        alert(`${title}, ${color}`);
        txtTitle.current.value = "";
        hexColor.current.value = "";
    };
    return(
        <form onSubmit={submit}>
            <input type="text" placeholder="color title..." ref={txtTitle} />
            <input type="color"  ref={hexColor}/>
            <button>Add</button>
        </form>
    );
}