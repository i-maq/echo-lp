import { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: string;
  delay: string;
  drift: string;
  color: string;
}

export default function Particles() {
  const particles = useMemo<Particle[]>(() => {
    const colors = [
      'rgba(14, 165, 233, 0.08)',
      'rgba(14, 165, 233, 0.06)',
      'rgba(20, 184, 166, 0.07)',
      'rgba(16, 185, 129, 0.06)',
      'rgba(20, 184, 166, 0.05)',
    ];

    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 2,
      duration: `${20 + Math.random() * 40}s`,
      delay: `${-Math.random() * 40}s`,
      drift: `${(Math.random() - 0.5) * 60}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={
            {
              left: `${p.x}%`,
              bottom: `${p.y % 30}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              '--duration': p.duration,
              '--delay': p.delay,
              '--drift': p.drift,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
