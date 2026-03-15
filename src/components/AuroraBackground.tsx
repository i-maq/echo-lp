export default function AuroraBackground() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(14,184,166,0.035) 0%, transparent 60%)',
        }}
      />

      <div
        className="aurora-blob animate-blob-1"
        style={{
          width: '480px',
          height: '480px',
          top: '5%',
          left: '10%',
          background: 'rgba(14, 165, 233, 0.09)',
        }}
      />
      <div
        className="aurora-blob animate-blob-2"
        style={{
          width: '420px',
          height: '420px',
          top: '15%',
          right: '8%',
          background: 'rgba(16, 185, 129, 0.08)',
        }}
      />
      <div
        className="aurora-blob animate-blob-3"
        style={{
          width: '500px',
          height: '500px',
          top: '40%',
          left: '30%',
          background: 'rgba(20, 184, 166, 0.07)',
        }}
      />
      <div
        className="aurora-blob animate-blob-4"
        style={{
          width: '380px',
          height: '380px',
          bottom: '15%',
          left: '5%',
          background: 'rgba(14, 165, 233, 0.07)',
        }}
      />
      <div
        className="aurora-blob animate-blob-5"
        style={{
          width: '440px',
          height: '440px',
          bottom: '10%',
          right: '12%',
          background: 'rgba(16, 185, 129, 0.08)',
        }}
      />
    </div>
  );
}
