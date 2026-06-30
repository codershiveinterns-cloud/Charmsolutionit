import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, Layers, Search, TrendingUp, ShieldCheck, CheckCircle, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};


const faqs = [
  {
    q: "How long does a typical website take?",
    a: "A simple website can take around 1–3 weeks. Bigger websites or e-commerce work can take longer depending on pages, content, and features."
  },
  {
    q: "Who do you work with?",
    a: "We work with businesses, startups, service providers, shops, creators, and individuals who need a professional online presence."
  },
  {
    q: "Do you provide domain and hosting?",
    a: "We can guide you with domain and hosting setup. If you already have hosting, we can work with your existing setup."
  },
  {
    q: "What technologies do you specialize in?",
    a: "We mainly work with React, JavaScript, Tailwind CSS, HTML/CSS, Figma, GitHub, hosting platforms, and basic SEO tools."
  },
  {
    q: "What happens after the project is launched?",
    a: "We can help with small updates, content changes, bug fixes, hosting guidance, and basic maintenance after launch."
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-border rounded-2xl overflow-hidden transition-all duration-300"
      onClick={() => setOpen(!open)}
    >
      <button className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-surface transition-colors">
        <span className="text-base md:text-lg font-semibold text-textMain">{q}</span>
        <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-textMuted leading-relaxed px-6 pb-6">{a}</p>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
        {/* Abstract Light Backgrounds */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none z-0"></div>
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-border text-primary text-sm font-bold mb-8 shadow-sm">
                <Sparkles className="w-4 h-4 text-secondary" /> Professional Websites, Honest Scope
              </span>
            </motion.div>
            
            <motion.h1 
              initial="hidden" animate="visible" variants={fadeIn}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1] text-textMain"
            >
              Clean, Responsive <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl rounded-full"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Websites for Your Brand
                </span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial="hidden" animate="visible" variants={fadeIn}
              className="text-lg md:text-2xl text-textMuted mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              We help businesses, startups, service providers, and individuals build practical websites with clear communication, realistic scope, basic SEO, and launch support.
            </motion.p>
            
            <motion.div 
              initial="hidden" animate="visible" variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link to="/contact" className="btn-primary w-full sm:w-auto text-lg px-8 py-4 shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)]">
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="btn-secondary w-full sm:w-auto text-lg px-8 py-4">
                <Play className="w-5 h-5 text-primary" />
                View Services
              </Link>
            </motion.div>
          </div>

          {/* Enhanced Premium Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="mt-28 relative mx-auto max-w-6xl z-20"
          >
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-white border border-border p-4 rounded-2xl shadow-xl z-30 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-textMuted font-bold uppercase">Website Goal</p>
                <p className="text-xl font-black text-textMain">Clear Enquiry Flow</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 bg-white border border-border p-4 rounded-2xl shadow-xl z-30 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-textMuted font-bold uppercase">Setup</p>
                <p className="text-xl font-black text-textMain">SEO Basics</p>
              </div>
            </motion.div>

            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-purple-300/30 to-secondary/20 rounded-[2.5rem] blur-2xl opacity-60"></div>
            <div className="p-2 rounded-[2rem] relative shadow-2xl bg-white border border-border">
              {/* Browser Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-surface rounded-t-[1.5rem] border-b border-border">
                <div className="flex gap-2.5 w-24">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                </div>
                
                {/* Sleek Search Bar */}
                <div className="flex-1 max-w-md mx-auto flex items-center gap-3 bg-white rounded-lg px-4 py-2 text-sm text-textMuted border border-border shadow-sm">
                  <Search className="w-4 h-4 text-textMuted" />
                  <span className="flex-grow text-left">charmsolutionit.com</span>
                  <span className="border border-border rounded px-2 py-0.5 text-xs bg-surface font-medium text-textMain shadow-sm">⌘K</span>
                </div>
                
                <div className="w-24 flex justify-end">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
                </div> 
              </div>
              
              {/* Dashboard Content */}
              <div className="bg-surface/50 rounded-b-[1.5rem] p-8 grid grid-cols-1 lg:grid-cols-4 gap-8 h-[550px]">
                {/* Sidebar */}
                <div className="hidden lg:flex flex-col gap-6 border-r border-border pr-8">
                  <div className="space-y-4">
                    <div className="h-10 bg-white rounded-xl w-full border border-border shadow-sm flex items-center px-4 gap-3">
                      <div className="w-5 h-5 rounded bg-primary/20"></div>
                      <div className="h-2.5 bg-border rounded w-20"></div>
                    </div>
                    <div className="h-10 bg-transparent rounded-xl w-full flex items-center px-4 gap-3 opacity-60">
                      <div className="w-5 h-5 rounded bg-border"></div>
                      <div className="h-2.5 bg-border rounded w-16"></div>
                    </div>
                    <div className="h-10 bg-transparent rounded-xl w-full flex items-center px-4 gap-3 opacity-60">
                      <div className="w-5 h-5 rounded bg-border"></div>
                      <div className="h-2.5 bg-border rounded w-24"></div>
                    </div>
                  </div>

                  <div className="mt-auto bg-gradient-to-br from-primary to-primaryHover p-5 rounded-2xl text-white shadow-lg shadow-primary/30">
                    <Zap className="w-6 h-6 mb-3 text-white" />
                    <p className="font-bold mb-1">Launch Checklist</p>
                    <p className="text-xs text-white/80 mb-4">Design, content, SEO basics, hosting.</p>
                    <div className="w-full bg-white/20 rounded-full h-1.5">
                      <div className="bg-white w-4/5 h-1.5 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Main Content Area */}
                <div className="lg:col-span-3 flex flex-col gap-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <h2 className="text-2xl font-black text-textMain mb-1">Website Launch Plan</h2>
                      <p className="text-textMuted text-sm font-medium">Scope, design, build, and launch support</p>
                    </div>
                    <div className="flex gap-2">
                       <div className="h-9 px-4 bg-white border border-border rounded-lg shadow-sm flex items-center text-sm font-bold text-textMain">Scope First</div>
                       <div className="h-9 px-4 bg-textMain text-white rounded-lg shadow-sm flex items-center text-sm font-bold">Launch</div>
                    </div>
                  </div>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-6">
                     <div className="bg-white rounded-2xl w-full border border-border p-6 flex flex-col justify-between shadow-sm relative overflow-hidden">
                       <div className="absolute -right-4 -top-4 w-20 h-20 bg-primary/5 rounded-full"></div>
                       <p className="text-textMuted text-sm font-bold mb-2">Website Type</p>
                       <p className="text-3xl font-black text-textMain">Business</p>
                       <p className="text-green-500 text-xs font-bold mt-2 flex items-center gap-1"><TrendingUp className="w-3 h-3"/> Responsive pages</p>
                     </div>
                     <div className="bg-white rounded-2xl w-full border border-border p-6 flex flex-col justify-between shadow-sm">
                       <p className="text-textMuted text-sm font-bold mb-2">Core Pages</p>
                       <p className="text-3xl font-black text-textMain">Planned</p>
                       <p className="text-green-500 text-xs font-bold mt-2 flex items-center gap-1"><TrendingUp className="w-3 h-3"/> Home, services, contact</p>
                     </div>
                     <div className="bg-primary/5 rounded-2xl w-full border border-primary/20 p-6 flex flex-col justify-between shadow-sm">
                       <p className="text-primary text-sm font-bold mb-2">Launch Setup</p>
                       <p className="text-3xl font-black text-primary">Ready</p>
                       <p className="text-primary/80 text-xs font-bold mt-2">Domain and hosting guidance</p>
                     </div>
                  </div>

                  {/* Chart area */}
                  <div className="flex-grow bg-white rounded-2xl w-full relative overflow-hidden border border-border p-6 shadow-sm flex flex-col">
                    <p className="text-textMain font-bold mb-6">Design Preview</p>
                    <div className="flex-grow relative">
                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[1,2,3,4].map(i => <div key={i} className="w-full border-b border-border/50"></div>)}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-secondary/10 to-transparent pointer-events-none"></div>
                      <svg className="absolute bottom-0 left-0 w-full h-[80%]" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path d="M0,100 L0,70 Q10,50 25,65 T50,40 T75,60 T100,20 L100,100 Z" fill="url(#gradLight)" />
                        <path d="M0,70 Q10,50 25,65 T50,40 T75,60 T100,20" fill="none" stroke="#0EA5E9" strokeWidth="2.5" className="drop-shadow-[0_8px_8px_rgba(14,165,233,0.3)]" />
                        <defs>
                          <linearGradient id="gradLight" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(14,165,233,0.2)" />
                            <stop offset="100%" stopColor="rgba(14,165,233,0)" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-12 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-textMuted text-sm font-bold uppercase tracking-widest mb-8">Services we actually provide</p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {['Business Websites', 'Landing Pages', 'E-commerce Setup', 'Basic SEO', 'Logo & Branding', 'Maintenance', 'Domain & Hosting', 'Google Business Profile'].map((service) => (
              <span key={service} className="rounded-full border border-border bg-surface px-5 py-2 text-sm font-bold text-textMuted">
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">About Charmsolutionit</span>
          <h2 className="text-4xl md:text-5xl font-black text-textMain mb-6">A practical website service for real online presence.</h2>
          <p className="text-textMuted text-lg leading-relaxed max-w-3xl mx-auto">
            Charmsolutionit helps businesses, service providers, startups, and individuals build a clean online presence without confusing technical steps. We focus on real requirements, clear scope, responsive design, basic SEO setup, and launch support. Real client work and testimonials are shown only when they are verified and approved.
          </p>
        </div>
      </section>

      {/* Modern Process Timeline */}
      <section className="bg-white relative py-32 border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Process</span>
              <h2 className="text-4xl md:text-6xl font-black leading-tight text-textMain">Simple steps to <br/><span className="text-textMuted">go online.</span></h2>
            </div>
            <p className="text-textMuted text-lg max-w-md pb-2">
              We keep the process clear: understand your business, design the pages, build the website, and help with launch basics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { step: '01', title: 'Requirement Discussion', icon: <Layers className="w-6 h-6 text-primary" />, desc: 'We discuss your business, services, pages, timeline, budget, and the main goal of the website.' },
              { step: '02', title: 'Content & Design Planning', icon: <Search className="w-6 h-6 text-primary" />, desc: 'We plan the website structure, page sections, colors, branding direction, and content requirements.' },
              { step: '03', title: 'Development & Review', icon: <Zap className="w-6 h-6 text-primary" />, desc: 'We build a responsive website, add basic SEO setup, and review the work with you before launch.' },
              { step: '04', title: 'Launch & Maintenance', icon: <Sparkles className="w-6 h-6 text-primary" />, desc: 'We help with domain, hosting, testing, launch support, and optional maintenance or updates.' }
            ].map((item, idx) => (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-surface p-10 rounded-[2rem] border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors"></div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-border flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.2)] transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-5xl font-black text-black/5 group-hover:text-primary/10 transition-colors">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-textMain">{item.title}</h3>
                <p className="text-textMuted leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Why Charmsolutionit</span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight text-textMain mb-6">
                Website work made clear.<br />
                <span className="text-primary">Honest scope, clean delivery.</span>
              </h2>
              <p className="text-textMuted text-lg leading-relaxed mb-8">
                We keep every project practical and transparent: clear pages, mobile-friendly design, basic SEO, launch guidance, and no fake numbers or made-up client names.
              </p>
              <Link to="/contact" className="btn-primary">
                Discuss Your Website <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-5"
            >
              {[
                { title: 'Clean Responsive Design', desc: 'Pages are designed to look good on mobile, tablet, and desktop screens.' },
                { title: 'Basic SEO Setup', desc: 'We add essential page titles, descriptions, structure, and indexing basics.' },
                { title: 'Transparent Communication', desc: 'You get clear updates, realistic timelines, and honest answers about what is possible.' },
                { title: 'Post-Launch Support', desc: 'We can help with small updates, content changes, bug fixes, and maintenance after launch.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-white border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-textMain mb-1">{item.title}</p>
                    <p className="text-textMuted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Got Questions?</span>
            <h2 className="text-4xl md:text-5xl font-black text-textMain">Frequently Asked</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-primary via-indigo-600 to-secondary">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-8">
            <Star className="w-4 h-4 text-yellow-300" /> Let’s build something real
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Ready to Build Your <br/>
            <span className="text-yellow-300">Online Presence?</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Tell us what you need. We'll suggest the right website pages, design approach, and launch steps without overpromising.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 hover:text-primary transition-all duration-300 shadow-xl"
            >
              Discuss Your Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/20 transition-all duration-300"
            >
              See Our Work
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
