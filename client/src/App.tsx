import { useState } from "react";
import "./App.css";
import PInput from "./components/phases/phase1/PInput";

// TO DO
// Display phases according to the one currently playing 1/3
// Separate the components - DONE
// When hovering the strategy message, display the available counter

function App() {
  const [phase, setPhase] = useState(1);

  const handleCompletePhase = () => {
    setPhase((prev) => prev + 1);
  };

  return (
    <>
      <h1 className="text-2xl text-white font-bold p-2">Fighting 2</h1>
      <div className="justify-center items-center flex bg-gray-600 min-h-screen">
        <div className="border-white border-2 p-2 bg-gray-500 border-solid w-250 h-140">
          <p className="">Phase {phase}</p>
          {phase == 1 && <PInput onPhaseComplete={handleCompletePhase} />}
        </div>
      </div>
    </>
  );
}

export default App;
