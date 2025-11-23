import React from "react";

type SetPhaseAction = React.Dispatch<React.SetStateAction<number>>;

interface PhaseSwitcherProps {
  phase: number;
  setPhase: SetPhaseAction;
}

const PhaseSwitcher: React.FC<PhaseSwitcherProps> = ({ phase, setPhase }) => {
  return (
    <div className="flex gap-4">
      <p>Phase {phase}</p>
      <button
        onClick={() => setPhase((prev) => prev - 1)}
        className="bg-gray-200"
      >
        Prev
      </button>
      <button
        onClick={() => setPhase((prev) => prev + 1)}
        className="bg-gray-200"
      >
        Next
      </button>
    </div>
  );
};

export default PhaseSwitcher;
