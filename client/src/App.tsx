import { useState } from "react";
import "./App.css";

function App() {
  const [phase, setPhase] = useState(1);
  const [planningPhaseValues, setPlanningPhaseValues] = useState({
    altitude: 0,
    speed: 0,
    pilotSkill: 0,
  });
  return (
    <>
      <h1 className="text-2xl text-white font-bold p-2">Fighting 2</h1>
      <div className="justify-center items-center flex bg-gray-600 min-h-screen">
        <div className="border-white border-2 p-2 bg-gray-500 border-solid w-250 h-140">
          <p className="">Phase {phase}</p>
          <input
            type="text"
            placeholder="set altitude"
            className="border-white border bg-black text-white mr-2 p-1"
          />
          <input
            type="text"
            placeholder="set speed"
            className="border-white border bg-black text-white mr-2 p-1"
          />
          <input
            type="text"
            placeholder="set pilot skill"
            className="border-white border bg-black text-white mr-2 p-1"
          />
          <button className="text-white bg-black border-white border p-1">
            Go to the Battle
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
