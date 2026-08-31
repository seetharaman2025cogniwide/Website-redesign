'use client'

import { motion } from 'framer-motion'

/**
 * Hero slide 01 visual: the robot hand lifts four rhombus plates into a stack.
 *
 * The whole composition lives inside a fixed 600x640 box, so every offset below
 * is an exact pixel coordinate. The box is pinned to the right edge of the hero
 * column; the hand sits fully inside it, so nothing is cut at any width.
 *
 * Hand artwork: /public/images/robot-hand-cut.png — the supplied robot-hand.png
 * with its white background keyed out and cropped to the subject. Point HAND_SRC
 * at a different file if a cleaner export arrives; nothing else changes.
 */
const HAND_SRC = '/images/robot-hand-cut.png'

/* ── plate geometry (px, inside the 600x640 box) ─────────────────── */
const RW = 352          // plate width
const RH = 156          // plate height
const STACK_RISE = 84   // vertical step per plate. must stay >= RH/2, otherwise
                        // the plate above covers this plate's label
const STACK_DRIFT = 16  // leftward step per plate
const BASE_LEFT = 74
const BASE_TOP = 314
const PALM = { x: 312, y: 530 }   // where the plates are born

/* ── rounded-rhombus path ────────────────────────────────────────── */
type Pt = [number, number]

const easeToward = (from: Pt, to: Pt, dist: number): Pt => {
  const dx = to[0] - from[0]
  const dy = to[1] - from[1]
  const len = Math.hypot(dx, dy) || 1
  const t = Math.min(0.45, dist / len)
  return [from[0] + dx * t, from[1] + dy * t]
}

const rhombPath = (w: number, h: number, r: number) => {
  const verts: Pt[] = [[w / 2, 0], [w, h / 2], [w / 2, h], [0, h / 2]]
  let d = ''
  for (let i = 0; i < 4; i++) {
    const p = verts[i]
    const a = easeToward(p, verts[(i + 3) % 4], r)
    const b = easeToward(p, verts[(i + 1) % 4], r)
    d += (i === 0 ? 'M' : 'L') + a[0].toFixed(1) + ' ' + a[1].toFixed(1) +
         'Q' + p[0].toFixed(1) + ' ' + p[1].toFixed(1) + ' ' +
         b[0].toFixed(1) + ' ' + b[1].toFixed(1)
  }
  return d + 'Z'
}

const PLATE_PATH = rhombPath(RW, RH, 30)
const FACET_PATH = rhombPath(RW - 26, RH - 26, 24)

/* ── content — index 0 is the bottom plate, first out of the palm ── */
const PLATES = [
  {
    label: 'Data Engineering',
    icon: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  },
  {
    label: 'Product Dev & Testing',
    icon: <path d="M9 18l-6-6 6-6M15 6l6 6-6 6" />,
  },
  {
    label: 'Digital Transformation',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
      </>
    ),
  },
  {
    label: 'AI Transformation',
    icon: (
      <>
        <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3z" />
        <path d="M18.5 16.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />
      </>
    ),
  },
]

const ORBS = [
  { size: 26, left: 22, top: 232 },
  { size: 15, left: 528, top: 158 },
  { size: 19, left: 456, top: 44 },
  { size: 11, left: 92, top: 446 },
]

const EASE_OUT = [0.16, 1, 0.3, 1] as [number, number, number, number]

const plateVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    scale: 0.28,
    filter: 'blur(10px)',
    // start folded into the palm, then travel out to the resting slot
    x: PALM.x - (BASE_LEFT - i * STACK_DRIFT + RW / 2),
    y: PALM.y - (BASE_TOP - i * STACK_RISE + RH / 2),
  }),
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    x: 0,
    y: 0,
    transition: { delay: 0.9 + i * 0.42, duration: 1, ease: EASE_OUT },
  }),
}

