import React, { useState } from 'react'
import "../CSS/Textform.css";

export default function Textform(props) {
  const [text, settext] = useState("")
  const handletoupper = () => {
    let newtext = text.toUpperCase()
    settext(newtext)
  }
  const handletolower = () => {
    let newtext = text.toLowerCase()
    settext(newtext)
  }
  const handletoclr = () => {
    let newtext = ""
    settext(newtext)
  }
  // Copy Text
  const handleCopy = () => {
    // console.log("I am Copy");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

  };
  // Remove Extra Space's
  const handleExtraSpaces = () => {
    const newText = text.split(/[ ]+/);
    settext(newText.join(" "));

  };

  const handleOnChange = (event) => {
    settext(event.target.value)
  }
  return (
    <div id='main'>

      <div className="container mt-3" style={{ color: props.mode === "dark" ? "white" :"#042743"}}>
        <h3>{props.heading}</h3>

        {/* <div className="spinner-border text-info" role="status" id='spin1'>
          <span className="visually-hidden"></span>
        </div>

        <div className="spinner-border text-warning" role="status" id='spin2'>
          <span class="visually-hidden"></span>
        </div> */}
        <textarea className="form-control" rows="8" style={{backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode ==="dark" ? "white" : "#042743",}}
         placeholder="" id="myBox" value={text} onChange={handleOnChange}></textarea>
        
        {/* <div className="spinner-border text-denger" role="status" id='spin3'>
          <span className="visually-hidden"></span>
        </div> 

         <div className="spinner-border text-primary" role="status" id='spin4'>
          <span className="visually-hidden"></span>
        </div>  */}

      </div>
      <div className='container my-3'>
        <button type="button" disabled={text.length === 0} onClick={handletoupper} className="btn btn-info mx-1 my-1">Convert to upper case</button>
        <button type="button" disabled={text.length === 0} onClick={handletolower} className="btn btn-secondary mx-1 my-1">Convert to lower case</button>
        <button type="button" disabled={text.length === 0} onClick={handletoclr} className="btn btn-danger mx-1 my-1">Clear Text</button>
        <button className="btn btn-dark mx-1 my-1" disabled={text.length === 0} onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleExtraSpaces}>
          Remove Extra Space's
        </button>

      </div>
      <div className='container my-3' style={{color: props.mode === "dark" ? "white" :"#042743"}}>
        <h2>Your Text Summary</h2>
        <p><b>{text.split(" ").filter((element) => { return element.length !== 0}).length} Words And {text.length} Characters </b></p>
        <p>
          <b>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read </b>{" "}
        </p>
        <h2>Preview</h2>
        <p>
          <b>
            {text.length > 0
              ? text
              : "Nothing to Preview "}
          </b>
        </p>

      </div>
    </div>
  )
}
