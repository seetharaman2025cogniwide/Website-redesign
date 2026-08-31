'use client';

import { motion } from 'framer-motion';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
  GlobeAltIcon,
  ServerIcon,
  UserGroupIcon,
  CloudIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

/* ------------------------------------------------------------------------ *
 *  Geometry
 *
 *  The staircase is the source of truth. The three tiles are laid out as an
 *  even climb, and the arrow is generated to pass a constant gap above each
 *  tile's top edge — so it grazes all three however they are repositioned.
 * ------------------------------------------------------------------------ */

const BOX_W = 320;
const BOX_H = 538;

const TILE_W = 104;
const TILES = [
  { left: 4, top: 412 },
  { left: 106, top: 314 },
  { left: 208, top: 206 },
];

const ARROW_GAP = 14; // clearance the curve keeps above each tile's top edge
const TAIL: [number, number] = [-10, 486]; // fades in below and left of tile 1
const HEAD: [number, number] = [292, 88]; // where the body ends and the head starts

const W_TAIL = 0.6; // half-width at the very start
const W_HEAD = 5.0; // half-width where the head begins
const TAPER = 1.85; // > 1 holds the tail thin for longer

const HEAD_LEN = 48;
const HEAD_HALF = 19;
const HEAD_NOTCH = 14;

type Pt = [number, number];
type Seg = { p0: Pt; p1: Pt; p2: Pt; p3: Pt };

/**
 * Catmull-Rom passes exactly through every knot, which is what guarantees the
 * curve hugs the tiles rather than merely heading in their direction.
 */
function toBeziers(k: Pt[]): Seg[] {
  const segs: Seg[] = [];
  for (let i = 0; i < k.length - 1; i++) {
    const p0 = k[i === 0 ? 0 : i - 1];
    const p1 = k[i];
    const p2 = k[i + 1];
    const p3 = k[i + 2 >= k.length ? k.length - 1 : i + 2];
    segs.push({
      p0: p1,
      p1: [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6],
      p2: [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6],
      p3: p2,
    });
  }
  return segs;
}

function cubicAt(s: Seg, t: number): Pt {
  const u = 1 - t;
  const a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, d = t * t * t;
  return [
    a * s.p0[0] + b * s.p1[0] + c * s.p2[0] + d * s.p3[0],
    a * s.p0[1] + b * s.p1[1] + c * s.p2[1] + d * s.p3[1],
  ];
}

function cubicTangent(s: Seg, t: number): Pt {
  const u = 1 - t;
  const a = 3 * u * u, b = 6 * u * t, c = 3 * t * t;
  const x = a * (s.p1[0] - s.p0[0]) + b * (s.p2[0] - s.p1[0]) + c * (s.p3[0] - s.p2[0]);
  const y = a * (s.p1[1] - s.p0[1]) + b * (s.p2[1] - s.p1[1]) + c * (s.p3[1] - s.p2[1]);
  const len = Math.hypot(x, y) || 1;
  return [x / len, y / len];
}

/**
 * Builds the arrow once, at module load. It depends on nothing but the
 * constants above, so server and client always render the identical path.
 */
const ARROW = (() => {
  const knots: Pt[] = [
    TAIL,
    ...TILES.map((t) => [t.left + TILE_W / 2, t.top - ARROW_GAP] as Pt),
    HEAD,
  ];

  const segments = toBeziers(knots);
  const PER_SEG = 60;

  const pts: Array<{ p: Pt; t: Pt; w: number }> = [];
  segments.forEach((seg, si) => {
    for (let i = si === 0 ? 0 : 1; i <= PER_SEG; i++) {
      const local = i / PER_SEG;
      const g = (si + local) / segments.length;
      pts.push({
        p: cubicAt(seg, local),
        t: cubicTangent(seg, local),
        w: W_TAIL + (W_HEAD - W_TAIL) * Math.pow(g, TAPER),
      });
    }
  });

  // Offset each sample along its normal, so the body tapers from a hairline
  // at the tail to full weight at the head. A plain stroke cannot do this.
  const leftEdge: Pt[] = [];
  const rightEdge: Pt[] = [];
  pts.forEach((s) => {
    const nx = -s.t[1];
    const ny = s.t[0];
    leftEdge.push([s.p[0] + nx * s.w, s.p[1] + ny * s.w]);
    rightEdge.push([s.p[0] - nx * s.w, s.p[1] - ny * s.w]);
  });

  let body = `M ${leftEdge[0][0].toFixed(2)} ${leftEdge[0][1].toFixed(2)}`;
  for (let i = 1; i < leftEdge.length; i++) {
    body += ` L ${leftEdge[i][0].toFixed(2)} ${leftEdge[i][1].toFixed(2)}`;
  }
  for (let j = rightEdge.length - 1; j >= 0; j--) {
    body += ` L ${rightEdge[j][0].toFixed(2)} ${rightEdge[j][1].toFixed(2)}`;
  }
  body += ' Z';

  // The head is a slender dart aligned to the curve's final tangent, so it
  // never reads as glued on.
  const end = pts[pts.length - 1];
  const [tx, ty] = end.t;
  const nx = -ty;
  const ny = tx;
  const at = (along: number, across: number) =>
    `${(end.p[0] + tx * along + nx * across).toFixed(2)} ${(end.p[1] + ty * along + ny * across).toFixed(2)}`;

  const head =
    `M ${at(HEAD_LEN, 0)}` +
    ` L ${at(-5, HEAD_HALF)}` +
    ` L ${at(HEAD_NOTCH - 5, 0)}` +
    ` L ${at(-5, -HEAD_HALF)} Z`;

  return { body, head };
})();

