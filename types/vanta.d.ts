declare module 'vanta' {
  export interface VantaEffect {
    destroy(): void;
  }

  export interface VantaOptions {
    el: HTMLElement;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    color1?: number;
    color2?: number;
    backgroundColor?: number;
    backgroundAlpha?: number;
    size?: number;
    shininess?: number;
    waveHeight?: number;
    waveSpeed?: number;
    zoom?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    colorMode?: string;
    birdSize?: number;
    wingSpan?: number;
    speedLimit?: number;
    separation?: number;
    alignment?: number;
    cohesion?: number;
    quantity?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    speed?: number;
  }

  export const GLOBE: (options: VantaOptions) => VantaEffect;
  export const WAVES: (options: VantaOptions) => VantaEffect;
  export const NET: (options: VantaOptions) => VantaEffect;
  export const BIRDS: (options: VantaOptions) => VantaEffect;
  export const FOG: (options: VantaOptions) => VantaEffect;
}

declare module 'vanta/dist/vanta.globe.min' {
  import { VantaEffect, VantaOptions } from 'vanta';
  export default function GLOBE(options: VantaOptions): VantaEffect;
}

declare module 'vanta/dist/vanta.waves.min' {
  import { VantaEffect, VantaOptions } from 'vanta';
  export default function WAVES(options: VantaOptions): VantaEffect;
}

declare module 'vanta/dist/vanta.net.min' {
  import { VantaEffect, VantaOptions } from 'vanta';
  export default function NET(options: VantaOptions): VantaEffect;
}

declare module 'vanta/dist/vanta.birds.min' {
  import { VantaEffect, VantaOptions } from 'vanta';
  export default function BIRDS(options: VantaOptions): VantaEffect;
}

declare module 'vanta/dist/vanta.fog.min' {
  import { VantaEffect, VantaOptions } from 'vanta';
  export default function FOG(options: VantaOptions): VantaEffect;
}