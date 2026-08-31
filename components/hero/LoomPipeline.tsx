'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  CubeIcon,
  BeakerIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  SparklesIcon,
  GlobeAltIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

/* ------------------------------------------------------------------------ *
 *  Timing
 *
 *  The line lands on a circle, that circle holds for DWELL_MS, then the line
 *  sets off for the next one. Reaching Operate is what ends the slide, so
 *  TOTAL_MS is what CleanHero uses as this slide's dwell — see LOOM_RUN_MS.
 * ------------------------------------------------------------------------ */

const START_MS = 120;
const DWELL_MS = 800; // beat at a circle once the line arrives
const LINE_MS = 700; // travel between two circles
const HOLD_MS = 700; // beat after Operate before the carousel moves on

const FLIP_AT = [1500, 2100]; // when AI Insights, then Security, turn

/** How long the whole run takes, exported so the carousel can wait for it. */
export const LOOM_RUN_MS =
  START_MS + 5 * DWELL_MS + 4 * LINE_MS + HOLD_MS; // 7620ms

/** Heroicons has no speedometer, so Operate's gauge is drawn here. */
const GaugeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className}>
    <path d="M4.05 17.5a9 9 0 1 1 15.9 0" strokeWidth={1.7} strokeLinecap="round" />
    <path d="m12 14.2 3.9-4.6" strokeWidth={1.7} strokeLinecap="round" />
    <circle cx="12" cy="14.6" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const STAGES = [
  { name: 'Build', Icon: CubeIcon },
  { name: 'Test', Icon: BeakerIcon },
  { name: 'Secure', Icon: ShieldCheckIcon },
  { name: 'Deploy', Icon: RocketLaunchIcon },
  { name: 'Operate', Icon: GaugeIcon },
];

const PUCK = 42; // circle diameter; the rail is inset by half of it