const HandTilesVisual = () => (
  <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
    {/* ambient violet pool — outside the stage box so it stays a soft glow
        rather than being clipped into a visible rectangle */}
    <div className="absolute right-[-70px] top-1/2 -translate-y-1/2 w-[760px] h-[600px] rounded-full bg-violet-700/22 blur-[130px]" />

    {/* fixed-size stage: every offset below is an exact pixel coordinate */}
    <div className="relative w-[600px] h-[640px] shrink-0 origin-right scale-[0.74] xl:scale-100">

      {/* ── beam rising out of the palm ─────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.65] }}
        transition={{ delay: 0.55, duration: 1.9, ease: 'easeOut' }}
        className="absolute blur-[28px]"
        style={{
          left: 56,
          top: 40,
          width: 340,
          height: 460,
          background:
            'linear-gradient(to top, rgba(167,139,250,0.32), rgba(139,92,246,0.09) 48%, transparent 78%)',
          clipPath: 'polygon(66% 100%, 88% 100%, 70% 0%, 8% 8%)',
        }}
      />

      {/* ── light pooling in the palm ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.9, ease: 'easeOut' }}
        className="absolute rounded-full"
        style={{ left: 182, top: 400, width: 260, height: 260 }}
      >
        <motion.div
          animate={{ scale: [0.94, 1.06, 0.94] }}
          transition={{ delay: 1.25, duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(226,214,255,0.30) 0%, rgba(139,92,246,0.14) 42%, rgba(109,63,240,0) 72%)',
          }}
        />
      </motion.div>

      {/* ── the four rhombus plates ─────────────────────────────── */}
      {PLATES.map((plate, i) => (
        <motion.div
          key={plate.label}
          custom={i}
          variants={plateVariants}
          initial="hidden"
          animate="show"
          className="absolute"
          style={{
            left: BASE_LEFT - i * STACK_DRIFT,
            top: BASE_TOP - i * STACK_RISE,
            width: RW,
            height: RH,
            zIndex: 30 - i, // the lower plate sits in front
          }}
        >
          {/* idle float, once the plate has locked into the column */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              delay: 2.3 + i * 0.17,
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full h-full"
          >
            <svg viewBox={'0 0 ' + RW + ' ' + RH} className="block w-full h-full overflow-visible">
              <defs>
                <linearGradient id={'cwPlateFill' + i} x1="0" y1="0" x2="0.75" y2="1">
                  <stop offset="0%" stopColor="#ddd0ff" stopOpacity="0.42" />
                  <stop offset="46%" stopColor="#7c5cf0" stopOpacity="0.24" />
                  <stop offset="100%" stopColor="#4a189a" stopOpacity="0.36" />
                </linearGradient>
                <linearGradient id={'cwPlateEdge' + i} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#efe9ff" stopOpacity="0.85" />
                  <stop offset="52%" stopColor="#b9a4fb" stopOpacity="0.34" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path
                d={PLATE_PATH}
                fill={'url(#cwPlateFill' + i + ')'}
                stroke={'url(#cwPlateEdge' + i + ')'}
                strokeWidth="1.5"
              />
              <path
                d={FACET_PATH}
                transform="translate(13,13)"
                fill="none"
                stroke="#ffffff"
                strokeOpacity="0.10"
                strokeWidth="1"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center gap-[11px]">
              <span
                className="shrink-0 w-9 h-9 rounded-[10px] grid place-items-center border border-[rgba(228,220,255,0.45)]"
                style={{
                  background: 'linear-gradient(150deg, rgba(214,201,255,0.5), rgba(91,43,214,0.5))',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.45), 0 4px 12px rgba(30,8,72,0.5)',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-[19px] h-[19px]"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {plate.icon}
                </svg>
              </span>
              <span
                className="text-white font-semibold text-[14.5px] tracking-[-0.005em] whitespace-nowrap"
                style={{ textShadow: '0 2px 12px rgba(20,4,52,0.9)' }}
              >
                {plate.label}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* ── the hand ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 26, y: 44, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: EASE_OUT }}
        className="absolute"
        style={{ left: 124, top: 464, width: 460 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ delay: 1.1, duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HAND_SRC}
            alt=""
            aria-hidden="true"
            width={460}
            height={142}
            decoding="async"
            className="w-full h-auto select-none"
            style={{
              filter:
                'drop-shadow(0 22px 40px rgba(30,8,80,0.85)) drop-shadow(0 0 34px rgba(139,92,246,0.42))',
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── floating orbs ───────────────────────────────────────── */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 + i * 0.26, duration: 0.7, ease: [0.2, 1.5, 0.4, 1] }}
          className="absolute rounded-full"
          style={{ left: orb.left, top: orb.top, width: orb.size, height: orb.size, zIndex: 40 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              delay: 1.6 + i * 0.26,
              duration: 5.2 + i * 0.7,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-full h-full rounded-full"
            style={{
              background:
                'radial-gradient(circle at 32% 28%, #f2edff 0%, #a78bfa 44%, #5b21b6 100%)',
              boxShadow: '0 0 26px 5px rgba(167,139,250,0.5)',
            }}
          />
        </motion.div>
      ))}
    </div>
  </div>
)

export default HandTilesVisual
