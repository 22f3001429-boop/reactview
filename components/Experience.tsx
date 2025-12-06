import React, { useState } from 'react';
import { Send, Sparkles, Bot } from 'lucide-react';
import { chatWithSohamAI } from '../services/geminiService';
import { ChatMessage } from '../types';

const Experience: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello. I'm Soham's AI Digital Twin. Ask me about his skills, experience, or how he approaches data problems." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithSohamAI(userMsg, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E0F2F1] text-accent text-xs font-semibold tracking-wider uppercase">
              <Sparkles size={14} />
              AI Showcase
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl text-dark leading-[1.1]">
              Experience the <br className="hidden lg:block" />
              tech <br className="hidden lg:block" />
              firsthand.
            </h2>
            
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              Why just read a resume? I've trained this model on my professional history and problem-solving methodologies. Go ahead, ask it how I'd solve your business churn problem.
            </p>
          </div>

          {/* Right Chat Card */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden relative group transition-transform hover:-translate-y-1 duration-500">
              
              {/* Card Header */}
              <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between bg-white">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-dark">Soham's Assistant</span>
                </div>
                <span className="text-xs text-gray-400">Powered by Gemini 2.5</span>
              </div>

              {/* Chat Area */}
              <div className="p-6 h-[450px] flex flex-col bg-white">
                <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-fade-in-up`}>
                      {msg.role === 'model' && (
                        <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                           <Bot size={16} />
                        </div>
                      )}
                      <div className={`p-4 rounded-2xl text-sm leading-relaxed max-w-[85%] ${
                        msg.role === 'model' 
                          ? 'bg-white border border-gray-100 shadow-sm text-gray-700' 
                          : 'bg-gray-50 text-dark border border-gray-100'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-4">
                       <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                           <Bot size={16} />
                        </div>
                        <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm w-fit">
                          <div className="flex gap-1.5">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                          </div>
                        </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <form onSubmit={handleSubmit} className="mt-6 relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about RAG, Forecasting, or Python..."
                    className="w-full bg-gray-50 border border-transparent rounded-2xl py-4 pl-5 pr-12 text-sm text-dark placeholder-gray-400 focus:outline-none focus:bg-white focus:border-accent/20 focus:ring-4 focus:ring-accent/5 transition-all"
                  />
                  <button 
                    type="submit"
                    disabled={!input.trim()} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-accent transition-colors disabled:opacity-30"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;