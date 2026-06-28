"use client";

import React from 'react';
import { ArrowUpRight, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const MOCK_TOOLS = [
  {
    id: 1,
    name: 'Cursor',
    description: 'The AI-first code editor built for pair programming.',
    category: 'Coding',
    pricing: 'Freemium',
    rating: 4.9,
    pros: ['Context aware', 'Copilot integration', 'Fast'],
    cons: ['Requires learning curve'],
    icon: 'C',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 2,
    name: 'Perplexity',
    description: 'AI-powered search engine that provides direct answers with citations.',
    category: 'Research',
    pricing: 'Freemium',
    rating: 4.8,
    pros: ['Accurate citations', 'Fast response', 'Pro search'],
    cons: ['Limited daily pro searches'],
    icon: 'P',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    name: 'Midjourney',
    description: 'Advanced AI image generator known for high artistic quality.',
    category: 'Image',
    pricing: 'Paid',
    rating: 4.9,
    pros: ['Stunning quality', 'V6 model', 'Style consistency'],
    cons: ['Discord interface only'],
    icon: 'M',
    color: 'from-orange-500 to-red-500'
  },
];

export function FeaturedTools() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured AI Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg">
              Hand-picked by our experts. These are the tools redefining productivity across industries.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex border-white/10 hover:bg-white/5 text-white">
            View all tools <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_TOOLS.map((tool, index) => (
            <motion.div 
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-b from-white/10 to-transparent rounded-2xl z-0" />
              <div className="relative h-full flex flex-col p-6 rounded-2xl glass glass-hover z-10 overflow-hidden">
                {/* Background glow on hover */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${tool.color} rounded-full mix-blend-screen filter blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br ${tool.color} shadow-lg`}>
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 text-xs border-white/10">
                          {tool.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{tool.pricing}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-medium text-white">{tool.rating}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {tool.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2 block">Pros</span>
                    <ul className="flex flex-wrap gap-2">
                      {tool.pros.map(pro => (
                        <li key={pro} className="text-xs px-2 py-1 rounded-md bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2 block">Cons</span>
                    <ul className="flex flex-wrap gap-2">
                      {tool.cons.map(con => (
                        <li key={con} className="text-xs px-2 py-1 rounded-md bg-rose-400/10 text-rose-300 border border-rose-400/20">
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  Visit Website <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-white">
            View all tools <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
