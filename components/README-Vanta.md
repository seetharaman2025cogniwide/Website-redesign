# Vanta.js Background Integration

## Overview
Your HeroSection now includes Vanta.js animated backgrounds with 5 different effects to choose from.

## Available Effects

1. **Globe** - 3D rotating globe with particles (recommended for tech/AI themes)
2. **Waves** - Animated ocean waves (smooth and calming)
3. **Network** - Connected particle network (great for tech/connectivity themes)
4. **Birds** - Flocking bird animation (organic and dynamic)
5. **Fog** - Atmospheric fog effect (mysterious and elegant)

## How to Change Effects

### Method 1: Using the Effect Switcher (Development)
- A switcher panel appears in the top-right corner when viewing the site
- Click any effect to see it in real-time
- **Remove the VantaEffectSwitcher component before production**

### Method 2: Direct Code Change
In `components/HeroSection.tsx`, change the initial state:

```tsx
const [vantaEffect, setVantaEffect] = useState<'globe' | 'waves' | 'net' | 'birds' | 'fog'>('globe')
```

Change `'globe'` to any of the other effect names.

### Method 3: Fixed Effect
If you want a fixed effect without the switcher, replace:

```tsx
<VantaBackground effect={vantaEffect} />
```

With:

```tsx
<VantaBackground effect="waves" />
```

## Customization

You can customize each effect by modifying the parameters in `components/VantaBackground.tsx`:

- **Colors**: Change `color`, `color1`, `color2` values (hex format: 0x3b82f6)
- **Animation Speed**: Adjust `speed`, `waveSpeed`, etc.
- **Intensity**: Modify `size`, `waveHeight`, `quantity`, etc.

## Performance Notes

- Effects are loaded dynamically to avoid SSR issues
- Background has `pointer-events: none` so it doesn't interfere with UI
- Effects automatically clean up when component unmounts

## Production Recommendations

1. Remove the `VantaEffectSwitcher` component
2. Choose one effect and set it as fixed
3. Test performance on target devices
4. Consider using simpler effects (waves, fog) for better mobile performance

## Browser Support

Vanta.js requires WebGL support. It gracefully degrades on unsupported browsers by showing your existing background.