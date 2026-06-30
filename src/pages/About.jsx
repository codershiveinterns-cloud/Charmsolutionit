import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ShieldCheck, Search, Wrench, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const values = [
  'Clear project scope before work starts',
  'Real services with no fake client claims',
  'Responsive websites built for practical business use',
  'Basic SEO, hosting, and launch guidance included where needed',
];

const methods = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Research-first guidance',
    desc: 'We explain website, hosting, SEO, and tool choices in simple language so clients can make informed decisions.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Transparent recommendations',
    desc: 'Any recommendation is based on project fit, budget, ease of use, and long-term maintainability — not fake results.',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Build and support',
    desc: 'We help with website setup, domain/hosting basics, Google Business Profile guidance, maintenance, and updates.',
  },
];

const services = [
  'Business Website Development',
  'Landing Pages',
  'E-commerce Websites',
  'Logo & Website Branding',
  'Basic SEO Setup',
  'Website Maintenance',
  'Domain & Hosting Setup',
  'Google Business Profile Help',
];

const audiences = ['Businesses', 'Startups', 'Service Providers', 'Shops', 'Creators', 'Individuals'];

export default function About() {
  return (
    <div className="w-full bg-background">
      <section className="relative pt-20 pb-24 overflow-hidden bg-white border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-60"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm mb-4 bg-primary/10 px-4 py-1.5 rounded-full">
                <Sparkles className="w-4 h-4" /> About Charmsolutionit
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-textMain">
                Practical websites with <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">honest guidance</span>
              </h1>
              <p className="text-xl text-textMuted max-w-3xl mx-auto lg:mx-0 leading-relaxed mb-8">
                Charmsolutionit helps businesses, startups, service providers, creators, and individuals build a clean online presence through website development, landing pages, e-commerce setup, basic SEO, branding, maintenance, domain/hosting guidance, and Google Business Profile help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="btn-primary">
                  Get in Touch <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-secondary">
                  View Services
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/15 to-secondary/15 blur-2xl"></div>
              <div className="relative bg-white border border-border rounded-[2rem] p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-textMuted">Online Presence</p>
                    <h3 className="text-2xl font-black text-textMain">Clear Digital Setup</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['Website', 'SEO Basics', 'Hosting', 'Maintenance'].map((item) => (
                    <div key={item} className="rounded-2xl border border-border bg-surface p-4">
                      <CheckCircle className="w-5 h-5 text-primary mb-3" />
                      <p className="text-sm font-bold text-textMain">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-primary to-secondary p-5 text-white">
                  <p className="font-bold mb-1">No fake claims</p>
                  <p className="text-sm text-white/80">Only real services, clear scope, and practical support.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">What we believe</span>
            <h2 className="text-4xl md:text-5xl font-black text-textMain mb-6">No fake numbers. No made-up clients. Just clear digital work.</h2>
            <p className="text-textMuted text-lg leading-relaxed mb-8">
              Our goal is to make websites and digital setup easier to understand. We focus on what your project actually needs: clear pages, mobile-friendly design, useful content, basic SEO setup, launch support, and practical maintenance.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white border border-border rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-black text-textMain mb-6">How we keep it professional</h3>
            <div className="flex flex-col gap-4">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-textMuted font-medium">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-surface border border-border rounded-3xl p-8">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">What we help with</span>
              <h2 className="text-3xl font-black text-textMain mb-6">Services connected to your online presence</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <div key={service} className="flex items-start gap-3 rounded-2xl bg-white border border-border p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-textMuted">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-surface border border-border rounded-3xl p-8">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Who we work with</span>
              <h2 className="text-3xl font-black text-textMain mb-6">For people who need a clear digital setup</h2>
              <p className="text-textMuted leading-relaxed mb-6">
                We work with businesses, startups, service providers, shops, creators, and individuals who need a clean website, better online visibility, or simple support with hosting, SEO, and local presence.
              </p>
              <div className="flex flex-wrap gap-2">
                {audiences.map((audience) => (
                  <span key={audience} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-textMuted">
                    {audience}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Affiliate-ready content approach</span>
            <h2 className="text-4xl md:text-5xl font-black text-textMain mb-4">Helpful resources before recommendations</h2>
            <p className="text-textMuted text-lg leading-relaxed">
              Our blog/resources section is built to publish tutorials, comparisons, reviews, and workflow guides around websites, hosting, SEO tools, automation, and digital business setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methods.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-surface border border-border rounded-3xl p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-textMain mb-3">{item.title}</h3>
                <p className="text-textMuted leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary via-indigo-600 to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300" /> Ready to start?
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">Let’s discuss your website or digital setup.</h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell us what you need, and we’ll suggest a clear scope, timeline, and practical next steps.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
