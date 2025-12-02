import React from "react";

type SetPhaseAction = React.Dispatch<React.SetStateAction<number>>;

interface StrategyCardProps {
  strategy: string;
  fighter: string;
  description: string;
}

const StrategyCard: React.FC<StrategyCardProps> = ({
  strategy,
  fighter,
  description,
}) => {
  const faceStyle =
    "absolute inset-0 backface-hidden rounded-xl p-6 transition-transform duration-700";

  return (
    <div className="group w-full max-w-sm" style={{ perspective: "1000px" }}>
      <div className="relative h-64 w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div
          className={`${faceStyle} bg-slate-900 border border-slate-700 shadow-lg group-hover:border-sky-500/50`}
        >
          <div className="h-1 w-full bg-gradient-to-r from-gray-600 to-gray-200" />

          <div className="mt-5">
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

        <div
          className={`${faceStyle} bg-sky-900/50 border border-sky-500 shadow-2xl [transform:rotateY(180deg)]`}
        >
          <div className="h-1 w-full bg-gradient-to-r from-sky-300 to-sky-700" />

          <div className="mt-5">
            <h4 className="text-lg font-bold text-white mb-3">
              Strategy Description
            </h4>
            <p className="text-sm leading-relaxed text-sky-200">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyCard;
