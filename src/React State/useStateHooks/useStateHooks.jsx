import { useEffect, useState } from 'react';


function ExampleUseState() {   //destructring 
    const [emotion, setEmotion] = useState("happy");
    const [secondary, setsecondary] = useState("tired");
    useEffect(()=>{
      console.log(`It's ${emotion} right now`);
    }, [emotion, secondary]);
     useEffect(() => {
      console.log(`It's ${secondary} right now`)
     },[secondary])
  return (
    <div className="App">
      <h1>Current Emotion is {emotion}</h1>
      <button onClick={() => {setEmotion("sad")}}>sad</button>
      <button onClick={() => {setEmotion("excited")}}>excited</button>
      <h2>current secondary emotion is {secondary} .</h2>
      <button onClick={() => {setsecondary("Greatfull")}}>Greatfull</button>
    </div>
  );
}

export default ExampleUseState
