import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark text-white relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl mb-8">Let's build something intelligent.</h2>
            <p className="text-gray-400 text-lg mb-12 font-light max-w-md">
              Whether you need a full AI strategy or a specific data solution, I'm ready to discuss how we can drive value for your business.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:contact@sohampurkait.com" className="flex items-center gap-4 text-xl hover:text-accent transition-colors">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <Mail size={20} />
                </div>
                contact@sohampurkait.com
              </a>
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-dark transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-dark transition-all">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-6 glass-card p-8 rounded-3xl bg-white/5 border-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-500">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-accent outline-none transition-colors text-lg" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-gray-500">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-accent outline-none transition-colors text-lg" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2 pt-4">
              <label className="text-xs uppercase tracking-wider text-gray-500">Project Details</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-gray-700 py-2 focus:border-accent outline-none transition-colors text-lg resize-none" placeholder="Tell me about your data needs..."></textarea>
            </div>
            <button type="button" className="w-full py-4 bg-white text-dark font-medium rounded-xl hover:bg-accent hover:text-white transition-colors mt-4">
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Soham Purkait. All rights reserved.</p>
          <p>Designed with Minimalism & Intelligence.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;