"use client";

import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const TRENDING = [
  { id: 1, name: 'Suno AI', category: 'Audio', rank: 1, change: '+12%', time: '2 hours ago' },
  { id: 2, name: 'V0 by Vercel', category: 'Coding', rank: 2, change: '+8%', time: '4 hours ago' },
  { id: 3, name: 'ElevenLabs', category: 'Voice', rank: 3, change: '+5%', time: '5 hours ago' },
  { id: 4, name: 'Claude 3.5', category: 'Chatbot', rank: 4, change: '+15%', time: '12 hours ago' },
  { id: 5, name: 'Runway Gen-3', category: 'Video', rank: 5, change: '+22%', time: '1 day ago' },
];

export function TrendingFeed() {
  return (
    <section className="py-24 relative z-10 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="w-full md:w-1/3">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Live Data</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trending Today
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Watch the market move in real-time. Discover the fastest growing AI tools based on daily user adoption and search volume.
              </p>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="bg-card/30 backdrop-blur-md border border-white/10 rounded-2xl p-2 md:p-4 overflow-hidden relative">
              {/* Subtle animated background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
              
              <div className="space-y-2">
                {TRENDING.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="w-8 text-center font-mono text-xl font-bold text-white/20 group-hover:text-white/40 transition-colors">
                        0{item.rank}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-muted-foreground">{item.category}</span>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground/60">
                            <Clock className="w-3 h-3" />
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md text-sm font-medium">
                        <TrendingUp className="w-3 h-3" />
                        {item.change}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
