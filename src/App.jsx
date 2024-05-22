import { useState } from "react";
import Data from "./Data";
import "./App.css";

function App() {
  const [step, setstep] = useState(0);
  const [name, setname] = useState(false);
  const [open, setopen] = useState(false);
  const handlePrev = () => {
    if (step > 0) setstep(step - 1);
    // setname("jhon");
  };
  const handleNext = () => {
    if (step < 3) setstep(step + 1);
    // setname("Asif khan");
  };
  const handlDisplay = () => {
    setname(!name);
  };
  const handleClose = () => {
    setopen(!open);
  };
  return (
    <>
      <Data
        handleClose={handleClose}
        handlDisplay={handlDisplay}
        handleNext={handleNext}
        handlePrev={handlePrev}
        name={name}
        step={step}
        open={open}
      ></Data>
    </>
  );
}

export default App;
