"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import DownloadButton from '@/components/ui/download-button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image 
              src="/logo.jpeg" 
              alt="OPS MOVE Logo" 
              fill 
              className="object-contain rounded"
            />
          </div>
          <span className={cn(
            "font-bold text-xl transition-colors duration-300",
            isScrolled ? "text-black" : "text-white"
          )}>
            OPS MOVE
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks isScrolled={isScrolled} />
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            className={cn(
              "transition-colors", 
              isScrolled ? "bg-black border-2 border-white text-white hover:bg-black/80" : "bg-black border-2 border-white text-white hover:bg-white/20"
            )}
          >
            <Link href="/seja-um-motorista">
            Seja um Motorista
            </Link>
          </Button>
          <DownloadButton className="inline-block px-4 py-2 bg-brand-primary text-white rounded-lg font-medium hover:bg-brand-primary/90 transition-colors">
            Baixar App
          </DownloadButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={isScrolled ? "text-black" : "text-white"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-black" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 fixed top-[calc(var(--header-height,64px))] left-0 right-0 z-40 shadow-lg rounded-b-lg max-h-[80vh] overflow-y-auto">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <MobileNavLinks closeMenu={() => setIsMenuOpen(false)} />
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/seja-um-motorista">
                  Seja um Motorista
                </Link>
              </Button>
              <div onClick={() => setIsMenuOpen(false)}>
                <DownloadButton className="inline-block px-4 py-2 w-full bg-brand-primary text-white rounded-lg text-center font-medium hover:bg-brand-primary/90 transition-colors">
                  Baixar App
                </DownloadButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLinks({ isScrolled }: { isScrolled: boolean }) {
  const linkClasses = cn(
    "font-medium transition-colors hover:text-brand-primary",
    isScrolled ? "text-gray-800" : "text-white"
  );
  
  return (
    <>
      <Link href="/" className={linkClasses}>Início</Link>
      <Link href="#features" className={linkClasses}>Recursos</Link>
      <Link href="#how-it-works" className={linkClasses}>Como Funciona</Link>
      <Link href="#security" className={linkClasses}>Segurança</Link>
      <Link href="#testimonials" className={linkClasses}>Depoimentos</Link>
      <Link href="#download" className={linkClasses}>Download</Link>
    </> 
  );
}

function MobileNavLinks({ closeMenu }: { closeMenu: () => void }) {
  return (
    <>
      <Link href="/" className="font-medium text-gray-800 hover:text-brand-primary" onClick={closeMenu}>Início</Link>
      <Link href="#features" className="font-medium text-gray-800 hover:text-brand-primary" onClick={closeMenu}>Recursos</Link>
      <Link href="#how-it-works" className="font-medium text-gray-800 hover:text-brand-primary" onClick={closeMenu}>Como Funciona</Link>
      <Link href="#security" className="font-medium text-gray-800 hover:text-brand-primary" onClick={closeMenu}>Segurança</Link>
      <Link href="#testimonials" className="font-medium text-gray-800 hover:text-brand-primary" onClick={closeMenu}>Depoimentos</Link>
      <Link href="#download" className="font-medium text-gray-800 hover:text-brand-primary" onClick={closeMenu}>Download</Link>
    </>
  );
}