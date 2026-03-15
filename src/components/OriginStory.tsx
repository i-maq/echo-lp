import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function OriginStory() {
  const ref = useScrollAnimation();

  return (
    <section className="relative px-5 md:px-8 py-24 md:py-36">
      <div ref={ref} className="fade-in-section max-w-2xl mx-auto text-center">
        <p className="section-label mb-8">Why We Built This</p>

        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(26px, 4.5vw, 44px)',
            letterSpacing: '-0.03em',
            color: '#0f172a',
            lineHeight: 1.15,
            marginBottom: '36px',
          }}
        >
          Because someone's mother<br />started to forget.
        </h2>

        <p
          style={{
            fontWeight: 300,
            fontSize: '17px',
            lineHeight: 1.85,
            color: '#64748b',
            marginBottom: '24px',
          }}
        >
          Project Echo was born from two experiences: watching a parent lose their memories to dementia, and watching a child outgrow his earliest years with no recollection of them.
        </p>

        <p
          style={{
            fontWeight: 300,
            fontSize: '17px',
            lineHeight: 1.85,
            color: '#64748b',
            marginBottom: '24px',
          }}
        >
          The app's thesis is simple — you will forget, and this is how you fight back.
        </p>

        <div
          className="glass-panel px-8 py-7 text-left"
          style={{
            background: 'rgba(255,255,255,0.38)',
            borderLeft: '3px solid rgba(14, 184, 166, 0.35)',
            borderRadius: '16px',
            marginBottom: '28px',
          }}
        >
          <p
            style={{
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.8,
              color: '#64748b',
              fontStyle: 'italic',
            }}
          >
            A portion of everything we earn supports families facing memory loss. This isn't corporate social responsibility. It's why the product exists.
          </p>
        </div>
      </div>
    </section>
  );
}
