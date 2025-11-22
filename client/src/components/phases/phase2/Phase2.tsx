import StrategyList from "./StrategyList";
import enemyStrategy from "../../../data/enemyStrategy.json";

const Phase2 = () => {
  const enemyS = enemyStrategy[Math.floor(Math.random() * 3)];
  return (
    <>
      <div className="flex gap-4">
        <p>{enemyS.announcement_message}</p>
      </div>
      <StrategyList />
    </>
  );
};

export default Phase2;
