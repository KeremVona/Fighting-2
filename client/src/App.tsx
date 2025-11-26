import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PInput from "./components/phases/phase1/PInput";
import Phase2 from "./components/phases/phase2/Phase2";
import Loading from "./components/ui/Loading";
import PhaseSwitcher from "./components/developer_tools/PhaseSwitcher";
import MainMenu from "./pages/MainMenu";
import Game from "./pages/Game";

function App() {
  const [phase, setPhase] = useState(2);

  const handleCompletePhase = () => {
    setPhase((prev) => prev + 1);
  };

  // TO DO
  // FIX changing phase when on phases other than phase 3
  useEffect(() => {
    if (phase == 3) {
      setTimeout(() => {
        setPhase((prev) => prev + 1);
      }, 5000);
    }
  }, [phase]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route
            path="/game"
            element={<Game onPhaseComplete={handleCompletePhase} />}
          />
        </Routes>
      </BrowserRouter>
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
- DONE - show ongoing combat text

4. the game stops and repeat from step 1 until the game is complete
---------------------------------------
## phase 2 advanced

show enemy and friendly airplane count
*/
