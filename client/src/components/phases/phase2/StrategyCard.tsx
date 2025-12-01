import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

type SetPhaseAction = React.Dispatch<React.SetStateAction<number>>;

interface StrategyCardProps {
  strategy: string;
  fighter: string;
}

const API_URL = "http://localhost:5000/api/strategies";

const StrategyCard: React.FC<StrategyCardProps> = ({ strategy, fighter }) => {
  const [chosenStrategy, setChosenStrategy] = useState("");

  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-xl bg-slate-900 border border-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-sky-500/50">
      <div className="h-1 w-full bg-gradient-to-r from-gray-600 to-gray-200" />

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-black uppercase tracking-wider text-white">
            {strategy}
          </h3>
          <div className="mt-1 h-0.5 w-12 bg-slate-600 group-hover:w-full group-hover:bg-sky-500/50 transition-all duration-500" />
        </div>

        <p className="mb-6 text-sm font-medium leading-relaxed text-slate-400">
          {fighter}
        </p>
      </div>
    </div>
  );
};

export default StrategyCard;
