import React, { useState } from "react";
import PInput from "../components/phases/phase1/PInput";

interface GameProps {
  onPhaseComplete: () => void;
}

const Game: React.FC<GameProps> = ({ onPhaseComplete }) => {
  const [pVVis, setPVVis] = useState(false);

  const handlePVV = () => {
    setPVVis(!pVVis);
  };
  return (
    <>
      <div className="bg-gray-800 h-129 p-2">
        {pVVis ? (
          <PInput
            onPhaseComplete={onPhaseComplete}
            handlePVV={setPVVis}
            pVV={pVVis}
          />
        ) : (
          <>
            <div className="mb-10 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">Airforce</h2>
                <p className="font-bold">Fighter count</p>
              </div>
              <div className="">
                <button
                  onClick={handlePVV}
                  className="text-white bg-lime-900 p-1"
                >
                  phase 1 values
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="bg-gray-900 h-40 w-40 justify-center items-center flex">
                <div className="text-center">
                  <p className="font-bold">Jets</p>
                  <p>number</p>
                </div>
              </div>
              <div className="bg-gray-900 h-40 w-40 justify-center items-center flex">
                <div className="text-center">
                  <p className="font-bold">Interceptors</p>
                  <p>number</p>
                </div>
              </div>
              <div className="bg-gray-900 h-40 w-40 justify-center items-center flex">
                <div className="text-center">
                  <p className="font-bold">Light Fighters</p>
                  <p>number</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Game;
