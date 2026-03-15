import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import EchoOrb from './EchoOrb';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle');
  const ref = useScrollAnimation();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');

    const { error } = await supabase.from('waitlist').insert({ email: email.trim().toLowerCase(), source: 'waitlist' });

    if (error) {
      if (error.code === '23505') {
        setStatus('duplicate');
      } else {
        setStatus('error');
      }
    } else {
      setStatus('success');
      setEmail('');
    }
  }

  return (
    <section id="waitlist" className="relative px-5 md:px-8 py-28 md:py-40">
      <div ref={ref} className="fade-in-section max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-10">
          <EchoOrb size="sm" />
        </div>

        <h2
          style={{
            fontWeight: 800,
            fontSize: 'clamp(28px, 5vw, 48px)',
            letterSpacing: '-0.03em',
            color: '#0f172a',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          Be one of the first to<br />meet your Echo.
        </h2>

        <p
          style={{
            fontWeight: 300,
            fontSize: '17px',
            lineHeight: 1.7,
            color: '#64748b',
            marginBottom: '40px',
          }}
        >
          We're launching on iOS soon. Join the waitlist for early access.
        </p>

        {status === 'success' ? (
          <div
            className="glass-panel px-8 py-7"
            style={{
              background: 'rgba(240, 253, 250, 0.6)',
              border: '1px solid rgba(20, 184, 166, 0.25)',
            }}
          >
            <p
              style={{
                fontWeight: 600,
                fontSize: '17px',
                color: '#14b8a6',
                marginBottom: '6px',
              }}
            >
              You're on the list.
            </p>
            <p
              style={{
                fontWeight: 300,
                fontSize: '15px',
                color: '#64748b',
              }}
            >
              We'll reach out when it's your turn to meet your Echo.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="glass-input w-full px-6 py-4 text-base"
                disabled={status === 'loading'}
              />
            </div>

            <div className="relative flex-shrink-0">
              <div className="button-glow" />
              <button
                type="submit"
                className="glass-button px-7 py-4 text-base w-full sm:w-auto"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Joining…' : 'Join Waitlist'}
              </button>
            </div>
          </form>
        )}

        {status === 'duplicate' && (
          <p
            style={{
              marginTop: '12px',
              fontSize: '14px',
              color: '#94a3b8',
              fontWeight: 300,
            }}
          >
            That email is already on the waitlist.
          </p>
        )}

        {status === 'error' && (
          <p
            style={{
              marginTop: '12px',
              fontSize: '14px',
              color: '#ef4444',
              fontWeight: 300,
            }}
          >
            Something went wrong. Please try again.
          </p>
        )}

        <p
          style={{
            marginTop: '20px',
            fontSize: '13px',
            color: '#94a3b8',
            fontWeight: 300,
          }}
        >
          We'll never share your email. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
