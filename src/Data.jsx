import React from "react";

function Data({ handlDisplay, handleClose, handleNext, handlePrev, ...props }) {
  const message = ["this is step1", "this is step 2", "this is step 3"];
  return (
    <div className={props.name ? "steps backcolor" : "steps"}>
      <button onClick={handleClose} className="stepbtn">
        {props.open ? "close" : "open"}
      </button>
      <button onClick={handlDisplay} className="display">
        {props.name ? "Light-Mode" : "Dark-Mode"}
      </button>
      {props.open && (
        <div className="mainstep">
          <div className="number">
            <div className={`${props.step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${props.step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${props.step >= 3 ? "active" : ""}`}>3</div>
          </div>
          <div className="messege">
            <p>
              Step {props.step}
              {message[props.step - 1]}
              {props.name}
            </p>
          </div>
          <div className="button">
            <button
              style={{ backgroundColor: "darkblue", color: "white" }}
              onClick={handlePrev}
            >
              pervious
            </button>
            <button onClick={handleNext}>next</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Data;
