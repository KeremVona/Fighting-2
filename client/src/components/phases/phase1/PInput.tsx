import { useState } from "react";

interface PInputProps {
  onPhaseComplete: () => void;
}

const PInput: React.FC<PInputProps> = ({ onPhaseComplete }) => {
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
    onPhaseComplete();
  };
  return (
    <>
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
        onClick={handleClick}
        className="text-white bg-black border-white border p-1"
      >
        Go to the Battle
      </button>
    </>
  );
};

export default PInput;