export default function LoomPipeline() {
  // Index of the furthest circle the line has reached, and how far along the
  // rail the purple fill has crept.
  const [reached, setReached] = useState(-1);
  const [fill, setFill] = useState(0);
  const [turned, setTurned] = useState([false, false]);

  // The component remounts every time the slide becomes active, so the run
  // simply restarts on mount.
  useEffect(() => {
    const timers: Array<ReturnType<typeof setTimeout>> = [];
    const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));

    let t = START_MS;
    STAGES.forEach((_, i) => {
      at(t, () => setReached(i));
      t += DWELL_MS;
      if (i < STAGES.length - 1) {
        at(t, () => setFill(((i + 1) / (STAGES.length - 1)) * 100));
        t += LINE_MS;
      }
    });

    FLIP_AT.forEach((ms, i) => {
      at(ms, () => setTurned((prev) => prev.map((v, j) => (j === i ? true : v))));
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative w-full max-w-[660px] h-[570px] p-6 flex flex-col">
      {/* Title and its icon */}
      <div className="flex items-center gap-3 mb-[18px]">
        <div className="w-12 h-12 rounded-2xl grid place-items-center bg-gradient-to-br from-neon-300 to-neon-400 text-white shadow-[0_8px_22px_rgba(124,58,237,0.45)]">
          <CodeBracketIcon className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-bold text-white tracking-[-0.01em]">CogniLoom</h2>
      </div>

      {/* Pipeline on the left, the two tiles to its right */}
      <div className="flex items-center gap-[18px] flex-1 min-h-0">

        {/* ---------- PIPELINE — horizontal, vertically centred ---------- */}
        <div className="flex-1 min-w-0">
          <span className="inline-flex items-center gap-[7px] text-[9.5px] font-bold uppercase tracking-[0.1em] text-neon-400 mb-4 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-500 animate-pulse" />
            Pipeline Active
          </span>

          <div className="relative flex justify-between">
            {/* the rail runs centre to centre, so it tucks behind the outer circles */}
            <div
              className="absolute h-0.5 rounded-full bg-night-700/80 z-0"
              style={{ left: PUCK / 2, right: PUCK / 2, top: PUCK / 2 }}
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-neon-600 to-neon-400 shadow-[0_0_10px_rgba(139,92,246,0.85)]"
                initial={{ width: '0%' }}
                animate={{ width: `${fill}%` }}
                transition={{ duration: LINE_MS / 1000, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>

            {STAGES.map((stage, i) => {
              const on = i <= reached;
              return (
                <div
                  key={stage.name}
                  className="relative z-[1] flex flex-col items-center gap-[9px]"
                  style={{ width: PUCK }}
                >
                  {/* reached: glassy purple outline, and the icon turns white */}
                  <span
                    className="rounded-full grid place-items-center border-[1.5px] transition-all duration-[450ms]"
                    style={{
                      width: PUCK,
                      height: PUCK,
                      background: on ? 'rgba(139, 92, 246, 0.16)' : 'rgba(26, 24, 41, 0.55)',
                      borderColor: on ? '#A78BFA' : 'rgba(53, 49, 74, 0.9)',
                      color: on ? '#fff' : '#777583',
                      boxShadow: on
                        ? '0 0 18px rgba(139,92,246,0.55), inset 0 0 14px rgba(139,92,246,0.28)'
                        : 'none',
                      backdropFilter: on ? 'blur(6px)' : undefined,
                      WebkitBackdropFilter: on ? 'blur(6px)' : undefined,
                    }}
                  >
                    <stage.Icon className="w-[19px] h-[19px]" />
                  </span>
                  <span
                    className="text-[9px] font-bold transition-colors duration-[450ms]"
                    style={{ color: on ? '#fff' : '#777583' }}
                  >
                    {stage.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------- AI INSIGHTS + SECURITY ----------
            Stacked rather than side by side: at 236px the pair keeps the wide
            card shape. Sharing that width would force each to ~115px. */}
        <div className="flex-none w-[236px] self-stretch flex flex-col gap-3">

          <FlipTile turned={turned[0]} tone="insights" title="AI Insights" Icon={SparklesIcon}>
            <div className="flex items-center gap-[7px] mb-[9px]">
              <SparklesIcon className="w-[15px] h-[15px] shrink-0 text-mint-400" />
              <span className="text-[11.5px] font-semibold text-mint-300">AI Insights</span>
            </div>
            <div className="bg-night-800/60 border border-night-700/60 rounded-[7px] p-2 mb-[7px]">
              <div className="flex justify-between items-start gap-1.5 mb-1">
                <span className="text-[10px] font-medium text-night-300">Optimization</span>
                <span className="text-[9px] px-1.5 py-px rounded-[5px] whitespace-nowrap bg-mint-950/50 text-mint-400 border border-mint-800/50">
                  98% Conf.
                </span>
              </div>
              <div className="text-[9px] leading-[1.35] text-night-400">
                Docker image size reduction possible (-40%)
              </div>
            </div>
            <div className="bg-night-800/60 border border-night-700/60 rounded-[7px] p-2">
              <div className="flex justify-between items-start gap-1.5">
                <span className="text-[10px] font-medium text-neon-300">Policy Drift</span>
                <span className="text-[9px] px-1.5 py-px rounded-[5px] whitespace-nowrap bg-neon-950/50 text-neon-400 border border-neon-800/50">
                  High
                </span>
              </div>
            </div>
          </FlipTile>

          <FlipTile turned={turned[1]} tone="security" title="Security" Icon={ShieldCheckIcon}>
            <div className="flex items-center gap-[7px] mb-[9px]">
              <ShieldCheckIcon className="w-[15px] h-[15px] shrink-0 text-mint-400" />
              <span className="text-[11.5px] font-semibold text-mint-300">Security</span>
            </div>
            <div className="flex justify-between items-center bg-night-800/40 border border-night-700/60 rounded-[7px] px-3 py-[9px]">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold leading-none text-night-200">0</span>
                <span className="mt-[3px] text-[8px] uppercase tracking-[0.08em] text-night-400">Critical</span>
              </div>
              <div className="w-px h-8 bg-night-700/60" />
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold leading-none text-mint-400">100%</span>
                <span className="mt-[3px] text-[8px] uppercase tracking-[0.08em] text-night-400">Secure</span>
              </div>
            </div>
            <div className="flex gap-1.5 mt-auto">
              <span className="flex-1 text-center text-[8px] py-[5px] rounded-[5px] bg-night-800/50 border border-night-700/60 text-night-400">SOC2</span>
              <span className="flex-1 text-center text-[8px] py-[5px] rounded-[5px] bg-night-800/50 border border-night-700/60 text-night-400">ISO</span>
            </div>
          </FlipTile>
        </div>
      </div>

      {/* ---------- INFRASTRUCTURE — full width underneath, unchanged ---------- */}
      <div className="mt-4 bg-night-800/40 border border-night-700/60 rounded-[14px] p-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-[10px] bg-neon-950/50 border border-neon-800/50 text-neon-400 grid place-items-center">
            <GlobeAltIcon className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-night-200">Infrastructure</div>
            <div className="text-[10px] text-night-400">
              Provisioning: <span className="text-neon-400 font-medium">Auto-Remediated</span>
            </div>
          </div>
        </div>
        <div>
          <div className="font-mono text-[11px] text-neon-400 bg-neon-950/50 border border-neon-800/50 px-2 py-0.5 rounded-md">
            us-east-1
          </div>
          <div className="flex items-center justify-end gap-1.5 mt-[5px] text-[10px] text-neon-400">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-500 animate-pulse" />
            Healthy
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ *
 *  A tile that shows its name and icon, then turns on its own axis to reveal
 *  the detail that used to be printed flat on it.
 * ------------------------------------------------------------------------ */

function FlipTile({
  turned,
  tone,
  title,
  Icon,
  children,
}: {
  turned: boolean;
  tone: 'insights' | 'security';
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  const shell =
    tone === 'insights'
      ? 'bg-gradient-to-br from-mint-950/40 to-neon-950/40 border border-mint-800/55'
      : 'bg-night-800/40 border border-night-700/60';

  const badge =
    tone === 'insights'
      ? 'bg-mint-950/70 border border-mint-800/70'
      : 'bg-night-800/90 border border-night-700/90';

  const face =
    'absolute inset-0 rounded-[14px] p-[11px] flex flex-col [backface-visibility:hidden] [-webkit-backface-visibility:hidden]';

  return (
    <div className="flex-1" style={{ perspective: 900 }}>
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: turned ? 180 : 0 }}
        transition={{ duration: 0.9, ease: [0.6, 0, 0.25, 1] }}
      >
        {/* front — name and icon only */}
        <div className={`${face} ${shell} items-center justify-center gap-3 text-center`}>
          <span className={`w-11 h-11 rounded-full grid place-items-center text-mint-400 ${badge}`}>
            <Icon className="w-6 h-6" />
          </span>
          <span className="text-[0.9375rem] font-bold leading-[1.3] text-mint-300">{title}</span>
        </div>

        {/* back — the detail */}
        <div className={`${face} ${shell}`} style={{ transform: 'rotateY(180deg)' }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
