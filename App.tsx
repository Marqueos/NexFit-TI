import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SloganBar from './components/SloganBar';
import Audience from './components/Audience';
import Services from './components/Services';
import Guarantee from './components/Guarantee';
import Process from './components/Process';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-brand-100 selection:text-brand-900 w-full overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        <div id="hero">
          <Hero />
        </div>
        
        <SloganBar />

        <div id="audience">
          <Audience />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="process">
          <Process />
        </div>
        <div id="guarantee">
          <Guarantee />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;