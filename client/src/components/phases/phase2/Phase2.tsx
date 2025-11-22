import StrategyList from "./StrategyList";
import enemyStrategy from "../../../data/enemyStrategy.json";

interface Phase2Props {
  handleCompletePhase: () => void;
}

const Phase2: React.FC<Phase2Props> = ({ handleCompletePhase }) => {
  const enemyS = enemyStrategy[Math.floor(Math.random() * 3)];
  return (
    <>
      <div className="flex gap-4">
        <p>{enemyS.announcement_message}</p>
      </div>
      <StrategyList handleCompletePhase={handleCompletePhase} />
    </>
  );
};

export default Phase2;
