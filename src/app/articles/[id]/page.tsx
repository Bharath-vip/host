import React from 'react';
import { AdSpace } from '@/components/ads/AdSpace';
import { Calendar, Clock, MessageCircle, Briefcase, Link as LinkIcon, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Mock data generation for static export
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

export default function ArticlePage() {
  // Mock article content
  const article = {
    title: 'The Ultimate Guide to AI Coding Assistants in 2026',
    category: 'Development',
    author: 'Sarah Chen',
    date: 'June 24, 2026',
    readTime: '8 min read',
    content: `
      <p>The landscape of software engineering is undergoing a tectonic shift. What began as simple autocomplete suggestions has evolved into full-fledged autonomous coding agents. In this guide, we'll break down the top tools you should be using to stay competitive.</p>
      
      <h2>1. Context-Aware Code Completion</h2>
      <p>Modern tools like Cursor and GitHub Copilot have moved beyond simple line completion. They now index your entire codebase, understand the relationships between different microservices, and can generate entire boilerplate structures with a single prompt.</p>

      <blockquote>"The engineers who adopt these tools are seeing a 40% increase in feature velocity, while those who resist are being left behind." - Silicon Valley Tech Report</blockquote>

      <h2>2. Automated Testing & Refactoring</h2>
      <p>Writing unit tests is no longer a chore. The latest generation of AI assistants can analyze your business logic and generate comprehensive test suites covering edge cases you might have missed.</p>

      <h3>Key Features to Look For:</h3>
      <ul>
        <li>Deep integration with your IDE (VS Code, IntelliJ)</li>
        <li>Privacy and security compliance (SOC2)</li>
        <li>Support for multiple LLM backends (Claude 3.5, GPT-4o)</li>
        <li>Low latency generation</li>
      </ul>

      <h2>3. The Future: Multi-Agent Systems</h2>
      <p>Looking ahead, we're seeing the emergence of multi-agent systems where different AI "personas" collaborate. One agent writes the code, another reviews it for security vulnerabilities, and a third writes the documentation.</p>
      
      <p>If you haven't integrated an AI coding assistant into your workflow yet, now is the time to start.</p>
    `
  };

  return (
    <article className="min-h-screen pt-12 pb-24">
      {/* Article Header */}
      <header className="container mx-auto px-4 max-w-4xl mb-12">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors mb-8">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Home
        </Link>
        
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            {article.category}
          </span>
          <span className="text-muted-foreground text-sm flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8 leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary" />
            <div>
              <div className="font-semibold text-white">{article.author}</div>
              <div className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                {article.date}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground mr-2 hidden sm:block">Share:</span>
            <Button variant="outline" size="icon" className="w-9 h-9 rounded-full bg-card/50 border-white/10 text-white hover:bg-white/10">
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="w-9 h-9 rounded-full bg-card/50 border-white/10 text-white hover:bg-white/10">
              <Briefcase className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="w-9 h-9 rounded-full bg-card/50 border-white/10 text-white hover:bg-white/10">
              <LinkIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
        
        {/* Left Sidebar - TOC / Ads */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-32 space-y-8">
            <AdSpace format="rectangle" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 max-w-3xl">
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:text-muted-foreground prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          <div className="my-12">
            <AdSpace format="inline" />
          </div>

          {/* Author Box */}
          <div className="mt-16 p-8 rounded-2xl glass border border-white/10">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Written by {article.author}</h3>
                <p className="text-muted-foreground mb-4">
                  Senior AI researcher and full-stack developer based in San Francisco. Passionate about exploring the intersection of humans and autonomous agents.
                </p>
                <Button variant="outline" className="border-white/10 hover:bg-white/5 text-white">
                  Follow on Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Ads */}
        <div className="hidden xl:block w-64 flex-shrink-0">
          <div className="sticky top-32">
            <AdSpace format="rectangle" />
          </div>
        </div>
      </div>
    </article>
  );
}
