import React, { useState } from 'react'
import Navbar from "./Components/Navbar.js"
import Textfrom from "./Components/Textform.js"

 function App() {
  const [mode,setMode]=useState("light")
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <div>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <Textfrom heading="TextUtils - Word Counter Character Remove Extra Spaces " mode={mode}/></div>
    </div>
  );
}
export default App;