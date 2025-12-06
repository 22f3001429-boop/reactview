import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import AIChat from './AIChat';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden w-full">
      {/* Background Curved Lines (SVG) */}
      <svg className="absolute top-0 left-0 w-full h-full z-0 opacity-40 pointer-events-none" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100 600 C 200 400, 600 800, 1500 200" stroke="#E5E5E5" strokeWidth="1.5" />
        <path d="M-100 300 C 300 600, 800 200, 1500 500" stroke="#E5E5E5" strokeWidth="1.5" />
        <path d="M1000 -100 C 900 300, 1200 600, 1600 800" stroke="#E5E5E5" strokeWidth="1.5" />
      </svg>

      {/* Textured Orbs */}
      <div className="absolute top-[-150px] left-[-200px] w-[600px] h-[600px] rounded-full orb-teal noise-overlay animate-float z-0"></div>
      <div className="absolute bottom-[0%] right-[-300px] w-[900px] h-[900px] rounded-full orb-red noise-overlay animate-float-delayed z-0"></div>
      <div className="absolute top-[10%] right-[20%] w-[100px] h-[100px] rounded-full bg-orange-300 blur-xl opacity-60 animate-pulse-slow z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Top Label */}
        <div className="mb-6 animate-fade-in-up">
          <span className="text-gray-500 text-sm tracking-wide border-b border-gray-300 pb-1">
             A Data Scientist from <span className="text-dark font-medium underline decoration-1">Technological Institute</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-6xl md:text-8xl text-center text-dark leading-[1] mb-6 animate-fade-in-up delay-100">
          The developer that <br />
          <span className="italic font-light">works for you</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl mb-10 font-light animate-fade-in-up delay-200">
          Available for Mac, Windows, and Android development. <br/>
          Specializing in AI solutions, data pipelines, and business insights.
        </p>

        {/* CTA Button */}
        <div className="mb-20 animate-fade-in-up delay-300">
          <a href="#contact" className="group flex items-center gap-3 px-8 py-4 bg-dark text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-xl">
            <Download size={20} />
            <span>Start a Project</span>
          </a>
        </div>

        {/* The "Widget" - AI Chat Interface Styled as Browser Window */}
        <div className="w-full max-w-5xl animate-fade-in-up delay-500 relative">
          <AIChat />
          
          {/* Connector Line to Widget (Visual flair) */}
          <div className="absolute -top-20 left-1/2 w-px h-20 bg-gradient-to-b from-transparent to-gray-300 -translate-x-1/2"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;