export default function Nav() {
  return (
    <nav
      className="glass-nav fixed top-0 left-0 right-0 z-50"
      style={{ zIndex: 50 }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <span
          style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 700,
            fontSize: '17px',
            color: '#0f172a',
            letterSpacing: '-0.02em',
          }}
        >
          Project Echo
        </span>

        <div className="relative">
          <div className="button-glow" />
          <a
            href="#waitlist"
            className="glass-button px-5 py-2.5 text-sm"
            style={{ display: 'inline-block' }}
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
}
