import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ArrowUp } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const location = useLocation();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleFooterLinkClick = (path) => {
    if (location.pathname === path) {
      scrollToTop();
    }
  };

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8 mt-auto z-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="group" aria-label="CharmSolutionIT home">
              <BrandLogo />
            </Link>
            <p className="text-textMuted text-sm leading-relaxed">
              We build practical websites, landing pages, e-commerce setup, basic SEO, branding, maintenance, and digital setup support.
            </p>
            <div className="flex items-center gap-4 text-textMuted">
              <Link to="/contact" className="hover:text-primary transition-colors font-medium">Contact Us</Link>
              <Link to="/services" className="hover:text-primary transition-colors font-medium">Services</Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-3 text-textMuted text-sm">
              <li><Link to="/about" onClick={() => handleFooterLinkClick('/about')} className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/services" onClick={() => handleFooterLinkClick('/services')} className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" onClick={() => handleFooterLinkClick('/portfolio')} className="hover:text-primary transition-colors">Sample Work</Link></li>
              <li><Link to="/blog" onClick={() => handleFooterLinkClick('/blog')} className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" onClick={() => handleFooterLinkClick('/contact')} className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="flex flex-col gap-3 text-textMuted text-sm">
              <li><Link to="/privacy" onClick={() => handleFooterLinkClick('/privacy')} className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" onClick={() => handleFooterLinkClick('/terms')} className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie" onClick={() => handleFooterLinkClick('/cookie')} className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/affiliate-disclosure" onClick={() => handleFooterLinkClick('/affiliate-disclosure')} className="hover:text-primary transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Project Enquiry</h4>
            <p className="text-textMuted text-sm mb-4">Share your email if you want to discuss a website, maintenance, SEO setup, or branding work.</p>
            <form className="flex gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-background border border-border rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-textMain"
                required
              />
              <button type="submit" className="bg-primary hover:bg-primaryHover text-white p-2 rounded-lg transition-colors flex items-center justify-center min-w-[40px]">
                {subscribed ? <CheckCircle2 className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
            {subscribed && <p className="text-green-500 text-xs mt-2 font-medium">Thanks! Please also use the contact page for full project details.</p>}
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textMuted text-sm">© {new Date().getFullYear()} Charmsolutionit. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-textMuted transition-all hover:border-primary hover:text-primary hover:bg-primary/5"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
            Scroll to top
          </button>
          <div className="flex gap-6 text-sm text-textMuted">
            <span>Designed with React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
