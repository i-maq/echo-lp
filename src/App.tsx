import AuroraBackground from './components/AuroraBackground';
import Particles from './components/Particles';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Problem from './components/Problem';
import WhatIsEcho from './components/WhatIsEcho';
import HowItWorks from './components/HowItWorks';
import MemoryLayers from './components/MemoryLayers';
import EmotionalDesign from './components/EmotionalDesign';
import OriginStory from './components/OriginStory';
import Vision from './components/Vision';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#fafbfc',
        fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
        position: 'relative',
      }}
    >
      <AuroraBackground />
      <Particles />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Nav />

        <main>
          <Hero />
          <Problem />
          <WhatIsEcho />
          <HowItWorks />
          <MemoryLayers />
          <EmotionalDesign />
          <OriginStory />
          <Vision />
          <Waitlist />
        </main>

        <Footer />
      </div>
    </div>
  );
}
