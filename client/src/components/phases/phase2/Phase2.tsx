import StrategyList from "./StrategyList";
import enemyStrategy from "../../../data/enemyStrategy.json";

type SetSVVAction = React.Dispatch<React.SetStateAction<boolean>>;

interface Phase2Props {
  handleCompletePhase: () => void;
  handleSVV: SetSVVAction;
  sVV: boolean;
}

const Phase2: React.FC<Phase2Props> = ({
  handleCompletePhase,
  handleSVV,
  sVV,
}) => {
  const enemyS = enemyStrategy[Math.floor(Math.random() * 3)];
  return (
    <>
      <div className="flex gap-4">
        <button
          onClick={() => handleSVV(!sVV)}
          className="text-white bg-black border-white border p-1"
        >
          Back
        </button>
      </div>
      <StrategyList handleCompletePhase={handleCompletePhase} />
    </>
  );
};

export default Phase2;
