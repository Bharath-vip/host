"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Sparkles, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-secondary overflow-hidden">
            <div className="absolute inset-0 opacity-50 mix-blend-overlay group-hover:scale-110 transition-transform duration-500" />
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">
            AI<span className="text-muted-foreground font-normal">Directory</span>
          </span>
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-xl relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          <div className="relative flex items-center w-full bg-card/80 backdrop-blur-md rounded-full border border-white/10 overflow-hidden px-4">
            <Search className="w-5 h-5 text-muted-foreground mr-2" />
            <Input 
              type="text" 
              placeholder="Search tools, categories, articles..." 
              className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 h-12 text-base"
            />
            <div className="hidden lg:flex items-center gap-1 ml-2">
              <kbd className="bg-white/5 border border-white/10 rounded px-2 py-0.5 text-xs text-muted-foreground font-mono">⌘</kbd>
              <kbd className="bg-white/5 border border-white/10 rounded px-2 py-0.5 text-xs text-muted-foreground font-mono">K</kbd>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/categories" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors flex items-center gap-1">
            Categories <ChevronDown className="w-4 h-4" />
          </Link>
          <Link href="/articles" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Articles
          </Link>
          <Link href="/submit" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Submit Tool
          </Link>
          <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">
            Get Newsletter
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 right-0 bg-card border-b border-white/10 p-4 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="relative flex items-center w-full bg-background rounded-full border border-white/10 overflow-hidden px-4">
                <Search className="w-5 h-5 text-muted-foreground mr-2" />
                <Input 
                  type="text" 
                  placeholder="Search tools..." 
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 h-12"
                />
              </div>
              <Link href="/categories" className="block py-2 text-white font-medium border-b border-white/5">Categories</Link>
              <Link href="/articles" className="block py-2 text-white font-medium border-b border-white/5">Articles</Link>
              <Link href="/submit" className="block py-2 text-white font-medium border-b border-white/5">Submit Tool</Link>
              <Button className="w-full bg-white text-black mt-2">Get Newsletter</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