/* ------------------------------------------------------------------------ */

const STATS = [
  { icon: CpuChipIcon, val: '24', label: 'Active Agents' },
  { icon: ShieldCheckIcon, val: '100%', label: 'Secure Pipelines' },
  { icon: ChartBarIcon, val: '99.9%', label: 'Data Quality' },
];

const NODES = [
  { label: 'ERP', icon: ServerIcon, x: '21%', y: '20%', wire: 'M 105 167 L 44 67' },
  { label: 'CRM', icon: UserGroupIcon, x: '79%', y: '20%', wire: 'M 105 167 L 166 67' },
  { label: 'Cloud', icon: CloudIcon, x: '21%', y: '80%', wire: 'M 105 167 L 44 267' },
  { label: 'DevOps', icon: CommandLineIcon, x: '79%', y: '80%', wire: 'M 105 167 L 166 267' },
];

// Each element inside the map drifts on its own clock, so no two ever move
// together. Values are [x, y] travel, then duration and delay in seconds.
const NODE_DRIFT = [
  { x: [0, 5, 0], y: [0, -10, 0], duration: 5.4, delay: 0 },
  { x: [0, -7, 0], y: [0, -6, 0], duration: 6.7, delay: 0.9 },
  { x: [0, 6, 0], y: [0, 8, 0], duration: 7.3, delay: 0.4 },
  { x: [0, -5, 0], y: [0, 9, 0], duration: 6.1, delay: 1.5 },
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export default function EcosystemAscent() {
  return (
    <div className="relative w-full max-w-[580px] h-[600px]">
      {/* Panel title — carried over from the card header */}
      <motion.div
        className="absolute inset-x-0 top-0 flex items-center justify-between"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
      >
        <div className="flex items-center gap-3.5">
          <div className="w-[46px] h-[46px] rounded-[14px] grid place-items-center bg-gradient-to-br from-neon-400 to-neon-600 text-white shadow-[0_10px_26px_rgba(124,58,237,0.5)]">
            <SparklesIcon className="w-6 h-6" />
          </div>
          <h2 className="text-[1.3125rem] font-bold text-white tracking-[-0.01em]">
            Cogniwide Ecosystem
          </h2>
        </div>
        <div className="flex gap-1.5">
          <span className="w-[7px] h-[7px] rounded-full bg-night-600" />
          <span className="w-[7px] h-[7px] rounded-full bg-night-600" />
          <span className="w-[7px] h-[7px] rounded-full bg-night-600" />
        </div>
      </motion.div>

      {/* ===== The climb. Draws in once, then holds completely still. ===== */}
      <div className="absolute left-0 top-[62px] w-[320px] h-[538px]">
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox={`0 0 ${BOX_W} ${BOX_H}`}
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cwAscentGrad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#7C3AED" stopOpacity="0" />
              <stop offset="20%" stopColor="#7C3AED" stopOpacity="0.5" />
              <stop offset="58%" stopColor="#8B5CF6" stopOpacity="1" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="1" />
            </linearGradient>
            <clipPath id="cwAscentSweep">
              {/* Wipes left to right, which reads as the arrow drawing itself */}
              <motion.rect
                x="0"
                y="0"
                height={BOX_H}
                initial={{ width: 0 }}
                animate={{ width: 400 }}
                transition={{ duration: 1.5, delay: 0.3, ease: EASE_OUT }}
              />
            </clipPath>
          </defs>

          <g clipPath="url(#cwAscentSweep)">
            <path
              d={ARROW.body}
              fill="url(#cwAscentGrad)"
              className="drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]"
            />
            <path
              d={ARROW.head}
              fill="#C084FC"
              className="drop-shadow-[0_0_12px_rgba(192,132,252,0.8)]"
            />
          </g>
        </svg>

        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="absolute w-[104px]"
            style={{ left: TILES[i].left, top: TILES[i].top }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.64, delay: 0.6 + i * 0.2, ease: EASE_OUT }}
          >
            {/* the riser each tile stands on */}
            <div className="absolute left-2 -right-[9px] top-[15px] -bottom-[15px] rounded-[14px] bg-gradient-to-br from-neon-800/40 to-[#181626]/95 border border-night-700/90 z-[1]" />

            <div className="relative z-[2] rounded-[14px] p-[11px] bg-gradient-to-br from-[#2D2942]/95 to-[#181626]/95 border border-night-700 shadow-[0_14px_28px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.07)]">
              <div className="flex items-start justify-between mb-[9px]">
                <span className="w-[26px] h-[26px] grid place-items-center rounded-lg bg-neon-950/60 border border-neon-800/55 text-neon-400">
                  <stat.icon className="w-3.5 h-3.5" />
                </span>
                <ArrowTrendingUpIcon className="w-3 h-3 text-mint-400" />
              </div>
              <div className="text-xl font-extrabold text-white leading-none tracking-[-0.02em] tabular-nums">
                {stat.val}
              </div>
              <div className="mt-1 text-[9px] font-medium text-night-400 whitespace-nowrap">
                {stat.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== Live Ecosystem Map — clear of the climb, and the only thing
              that floats. Every element inside drifts independently. ===== */}
      <motion.div
        className="absolute right-0 top-[132px] w-[210px] h-[372px]"
        animate={{ x: [0, -5, 0], y: [0, -17, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="h-full rounded-[20px] overflow-hidden flex flex-col bg-night-950/90 border border-night-800 shadow-[0_26px_54px_rgba(0,0,0,0.62)] backdrop-blur-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: EASE_OUT }}
        >
          <div className="flex items-center justify-between px-3 py-2.5 border-b border-night-800/75">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-night-300">
              <GlobeAltIcon className="w-3 h-3 text-night-500" />
              Live Ecosystem Map
            </span>
            <span className="flex gap-1">
              <i className="w-[5px] h-[5px] rounded-full bg-night-600" />
              <i className="w-[5px] h-[5px] rounded-full bg-night-600" />
            </span>
          </div>

          <div className="relative flex-1 cw-inner-grid">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 210 334"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {NODES.map((node, i) => (
                <path
                  key={node.label}
                  id={`cwWire${i}`}
                  d={node.wire}
                  stroke="#35314A"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  fill="none"
                />
              ))}
              {NODES.map((node, i) => (
                <circle key={`p-${node.label}`} r="2.7" fill={i % 2 === 0 ? '#8B5CF6' : '#C084FC'}>
                  <animateMotion dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite">
                    <mpath href={`#cwWire${i}`} />
                  </animateMotion>
                </circle>
              ))}
            </svg>

            {NODES.map((node, i) => (
              <div
                key={node.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: node.x, top: node.y }}
              >
                <motion.div
                  className="flex flex-col items-center gap-1"
                  animate={{ x: NODE_DRIFT[i].x, y: NODE_DRIFT[i].y }}
                  transition={{
                    duration: NODE_DRIFT[i].duration,
                    delay: NODE_DRIFT[i].delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <span className="relative w-9 h-9 rounded-[11px] grid place-items-center bg-neon-950/80 border border-neon-800/60 text-neon-400">
                    <node.icon className="w-[17px] h-[17px]" />
                    <span className="absolute -top-[3px] -right-[3px] w-2 h-2 rounded-full bg-neon-400 border-2 border-night-900" />
                  </span>
                  <span className="text-[9px] font-semibold text-night-300 bg-night-800/90 border border-night-700/80 rounded-[5px] px-1.5 py-px">
                    {node.label}
                  </span>
                </motion.div>
              </div>
            ))}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="flex flex-col items-center"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 9, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="relative w-[54px] h-[54px] rounded-full grid place-items-center bg-night-900 border-4 border-night-800 text-mint-400 shadow-[0_0_32px_rgba(168,85,247,0.42)]">
                  <span className="absolute -inset-[11px] rounded-full border border-dashed border-neon-500/55 animate-spin-slow-reverse" />
                  <SparklesIcon className="w-[25px] h-[25px]" />
                </span>
                <span className="mt-2 text-[9.5px] font-bold text-white bg-night-800/90 border border-night-700 rounded-full px-2.5 py-0.5 whitespace-nowrap">
                  Unified Core
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
