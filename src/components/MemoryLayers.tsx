import { useScrollAnimation } from '../hooks/useScrollAnimation';

const layers = [
  {
    label: 'Surface',
    title: 'The Echo',
    body: 'A single, curated memory card delivered daily. Swipe through 3–5 past Moments, each surfaced for a reason: anniversaries, emotional balance, forgotten people, or pure serendipity. Zero cognitive load.',
    accent: 'rgba(14, 165, 233, 0.08)',
    accentBorder: 'rgba(14, 165, 233, 0.2)',
    accentText: '#0ea5e9',
    visual: (
      <div className="flex gap-2 mt-6">
        {['#e0f2fe', '#ccfbf1', '#d1fae5'].map((bg, i) => (
          <div
            key={i}
            className="flex-1 rounded-2xl"
            style={{
              height: '80px',
              background: bg,
              opacity: i === 0 ? 1 : 0.5 + i * 0.15,
              transform: i === 0 ? 'scale(1)' : `scale(${0.92 + i * 0.03})`,
              transformOrigin: 'bottom',
            }}
          />
        ))}
      </div>
    ),
  },
  {
    label: 'Depth',
    title: 'The Breathing Grid',
    body: 'A calendar heat map where every day is a glass orb, coloured by emotion. Recent memories pulse gently — still alive. Pinch to zoom between year, month, and week views. See your emotional landscape across time.',
    accent: 'rgba(20, 184, 166, 0.08)',
    accentBorder: 'rgba(20, 184, 166, 0.2)',
    accentText: '#14b8a6',
    visual: (
      <div className="mt-6 grid gap-1.5" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {Array.from({ length: 28 }, (_, i) => {
          const colors = [
            'rgba(14,165,233,0.25)',
            'rgba(20,184,166,0.3)',
            'rgba(16,185,129,0.22)',
            'rgba(14,165,233,0.15)',
            'rgba(20,184,166,0.18)',
          ];
          const isRecent = i > 20;
          return (
            <div
              key={i}
              className={isRecent ? 'orb-pulse' : ''}
              style={{
                height: '18px',
                borderRadius: '50%',
                background: colors[i % colors.length],
                border: `1px solid ${colors[i % colors.length].replace(/[\d.]+\)$/, '0.4)')}`,
                '--pulse-duration': `${2 + (i % 3)}s`,
                '--pulse-delay': `${(i % 7) * 0.3}s`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>
    ),
  },
  {
    label: 'Deep Search',
    title: 'The Fog',
    body: 'An ambient space with no visible structure. Touch the fog and memories crystallise near your finger. Speak a name, a feeling, a place — and matching Moments emerge from the atmosphere. This is how the brain actually retrieves memories.',
    accent: 'rgba(16, 185, 129, 0.07)',
    accentBorder: 'rgba(16, 185, 129, 0.18)',
    accentText: '#10b981',
    visual: (
      <div
        className="mt-6 rounded-2xl relative overflow-hidden"
        style={{
          height: '80px',
          background: 'linear-gradient(135deg, rgba(14,165,233,0.06), rgba(20,184,166,0.08), rgba(16,185,129,0.06))',
        }}
      >
        {[
          { top: '30%', left: '20%', size: 28 },
          { top: '50%', left: '50%', size: 20 },
          { top: '20%', left: '75%', size: 16 },
          { top: '60%', left: '35%', size: 12 },
        ].map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: dot.size,
              height: dot.size,
              top: dot.top,
              left: dot.left,
              transform: 'translate(-50%, -50%)',
              background: `rgba(20, 184, 166, ${0.15 + i * 0.04})`,
              filter: 'blur(2px)',
            }}
          />
        ))}
      </div>
    ),
  },
];

export default function MemoryLayers() {
  const ref = useScrollAnimation();
  const cardsRef = useScrollAnimation();

  return (
    <section className="relative px-5 md:px-8 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in-section text-center mb-6">
          <p className="section-label mb-5">Three Layers Deep</p>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(28px, 5vw, 52px)',
              letterSpacing: '-0.03em',
              color: '#0f172a',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            Surface. Depth. Fog.
          </h2>
          <p
            style={{
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#64748b',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            Most days, you stay on the surface. Your Echo delivers a beautifully curated card — a past Moment chosen for you. But when you want to go deeper, the entire archive reveals itself.
          </p>
        </div>

        <div ref={cardsRef} className="fade-in-section grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {layers.map(({ label, title, body, accent, accentBorder, accentText, visual }) => (
            <div
              key={title}
              className="glass-panel p-8"
              style={{ background: `rgba(255, 255, 255, 0.45)` }}
            >
              <div
                className="inline-block px-3 py-1 rounded-full mb-5"
                style={{
                  background: accent,
                  border: `1px solid ${accentBorder}`,
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: accentText,
                }}
              >
                {label}
              </div>
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: '19px',
                  color: '#334155',
                  letterSpacing: '-0.02em',
                  marginBottom: '12px',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: '#64748b',
                }}
              >
                {body}
              </p>
              {visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
