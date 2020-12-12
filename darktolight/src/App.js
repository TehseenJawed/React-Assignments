import React, {useState} from 'react'
import './App.css';


function App() {
  let [s, sbtn] = useState(true)
  var btn = 'button'; 
  var dark = 'dark' 
  let [button, setbutton] = useState("button")
  let [back, setback] = useState("dark")
  let [message, setmessage] = useState("Turn to Light")
  function changeColor(){
    btn = s ? setbutton('setButton'): setbutton("button")
    dark= s ?  setback('light') : setback('dark')
    sbtn(!s);
      if(s==true){
        setmessage("Turn to Dark")
      }
      else{
        setmessage("Turn to Light")
      }
    console.log('I am working', btn, dark)
  }
  return (
    <div className="darktoLight">
     <div className={back}>
       <div className="btnAnimator">
       <button onClick={changeColor} className={button} style={{verticalAlign:"middle"}}><span>{message} </span></button>
       

       
       </div>
     </div>
    </div>
  );
}

export default App;
