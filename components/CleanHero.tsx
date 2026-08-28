'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
   ArrowRightIcon,
   CpuChipIcon,
   ChartBarIcon,
   CodeBracketIcon,
   SparklesIcon,
   BeakerIcon,
   BoltIcon,
   ShieldCheckIcon,
   CheckCircleIcon,
   ArrowPathIcon,
   GlobeAltIcon,
   ChatBubbleLeftRightIcon,
   LockClosedIcon,
   LightBulbIcon,
   PuzzlePieceIcon,
   ScaleIcon,
   ArrowTrendingUpIcon,
   ServerIcon,
   UserGroupIcon,
   CloudIcon,
   CommandLineIcon,
   WrenchScrewdriverIcon,
   CircleStackIcon,
   ClockIcon,
   MagnifyingGlassIcon,
   DocumentTextIcon
} from '@heroicons/react/24/outline'
import { useState, useEffect, ReactNode } from 'react'

/* --------------------------------------------------------------------------
 * Entrance choreography for the "cogniwide-vision" diamond-grid slide.
 * The hub lands first, then the four outer diamonds drop in one at a time.
 * -------------------------------------------------------------------------- */
const HUB_DELAY = 0.15
const HUB_DURATION = 0.5
const DIAMOND_START = 0.55 // first diamond begins once the hub has settled
const DIAMOND_STAGGER = 0.35 // gap between consecutive diamonds
const DIAMOND_DURATION = 0.55
const DIAMOND_EASE = [0.22, 1, 0.36, 1] as const

// Whole sequence, in ms: last diamond starts at DIAMOND_START + 3 * STAGGER
// and then runs for DIAMOND_DURATION. ≈ 2150ms.
const VISION_ENTRANCE_MS =
  (DIAMOND_START + 3 * DIAMOND_STAGGER + DIAMOND_DURATION) * 1000

/*
 * The grid container is rotated 45°, so a plain `y` offset would carry the
 * diamonds in along that diagonal instead of straight down. Offsetting by
 * (-64, -64) in the rotated frame maps to (0, -90) on screen — i.e. exactly
 * 90px above — so they visually drop from above as intended.
 */
const DIAMOND_DROP = { x: -64, y: -64 }

/*
 * The carousel uses <AnimatePresence mode="wait" initial={false}>, and that
 * `initial={false}` suppresses mount-time `initial` for everything in its
 * subtree — so a plain initial/animate pair here would render straight at its
 * final state and never play on first page load.
 *
 * Driving the entrance from state that flips on this wrapper's *own* mount
 * sidesteps that: the first render sits at `from` (Framer uses the current
 * `animate` value as the mount state), and the flip to the resting state is an
 * ordinary animate transition, which the presence context does not touch.
 *
 * It also fires at the right moment when the carousel loops back, because the
 * wrapper only mounts once `mode="wait"` has finished exiting the old slide.
 */
const Entrance = ({
  from,
  delay,
  duration,
  children,
}: {
  from: Record<string, number>
  delay: number
  duration: number
  children: ReactNode
}) => {
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const raf = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <motion.div
      animate={entered ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, ...from }}
      transition={{ duration, delay, ease: DIAMOND_EASE }}
    >
      {children}
    </motion.div>
  )
}

