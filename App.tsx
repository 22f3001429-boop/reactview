import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream selection:bg-accent/20 selection:text-dark">
      <Navigation />
      
      <main>
        <Hero />
        
        {/* About / Intro Section embedded in flow */}
        <section id="about" className="py-12 container mx-auto px-6">
          <div className="max-w-4xl mx-auto border-l-2 border-accent pl-8 py-2">
             <h3 className="font-serif text-2xl text-dark mb-4 italic">
               "Data is just noise until you give it a voice. I build the systems that translate that voice into strategy."
             </h3>
          </div>
        </section>

        <Services />
        
        <Experience />
        
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default App;