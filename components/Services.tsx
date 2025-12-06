import React from 'react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="font-serif text-5xl text-dark mb-6">Do anything with Data</h2>
          <p className="text-gray-600 text-lg font-light">Custom architectures for modern business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Analysis (AI that understands) */}
          <div className="group rounded-3xl p-8 h-[500px] relative overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 border border-white/20 bg-[#F2F2EB]">
            <div className="relative z-10">
              <h3 className="text-2xl font-medium text-dark mb-2">Analysis that clarifies</h3>
              <p className="text-gray-500 font-light">Turn messy datasets into clear strategic directives.</p>
            </div>
            
            {/* Mock UI Illustration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[80%] space-y-4">
               {/* Search Bar Mock */}
               <div className="h-8 bg-gray-200/50 rounded-full w-1/3 mb-8"></div>
               {/* Skeleton Content */}
               <div className="space-y-3">
                   <div className="flex gap-3 items-center">
                       <div className="w-4 h-4 rounded-full bg-teal-800/20"></div>
                       <div className="h-3 bg-gray-300/40 rounded-full w-full"></div>
                   </div>
                   <div className="h-3 bg-gray-300/40 rounded-full w-3/4 ml-7"></div>
                   <div className="h-3 bg-gray-300/40 rounded-full w-5/6 ml-7"></div>
               </div>
               <div className="space-y-3 pt-4">
                   <div className="flex gap-3 items-center">
                       <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center text-[10px] text-gray-500">CNN</div>
                       <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center text-[10px] text-gray-500">WSJ</div>
                   </div>
               </div>
               
               {/* Floating Query Box */}
               <div className="absolute -bottom-20 left-0 right-0 bg-white/80 backdrop-blur rounded-xl p-4 shadow-sm">
                   <p className="text-xs text-gray-500">How are different news outlets covering this trend?</p>
               </div>
            </div>
            
            {/* Background Texture */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-200/20 pointer-events-none noise-overlay"></div>
          </div>

          {/* Card 2: Organization (AI that organizes) */}
          <div className="group rounded-3xl p-8 h-[500px] relative overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 border border-white/20 bg-[#F4F4F0]">
            <div className="relative z-10">
              <h3 className="text-2xl font-medium text-dark mb-2">Pipelines that organize</h3>
              <p className="text-gray-500 font-light">Automate the flow of information between your tools.</p>
            </div>

            {/* Mock UI Illustration - Tabs */}
            <div className="absolute top-1/3 -right-10 w-[110%] transform rotate-[-2deg] transition-transform group-hover:rotate-0">
               <div className="bg-white rounded-t-xl shadow-lg border-b-2 border-orange-400 overflow-hidden flex items-center px-4 py-3 gap-4">
                   <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded text-xs font-bold text-gray-700">
                       <div className="w-4 h-4 bg-black rounded-sm"></div> Framer
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 rounded text-xs font-bold text-orange-800 border border-orange-200">
                       <div className="w-4 h-4 bg-orange-500 rounded-sm"></div> Perplexity
                   </div>
                   <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded text-xs text-gray-500">
                       <div className="w-4 h-4 bg-green-500 rounded-sm"></div> Slack
                   </div>
               </div>
               <div className="h-64 bg-white opacity-80"></div>
            </div>
             <div className="absolute bottom-8 left-8 right-8 bg-white/60 backdrop-blur rounded-xl p-4">
                   <p className="text-xs text-gray-500">Organize my tabs by category and close the ones that are distractions.</p>
            </div>
          </div>

          {/* Card 3: Building (AI that builds) */}
          <div className="group rounded-3xl p-8 h-[500px] relative overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 border border-white/20 bg-gradient-to-tr from-[#E0F2F1] to-[#F0F4F8]">
            <div className="relative z-10">
              <h3 className="text-2xl font-medium text-dark mb-2">Systems that build</h3>
              <p className="text-gray-500 font-light">Full-stack development of custom AI products.</p>
            </div>

            {/* Mock UI - Image Generation / Code */}
            <div className="absolute top-1/3 left-12 w-64 h-48 bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000" alt="Space" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-white/30 rounded-full animate-spin border-t-white"></div>
                </div>
            </div>
            
             <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur rounded-xl p-4">
                   <p className="text-xs text-gray-500">Build a basic website for me using the best website generator tool.</p>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(42,92,85,0.1)] rounded-3xl pointer-events-none"></div>
          </div>

          {/* Card 4: Agents (AI that shops/emails) */}
          <div className="group rounded-3xl p-8 h-[500px] relative overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 border border-white/20 bg-[#F1F0EB]">
            <div className="relative z-10">
              <h3 className="text-2xl font-medium text-dark mb-2">Agents that act</h3>
              <p className="text-gray-500 font-light">Autonomous bots that handle email, scheduling, and procurement.</p>
            </div>

            {/* Mock UI - Chair/Product */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-4 shadow-xl w-64">
                <div className="h-40 bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=1000" className="object-cover w-full h-full mix-blend-multiply" alt="Chair" />
                </div>
                <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/60 backdrop-blur rounded-xl p-4">
                   <p className="text-xs text-gray-500">Buy a high quality, comfortable yet cheap office chair.</p>
            </div>
          </div>

        </div>

        <div className="mt-20 text-center">
             <h3 className="text-xl text-gray-800 mb-6">Explore more ways to use data.</h3>
             <div className="flex gap-4 justify-center">
                 <button className="px-6 py-3 bg-dark text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                     View Case Studies
                 </button>
                 <button className="px-6 py-3 bg-gray-200 text-dark rounded-full text-sm font-medium hover:bg-gray-300 transition-colors">
                     Download Resume
                 </button>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Services;