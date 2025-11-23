import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

type SetPhaseAction = React.Dispatch<React.SetStateAction<number>>;

interface StrategyCardProps {
  title: string;
  description: string;
  beats: string;
  isBeatenBy: string;
  onPhaseComplete: SetPhaseAction;
}

const API_URL = "http://localhost:5000/api/strategies";

const StrategyCard: React.FC<StrategyCardProps> = ({
  title,
  description,
  beats,
  isBeatenBy,
  onPhaseComplete,
}) => {
  const [chosenStrategy, setChosenStrategy] = useState("");
  const [chosenS, setChosenS] = useState({
    title: title,
    beats: beats,
    isBeatenBy: isBeatenBy,
  });
  // e: React.FormEvent<HTMLFormElement>
  const handleSend = async () => {
    // e.preventDefault();

    if (chosenStrategy == "" || chosenStrategy == null) {
      alert("No strategy chosen");
      return;
    }

    try {
      const response = await axios.post(API_URL, chosenS);
      console.log("response strategy list - ", response.data.strategy);
      onPhaseComplete((prev) => prev + 1);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching strategies", error.message);
      }
    }
  };

  const handleClick = () => {
    setChosenStrategy(title);
    setChosenS({ title, beats, isBeatenBy });
  };

  useEffect(() => {
    if (chosenStrategy !== "") {
      console.log(chosenStrategy);
      handleSend();
    }
  }, [chosenStrategy]);
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-xl bg-slate-900 border border-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-sky-500/50">
      <div className="h-1 w-full bg-gradient-to-r from-gray-600 to-gray-200" />

      <div onClick={handleClick} className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-black uppercase tracking-wider text-white">
            {title}
          </h3>
          <div className="mt-1 h-0.5 w-12 bg-slate-600 group-hover:w-full group-hover:bg-sky-500/50 transition-all duration-500" />
        </div>

        <p className="mb-6 text-sm font-medium leading-relaxed text-slate-400">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3">
            <div className="mb-1 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-emerald-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m5 12 7-7 7 7" />
                <path d="M12 19V5" />
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                Strong Vs
              </span>
            </div>
            <p className="text-sm font-bold text-emerald-100">{beats}</p>
          </div>

          <div className="rounded-lg border border-rose-500/20 bg-rose-500/10 p-3">
            <div className="mb-1 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-rose-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m19 12-7 7-7-7" />
                <path d="M12 5v14" />
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400">
                Weak Vs
              </span>
            </div>
            <p className="text-sm font-bold text-rose-100">{isBeatenBy}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyCard;
