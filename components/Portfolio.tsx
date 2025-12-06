import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "FinTech Churn Predictor",
    category: "Data Science",
    description: "A machine learning pipeline that predicts user churn with 92% accuracy, integrated into a dashboard for the retention team.",
    tags: ["Python", "Scikit-Learn", "Streamlit"]
  },
  {
    id: 2,
    title: "Legal Doc Summarizer",
    category: "AI Engineering",
    description: "A RAG-based application allowing lawyers to upload PDFs and ask questions about specific clauses using Gemini Pro.",
    tags: ["LangChain", "Gemini API", "React"]
  },
  {
    id: 3,
    title: "E-Commerce Trend Scout",
    category: "Analytics",
    description: "Automated scraper and visualization tool that tracks competitor pricing and inventory shifts in real-time.",
    tags: ["Selenium", "Pandas", "Tableau"]
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif text-4xl text-dark mb-4">Selected Works</h2>
            <p className="text-gray-600 font-light text-lg">Case studies in efficiency and intelligence.</p>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm font-medium border-b border-dark pb-0.5 hover:text-accent hover:border-accent transition-colors">
            View Github Profile
          </a>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row">
                {/* Visual Placeholder - imitating a project screenshot */}
                <div className="w-full md:w-2/5 h-64 md:h-auto bg-gray-100 relative overflow-hidden">
                    <img 
                        src={`https://picsum.photos/800/600?random=${project.id}`} 
                        alt={project.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-accent tracking-wider uppercase">{project.category}</span>
                    <ArrowUpRight className="text-gray-300 group-hover:text-dark transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <h3 className="font-serif text-3xl text-dark mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-gray-600 font-light mb-8 max-w-lg">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-500 text-xs rounded-full border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;