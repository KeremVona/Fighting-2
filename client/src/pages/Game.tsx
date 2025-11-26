import React, { useState } from "react";
import { Link } from "react-router-dom";
import PInput from "../components/phases/phase1/PInput";
import Phase2 from "../components/phases/phase2/Phase2";

interface GameProps {
  onPhaseComplete: () => void;
}

// pVVis - planning value visibility
// sVVis - strategy value visibility

const Game: React.FC<GameProps> = ({ onPhaseComplete }) => {
  const [pVVis, setPVVis] = useState(false);
  const [sVVis, setSVVis] = useState(false);

  const handlePVV = () => {
    setPVVis(!pVVis);
  };

  const handleSVV = () => {
    setSVVis(!sVVis);
  };

  const handleStrategyRedir = () => {};
  return (
    <>
      <div className="bg-gray-800 h-129 p-2">
        {!pVVis && !sVVis && (
          <>
            <div className="mb-10 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">Airforce</h2>
                <p className="font-bold">Fighter count</p>
              </div>
              <div className="">
                <button
                  onClick={handlePVV}
                  className="text-white bg-lime-900 p-1 mr-2"
                >
                  phase 1 values
                </button>
                <button
                  onClick={handleSVV}
                  className="text-white bg-lime-900 p-1"
                >
                  phase 2 values
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <Link
                to="/"
                className="bg-gray-900 h-40 w-40 justify-center items-center flex"
              >
                <div className="text-center">
                  <p className="font-bold">Jets</p>
                  <p>number</p>
                </div>
              </Link>
              <Link
                to="/"
                className="bg-gray-900 h-40 w-40 justify-center items-center flex"
              >
                <div className="text-center">
                  <p className="font-bold">Interceptors</p>
                  <p>number</p>
                </div>
              </Link>
              <Link
                to="/"
                className="bg-gray-900 h-40 w-40 justify-center items-center flex"
              >
                <div className="text-center">
                  <p className="font-bold">Light Fighters</p>
                  <p>number</p>
                </div>
              </Link>
            </div>
          </>
        )}
        {pVVis ? (
          <PInput
            onPhaseComplete={onPhaseComplete}
            handlePVV={setPVVis}
            pVV={pVVis}
          />
        ) : (
          <></>
        )}
        {sVVis ? (
          <Phase2
            handleCompletePhase={onPhaseComplete}
            handleSVV={setSVVis}
            sVV={sVVis}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Game;
