import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, RotateCcw, Layout, Maximize2, X, Sparkles, MessageSquare } from 'lucide-react';
import { chatWithSohamAI } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Which key ideas in your business data are easiest to optimize?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
    <div className="relative group">
       {/* Browser Window Frame */}
      <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/40 bg-white/90 backdrop-blur-sm transition-transform duration-700 ease-out hover:scale-[1.01]">
        
        {/* Browser Header / Toolbar */}
        <div className="bg-white/80 border-b border-gray-200 px-4 py-3 flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          
          {/* Mock Address Bar */}
          <div className="flex-1 max-w-2xl mx-auto bg-gray-100 rounded-lg px-3 py-1.5 flex items-center justify-between text-xs text-gray-500">
             <div className="flex items-center gap-2">
                <Layout size={12} />
                <span>sohampurkait.portfolio</span>
             </div>
             <RotateCcw size={10} />
          </div>
          
          <div className="w-10"></div> {/* Spacer */}
        </div>

        {/* Browser Content Area - The "Background" of the widget */}
        <div className="h-[400px] md:h-[600px] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden p-8">
            {/* Abstract Portfolio Content Background Mockup */}
            <div className="max-w-3xl mx-auto opacity-50 blur-[1px] transition-all duration-500 group-hover:blur-0 group-hover:opacity-80">
                <div className="h-8 w-1/3 bg-gray-300 rounded mb-4"></div>
                <h2 className="font-serif text-4xl text-gray-800 mb-6">The Spring 2026 Trend Report</h2>
                <div className="h-64 w-full bg-gray-200 rounded-xl mb-6 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" className="object-cover w-full h-full" alt="Report" />
                </div>
                <div className="space-y-3">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                </div>
            </div>

            {/* Floating Chat Interface (The "Assistant" Bubble) */}
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-[90%] md:w-[400px] z-20">
                <div className="glass-card rounded-2xl p-4 shadow-xl border border-white/60 bg-white/80 backdrop-blur-xl">
                    
                    <div className="flex items-center gap-2 mb-4 text-dark font-medium text-sm">
                        <Sparkles size={16} className="text-accent" />
                        <span>Assistant</span>
                    </div>

                    <div className="max-h-[250px] overflow-y-auto space-y-3 mb-4 pr-1 custom-scrollbar">
                        {messages.map((msg, idx) => (
                             <div key={idx} className={`text-sm p-3 rounded-xl leading-relaxed ${
                                 msg.role === 'model' 
                                 ? 'bg-white text-gray-800 shadow-sm' 
                                 : 'bg-dark text-white ml-auto max-w-[90%]'
                             }`}>
                                 {msg.text}
                             </div>
                        ))}
                         {isLoading && (
                             <div className="bg-white text-gray-800 shadow-sm p-3 rounded-xl w-fit">
                                 <div className="flex gap-1">
                                     <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                                     <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                                     <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                                 </div>
                             </div>
                         )}
                         <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSubmit} className="relative">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask Soham..."
                            className="w-full pl-4 pr-10 py-3 bg-white/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-accent transition-all"
                        />
                         <button 
                            type="submit"
                            disabled={!input.trim()}
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-accent disabled:opacity-30"
                         >
                            <Send size={16} />
                         </button>
                    </form>
                    
                    {/* Floating Action Buttons Mockup */}
                    <div className="absolute -left-16 bottom-0 flex flex-col gap-2">
                        <button className="p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-dark hover:scale-110 transition-all">
                            <MessageSquare size={18} />
                        </button>
                        <div className="bg-white rounded-xl shadow-lg p-2 flex flex-col gap-2">
                             <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">Aa</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;