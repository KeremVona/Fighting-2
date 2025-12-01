import StrategyCard from "./StrategyCard";
import strategyData from "../../../data/strategies.json";
import { useState } from "react";
import useKeyboardNavigation from "../../../hooks/useKeyboardNavigation";

interface StrategyListProps {
  handleCompletePhase: () => void;
}

const StrategyList: React.FC<StrategyListProps> = ({ handleCompletePhase }) => {
  const ITEMS_PER_PAGE = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(strategyData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const chosenStrategies = strategyData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  useKeyboardNavigation(goToPrevPage, goToNextPage);

  return (
    <div className=" bg-slate-950 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-white">
          Aerial Combat Tactics
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-4">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border font-bold transition-all duration-200
                ${
                  currentPage === 1
                    ? "border-slate-800 bg-slate-900 text-slate-600 cursor-not-allowed"
                    : "border-sky-500/30 bg-slate-800 text-sky-400 hover:bg-sky-500/10 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/20 active:scale-95"
                }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              PREV
            </button>

            <div className="flex flex-col items-center">
              <span className="text-2xl font-black text-white tracking-widest">
                {currentPage} <span className="text-slate-600 text-lg">/</span>{" "}
                {totalPages}
              </span>
              <div className="h-1 w-full bg-slate-800 mt-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sky-500 transition-all duration-300 ease-out"
                  style={{ width: `${(currentPage / totalPages) * 100}%` }}
                />
              </div>
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border font-bold transition-all duration-200
                ${
                  currentPage === totalPages
                    ? "border-slate-800 bg-slate-900 text-slate-600 cursor-not-allowed"
                    : "border-sky-500/30 bg-slate-800 text-sky-400 hover:bg-sky-500/10 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/20 active:scale-95"
                }`}
            >
              NEXT
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrategyList;
