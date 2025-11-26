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

  const handlePVV = () => {
    setPVVis(!pVVis);
  };

  const handleStrategyRedir = () => {};
  return (
    <>
      <h1 className="text-2xl text-white font-bold p-2">Fighting 2</h1>
      <div className="justify-center items-center flex bg-gray-600 min-h-screen">
        <div className="border-white border-2 p-2 bg-gray-500 border-solid w-250 h-140">
          <div className="bg-gray-800 h-129 p-2">
            {!pVVis && (
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
