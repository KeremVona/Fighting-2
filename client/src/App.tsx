import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Game from "./pages/Game";
import Strategy from "./pages/Strategy";
import BattleMap from "./components/phases/phase3/BattleMap";

function App() {
  const [phase, setPhase] = useState(2);

  const handleCompletePhase = () => {
    setPhase((prev) => prev + 1);
  };

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
          <Route
            path="/strategy/:id"
            element={<Strategy handleCompletePhase={handleCompletePhase} />}
          />
          <Route path="/test" element={<BattleMap />} />
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
- a grid is shown with the strategies from the file
- when the card is clicked, the strategy is chosen

3. the game is played for 5 seconds
- show ongoing combat text
---------------------------------------
## phase 2 advanced

show enemy and friendly airplane count
*/
