import { useState } from "react";

type SetPVVAction = React.Dispatch<React.SetStateAction<boolean>>;

interface PInputProps {
  onPhaseComplete: () => void;
  handlePVV: SetPVVAction;
  pVV: boolean;
}

const PInput: React.FC<PInputProps> = ({ onPhaseComplete, handlePVV, pVV }) => {
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
        className="text-white bg-black border-white border p-1 mr-2"
      >
        Go to the Battle
      </button>
      <button
        onClick={() => handlePVV(!pVV)}
        className="text-white bg-black border-white border p-1"
      >
        Back
      </button>
    </>
  );
};

export default PInput;
