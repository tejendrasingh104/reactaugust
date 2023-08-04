import { useState, useEffect } from 'react';


function ExampleUseEffect() {   
    const [emotion, setEmotion] = useState("happy");
    
 useEffect(() =>{
    console.log(`It's ${emotion} right now`);
 });
  return (
    <div className="App">
      <h1>Current Emotion is {emotion}</h1>
      <button onClick={() => {setEmotion("sad")}}>sad</button>
      <button onClick={() => {setEmotion("excited")}}>excited</button>
      <button onClick={() => {setEmotion("angry")}}>angry</button>
    </div>
  );
}

export default ExampleUseEffect;
