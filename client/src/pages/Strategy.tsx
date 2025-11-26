import React from "react";
import StrategyList from "../components/phases/phase2/StrategyList";
import enemyStrategy from "../data/enemyStrategy.json";

interface StrategyProps {
  handleCompletePhase: () => void;
}

const Strategy: React.FC<StrategyProps> = ({ handleCompletePhase }) => {
  return (
    <>
      <div className="flex gap-4"></div>
      <StrategyList handleCompletePhase={handleCompletePhase} />
    </>
  );
};

export default Strategy;
