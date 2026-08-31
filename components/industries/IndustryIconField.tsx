'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { industryAgentData } from './industryAgentData';
import {
  UserGroupIcon,
  DocumentCheckIcon,
  BanknotesIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon,
  LightBulbIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  BeakerIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  BuildingOfficeIcon,
  SignalIcon,
  HeartIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon,
  WifiIcon,
  UsersIcon,
  ShoppingBagIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  LinkIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  UserGroupIcon,
  DocumentCheckIcon,
  BanknotesIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon,
  LightBulbIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  BeakerIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  BuildingOfficeIcon,
  SignalIcon,
  HeartIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon,
  WifiIcon,
  UsersIcon,
  ShoppingBagIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
  LinkIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  AcademicCapIcon,
};

// Exactly ten logos, never repeated. An industry's own agent icons come first;
// if its Customer Experience + Internal Operations lists yield fewer than ten
// distinct icons, the remainder is topped up from this pool in order.
const ICON_COUNT = 10;

const FALLBACK_ORDER = [
  'CurrencyDollarIcon',
  'BuildingOfficeIcon',
  'ClipboardDocumentCheckIcon',
  'MagnifyingGlassIcon',
  'DocumentTextIcon',
  'UsersIcon',
  'ChatBubbleLeftRightIcon',
  'BeakerIcon',
  'CalendarIcon',
  'WrenchScrewdriverIcon',
  'SignalIcon',
  'TruckIcon',
  'LinkIcon',
  'MapPinIcon',
];

const REST_COLOR = 'rgba(167, 139, 250, 0.18)';
const HIT_COLOR = '#A78BFA';
const HIT_GLOW = 'drop-shadow(0 0 8px rgba(167, 139, 250, 0.75))';

const BALL_RADIUS = 5; // 10px across
const BALL_SPEED = 110; // px per second

const NAV_HEIGHT = 80; // the fixed site header covers the top of the hero
const COPY_GAP = 28; // clearance kept around the title / subtitle / buttons
const MIN_BAND = 70; // a side band narrower than this can't hold a logo

function pickIcons(industry: string) {
  const data = (industryAgentData as Record<string, any>)[industry];
  const names: string[] = [];

  if (data) {
    const entries = [...(data.customerStages ?? []), ...(data.internalAreas ?? [])];
    entries.forEach((entry: { icon?: string }) => {
      if (entry?.icon && iconMap[entry.icon] && !names.includes(entry.icon)) {
        names.push(entry.icon);
      }
    });
  }

  FALLBACK_ORDER.forEach((name) => {
    if (names.length < ICON_COUNT && iconMap[name] && !names.includes(name)) {
      names.push(name);
    }
  });

  return names.slice(0, ICON_COUNT).map((name) => ({ name, Icon: iconMap[name] }));
}

interface IndustryIconFieldProps {
  industry: string;
  /** The hero copy block. Logos are kept clear of it so text stays unobstructed. */
  excludeRef: React.RefObject<HTMLElement>;
}