const CleanHero = () => {
   const [activeSlide, setActiveSlide] = useState(0)
   const [isMounted, setIsMounted] = useState(false)

  const slides = [
    {
      id: 'cogniwide-vision',
      badge: 'Cogniwide',
      title: 'Transform With Technology',
      subtitle: 'Empowering enterprises through AI Transformation, Digital Transformation, Product Development, Testing, and Data Engineering.',
      cta: { text: 'Explore Our Capabilities', href: '/services' },
      color: 'blue',
      theme: {
        bg: 'bg-neon-500/20',
        text: 'text-neon-300',
        border: 'border-neon-500/30',
        aurora1: 'bg-neon-600/40',
        aurora2: 'bg-mint-600/40',
        pulse: 'bg-neon-500'
      },
      gradient: 'from-neon-300 to-mint-300',
      icon: SparklesIcon,
      isSolid: true
    },
    {
      id: 'platform',
      badge: 'Cogniwide Ecosystem',
      title: 'Accelerate Your AI Transformation',
      subtitle: 'The complete enterprise AI ecosystem. From Agentic AI to Unified DevOps and Data Intelligence—all in one place.',
      cta: { text: 'Explore Platform', href: '/products' },
      color: 'blue',
      theme: {
        bg: 'bg-neon-500/20',
        text: 'text-neon-300',
        border: 'border-neon-500/30',
        aurora1: 'bg-neon-600/40',
        aurora2: 'bg-mint-600/40',
        pulse: 'bg-neon-500'
      },
      gradient: 'from-neon-400 to-neon-300',
      icon: SparklesIcon
    },
    {
      id: 'cogniassist',
      badge: 'CogniAssist',
      title: 'Agentic AI That Works For You',
      subtitle: 'Deploy intelligent agents that automate complex workflows and decision-making with human-like reasoning.',
      cta: { text: 'Discover Agents', href: '/products/cogniassist' },
      color: 'green',
      theme: {
        bg: 'bg-neon-500/20',
        text: 'text-neon-300',
        border: 'border-neon-500/30',
        aurora1: 'bg-neon-600/40',
        aurora2: 'bg-mint-600/40',
        pulse: 'bg-neon-500'
      },
      gradient: 'from-mint-200 to-neon-400',
      icon: CpuChipIcon
    },
    {
      id: 'cogniloom',
      badge: 'CogniLoom',
      title: 'Unify, Secure & Automate DevSecOps',
      subtitle: 'Unify development, security, and operations with AI-driven automation and autonomous infrastructure management.',
      cta: { text: 'View CogniLoom', href: '/products/cogniloom' },
      color: 'purple',
      theme: {
        bg: 'bg-neon-500/20',
        text: 'text-neon-300',
        border: 'border-neon-500/30',
        aurora1: 'bg-neon-600/40',
        aurora2: 'bg-neon-600/40',
        pulse: 'bg-neon-500'
      },
      gradient: 'from-neon-300 to-neon-400',
      icon: CodeBracketIcon
    },
    {
      id: 'cogniaura',
      badge: 'CogniAura',
      title: 'Turn Data Into Intelligence',
      subtitle: 'Transform your data landscape with seamless BI migration and Master Data Management. Unlock the true value of your enterprise assets.',
      cta: { text: 'Explore Data', href: '/products/cogniaura' },
      color: 'orange',
      theme: {
        bg: 'bg-neon-500/20',
        text: 'text-neon-300',
        border: 'border-neon-500/30',
        aurora1: 'bg-neon-600/40',
        aurora2: 'bg-neon-600/40',
        pulse: 'bg-mint-500'
      },
      gradient: 'from-neon-200 to-mint-300',
      icon: ChartBarIcon
    },
    {
      id: 'cognitest',
      badge: 'CogniTest',
      title: 'Unified AI Testing Platform',
      subtitle: 'Manage your entire testing lifecycle—from AI generation to automated execution and orchestration—within a single, unified platform.',
      cta: { text: 'See CogniTest', href: '/solutions/cognitest' },
      color: 'teal',
      theme: {
        bg: 'bg-mint-500/20',
        text: 'text-mint-300',
        border: 'border-mint-500/30',
        aurora1: 'bg-mint-600/40',
        aurora2: 'bg-mint-600/40',
        pulse: 'bg-mint-500'
      },
      gradient: 'from-mint-200 to-neon-300',
      icon: BeakerIcon
    },
    {
      id: 'cognivibe',
      badge: 'CogniVibe',
      title: 'Accelerate with AI-Powered SDLC',
      subtitle: 'Leverage AI to fast-track development, streamline workflows, and ship high-quality deliverables ahead of schedule with confidence.',
      cta: { text: 'Discover CogniVibe', href: '/solutions/cognivibe' },
      color: 'fuchsia',
      theme: {
        bg: 'bg-mint-500/20',
        text: 'text-mint-300',
        border: 'border-mint-500/30',
        aurora1: 'bg-mint-600/40',
        aurora2: 'bg-neon-600/40',
        pulse: 'bg-mint-500'
      },
      gradient: 'from-mint-300 to-neon-300',
      icon: BoltIcon
    }
  ]

   const current = slides[activeSlide]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Auto-play.
  // A per-slide timeout rather than one fixed interval, so the dwell clock
  // restarts whenever the active slide changes — a slide reached by clicking a
  // pagination dot still gets its full time on screen instead of inheriting
  // whatever was left of a shared tick. Every slide keeps the original 6s
  // dwell; the diamond-grid slide additionally gets the length of its staggered
  // entrance, so the sequence always finishes before we rotate away from it.
  useEffect(() => {
    const BASE_DWELL = 6000
    const dwell =
      slides[activeSlide]?.id === 'cogniwide-vision'
        ? VISION_ENTRANCE_MS + BASE_DWELL
        : BASE_DWELL

    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, dwell)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSlide])

  // To prevent hydration mismatch, we can ensure we only render animations client-side
  // or pass initial={false} to AnimatePresence
  return (
    <section suppressHydrationWarning className="cw-hero relative w-full min-h-[90vh] flex items-center bg-transparent overflow-hidden">

      {/* Dark Vibrant Global Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neon-400/10 via-transparent to-transparent pointer-events-none"></div>

         {/* 1. Aurora Background Effect (CSS-based, smooth, clean) */}
         <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none mix-blend-screen opacity-60">
            <div className={`absolute -top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full ${current.theme.pulse} blur-[120px] animate-pulse-slow transition-colors duration-1000`} />
            <div className={`absolute top-[20%] -right-[20%] w-[60%] h-[80%] rounded-full ${current.theme.pulse} blur-[120px] animate-pulse-slower transition-colors duration-1000 opacity-50`} />
         </div>
      {/* 1. Aurora Background Effect (CSS-based, smooth, clean) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none mix-blend-screen opacity-60">
        <div className={`absolute -top-[50%] -left-[20%] w-[80%] h-[80%] rounded-full ${current.theme.pulse} blur-[120px] animate-pulse-slow transition-colors duration-1000`} />
        <div className={`absolute top-[20%] -right-[20%] w-[60%] h-[80%] rounded-full ${current.theme.pulse} blur-[120px] animate-pulse-slower transition-colors duration-1000 opacity-50`} />
      </div>

      {/* Horizon glow anchoring the hero to the section below it */}
      <div className="cw-hero-horizon pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="max-w-2xl">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Badge */}
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${current.theme.bg} ${current.theme.text} border ${current.theme.border} mb-6 backdrop-blur-md shadow-lg`}>
                  <current.icon className="w-4 h-4" />
                  {current.badge}
                </span>

                {/* Title */}
                <h1
                  className="cw-enter cw-enter-2 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-sm"
                  style={{ textWrap: 'balance' }}
                >
                  {current.title.split(' ').map((word, i) => (
                    <span key={i}>
                       <span className={i === 1 || i === 2 ? `cw-glow-gradient text-transparent bg-clip-text bg-gradient-to-r ${current.gradient}` : ''}>
                          {word}
                       </span>
                       {i !== current.title.split(' ').length - 1 && ' '}
                    </span>
                  ))}
                </h1>

                {/* Subtitle */}
                <p className="cw-enter cw-enter-3 text-lg sm:text-xl text-night-300 mb-10 leading-relaxed font-light">
                  {current.subtitle}
                </p>

                {/* CTAs */}
                <div className="cw-enter cw-enter-4 flex flex-wrap gap-4">
                  <Link
                    href={current.cta.href}
                    data-cw-magnetic="0.3"
                    className="cw-btn cw-btn-primary cw-btn-pulse px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 group"
                  >
                    {current.cta.text}
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    data-cw-magnetic="0.22"
                    className="cw-btn cw-btn-ghost px-8 py-4 rounded-xl font-semibold text-lg"
                  >
                    Contact Sales
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="cw-enter cw-enter-5 flex gap-3 mt-12">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`cw-dot h-2 rounded-full transition-all duration-300 ${
                    activeSlide === idx ? 'w-8 cw-dot--on' : 'w-2 bg-mint-300/25 hover:bg-mint-300/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Glassmorphic Composition */}
          <div className="cw-enter cw-enter-4 cw-perspective relative h-[600px] hidden lg:flex items-center justify-center">
             <AnimatePresence mode="wait" initial={false}>
               {current.isSolid ? (
                 <motion.div
                   key={activeSlide}
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.6 }}
                   className="relative w-full h-full flex flex-col items-center justify-center z-10"
                 >
                   {/* Background Glowing Orbs (Floating without container) */}
                   <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-500/30 rounded-full blur-[100px] pointer-events-none" />
                   <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-500/30 rounded-full blur-[100px] pointer-events-none" />

                   {/* Diamond Grid Container */}
                   <div className="relative w-[340px] h-[340px] grid grid-cols-2 gap-6 rotate-45 z-10 mb-8 mt-4">
                     
                     {/*
                       Each diamond is wrapped in a motion.div that owns the entrance
                       only. The diamond itself is left untouched so its Tailwind
                       `hover:` transform keeps working — Framer Motion writes an
                       inline `transform`, which would otherwise out-rank the hover
                       utility and silently kill it. The wrapper is the grid item, so
                       the diamond takes `w-full h-full` to fill the same cell as before.
                     */}

                     {/* Top Diamond (AI) */}
                     <Entrance
                       from={{ ...DIAMOND_DROP, scale: 0.75 }}
                       duration={DIAMOND_DURATION}
                       delay={DIAMOND_START + 0 * DIAMOND_STAGGER}
                     >
                     <div className="cw-diamond w-full h-full bg-gradient-to-br from-neon-500/85 to-neon-800/90 rounded-3xl flex items-center justify-center group hover:-translate-y-3 hover:-translate-x-3 transition-transform duration-300">
                       <div className="-rotate-45 flex flex-col items-center justify-center p-4">
                         <SparklesIcon className="cw-icon-float w-10 h-10 text-white mb-2 drop-shadow-md" />
                         <h3 className="text-white font-bold text-sm text-center leading-tight drop-shadow-md">AI<br/>Transformation</h3>
                       </div>
                     </div>
                     </Entrance>

                     {/* Right Diamond (Digital) */}
                     <Entrance
                       from={{ ...DIAMOND_DROP, scale: 0.75 }}
                       duration={DIAMOND_DURATION}
                       delay={DIAMOND_START + 1 * DIAMOND_STAGGER}
                     >
                     <div className="cw-diamond w-full h-full bg-gradient-to-bl from-mint-500/85 to-mint-800/90 rounded-3xl flex items-center justify-center group hover:-translate-y-3 hover:translate-x-3 transition-transform duration-300">
                       <div className="-rotate-45 flex flex-col items-center justify-center p-4">
                         <GlobeAltIcon className="cw-icon-float w-10 h-10 text-white mb-2 drop-shadow-md" />
                         <h3 className="text-white font-bold text-sm text-center leading-tight drop-shadow-md">Digital<br/>Transformation</h3>
                       </div>
                     </div>
                     </Entrance>

                              {/* Left Diamond (Product) */}
                              <Entrance
                       from={{ ...DIAMOND_DROP, scale: 0.75 }}
                       duration={DIAMOND_DURATION}
                       delay={DIAMOND_START + 2 * DIAMOND_STAGGER}
                     >
                     <div className="cw-diamond w-full h-full bg-gradient-to-tr from-neon-400/85 to-neon-700/90 rounded-3xl flex items-center justify-center group hover:translate-y-3 hover:-translate-x-3 transition-transform duration-300">
                                 <div className="-rotate-45 flex flex-col items-center justify-center p-4">
                                    <CodeBracketIcon className="cw-icon-float w-10 h-10 text-white mb-2 drop-shadow-md" />
                                    <h3 className="text-white font-bold text-sm text-center leading-tight drop-shadow-md">Product Dev<br />& Testing</h3>
                                 </div>
                              </div>
                     </Entrance>

                     {/* Bottom Diamond (Data) */}
                     <Entrance
                       from={{ ...DIAMOND_DROP, scale: 0.75 }}
                       duration={DIAMOND_DURATION}
                       delay={DIAMOND_START + 3 * DIAMOND_STAGGER}
                     >
                     <div className="cw-diamond w-full h-full bg-gradient-to-tl from-neon-500/85 to-neon-800/90 rounded-3xl flex items-center justify-center group hover:translate-y-3 hover:translate-x-3 transition-transform duration-300">
                       <div className="-rotate-45 flex flex-col items-center justify-center p-4">
                         <ChartBarIcon className="cw-icon-float w-10 h-10 text-white mb-2 drop-shadow-md" />
                         <h3 className="text-white font-bold text-sm text-center leading-tight drop-shadow-md">Data<br/>Engineering</h3>
                       </div>
                     </div>
                     </Entrance>

                     {/* Central Hub Node — lands first, before the diamonds drop in.
                         Centring stays on the outer div and the hover scale stays on the
                         inner one, so neither collides with the motion transform. */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                       <Entrance from={{ scale: 0.4 }} duration={HUB_DURATION} delay={HUB_DELAY}>
                         <div className="cw-hub w-24 h-24 rounded-3xl flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                           <div className="-rotate-45 flex flex-col items-center">
                             <span className="font-black text-night-950 text-2xl leading-none">AI</span>
                             <span className="font-bold text-neon-900 text-[9px] tracking-widest mt-1">CORE</span>
                           </div>
                         </div>
                       </Entrance>
                     </div>
                   </div>

                   {/* Floating End-to-End badge */}
                   <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
                     <div className="cw-glass cw-float-pill rounded-full px-6 py-2.5 text-xs font-bold text-white flex items-center gap-2 whitespace-nowrap">
                       <CheckCircleIcon className="w-5 h-5 text-neon-400" />
                       End-to-End Enterprise Solutions
                     </div>
                   </div>

                        </motion.div>
                     ) : (
                        <motion.div
                           key={activeSlide}
                           initial={{ opacity: 0, rotateY: 10, scale: 0.95 }}
                           animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                           exit={{ opacity: 0, rotateY: -10, scale: 0.95 }}
                           transition={{ duration: 0.6 }}
                           className="relative w-full h-full flex items-center justify-center"
                        >
                           {/* Background Blob for Depth */}
                           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr ${current.gradient} opacity-10 rounded-full blur-[100px]`} />

                   {/* Main Glass Card */}
                  <div className="cw-glass cw-gradient-border cw-topline cw-tilt relative w-[450px] h-[550px] rounded-[2.5rem] p-8 flex flex-col justify-between z-10">

                   {/* Mascot — peeks over the top edge of the CogniAssist panel only.
                       The wrapper sits directly above the card (bottom-full) and hides its
                       own overflow, so the wrapper's bottom edge — which coincides exactly
                       with the card's top border — cleanly cuts the robot's lower half.
                       The static offset and the bob live on separate elements because
                       Framer Motion writes an inline transform that would otherwise
                       override a Tailwind translate utility. */}
                   {current.id === 'cogniassist' && (
                     <div className="pointer-events-none absolute inset-x-0 bottom-full h-[60px] overflow-hidden z-20" aria-hidden="true">
                       <div className="absolute bottom-0 right-16 translate-y-[34%]">
                         <motion.div
                           animate={{ y: [0, -7, 0] }}
                           transition={{ duration: 3.6, ease: 'easeInOut', repeat: Infinity }}
                         >
                           {/* soft blue halo, matching the panel's glow aesthetic */}
                           <div className="absolute inset-0 -m-3 rounded-full bg-[#8B5CF6]/25 blur-xl" />
                           <svg
                             viewBox="0 0 96 96"
                             className="relative w-20 h-20 drop-shadow-[0_6px_18px_rgba(139,92,246,0.55)]"
                           >
                             <defs>
                               <linearGradient id="cwBotShell" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="0%" stopColor="#ffffff" />
                                 <stop offset="100%" stopColor="#C9BFF0" />
                               </linearGradient>
                               <linearGradient id="cwBotVisor" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="0%" stopColor="#150E2E" />
                                 <stop offset="100%" stopColor="#0B0A14" />
                               </linearGradient>
                             </defs>

                             {/* antenna */}
                             <path d="M48 17V8" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />
                             <circle cx="48" cy="5.5" r="3.8" fill="#8B5CF6" />

                             {/* ear pieces */}
                             <rect x="9" y="36" width="11" height="21" rx="5.5" fill="url(#cwBotShell)" />
                             <rect x="76" y="36" width="11" height="21" rx="5.5" fill="url(#cwBotShell)" />

                             {/* body hint — mostly hidden behind the card */}
                             <rect x="28" y="69" width="40" height="27" rx="13" fill="url(#cwBotShell)" />

                             {/* head */}
                             <rect x="18" y="16" width="60" height="55" rx="24" fill="url(#cwBotShell)" />

                             {/* visor */}
                             <rect x="26" y="27" width="44" height="30" rx="15" fill="url(#cwBotVisor)" />

                             {/* eyes */}
                             <circle cx="39" cy="42" r="6" fill="#8B5CF6" />
                             <circle cx="57" cy="42" r="6" fill="#8B5CF6" />
                             <circle cx="41" cy="40" r="2" fill="#ffffff" />
                             <circle cx="59" cy="40" r="2" fill="#ffffff" />

                             {/* smile */}
                             <path
                               d="M42 51q6 4 12 0"
                               stroke="#C4B5FD"
                               strokeWidth="2"
                               strokeLinecap="round"
                               fill="none"
                               opacity="0.85"
                             />
                           </svg>
                         </motion.div>
                       </div>
                     </div>
                   )}

                   {/* Header */}
                   <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                         <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${current.gradient} flex items-center justify-center text-white shadow-lg`}>
                           <current.icon className="w-6 h-6" />
                         </div>
                         <div>
                           <div className="text-lg font-bold text-white">{current.badge}</div>
                         </div>
                      </div>
                      <div className="flex gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-night-700" />
                         <div className="w-2.5 h-2.5 rounded-full bg-night-700" />
                         <div className="w-2.5 h-2.5 rounded-full bg-night-700" />
                      </div>
                   </div>

                    {/* DYNAMIC CONTENT BASED ON SLIDE */}
                    <div className="flex-1 relative">
                      
                      {/* 1. PLATFORM (Enterprise AI Command Center - Refined) */}
                      {current.id === 'platform' && (
                        <div className="flex flex-col h-full gap-3 text-night-200">
                           
                           {/* Top Status Bar */}
                           <div className="flex justify-between items-center px-1">
                              <div className="flex items-center gap-2">
                                 <div className="w-2 h-2 rounded-full bg-mint-400 animate-pulse" />
                                 <span className="text-[10px] font-bold text-mint-100 uppercase tracking-wider">Enterprise AI Platform</span>
                              </div>
                              <div className="flex gap-2">
                                 <span className="text-[9px] font-mono text-night-400 bg-night-800/50 px-1.5 py-0.5 rounded border border-night-700/50">v4.2.0 Stable</span>
                                 <span className="text-[9px] font-mono text-neon-400 bg-neon-950/50 px-1.5 py-0.5 rounded border border-neon-800/50">System Healthy</span>
                              </div>
                           </div>

                           {/* Metric Cards Row */}
                           <div className="grid grid-cols-3 gap-2">
                              {[
                                 { label: 'Active Agents', val: '24', icon: CpuChipIcon, color: 'text-mint-400', bg: 'bg-mint-950/50', border: 'border-mint-800/50' },
                                 { label: 'Secure Pipelines', val: '100%', icon: ShieldCheckIcon, color: 'text-neon-400', bg: 'bg-neon-950/50', border: 'border-neon-800/50' },
                                 { label: 'Data Quality', val: '99.9%', icon: ChartBarIcon, color: 'text-neon-400', bg: 'bg-neon-950/50', border: 'border-neon-800/50' }
                              ].map((stat, i) => (
                                 <div key={i} className={`bg-night-800/40 p-2.5 rounded-xl border border-night-700/50 shadow-sm flex flex-col gap-1 hover:bg-night-800/60 transition-colors`}>
                                    <div className="flex justify-between items-start">
                                       <div className={`p-1.5 rounded-lg ${stat.bg} border ${stat.border}`}>
                                          <stat.icon className={`w-3.5 h-3.5 ${stat.color}`} />
                                       </div>
                                       <ArrowTrendingUpIcon className="w-3 h-3 text-neon-400" />
                                    </div>
                                    <div>
                                       <div className="text-lg font-bold text-white leading-none mb-0.5">{stat.val}</div>
                                       <div className="text-[9px] text-night-400 font-medium">{stat.label}</div>
                                    </div>
                                 </div>
                              ))}
                           </div>

                           {/* Main Topology Monitor */}
                           <div className="flex-1 bg-night-900/50 rounded-xl border border-night-700/50 p-1 relative overflow-hidden flex flex-col shadow-inner group">
                              <div className="absolute inset-0 cw-inner-grid [mask-image:linear-gradient(0deg,black,transparent)]" />
                              
                              {/* Header */}
                              <div className="flex justify-between items-center px-3 py-2 relative z-10 border-b border-night-800/50">
                                 <span className="text-[10px] font-semibold text-night-300 flex items-center gap-1.5">
                                    <GlobeAltIcon className="w-3 h-3 text-night-500" />
                                    Live Ecosystem Map
                                 </span>
                                 <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-night-600" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-night-600" />
                                 </div>
                              </div>

                              {/* Visualization */}
                              <div className="flex-1 relative z-10">
                                 {/* Central Hub */}
                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                    <div className="relative">
                                       <div className="absolute inset-0 bg-mint-500/30 blur-xl rounded-full animate-pulse-slow" />
                                       <div className="w-16 h-16 bg-night-800 rounded-full shadow-lg border-4 border-night-700 flex items-center justify-center relative z-10">
                                          <SparklesIcon className="w-8 h-8 text-mint-400" />
                                       </div>
                                       {/* Orbiting Ring */}
                                       <svg className="absolute inset-0 w-full h-full -m-4 overflow-visible animate-spin-slow-reverse">
                                          <circle cx="48" cy="48" r="32" fill="none" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" className="opacity-50" />
                                       </svg>
                                    </div>
                                    <div className="mt-2 text-[10px] font-bold text-white bg-night-800/80 px-2 py-0.5 rounded-full border border-night-700 shadow-sm backdrop-blur-sm">Unified Core</div>
                                 </div>

                                 {/* Connected Nodes */}
                                 {[
                                    { label: 'ERP', icon: ServerIcon, x: '20%', y: '20%', color: 'text-neon-400', bg: 'bg-neon-950/80', border: 'border-neon-800/50' },
                                    { label: 'CRM', icon: UserGroupIcon, x: '80%', y: '20%', color: 'text-mint-400', bg: 'bg-mint-950/80', border: 'border-mint-800/50' },
                                    { label: 'Cloud', icon: CloudIcon, x: '20%', y: '80%', color: 'text-mint-400', bg: 'bg-mint-950/80', border: 'border-mint-800/50' },
                                    { label: 'DevOps', icon: CommandLineIcon, x: '80%', y: '80%', color: 'text-neon-400', bg: 'bg-neon-950/80', border: 'border-neon-800/50' },
                                 ].map((node, i) => (
                                    <motion.div
                                       key={i}
                                       className="absolute flex flex-col items-center gap-1"
                                       style={{ left: node.x, top: node.y }}
                                       initial={{ scale: 0 }}
                                       animate={{ scale: 1 }}
                                       transition={{ delay: i * 0.1 }}
                                    >
                                       {/* Connection Line */}
                                       <svg className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none">
                                          <line 
                                             x1="100" y1="100" 
                                             x2={node.x === '20%' ? (node.y === '20%' ? '160' : '160') : (node.y === '20%' ? '40' : '40')} 
                                             y2={node.y === '20%' ? (node.x === '20%' ? '160' : '160') : (node.x === '20%' ? '40' : '40')} 
                                             stroke="#29263A" 
                                             strokeWidth="1" 
                                             strokeDasharray="4 4"
                                          />
                                          {/* Animated Packet */}
                                          <motion.circle 
                                             r="3" 
                                             fill="#8B5CF6"
                                             animate={{ 
                                                cx: ["100", node.x === '20%' ? (node.y === '20%' ? '160' : '160') : (node.y === '20%' ? '40' : '40')],
                                                cy: ["100", node.y === '20%' ? (node.x === '20%' ? '160' : '160') : (node.x === '20%' ? '40' : '40')],
                                                opacity: [0, 1, 0]
                                             }}
                                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                          />
                                       </svg>

                                       <div className={`w-10 h-10 ${node.bg} rounded-xl border ${node.border} shadow-sm flex items-center justify-center relative group-hover:scale-110 transition-transform`}>
                                          <node.icon className={`w-5 h-5 ${node.color}`} />
                                          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-neon-400 rounded-full border-2 border-night-800" />
                                       </div>
                                       <span className="text-[9px] font-semibold text-night-300 bg-night-800/80 px-1.5 py-0.5 rounded border border-night-700/50 backdrop-blur-sm">{node.label}</span>
                                    </motion.div>
                                 ))}
                              </div>
                           </div>

                           {/* Enterprise Readiness Footer */}
                           <div className="bg-night-800/40 rounded-xl p-3 border border-night-700/50 shadow-sm flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                 <div className="flex items-center gap-1.5">
                                    <ShieldCheckIcon className="w-3.5 h-3.5 text-night-400" />
                                    <span className="text-[10px] font-semibold text-night-300">Enterprise Ready</span>
                                 </div>
                                 <div className="h-3 w-[1px] bg-night-700" />
                                 <div className="flex gap-2">
                                    <span className="text-[9px] font-mono text-night-400 bg-night-900/50 px-1.5 py-0.5 rounded border border-night-700/50">SOC2 Type II</span>
                                    <span className="text-[9px] font-mono text-night-400 bg-night-900/50 px-1.5 py-0.5 rounded border border-night-700/50">ISO 27001</span>
                                    <span className="text-[9px] font-mono text-night-400 bg-night-900/50 px-1.5 py-0.5 rounded border border-night-700/50">GDPR</span>
                                 </div>
                              </div>
                              <div className="flex items-center gap-2">
                                 <span className="text-[9px] text-night-500 font-medium">Uptime</span>
                                 <span className="text-[10px] font-bold text-neon-400">99.99%</span>
                              </div>
                           </div>

                                    </div>
                                 )}

                      {/* 2. COGNIASSIST (Agentic Control Plane) */}
                      {current.id === 'cogniassist' && (
                        <div className="flex flex-col h-full gap-3 text-night-200">
                           {/* 1. Agent Control Center (List of Live Agents) */}
                           <div className="flex flex-col gap-2">
                              <div className="flex justify-between items-center px-1 mb-1">
                                 <div className="text-[10px] font-semibold text-mint-400 uppercase tracking-wider flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-mint-500 animate-pulse" />
                                    Live Agents (5)
                                 </div>
                                 <div className="text-[9px] text-night-400 font-mono bg-night-800/50 px-1.5 py-0.5 rounded border border-night-700/50">Orchestrator: Active</div>
                              </div>
                              {[
                                { name: 'IT Incident Resolution Agent', status: 'Analyzing Logs', state: 'thinking', conf: '98%', type: 'Pro-Code' },
                                { name: 'Procurement Intel Agent', status: 'Verifying Vendor', state: 'acting', conf: '100%', type: 'No-Code' },
                                { name: 'HR Policy Agent', status: 'Drafting Response', state: 'acting', conf: '95%', type: 'No-Code' }
                              ].map((agent, i) => (
                                <motion.div 
                                  key={i}
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="group bg-night-800/40 p-2.5 rounded-xl border border-night-700/50 hover:bg-night-800/60 transition-all shadow-sm flex items-center gap-3"
                                >
                                   <div className={`w-8 h-8 rounded-lg ${agent.state === 'thinking' ? 'bg-mint-950/50 text-mint-400' : 'bg-mint-950/50 text-mint-400'} flex items-center justify-center relative border ${agent.state === 'thinking' ? 'border-mint-800/50' : 'border-mint-800/50'}`}>
                                      {agent.state === 'thinking' ? <SparklesIcon className="w-4 h-4 animate-pulse" /> : <BoltIcon className="w-4 h-4" />}
                                      <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-night-800 ${agent.state === 'thinking' ? 'bg-mint-500' : 'bg-mint-500'}`} />
                                   </div>
                                   <div className="flex-1 min-w-0">
                                      <div className="flex justify-between items-center mb-0.5">
                                         <span className="text-xs font-bold text-white truncate">{agent.name}</span>
                                         <span className={`text-[8px] px-1.5 rounded border ${agent.type === 'No-Code' ? 'bg-neon-950/50 text-neon-400 border-neon-800/50' : 'bg-neon-950/50 text-neon-400 border-neon-800/50'}`}>
                                            {agent.type}
                                         </span>
                                      </div>
                                      <div className="flex justify-between items-center">
                                         <span className="text-[10px] text-night-400 truncate">{agent.status}</span>
                                         <span className="text-[9px] font-mono text-night-500">Conf: <span className="text-night-300 font-bold">{agent.conf}</span></span>
                                      </div>
                                   </div>
                                </motion.div>
                              ))}
                           </div>

                           {/* 2. Orchestration & Intelligence Grid */}
                           <div className="grid grid-cols-2 gap-3 flex-1">
                              {/* Orchestration Layer */}
                              <div className="col-span-2 bg-gradient-to-r from-night-800/40 to-night-800/20 p-2.5 rounded-xl border border-night-700/50 shadow-sm flex items-center justify-between gap-4">
                                 <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-night-900/50 rounded-md border border-night-700/50">
                                       <ArrowPathIcon className="w-3.5 h-3.5 text-night-400" />
                                    </div>
                                    <div className="flex flex-col">
                                       <span className="text-[10px] font-bold text-night-200">Workflow Handoff</span>
                                       <span className="text-[9px] text-night-400">IT Agent → Approval Bot</span>
                                    </div>
                                 </div>
                                 <div className="flex-1 h-1 bg-night-700/50 rounded-full overflow-hidden">
                                    <motion.div 
                                       initial={{ width: "0%" }}
                                       animate={{ width: "60%" }}
                                       transition={{ duration: 2, repeat: Infinity }}
                                       className="h-full bg-night-400 rounded-full"
                                    />
                                 </div>
                              </div>

                              {/* Prompt & LLM Layer */}
                              <div className="bg-night-800/40 p-3 rounded-xl border border-night-700/50 shadow-sm flex flex-col gap-2">
                                 <div className="flex items-center gap-1.5 mb-1">
                                    <ChatBubbleLeftRightIcon className="w-3.5 h-3.5 text-mint-400" />
                                    <span className="text-[10px] font-bold text-night-200">Multi-LLM Runtime</span>
                                 </div>
                                 <div className="flex gap-1.5">
                                    <div className="h-1.5 flex-1 bg-mint-500 rounded-full opacity-80" />
                                    <div className="h-1.5 w-4 bg-night-600/50 rounded-full" />
                                    <div className="h-1.5 w-4 bg-night-600/50 rounded-full" />
                                 </div>
                                 <div className="text-[9px] text-night-400 mt-auto">
                                    Using <span className="font-semibold text-mint-400">GPT-4o</span> (Primary)
                                 </div>
                              </div>

                              {/* Guardrails & Governance */}
                              <div className="bg-night-800/40 p-3 rounded-xl border border-night-700/50 shadow-sm flex flex-col gap-2">
                                 <div className="flex items-center gap-1.5 mb-1">
                                    <LockClosedIcon className="w-3.5 h-3.5 text-neon-400" />
                                    <span className="text-[10px] font-bold text-night-200">Guardrails</span>
                                 </div>
                                 <div className="flex flex-col gap-1.5">
                                    <div className="flex justify-between items-center text-[9px] text-night-300 bg-neon-950/30 px-1.5 py-1 rounded border border-neon-800/30">
                                       <span>PII Filter</span>
                                       <CheckCircleIcon className="w-3 h-3 text-neon-400" />
                                    </div>
                                    <div className="flex justify-between items-center text-[9px] text-night-300 bg-neon-950/30 px-1.5 py-1 rounded border border-neon-800/30">
                                       <span>Policy Check</span>
                                       <CheckCircleIcon className="w-3 h-3 text-neon-400" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                      )}

                      {/* 3. COGNILOOM (Detailed Pipeline) */}
                      {current.id === 'cogniloom' && (
                        <div className="flex flex-col h-full gap-4 text-night-200">
                           {/* 1. Unified Pipeline Timeline */}
                           <div className="bg-night-800/40 rounded-xl p-3 border border-night-700/50 shadow-sm">
                              <div className="flex justify-between items-center mb-2">
                                 <div className="text-[10px] font-semibold text-neon-400 uppercase tracking-wider flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-neon-500 animate-pulse" />
                                    Pipeline Active
                                 </div>
                                 <div className="text-[10px] text-night-400 font-mono">ID: #8392-AC</div>
                              </div>
                              <div className="flex justify-between items-center relative px-1">
                                 {['Build', 'Test', 'Secure', 'Deploy', 'Operate'].map((step, i) => (
                                    <div key={step} className="flex flex-col items-center z-10 gap-1">
                                       <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border transition-all duration-300 ${
                                          i <= 2 ? 'bg-neon-950/80 border-neon-500/50 text-neon-300 shadow-md' : 
                                          i === 3 ? 'bg-night-800/80 border-neon-500/50 text-neon-400 animate-pulse shadow-sm' : 
                                          'bg-night-800/50 border-night-700/50 text-night-500'
                                       }`}>
                                          {i <= 2 ? <CheckCircleIcon className="w-3.5 h-3.5" /> : i === 3 ? <ArrowPathIcon className="w-3.5 h-3.5 animate-spin" /> : i + 1}
                                       </div>
                                       <span className={`text-[8px] font-medium tracking-wide ${i <= 3 ? 'text-night-300' : 'text-night-500'}`}>{step}</span>
                                    </div>
                                 ))}
                                 {/* Connecting Line */}
                                 <div className="absolute top-3 left-0 w-full h-0.5 bg-night-700/50 -z-0">
                                    <motion.div 
                                       initial={{ width: "0%" }}
                                       animate={{ width: "75%" }}
                                       transition={{ duration: 1.5, ease: "easeInOut" }}
                                       className="h-full bg-gradient-to-r from-neon-500 to-mint-500" 
                                    />
                                 </div>
                              </div>
                           </div>
                       
                           {/* 2. AI Insights & Security (Grid) */}
                           <div className="grid grid-cols-2 gap-3 flex-1">
                              {/* AI Insights */}
                              <div className="bg-gradient-to-br from-mint-950/40 to-neon-950/40 rounded-xl p-3 border border-mint-800/50 flex flex-col gap-2 relative overflow-hidden group shadow-sm">
                                 <div className="absolute inset-0 bg-mint-950/30 group-hover:bg-mint-900/30 transition-colors" />
                                 <div className="flex items-center gap-2 mb-1 relative z-10">
                                    <SparklesIcon className="w-4 h-4 text-mint-400" />
                                    <span className="text-xs font-semibold text-mint-300">AI Insights</span>
                                 </div>
                                 <div className="bg-night-800/60 rounded p-2 border border-night-700/50 relative z-10 hover:border-mint-500/50 transition-colors shadow-sm">
                                    <div className="flex justify-between items-start mb-1">
                                       <span className="text-[10px] text-night-300 font-medium">Optimization</span>
                                       <span className="text-[9px] bg-mint-950/50 text-mint-400 px-1.5 py-0.5 rounded border border-mint-800/50">98% Conf.</span>
                                    </div>
                                    <div className="text-[9px] text-night-400 leading-tight">Docker image size reduction possible (-40%)</div>
                                 </div>
                                 <div className="bg-night-800/60 rounded p-2 border border-night-700/50 relative z-10 hover:border-neon-500/50 transition-colors shadow-sm">
                                    <div className="flex justify-between items-start">
                                       <span className="text-[10px] text-neon-300 font-medium">Policy Drift</span>
                                       <span className="text-[9px] bg-neon-950/50 text-neon-400 px-1.5 py-0.5 rounded border border-neon-800/50">High</span>
                                    </div>
                                 </div>
                              </div>
                       
                              {/* Security Intelligence */}
                              <div className="bg-night-800/40 rounded-xl p-3 border border-night-700/50 flex flex-col gap-2 relative group shadow-sm">
                                 <div className="flex items-center gap-2 mb-1">
                                    <ShieldCheckIcon className="w-4 h-4 text-mint-400" />
                                    <span className="text-xs font-semibold text-mint-300">Security</span>
                                 </div>
                                 <div className="flex justify-between items-center bg-night-800/40 p-2 rounded border border-night-700/50 group-hover:border-mint-500/50 transition-colors">
                                    <div className="flex flex-col items-center">
                                       <span className="text-xl font-bold text-night-200">0</span>
                                       <span className="text-[8px] text-night-400 uppercase tracking-wider">Critical</span>
                                    </div>
                                    <div className="h-8 w-[1px] bg-night-700/50" />
                                    <div className="flex flex-col items-center">
                                       <span className="text-xl font-bold text-mint-400">100%</span>
                                       <span className="text-[8px] text-night-400 uppercase tracking-wider">Secure</span>
                                    </div>
                                 </div>
                                 <div className="flex gap-1.5 mt-auto">
                                    <span className="text-[8px] px-2 py-1 bg-night-800/50 border border-night-700/50 rounded text-night-400 flex-1 text-center shadow-sm">SOC2</span>
                                    <span className="text-[8px] px-2 py-1 bg-night-800/50 border border-night-700/50 rounded text-night-400 flex-1 text-center shadow-sm">ISO</span>
                                 </div>
                              </div>
                       
                              {/* Infrastructure */}
                              <div className="bg-night-800/40 rounded-xl p-3 border border-night-700/50 col-span-2 flex items-center justify-between group hover:bg-night-800/60 transition-colors shadow-sm">
                                 <div className="flex items-center gap-3">
                                    <div className="p-2 bg-neon-950/50 rounded-lg border border-neon-800/50">
                                       <GlobeAltIcon className="w-4 h-4 text-neon-400" />
                                    </div>
                                    <div>
                                       <div className="text-xs font-semibold text-night-200">Infrastructure</div>
                                       <div className="text-[10px] text-night-400 flex items-center gap-1">
                                          Provisioning: 
                                          <span className="text-neon-400 font-medium">Auto-Remediated</span>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="text-right">
                                    <div className="text-xs font-mono text-neon-400 bg-neon-950/50 px-2 py-0.5 rounded border border-neon-800/50">us-east-1</div>
                                    <div className="text-[10px] text-neon-400 flex items-center gap-1.5 justify-end mt-1">
                                       <div className="w-1.5 h-1.5 rounded-full bg-neon-500 animate-pulse shadow-sm" />
                                       Healthy
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                      )}

                      {/* 4. COGNIAURA (Intelligent Data Platform) */}
                      {current.id === 'cogniaura' && (
                        <div className="flex flex-col h-full gap-3 text-night-200">
                           
                           {/* 1. PortBI: Intelligent Migration */}
                           <div className="bg-night-800/40 rounded-xl p-3 border border-night-700/50 shadow-sm relative overflow-hidden group">
                              <div className="flex justify-between items-center mb-2">
                                 <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-neon-950/50 rounded-lg">
                                       <ArrowPathIcon className="w-3.5 h-3.5 text-neon-400" />
                                    </div>
                                    <span className="text-[10px] font-bold text-night-200 uppercase tracking-wider">PortBI</span>
                                 </div>
                                 <div className="flex items-center gap-1.5 bg-neon-950/30 px-2 py-0.5 rounded-full border border-neon-800/50">
                                    <SparklesIcon className="w-3 h-3 text-neon-400 animate-pulse" />
                                    <span className="text-[9px] font-semibold text-neon-300">Migration Agent Active</span>
                                 </div>
                              </div>
                              
                              <div className="flex items-center justify-between relative px-4 py-2 bg-night-800/40 rounded-lg border border-night-700/50">
                                 {/* Source */}
                                 <div className="flex flex-col items-center gap-1">
                                    <div className="w-8 h-8 bg-night-800 rounded-lg shadow-sm border border-night-700/50 flex items-center justify-center text-[8px] font-bold text-night-400">
                                       TBL
                                    </div>
                                    <span className="text-[8px] text-night-400">Legacy BI</span>
                                 </div>

                                 {/* Animated Flow */}
                                 <div className="flex-1 px-4 flex flex-col items-center relative">
                                    <div className="w-full h-1 bg-night-700/50 rounded-full overflow-hidden">
                                       <motion.div 
                                          initial={{ x: '-100%' }}
                                          animate={{ x: '100%' }}
                                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                          className="w-1/2 h-full bg-neon-500 rounded-full"
                                       />
                                    </div>
                                    <div className="absolute -top-3 bg-night-800 px-2 py-0.5 rounded-full border border-neon-800/50 shadow-sm flex items-center gap-1">
                                       <span className="text-[8px] font-medium text-neon-400">Auto-Mapping</span>
                                    </div>
                                 </div>

                                 {/* Target */}
                                 <div className="flex flex-col items-center gap-1">
                                    <div className="w-8 h-8 bg-night-800 rounded-lg shadow-sm border border-night-700/50 flex items-center justify-center text-[8px] font-bold text-neon-400">
                                       PBI
                                    </div>
                                    <span className="text-[8px] text-night-400">PowerBI</span>
                                 </div>
                              </div>
                           </div>

                           {/* Split Row */}
                           <div className="grid grid-cols-2 gap-3 flex-1">
                              
                              {/* 2. Assist BI: Admin Copilot & Scheduler */}
                              <div className="bg-night-800/40 rounded-xl p-2.5 border border-night-700/50 shadow-sm flex flex-col gap-2 relative group overflow-hidden">
                                 <div className="absolute inset-0 bg-neon-950/20 -z-10 group-hover:bg-neon-950/40 transition-colors" />
                                 <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-neon-950/50 rounded-lg">
                                          <WrenchScrewdriverIcon className="w-3.5 h-3.5 text-neon-400" />
                                       </div>
                                       <span className="text-[10px] font-bold text-night-200 uppercase tracking-wider">Assist BI</span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-night-800 px-1.5 py-0.5 rounded border border-neon-800/50">
                                       <BoltIcon className="w-2.5 h-2.5 text-neon-400" />
                                       <span className="text-[8px] font-medium text-neon-400">Active</span>
                                    </div>
                                 </div>
                                 
                                 <div className="flex-1 flex flex-col gap-1.5">
                                    {/* Agent 1: Resource Optimizer */}
                                    <div className="bg-night-800/60 rounded-lg p-1.5 border border-night-700/50 shadow-sm flex items-center gap-2">
                                       <div className="w-5 h-5 rounded bg-neon-950/30 flex items-center justify-center border border-neon-800/50">
                                          <CpuChipIcon className="w-3 h-3 text-neon-400" />
                                       </div>
                                       <div className="flex-1 min-w-0">
                                          <div className="flex justify-between items-center">
                                             <span className="text-[9px] font-bold text-night-200">Admin Copilot</span>
                                             <span className="text-[8px] text-neon-400 font-bold">+45% Perf</span>
                                          </div>
                                          <div className="h-1 w-full bg-night-700/50 rounded-full mt-1">
                                             <div className="h-full w-[85%] bg-neon-500 rounded-full" />
                                          </div>
                                       </div>
                                    </div>

                                    {/* Agent 2: Smart Scheduler */}
                                    <div className="bg-night-800/60 rounded-lg p-1.5 border border-night-700/50 shadow-sm flex items-center gap-2">
                                       <div className="w-5 h-5 rounded bg-neon-950/30 flex items-center justify-center border border-neon-800/50">
                                          <ClockIcon className="w-3 h-3 text-neon-400" />
                                       </div>
                                       <div className="flex-1 min-w-0">
                                          <div className="text-[9px] font-bold text-night-200">Smart Scheduler</div>
                                          <div className="flex items-center gap-1 text-[8px] text-night-400">
                                             <span className="w-1 h-1 rounded-full bg-neon-500 animate-pulse" />
                                             Rebalancing 12 Jobs
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              {/* 3. MR Craft: Data Stewardship & Sentinel */}
                              <div className="bg-night-800/40 rounded-xl p-2.5 border border-night-700/50 shadow-sm flex flex-col gap-2 relative group overflow-hidden">
                                 <div className="absolute inset-0 bg-neon-950/20 -z-10 group-hover:bg-neon-950/40 transition-colors" />
                                 <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-neon-950/50 rounded-lg">
                                          <CircleStackIcon className="w-3.5 h-3.5 text-neon-400" />
                                       </div>
                                       <span className="text-[10px] font-bold text-night-200 uppercase tracking-wider">MR Craft</span>
                                    </div>
                                    <div className="flex items-center gap-1 bg-night-800 px-1.5 py-0.5 rounded border border-neon-800/50">
                                       <ShieldCheckIcon className="w-2.5 h-2.5 text-neon-400" />
                                       <span className="text-[8px] font-medium text-neon-400">Guarded</span>
                                    </div>
                                 </div>

                                 <div className="flex-1 flex flex-col gap-1.5">
                                    {/* Agent 1: Data Steward */}
                                    <div className="bg-night-800/60 rounded-lg p-1.5 border border-night-700/50 shadow-sm flex items-center gap-2">
                                       <div className="w-5 h-5 rounded bg-neon-950/30 flex items-center justify-center border border-neon-800/50">
                                          <UserGroupIcon className="w-3 h-3 text-neon-400" />
                                       </div>
                                       <div className="flex-1 min-w-0">
                                          <div className="flex justify-between items-center">
                                             <span className="text-[9px] font-bold text-night-200">Data Steward AI</span>
                                             <span className="text-[8px] text-night-400">Auto-Merge</span>
                                          </div>
                                          <div className="flex gap-1 mt-0.5">
                                             <span className="text-[8px] bg-neon-950/50 text-neon-400 px-1 rounded border border-neon-800/50">2.4k Cleaned</span>
                                          </div>
                                       </div>
                                    </div>

                                    {/* Agent 2: Quality Sentinel */}
                                    <div className="bg-night-800/60 rounded-lg p-1.5 border border-night-700/50 shadow-sm flex items-center gap-2">
                                       <div className="w-5 h-5 rounded bg-neon-950/30 flex items-center justify-center border border-neon-800/50">
                                          <MagnifyingGlassIcon className="w-3 h-3 text-neon-400" />
                                       </div>
                                       <div className="flex-1 min-w-0">
                                          <div className="text-[9px] font-bold text-night-200">Quality Sentinel</div>
                                          <div className="flex items-center gap-1 text-[8px] text-night-400">
                                             <span className="w-1 h-1 rounded-full bg-mint-500 animate-pulse" />
                                             1 Anomaly Blocked
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                           {/* Bottom AI Governance Layer */}
                           <div className="bg-night-900 rounded-xl p-2 border border-night-800 flex items-center justify-between shadow-md">
                              <div className="flex items-center gap-2">
                                 <div className="p-1 bg-night-800 rounded">
                                    <LockClosedIcon className="w-3 h-3 text-mint-400" />
                                 </div>
                                 <div className="flex flex-col">
                                    <span className="text-[9px] font-bold text-mint-100">AI Governance Layer</span>
                                    <span className="text-[8px] text-night-400">Monitoring All Agents</span>
                                 </div>
                              </div>
                              <div className="flex gap-1">
                                 <div className="h-1 w-6 bg-neon-500 rounded-full animate-pulse" />
                                 <div className="h-1 w-1 bg-neon-500 rounded-full" />
                                 <div className="h-1 w-1 bg-neon-500 rounded-full" />
                              </div>
                           </div>

                                    </div>
                                 )}

                      {/* 5. COGNITEST (AI Quality Agent Swarm) */}
                      {current.id === 'cognitest' && (
                        <div className="flex flex-col h-full gap-3 text-night-200">
                           
                           {/* 1. Header: Fleet Status */}
                           <div className="flex justify-between items-center px-1">
                              <div className="flex items-center gap-2">
                                 <div className="p-1.5 bg-mint-950/50 rounded-lg">
                                    <BeakerIcon className="w-3.5 h-3.5 text-mint-400" />
                                 </div>
                                 <span className="text-[10px] font-bold text-night-200 uppercase tracking-wider">AI Quality Fleet</span>
                              </div>
                              <div className="flex gap-2">
                                 <div className="flex items-center gap-1.5 bg-mint-950/30 px-2 py-0.5 rounded-full border border-mint-800/50">
                                    <span className="w-1.5 h-1.5 rounded-full bg-mint-500 animate-pulse" />
                                    <span className="text-[9px] font-semibold text-mint-400">5 Agents Active</span>
                                 </div>
                                 <div className="flex items-center gap-1.5 bg-night-800/40 px-2 py-0.5 rounded-full border border-night-700/50">
                                    <span className="text-[9px] font-mono text-night-400">Build #8921</span>
                                 </div>
                              </div>
                           </div>

                           {/* 2. Agent Grid (Top Half) */}
                           <div className="grid grid-cols-2 gap-2 flex-1">
                              {/* Test Generator Agent */}
                              <div className="bg-night-800/40 rounded-xl p-2.5 border border-night-700/50 shadow-sm flex flex-col gap-1 relative group hover:bg-night-800/60 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-mint-950/50 rounded-lg text-mint-400"><DocumentTextIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-night-200">Test Generator Agent</span>
                                    </div>
                                    <span className="text-[8px] bg-mint-950/50 text-mint-400 px-1.5 py-0.5 rounded border border-mint-800/50">GenAI</span>
                                 </div>
                                 <div className="text-[8px] text-night-400 mt-1">Generating Scenarios...</div>
                                 <div className="w-full h-1 bg-night-700/50 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-mint-500 rounded-full" />
                                 </div>
                              </div>

                              {/* Regression Test Agent */}
                              <div className="bg-night-800/40 rounded-xl p-2.5 border border-night-700/50 shadow-sm flex flex-col gap-1 relative group hover:bg-night-800/60 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-mint-950/50 rounded-lg text-mint-400"><CommandLineIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-night-200">Regression Test Agent</span>
                                    </div>
                                    <span className="text-[8px] bg-mint-950/50 text-mint-400 px-1.5 py-0.5 rounded border border-mint-800/50">Self-Heal</span>
                                 </div>
                                 <div className="text-[8px] text-night-400 mt-1">Fixing 3 Selectors...</div>
                                 <div className="w-full h-1 bg-night-700/50 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "45%" }} transition={{ duration: 1.5, repeat: Infinity }} className="h-full bg-mint-500 rounded-full" />
                                 </div>
                              </div>

                              {/* Security Test Agent */}
                              <div className="bg-night-800/40 rounded-xl p-2.5 border border-night-700/50 shadow-sm flex flex-col gap-1 relative group hover:bg-night-800/60 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-mint-950/50 rounded-lg text-mint-400"><ShieldCheckIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-night-200">Security Test Agent</span>
                                    </div>
                                    <span className="text-[8px] bg-mint-950/50 text-mint-400 px-1.5 py-0.5 rounded border border-mint-800/50">SAST/DAST</span>
                                 </div>
                                 <div className="flex gap-2 mt-1">
                                    <div className="flex flex-col items-center bg-night-800/50 border border-mint-800/50 rounded p-1 flex-1">
                                       <span className="text-[10px] font-bold text-mint-400">0</span>
                                       <span className="text-[6px] text-night-400 uppercase">Critical</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-night-800/50 border border-night-700/50 rounded p-1 flex-1">
                                       <span className="text-[10px] font-bold text-night-300">12</span>
                                       <span className="text-[6px] text-night-400 uppercase">Low</span>
                                    </div>
                                 </div>
                              </div>

                              {/* Performance Test Agent */}
                              <div className="bg-night-800/40 rounded-xl p-2.5 border border-night-700/50 shadow-sm flex flex-col gap-1 relative group hover:bg-night-800/60 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-neon-950/50 rounded-lg text-neon-400"><ArrowTrendingUpIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-night-200">Performance Test Agent</span>
                                    </div>
                                    <span className="text-[8px] bg-neon-950/50 text-neon-400 px-1.5 py-0.5 rounded border border-neon-800/50">Load</span>
                                 </div>
                                 <div className="flex gap-2 mt-1">
                                    <div className="flex flex-col items-center bg-night-800/50 border border-neon-800/50 rounded p-1 flex-1">
                                       <span className="text-[10px] font-bold text-neon-400">12k</span>
                                       <span className="text-[6px] text-night-400 uppercase">Users</span>
                                    </div>
                                    <div className="flex flex-col items-center bg-night-800/50 border border-neon-800/50 rounded p-1 flex-1">
                                       <span className="text-[10px] font-bold text-neon-400">28ms</span>
                                       <span className="text-[6px] text-night-400 uppercase">Latency</span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* 3. CI/CD Lifecycle Pipeline (Bottom Half) */}
                           <div className="bg-night-800/40 rounded-xl border border-night-700/50 p-3 shadow-sm">
                              <div className="flex items-center gap-2 mb-2">
                                 <ServerIcon className="w-3 h-3 text-night-400" />
                                 <span className="text-[9px] font-bold text-night-300 uppercase tracking-wider">Continuous Delivery Pipeline</span>
                              </div>
                              <div className="relative flex items-center justify-between px-2 py-2">
                                 {/* Pipeline Line */}
                                 <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-night-700/50 -z-10" />
                                 <motion.div 
                                    className="absolute left-0 top-1/2 h-0.5 bg-mint-500 -z-10" 
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                 />

                                 {/* Pipeline Stages */}
                                 {[
                                    { name: 'Code', icon: CodeBracketIcon, status: 'done' },
                                    { name: 'Build', icon: CircleStackIcon, status: 'done' },
                                    { name: 'Test', icon: BeakerIcon, status: 'active' },
                                    { name: 'Secure', icon: ShieldCheckIcon, status: 'pending' },
                                    { name: 'Deploy', icon: CloudIcon, status: 'pending' }
                                 ].map((stage, i) => (
                                    <div key={i} className="flex flex-col items-center gap-1.5 bg-night-800/80 p-1 rounded-lg border border-night-700/50 shadow-sm z-10">
                                       <div className={`w-5 h-5 rounded flex items-center justify-center ${
                                          stage.status === 'active' ? 'bg-mint-500 text-white animate-pulse' : 
                                          stage.status === 'done' ? 'bg-mint-950/50 text-mint-400' : 'bg-night-800/50 text-night-500'
                                       }`}>
                                          <stage.icon className="w-3 h-3" />
                                       </div>
                                       <span className={`text-[7px] font-semibold ${stage.status === 'active' ? 'text-mint-400' : 'text-night-400'}`}>{stage.name}</span>
                                    </div>
                                 ))}
                              </div>
                           </div>

                                    </div>
                                 )}

                      {/* 6. COGNIVIBE (Productivity Metrics) */}
                      {current.id === 'cognivibe' && (
                        <div className="flex flex-col h-full gap-3 text-night-200">
                           
                           {/* Header: Context */}
                           <div className="bg-night-800/40 rounded-xl p-3 border border-night-700/50 shadow-sm">
                              <div className="flex items-center gap-2 mb-1">
                                 <div className="p-1.5 bg-mint-950/30 rounded-lg">
                                    <SparklesIcon className="w-3.5 h-3.5 text-mint-400" />
                                 </div>
                                 <h3 className="text-[10px] font-bold text-night-200 uppercase tracking-wider">AI-Powered SDLC</h3>
                              </div>
                              <p className="text-[9px] text-night-400 leading-relaxed">
                                 Our AI powered SDLC framework where we leverage AI cautiously and fastrack the development seamlessly and ahead of time and ship deliverables faster.
                              </p>
                           </div>

                           {/* Agents Grid */}
                           <div className="grid grid-cols-2 gap-2 flex-1">
                              {/* Agent 1: Strategy */}
                              <div className="bg-night-800/40 rounded-xl p-2.5 border border-night-700/50 shadow-sm flex flex-col gap-1 hover:bg-night-800/60 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-mint-950/30 rounded-lg text-mint-400"><LightBulbIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-night-200">Strategy Agent</span>
                                    </div>
                                 </div>
                                 <div className="text-[8px] text-night-400 mt-1">Aligning Goals...</div>
                                 <div className="w-full h-1 bg-night-700/50 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "80%" }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-mint-500 rounded-full" />
                                 </div>
                              </div>

                              {/* Agent 2: Development */}
                              <div className="bg-night-800/40 rounded-xl p-2.5 border border-night-700/50 shadow-sm flex flex-col gap-1 hover:bg-night-800/60 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-neon-950/30 rounded-lg text-neon-400"><BoltIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-night-200">Velocity Agent</span>
                                    </div>
                                 </div>
                                 <div className="text-[8px] text-night-400 mt-1">Fast-tracking Dev...</div>
                                 <div className="w-full h-1 bg-night-700/50 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "90%" }} transition={{ duration: 1.5, repeat: Infinity }} className="h-full bg-neon-500 rounded-full" />
                                 </div>
                              </div>

                              {/* Agent 3: Risk/Caution */}
                              <div className="bg-night-800/40 rounded-xl p-2.5 border border-night-700/50 shadow-sm flex flex-col gap-1 hover:bg-night-800/60 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-night-800/50 rounded-lg text-night-400"><ScaleIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-night-200">Risk Sentinel</span>
                                    </div>
                                 </div>
                                 <div className="text-[8px] text-night-400 mt-1">Cautious Validation...</div>
                                 <div className="w-full h-1 bg-night-700/50 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-night-500 rounded-full" />
                                 </div>
                              </div>

                              {/* Agent 4: Delivery */}
                              <div className="bg-night-800/40 rounded-xl p-2.5 border border-night-700/50 shadow-sm flex flex-col gap-1 hover:bg-night-800/60 transition-colors">
                                 <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                       <div className="p-1.5 bg-mint-950/30 rounded-lg text-mint-400"><CloudIcon className="w-3.5 h-3.5" /></div>
                                       <span className="text-[9px] font-bold text-night-200">Delivery Pilot</span>
                                    </div>
                                 </div>
                                 <div className="text-[8px] text-night-400 mt-1">Shipping Faster...</div>
                                 <div className="w-full h-1 bg-night-700/50 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ duration: 2.5, repeat: Infinity }} className="h-full bg-mint-500 rounded-full" />
                                 </div>
                              </div>
                           </div>

                           {/* Metrics Footer */}
                           <div className="grid grid-cols-2 gap-2">
                              <div className="bg-night-800/30 p-2 rounded-xl border border-mint-900/30 shadow-sm flex flex-col items-center justify-center">
                                 <div className="text-xl font-bold text-night-200">3x</div>
                                 <div className="text-[8px] text-night-400 uppercase tracking-wide">Faster Delivery</div>
                              </div>
                              <div className="bg-night-800/30 p-2 rounded-xl border border-neon-900/30 shadow-sm flex flex-col items-center justify-center">
                                 <div className="text-xl font-bold text-night-200">40%</div>
                                 <div className="text-[8px] text-night-400 uppercase tracking-wide">Cost Savings</div>
                              </div>
                           </div>
                        </div>
                      )}

                              </div>

                           </div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </div>

            </div>
         </div>
      </section>
   )
}

export default CleanHero
