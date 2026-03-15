import { Mic, Archive, RotateCcw } from 'lucide-react';
import EchoOrb from './EchoOrb';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Mic,
    title: 'Speak, don\'t type',
    body: 'Echo listens through voice. Just talk about your day. No blank pages, no writing prompts. Your Echo draws your story out of you.',
  },
  {
    icon: Archive,
    title: 'Moments, not entries',
    body: 'Each recording becomes a Moment — tagged with emotion, people, and life themes. Not a log. A living archive of who you are.',
  },
  {
    icon: RotateCcw,
    title: 'Echoes come back to you',
    body: 'Days, weeks, or years later, your Echo resurfaces past Moments at exactly the right time. "A year ago today, you told me about…"',
  },
];

export default function WhatIsEcho() {
  const ref = useScrollAnimation();
  const cardsRef = useScrollAnimation();

  return (
    <section className="relative px-5 md:px-8 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="fade-in-section text-center mb-16">
          <p className="section-label mb-5">Meet Your Echo</p>
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
            An aged, wiser version of you —<br className="hidden md:block" /> built to listen.
          </h2>
          <p
            style={{
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#64748b',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            During onboarding, Echo generates a photorealistic aged portrait of you. This becomes your Echo — a warm, wise companion who asks the questions you need to hear. Not a chatbot. Not a productivity tool. A living narrative of your life, guided by the person you're becoming.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <EchoOrb size="md" />
        </div>

        <div
          ref={cardsRef}
          className="fade-in-section grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {features.map(({ icon: Icon, title, body }) => (
            <div key={title} className="glass-panel p-8">
              <div
                className="mb-5"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(16, 185, 129, 0.08))',
                  border: '1px solid rgba(14, 184, 166, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon size={20} color="#14b8a6" strokeWidth={1.5} />
              </div>
              <h3
                style={{
                  fontWeight: 600,
                  fontSize: '17px',
                  color: '#334155',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