export default function IndustryIconField({ industry, excludeRef }: IndustryIconFieldProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const glyphRefs = useRef<Array<HTMLDivElement | null>>([]);
  const ballRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  // Once a logo is struck it stays purple, so the record outlives any re-layout.
  const struckRef = useRef<boolean[]>([]);

  const icons = useMemo(() => pickIcons(industry), [industry]);

  useEffect(() => {
    const host = hostRef.current;
    const ballEl = ballRef.current;
    const glowEl = glowRef.current;
    if (!host || !ballEl || !glowEl) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    type Node = {
      el: HTMLDivElement;
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      half: number;
      radius: number;
      phase: number;
      driftX: number;
      driftY: number;
      driftSpeed: number;
      pop: number;
      index: number;
    };

    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let ball = { x: 0, y: 0, target: 0 };
    let raf = 0;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;

    const rand = (min: number, max: number) => min + Math.random() * (max - min);

    function paint(node: Node) {
      const struck = struckRef.current[node.index];
      node.el.style.color = struck ? HIT_COLOR : REST_COLOR;
      node.el.style.filter = struck ? HIT_GLOW : 'none';
    }

    /** Scatters the logos in the open bands to the left and right of the hero copy. */
    function layout() {
      const hostRect = host!.getBoundingClientRect();
      width = hostRect.width;
      height = hostRect.height;
      if (width === 0 || height === 0) return;

      const margin = 30;

      // The site header is fixed at the top, so anything under it is invisible
      const topGuard = Math.max(margin, NAV_HEIGHT + 16 - hostRect.top);
      const bottomGuard = height - margin;

      // The copy block: title, subtitle and buttons. Logos go beside it, never over it.
      const copy = excludeRef.current;
      let copyLeft = width * 0.5;
      let copyRight = width * 0.5;
      if (copy) {
        const r = copy.getBoundingClientRect();
        copyLeft = r.left - hostRect.left - COPY_GAP;
        copyRight = r.right - hostRect.left + COPY_GAP;
      }

      // Left band and right band. A band is only usable if a logo actually fits.
      const bands: Array<{ from: number; to: number }> = [];
      if (copyLeft - margin >= MIN_BAND) bands.push({ from: margin, to: copyLeft });
      if (width - margin - copyRight >= MIN_BAND) bands.push({ from: copyRight, to: width - margin });

      const spots: Array<{ x: number; y: number }> = [];

      if (bands.length > 0) {
        // Alternate sides so both flanks fill up evenly
        for (let i = 0; i < ICON_COUNT; i++) {
          const band = bands[i % bands.length];
          let best: { x: number; y: number } | null = null;
          let bestGap = -1;

          // Take the roomiest of a few candidates so the band doesn't clump
          for (let tries = 0; tries < 40; tries++) {
            const cand = {
              x: rand(band.from, band.to),
              y: rand(topGuard, bottomGuard),
            };
            let gap = Infinity;
            for (let s = 0; s < spots.length; s++) {
              gap = Math.min(gap, Math.hypot(spots[s].x - cand.x, spots[s].y - cand.y));
            }
            if (gap > bestGap) {
              bestGap = gap;
              best = cand;
            }
          }
          if (best) spots.push(best);
        }
      } else {
        // Very narrow viewport: no room beside the copy, so use the strips
        // above and below it instead — still never behind the text.
        const copyTop = copy ? copy.getBoundingClientRect().top - hostRect.top - COPY_GAP : height * 0.5;
        const copyBottom = copy ? copy.getBoundingClientRect().bottom - hostRect.top + COPY_GAP : height * 0.5;
        for (let i = 0; i < ICON_COUNT; i++) {
          const above = i % 2 === 0 && copyTop - topGuard > MIN_BAND;
          spots.push({
            x: rand(margin, Math.max(margin, width - margin)),
            y: above ? rand(topGuard, copyTop) : rand(Math.min(copyBottom, bottomGuard), bottomGuard),
          });
        }
      }

      nodes = [];
      glyphRefs.current.forEach((el, index) => {
        if (!el) return;
        const spot = spots[index];
        const size = Math.round(rand(34, 48));
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;

        const node: Node = {
          el,
          baseX: spot.x,
          baseY: spot.y,
          x: spot.x,
          y: spot.y,
          half: size / 2,
          radius: size * 0.55,
          phase: rand(0, Math.PI * 2),
          driftX: rand(5, 14),
          driftY: rand(4, 12),
          driftSpeed: rand(0.1, 0.26),
          pop: 0,
          index,
        };

        paint(node);
        el.style.transform = `translate(${node.x - node.half}px, ${node.y - node.half}px)`;
        // Stagger the load-in so the field assembles as the page arrives
        window.setTimeout(() => {
          el.style.opacity = '1';
        }, reduced ? 0 : 120 + index * 70);

        nodes.push(node);
      });

      ball = { x: width * 0.5, y: height * 0.5, target: 0 };
      ball.target = pickTarget(-1);
    }

    /**
     * The ball only ever travels to a logo. Logos still waiting to be struck come
     * first, so all ten light up; after that it keeps touching them at random.
     */
    function pickTarget(current: number) {
      if (nodes.length === 0) return 0;

      const waiting = nodes.filter((n) => !struckRef.current[n.index]);
      const pool = waiting.length > 0
        ? waiting
        : nodes.filter((n) => n.index !== current);

      const choices = pool.length > 0 ? pool : nodes;
      return choices[Math.floor(Math.random() * choices.length)].index;
    }

    let last = performance.now();

    function frame(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      const t = now / 1000;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!reduced) {
          node.x = node.baseX + Math.sin(t * node.driftSpeed + node.phase) * node.driftX;
          node.y = node.baseY + Math.cos(t * node.driftSpeed * 0.8 + node.phase) * node.driftY;
        }

        let scale = 1;
        if (node.pop > 0) {
          node.pop = Math.max(0, node.pop - dt * 3.2);
          scale = 1 + 0.22 * node.pop;
        }

        node.el.style.transform =
          `translate(${node.x - node.half}px, ${node.y - node.half}px) scale(${scale.toFixed(3)})`;
      }

      if (!reduced && nodes.length > 0) {
        const r = BALL_RADIUS;
        const target = nodes.find((n) => n.index === ball.target) ?? nodes[0];

        // Straight line to the logo, at a constant 110 px/s
        const dx = target.x - ball.x;
        const dy = target.y - ball.y;
        const dist = Math.hypot(dx, dy);
        const step = BALL_SPEED * dt;

        if (dist > 0.001) {
          ball.x += (dx / dist) * Math.min(step, dist);
          ball.y += (dy / dist) * Math.min(step, dist);
        }

        // Touching the edge is enough — it turns purple and the ball bounces
        // straight off toward the next logo, with no pause.
        if (dist <= target.radius + r) {
          if (!struckRef.current[target.index]) {
            struckRef.current[target.index] = true;
            target.pop = 1;
            paint(target);
          }
          ball.target = pickTarget(target.index);
        }

        ballEl!.style.transform = `translate(${ball.x - r}px, ${ball.y - r}px)`;
        glowEl!.style.transform = `translate(${ball.x - r * 3}px, ${ball.y - r * 3}px)`;
      }

      raf = requestAnimationFrame(frame);
    }

    layout();
    ballEl.style.opacity = reduced ? '0' : '1';
    glowEl.style.opacity = reduced ? '0' : '1';
    raf = requestAnimationFrame((t) => {
      last = t;
      frame(t);
    });

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(layout, 220);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
    };
  }, [icons, excludeRef]);

  return (
    <div ref={hostRef} className="absolute inset-0 z-[1] overflow-hidden pointer-events-none" aria-hidden="true">
      {icons.map((entry, index) => (
        <div
          key={entry.name}
          ref={(el) => {
            glyphRefs.current[index] = el;
          }}
          className="absolute top-0 left-0 opacity-0"
          style={{
            color: REST_COLOR,
            transition: 'opacity 700ms ease, color 350ms ease, filter 350ms ease',
            willChange: 'transform',
          }}
        >
          <entry.Icon className="w-full h-full" strokeWidth={1.4} />
        </div>
      ))}

      {/* Glow trailing the ball */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 rounded-full opacity-0"
        style={{
          width: BALL_RADIUS * 6,
          height: BALL_RADIUS * 6,
          background: 'radial-gradient(circle, rgba(139,92,246,0.55) 0%, rgba(139,92,246,0) 70%)',
          filter: 'blur(6px)',
          transition: 'opacity 600ms ease',
          willChange: 'transform',
        }}
      />

      {/* The glass ball */}
      <div
        ref={ballRef}
        className="absolute top-0 left-0 rounded-full opacity-0"
        style={{
          width: BALL_RADIUS * 2,
          height: BALL_RADIUS * 2,
          background:
            'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.95) 0%, rgba(226,214,255,0.55) 18%, rgba(167,139,250,0.45) 42%, rgba(124,58,237,0.55) 100%)',
          border: '1px solid rgba(196, 169, 255, 0.75)',
          boxShadow:
            '0 0 14px rgba(139, 92, 246, 0.85), 0 0 30px rgba(124, 58, 237, 0.45), inset 0 -2px 5px rgba(76, 29, 149, 0.55)',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
          transition: 'opacity 600ms ease',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
