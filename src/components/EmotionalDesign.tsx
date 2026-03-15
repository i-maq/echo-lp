import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function EmotionalDesign() {
  const ref = useScrollAnimation();

  return (
    <section className="relative px-5 md:px-8 py-24 md:py-32">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto">
        <p className="section-label mb-5 text-center">Designed to Make You Feel</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2
              style={{
                fontWeight: 800,
                fontSize: 'clamp(26px, 4vw, 46px)',
                letterSpacing: '-0.03em',
                color: '#0f172a',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}
            >
              This isn't a wellness app. It's an emotional regulation ritual you don't know you're doing.
            </h2>
            <p
              style={{
                fontWeight: 300,
                fontSize: '17px',
                lineHeight: 1.75,
                color: '#64748b',
                marginBottom: '20px',
              }}
            >
              Every session weaves together gratitude prompts, honest release, and ambient soundscapes into something that leaves you feeling lighter. Over months, the ratio of gratitude to frustration shifts.
            </p>
            <p
              style={{
                fontWeight: 300,
                fontSize: '17px',
                lineHeight: 1.75,
                color: '#64748b',
              }}
            >
              You don't just preserve memories — you build emotional resilience.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                time: 'Morning',
                text: 'Your notification asks you to photograph something beautiful.',
                color: 'rgba(14, 165, 233, 0.07)',
                border: 'rgba(14, 165, 233, 0.18)',
                dot: '#0ea5e9',
              },
              {
                time: 'Evening',
                text: 'Your Echo asks what you\'re grateful for.',
                color: 'rgba(20, 184, 166, 0.07)',
                border: 'rgba(20, 184, 166, 0.18)',
                dot: '#14b8a6',
              },
              {
                time: 'Always',
                text: 'The ambient audio incorporates calming elements you feel but never notice.',
                color: 'rgba(16, 185, 129, 0.07)',
                border: 'rgba(16, 185, 129, 0.18)',
                dot: '#10b981',
              },
            ].map(({ time, text, color, border, dot }) => (
              <div
                key={time}
                className="glass-panel px-6 py-5 flex items-start gap-4"
                style={{ background: color, border: `1px solid ${border}` }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: dot,
                    flexShrink: 0,
                    marginTop: '6px',
                  }}
                />
                <div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: dot,
                      display: 'block',
                      marginBottom: '4px',
                    }}
                  >
                    {time}
                  </span>
                  <p
                    style={{
                      fontWeight: 300,
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: '#64748b',
                    }}
                  >
                    {text}
                  </p>
                </div>
              </div>
            ))}

            <p
              style={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: 1.6,
                color: '#94a3b8',
                fontStyle: 'italic',
                paddingLeft: '4px',
                paddingTop: '4px',
              }}
            >
              You think you're building a memory archive.<br />
              You're actually rewiring how you process your day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
