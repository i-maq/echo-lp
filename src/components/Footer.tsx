export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(203, 213, 225, 0.3)',
        background: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          style={{
            fontSize: '13px',
            fontWeight: 400,
            color: '#94a3b8',
          }}
        >
          Project Echo © 2026
        </p>

        <div className="flex items-center gap-5">
          <span
            style={{
              fontSize: '13px',
              fontWeight: 400,
              color: '#94a3b8',
            }}
          >
            London, UK
          </span>
          <span style={{ color: '#cbd5e1', fontSize: '13px' }}>·</span>
          <a
            href="mailto:i@i-maq.com"
            style={{
              fontSize: '13px',
              fontWeight: 400,
              color: '#94a3b8',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#14b8a6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
          >
            i@i-maq.com
          </a>
        </div>
      </div>
    </footer>
  );
}
