import EchoOrb from './EchoOrb';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const ref = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 md:px-8 pt-24 pb-16">
      <div
        ref={ref}
        className="fade-in-section max-w-4xl mx-auto text-center"
      >
        <div className="flex justify-center mb-10">
          <EchoOrb size="lg" />
        </div>

        <p className="section-label mb-5">Your Living Biographer</p>

        <h1
          style={{
            fontWeight: 800,
            fontSize: 'clamp(38px, 7vw, 64px)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: '#0f172a',
            marginBottom: '24px',
          }}
        >
          Your future self is<br />
          <span
            style={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 50%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            waiting to listen.
          </span>
        </h1>

        <p
          style={{
            fontWeight: 300,
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            lineHeight: 1.65,
            color: '#64748b',
            maxWidth: '580px',
            margin: '0 auto 40px',
          }}
        >
          Project Echo is a voice journal guided by an AI version of you — aged, wise, and ready to help you remember everything that matters.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="relative">
            <div className="button-glow" />
            <a
              href="#waitlist"
              className="glass-button px-7 py-3.5 text-base"
              style={{ display: 'inline-block' }}
            >
              Join the Waitlist
            </a>
          </div>

          <a
            href="#how-it-works"
            style={{
              fontWeight: 500,
              fontSize: '15px',
              color: '#64748b',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#14b8a6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
          >
            See how it works ↓
          </a>
        </div>

        <p
          style={{
            fontSize: '12px',
            fontWeight: 400,
            color: '#94a3b8',
            letterSpacing: '0.02em',
          }}
        >
          Coming to iOS &nbsp;·&nbsp; Free to try &nbsp;·&nbsp; Your memories stay yours
        </p>
      </div>
    </section>
  );
}
