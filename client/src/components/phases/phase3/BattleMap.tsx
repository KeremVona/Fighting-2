import React, { useState } from "react";
import { Crosshair, ShieldAlert, Plane as PlaneIcon } from "lucide-react";

interface Plane {
  id: string;
  x: number; // 0-100 percentage
  y: number; // 0-100 percentage
  team: "friendly" | "enemy";
  hp: number;
  maxHp: number;
  name: string;
  isDead: boolean;
}

const INITIAL_PLANES: Plane[] = [
  {
    id: "f1",
    x: 20,
    y: 50,
    team: "friendly",
    hp: 100,
    maxHp: 100,
    name: "Friendly 1",
    isDead: false,
  },
  {
    id: "f2",
    x: 30,
    y: 80,
    team: "friendly",
    hp: 80,
    maxHp: 100,
    name: "Friendly 2",
    isDead: false,
  },
  {
    id: "e1",
    x: 80,
    y: 30,
    team: "enemy",
    hp: 100,
    maxHp: 100,
    name: "Enemy 1",
    isDead: false,
  },
  {
    id: "e2",
    x: 70,
    y: 70,
    team: "enemy",
    hp: 100,
    maxHp: 100,
    name: "Enemy 2",
    isDead: false,
  },
];

export default function BattleMap() {
  const [planes, setPlanes] = useState<Plane[]>(INITIAL_PLANES);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [attackingLine, setAttackingLine] = useState<{
    start: Plane;
    end: Plane;
  } | null>(null);

  const getDistance = (p1: Plane, p2: Plane) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  };

  const handlePlaneClick = (plane: Plane) => {
    if (plane.isDead) return;

    if (plane.team === "friendly") {
      setSelectedId(plane.id);
      setAttackingLine(null);
    } else if (plane.team === "enemy" && selectedId) {
      performAttack(selectedId, plane);
    }
  };

  const performAttack = (attackerId: string, target: Plane) => {
    const attacker = planes.find((p) => p.id === attackerId);
    if (!attacker || attacker.isDead) return;

    setAttackingLine({ start: attacker, end: target });

    setTimeout(() => {
      setPlanes((prev) =>
        prev.map((p) => {
          if (p.id === target.id) {
            const newHp = Math.max(0, p.hp - 25);
            return { ...p, hp: newHp, isDead: newHp === 0 };
          }
          return p;
        })
      );
      setAttackingLine(null);
    }, 400);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-8 text-slate-200">
      <div className="mb-4 w-full max-w-4xl rounded-t-lg bg-slate-900 p-4 border-b border-slate-700 flex justify-between items-center">
        <h2 className="text-xl font-mono text-sky-500 uppercase tracking-widest">
          Tactical View // <span className="text-white">Sector 04</span>
        </h2>
        <div className="text-xs text-slate-500 font-mono">
          {selectedId ? "AWAITING FIRE COMMAND..." : "SELECT UNIT"}
        </div>
      </div>

      <div className="relative h-[500px] w-full max-w-4xl overflow-hidden rounded-lg border border-slate-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black shadow-2xl">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {attackingLine && (
          <svg className="absolute inset-0 h-full w-full pointer-events-none z-10">
            <line
              x1={`${attackingLine.start.x}%`}
              y1={`${attackingLine.start.y}%`}
              x2={`${attackingLine.end.x}%`}
              y2={`${attackingLine.end.y}%`}
              stroke="#ef4444"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
          </svg>
        )}

        {planes.map((plane) => {
          const isSelected = selectedId === plane.id;

          return (
            <div
              key={plane.id}
              onClick={() => handlePlaneClick(plane)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-allft duration-300
                ${plane.isDead ? "opacity-30 grayscale" : "hover:scale-110"}
              `}
              style={{ left: `${plane.x}%`, top: `${plane.y}%` }}
            >
              {isSelected && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full border border-sky-500/30 bg-sky-500/10 animate-pulse pointer-events-none" />
              )}

              <div
                className={`relative flex flex-col items-center justify-center p-2 rounded-full border-2 
                  ${
                    plane.team === "friendly"
                      ? isSelected
                        ? "border-sky-400 bg-sky-900/80 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                        : "border-blue-700 bg-blue-900/50"
                      : "border-red-600 bg-red-900/50"
                  }
              `}
              >
                {plane.team === "friendly" ? (
                  <PlaneIcon size={20} />
                ) : (
                  <ShieldAlert size={20} />
                )}
              </div>

              {!plane.isDead && (
                <div className="absolute -bottom-4 left-1/2 w-12 -translate-x-1/2">
                  <div className="h-1 w-full bg-slate-700">
                    <div
                      className={`h-full transition-all duration-300 ${
                        plane.team === "friendly" ? "bg-sky-400" : "bg-red-500"
                      }`}
                      style={{ width: `${(plane.hp / plane.maxHp) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 grid w-full max-w-4xl grid-cols-2 gap-4">
        <div className="rounded border border-slate-700 bg-slate-900 p-4">
          <h3 className="text-sm font-bold text-slate-400">STATUS</h3>
          <p className="mt-2 text-sm text-sky-400">
            {selectedId
              ? `UNIT ${selectedId.toUpperCase()} READY. SELECT TARGET.`
              : "NO UNIT SELECTED."}
          </p>
        </div>
        <div className="rounded border border-slate-700 bg-slate-900 p-4">
          <h3 className="text-sm font-bold text-slate-400">OBJECTIVE</h3>
          <p className="mt-2 text-sm text-slate-300">
            Eliminate all hostile bogies.
          </p>
        </div>
      </div>
    </div>
  );
}
