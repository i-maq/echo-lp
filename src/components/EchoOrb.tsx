import { useEffect, useRef } from 'react';

interface EchoOrbProps {
  size?: 'sm' | 'md' | 'lg';
}

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  hueSpeed: number;
  phase: number;
}

const AURORA_COLORS: [number, number, number][] = [
  [14, 165, 233],
  [20, 184, 166],
  [16, 185, 129],
  [6, 182, 212],
  [14, 165, 233],
];

function lerpColor(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

function getAuroraColor(t: number): [number, number, number] {
  const scaled = ((t % 1) + 1) % 1;
  const idx = scaled * (AURORA_COLORS.length - 1);
  const i = Math.floor(idx);
  const frac = idx - i;
  return lerpColor(AURORA_COLORS[i], AURORA_COLORS[Math.min(i + 1, AURORA_COLORS.length - 1)], frac);
}

export default function EchoOrb({ size = 'lg' }: EchoOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const blobsRef = useRef<Blob[]>([]);
  const timeRef = useRef(0);

  const px = size === 'lg' ? 224 : size === 'md' ? 176 : 96;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const dim = px * dpr;
    canvas.width = dim;
    canvas.height = dim;
    ctx.scale(dpr, dpr);

    const count = 7;
    blobsRef.current = Array.from({ length: count }, (_, i) => ({
      x: px * 0.2 + Math.random() * px * 0.6,
      y: px * 0.2 + Math.random() * px * 0.6,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: px * (0.28 + Math.random() * 0.22),
      hue: i / count,
      hueSpeed: 0.0003 + Math.random() * 0.0004,
      phase: Math.random() * Math.PI * 2,
    }));

    function draw() {
      timeRef.current += 1;
      const t = timeRef.current;

      ctx!.clearRect(0, 0, px, px);

      ctx!.globalCompositeOperation = 'source-over';
      const base = ctx!.createRadialGradient(px * 0.5, px * 0.45, 0, px * 0.5, px * 0.5, px * 0.5);
      base.addColorStop(0, 'rgba(14,165,233,0.55)');
      base.addColorStop(0.45, 'rgba(20,184,166,0.45)');
      base.addColorStop(1, 'rgba(16,185,129,0.35)');
      ctx!.fillStyle = base;
      ctx!.fillRect(0, 0, px, px);

      ctx!.globalCompositeOperation = 'screen';

      for (const blob of blobsRef.current) {
        blob.hue += blob.hueSpeed;
        const wobble = Math.sin(t * 0.012 + blob.phase) * 0.15;
        blob.vx += (px * 0.5 - blob.x) * 0.0004 + Math.sin(t * 0.008 + blob.phase) * 0.06;
        blob.vy += (px * 0.5 - blob.y) * 0.0004 + Math.cos(t * 0.010 + blob.phase * 1.3) * 0.06;
        blob.vx *= 0.98;
        blob.vy *= 0.98;
        blob.x += blob.vx;
        blob.y += blob.vy;

        const [r, g, b] = getAuroraColor(blob.hue + wobble);
        const gr = ctx!.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
        gr.addColorStop(0, `rgba(${r},${g},${b},0.55)`);
        gr.addColorStop(0.5, `rgba(${r},${g},${b},0.25)`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);

        ctx!.fillStyle = gr;
        ctx!.beginPath();
        ctx!.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      ctx!.globalCompositeOperation = 'source-over';
      const glass = ctx!.createRadialGradient(px * 0.32, px * 0.26, 0, px * 0.38, px * 0.32, px * 0.44);
      glass.addColorStop(0, 'rgba(255,255,255,0.42)');
      glass.addColorStop(0.35, 'rgba(255,255,255,0.12)');
      glass.addColorStop(1, 'rgba(255,255,255,0)');
      ctx!.fillStyle = glass;
      ctx!.fillRect(0, 0, px, px);

      const rim = ctx!.createRadialGradient(px * 0.5, px * 0.5, px * 0.38, px * 0.5, px * 0.5, px * 0.5);
      rim.addColorStop(0, 'rgba(255,255,255,0)');
      rim.addColorStop(0.85, 'rgba(255,255,255,0.05)');
      rim.addColorStop(1, 'rgba(255,255,255,0.18)');
      ctx!.fillStyle = rim;
      ctx!.fillRect(0, 0, px, px);

      frameRef.current = requestAnimationFrame(draw);
    }

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [px]);

  const containerSize = {
    lg: 'w-40 h-40 md:w-56 md:h-56',
    md: 'w-36 h-36 md:w-44 md:h-44',
    sm: 'w-24 h-24',
  }[size];

  return (
    <div className="relative flex items-center justify-center" style={{ isolation: 'isolate' }}>
      <div
        className="absolute rounded-full"
        style={{
          width: '150%',
          height: '150%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, rgba(16, 185, 129, 0.06) 50%, transparent 70%)',
          filter: 'blur(24px)',
          zIndex: -1,
          animation: 'orbBreathe 4s ease-in-out infinite',
        }}
      />

      <div
        className={`relative ${containerSize}`}
        style={{
          borderRadius: '50%',
          overflow: 'hidden',
          animation: 'orbBreathe 4s ease-in-out infinite',
          boxShadow: '0 0 60px rgba(14, 165, 233, 0.25), 0 0 120px rgba(16, 185, 129, 0.1)',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
}
