import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from './BrandLogo';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Sample Work', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Pricing', path: '/pricing' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-surface/90 backdrop-blur-md shadow-sm border-b border-border py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="group" aria-label="CharmSolutionIT home">
          <BrandLogo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-textMuted'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="relative group">
            <button type="button" className="text-sm font-medium text-textMuted transition-colors hover:text-primary">
              Affiliate Disclosure
            </button>
            <div className="pointer-events-none absolute right-0 top-full mt-3 w-80 rounded-2xl border border-border bg-white p-4 text-sm leading-relaxed text-textMuted opacity-0 shadow-xl transition-all duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
              Some links on this site are affiliate links. We may earn a commission at no extra cost to you. Our content remains independent and research-based.
            </div>
          </div>
          <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
            Start a Project
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-textMuted hover:text-textMain" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-b border-border overflow-hidden shadow-sm"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-base font-medium ${location.pathname === link.path ? 'text-primary' : 'text-textMuted'}`}
                >
                  {link.name}
                </Link>
              ))}
              <details className="rounded-2xl border border-border bg-white p-4 text-sm text-textMuted">
                <summary className="cursor-pointer font-semibold text-textMain">Affiliate Disclosure</summary>
                <p className="mt-3 leading-relaxed">
                  Some links on this site are affiliate links. We may earn a commission at no extra cost to you. Our content remains independent and research-based.
                </p>
              </details>
              <Link to="/contact" className="btn-primary w-full mt-2 text-center">
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
