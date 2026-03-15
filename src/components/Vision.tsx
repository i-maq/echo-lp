import { useScrollAnimation } from '../hooks/useScrollAnimation';

const timeline = [
  { era: '40,000 BC', label: 'Cave paintings' },
  { era: 'Ancient', label: 'Oral tradition' },
  { era: '1700s', label: 'Written journals' },
  { era: '1800s', label: 'Photography' },
  { era: '1900s', label: 'Video & film' },
  { era: 'Now', label: 'Project Echo', highlight: true },
];

export default function Vision() {
  const ref = useScrollAnimation();
  const timelineRef = useScrollAnimation();

  return (
    <section className="relative px-5 md:px-8 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="fade-in-section text-center mb-16">
          <p className="section-label mb-5">The Bigger Picture</p>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(26px, 5vw, 50px)',
              letterSpacing: '-0.03em',
              color: '#0f172a',
              lineHeight: 1.1,
              marginBottom: '24px',
              maxWidth: '700px',
              margin: '0 auto 24px',
            }}
          >
            Every human will eventually have persistent digital memory. We're building how.
          </h2>
          <p
            style={{
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.75,
              color: '#64748b',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Echo sits at the intersection of journaling, wellness, legacy technology, and AI — a category that doesn't exist yet.
          </p>
        </div>

        <div ref={timelineRef} className="fade-in-section glass-panel p-8 md:p-12">
          <p
            style={{
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#64748b',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            For 40,000 years, humans have preserved their stories through cave paintings, oral tradition, written journals, photographs, and video. Project Echo is what comes next.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {timeline.map(({ era, label, highlight }) => (
              <div
                key={era}
                className="flex flex-col items-center px-5 py-4 rounded-2xl"
                style={{
                  background: highlight
                    ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(20, 184, 166, 0.08), rgba(16, 185, 129, 0.06))'
                    : 'rgba(248, 250, 252, 0.8)',
                  border: highlight
                    ? '1px solid rgba(14, 184, 166, 0.3)'
                    : '1px solid rgba(203, 213, 225, 0.4)',
                  minWidth: '110px',
                }}
              >
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: highlight ? '#14b8a6' : '#94a3b8',
                    marginBottom: '4px',
                    display: 'block',
                  }}
                >
                  {era}
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: highlight ? 600 : 400,
                    color: highlight ? '#334155' : '#64748b',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#64748b',
              marginTop: '40px',
              textAlign: 'center',
            }}
          >
            A three-dimensional journal guided by your future self. Your autobiography. Your legacy.<br className="hidden md:block" /> The bridge between who you are today and who your grandchildren will know you as.
          </p>
        </div>
      </div>
    </section>
  );
}
