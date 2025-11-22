import { useState } from "react";
import "./App.css";
import PInput from "./components/phases/phase1/PInput";
import Phase2 from "./components/phases/phase2/Phase2";
import Loading from "./components/ui/Loading";

// TO DO
// Display phases according to the one currently playing 1/3

function App() {
  const [phase, setPhase] = useState(2);
  const [playPhase, setPlayPhase] = useState(1);

  const handleCompletePhase = () => {
    setPhase((prev) => prev + 1);
  };

  return (
    <>
      <h1 className="text-2xl text-white font-bold p-2">Fighting 2</h1>
      <div className="justify-center items-center flex bg-gray-600 min-h-screen">
        <div className="border-white border-2 p-2 bg-gray-500 border-solid w-250 h-140">
          <div className="flex gap-4">
            <p className="">Phase {phase}</p>
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

          {phase == 1 && <PInput onPhaseComplete={handleCompletePhase} />}
          {phase == 2 && <Phase2 />}
          {phase > 2 && playPhase == 1 ? <Loading /> : ""}
        </div>
      </div>
    </>
  );
}

export default App;

/*
## phase 1

DONE - phase 1 the values are set

DONE - go to the next phase (phase 2)
---------------------------------------
## phase 2

1. enemy strategy is revealed
- get a strategy from strategies file
- display on screen

2. ask the user to choose a strategy
- DONE - a grid is shown with the strategies from the file
- DONE - when the card is clicked, the strategy is chosen

3. the game is played for 5 seconds
- show spinner

4. the game stops and repeat from step 1 until the game is complete
---------------------------------------
## phase 2 advanced

show enemy and friendly airplane count
*/
