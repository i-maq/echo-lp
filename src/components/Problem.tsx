import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Problem() {
  const ref = useScrollAnimation();

  return (
    <section className="relative px-5 md:px-8 py-24 md:py-32">
      <div ref={ref} className="fade-in-section max-w-3xl mx-auto">
        <p className="section-label mb-5 text-center">Why This Exists</p>

        <div className="glass-panel p-10 md:p-14">
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(30px, 5vw, 48px)',
              letterSpacing: '-0.03em',
              color: '#0f172a',
              lineHeight: 1.1,
              marginBottom: '28px',
            }}
          >
            You're losing your story.
          </h2>

          <p
            style={{
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.75,
              color: '#64748b',
            }}
          >
            Traditional journaling fails 80% of people within three weeks. It's a monologue into the void — no feedback, no perspective, no one listening. Meanwhile, your memories fragment across apps and platforms. You lose 90% of your experiences within weeks. The patterns of your life go unnoticed. The wisdom goes uncaptured.
          </p>

          <p
            style={{
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.75,
              color: '#64748b',
              marginTop: '20px',
            }}
          >
            There is no infrastructure for preserving who you are across decades.
          </p>
        </div>
      </div>
    </section>
  );
}
