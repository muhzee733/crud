import React from "react";
import { useState } from "react";

const State = () => {
    const[text, setText] = useState("Enter your Text Here!");

    const upperCase = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText);
    }
    const handleEvent = (event) =>{
        setText(event.target.value);
    }
    const lowerCase = () => {
        let newtext2 = text.toLocaleLowerCase();
        setText(newtext2)
    }
    const capitalizeFirstLetter = () => {
        let capitalized = text.charAt(0).toLocaleUpperCase() + text.slice(1);
        setText(capitalized);
    }

  return (
    <div className="container my-5">
      <div className="mb-3">
        <label className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          rows="8"
          value={text}
          onChange={handleEvent}
        ></textarea>
        <button className="btn btn-danger mt-3" onClick={()=>{upperCase()}}>upper Case</button>
        <button className="btn btn-danger mt-3 mx-2" onClick={()=>{lowerCase()}}>Lower Case</button>
        <button className="btn btn-danger mt-3 mx-2" onClick={()=>{capitalizeFirstLetter()}}>capitalized</button>
      </div>
    </div>
  );
};

export default State;
