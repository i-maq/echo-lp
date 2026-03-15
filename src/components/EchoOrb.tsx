interface EchoOrbProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function EchoOrb({ size = 'lg' }: EchoOrbProps) {
  const dimensions = {
    sm: 'w-24 h-24',
    md: 'w-36 h-36 md:w-44 md:h-44',
    lg: 'w-40 h-40 md:w-56 md:h-56',
  };

  return (
    <div className="relative flex items-center justify-center" style={{ isolation: 'isolate' }}>
      <div
        className="absolute rounded-full"
        style={{
          width: '140%',
          height: '140%',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(16, 185, 129, 0.05) 50%, transparent 70%)',
          filter: 'blur(20px)',
          zIndex: -1,
        }}
      />
      <div
        className={`echo-orb ${dimensions[size]}`}
        style={{
          background: 'radial-gradient(circle at 35% 35%, rgba(14, 165, 233, 0.95) 0%, rgba(20, 184, 166, 0.85) 35%, rgba(16, 185, 129, 0.75) 65%, rgba(16, 185, 129, 0.4) 100%)',
        }}
      />
    </div>
  );
}
