import { useState } from "react";
import "./App.css";

// TO DO
// Display phases according to the one currently playing
// Separate the components

function App() {
  const [phase, setPhase] = useState(1);
  const [planningPhaseValues, setPlanningPhaseValues] = useState({
    altitude: undefined,
    speed: undefined,
    pilotSkill: undefined,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPlanningPhaseValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    const { altitude, speed, pilotSkill } = planningPhaseValues;

    if (
      altitude === undefined ||
      speed === undefined ||
      pilotSkill === undefined
    ) {
      return; // TO DO: Display message
    }

    const check = altitude + speed;
    const phasePValues = check + pilotSkill;

    console.log(phasePValues);
  };
  return (
    <>
      <h1 className="text-2xl text-white font-bold p-2">Fighting 2</h1>
      <div className="justify-center items-center flex bg-gray-600 min-h-screen">
        <div className="border-white border-2 p-2 bg-gray-500 border-solid w-250 h-140">
          <p className="">Phase {phase}</p>
          <input
            type="text"
            placeholder="set altitude (e.g. low, med, high)"
            onChange={handleChange}
            value={planningPhaseValues.altitude}
            name="altitude"
            className="border-white border bg-black text-white mr-2 p-1"
          />
          <input
            type="text"
            placeholder="set speed (e.g. low, med, high)"
            onChange={handleChange}
            value={planningPhaseValues.speed}
            name="speed"
            className="border-white border bg-black text-white mr-2 p-1"
          />
          <input
            type="text"
            placeholder="set pilot skill (0-30)"
            onChange={handleChange}
            value={planningPhaseValues.pilotSkill}
            name="pilotSkill"
            className="border-white border bg-black text-white mr-2 p-1"
          />
          <button
            onClick={() => console.log(planningPhaseValues.altitude)}
            className="text-white bg-black border-white border p-1"
          >
            Go to the Battle
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
