import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    n: '01',
    title: 'Your Echo asks',
    body: 'Every evening, your future self opens with a question: "What made today different?" "Who were you thinking about?" "How are you, really?" It feels like a conversation with someone who cares.',
  },
  {
    n: '02',
    title: 'You speak freely',
    body: 'No time limit. No word count. Just talk. Echo listens with gentle reactive animations — nodding, breathing, absorbing. The experience is designed to feel like a scene from Her, not a dictation app.',
  },
  {
    n: '03',
    title: 'Your story grows',
    body: 'Echo transcribes, categorises, and weaves your words into a living narrative. Daily entries become weekly themes, monthly arcs, and eventually — life chapters. Your autobiography writes itself.',
  },
];

export default function HowItWorks() {
  const ref = useScrollAnimation();
  const stepsRef = useScrollAnimation();

  return (
    <section id="how-it-works" className="relative px-5 md:px-8 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="fade-in-section text-center mb-16">
          <p className="section-label mb-5">The Experience</p>
          <h2
            style={{
              fontWeight: 800,
              fontSize: 'clamp(28px, 5vw, 52px)',
              letterSpacing: '-0.03em',
              color: '#0f172a',
              lineHeight: 1.1,
            }}
          >
            A daily ritual that changes<br className="hidden md:block" /> how you see your life.
          </h2>
        </div>

        <div ref={stepsRef} className="fade-in-section flex flex-col gap-5">
          {steps.map(({ n, title, body }) => (
            <div key={n} className="glass-panel p-8 md:p-10 flex gap-6 items-start">
              <div className="step-number">{n}</div>
              <div>
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: '19px',
                    color: '#334155',
                    letterSpacing: '-0.02em',
                    marginBottom: '10px',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontWeight: 300,
                    fontSize: '16px',
                    lineHeight: 1.75,
                    color: '#64748b',
                  }}
                >
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
