import { motion } from 'framer-motion';
import { Monitor, ShoppingCart, Palette, Wrench, Search, Globe, ArrowRight, Server, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: 'Business Website Development',
    desc: 'Clean, responsive websites for small businesses, service providers, shops, and personal brands.',
    features: ['Mobile Friendly', 'Fast Loading', 'Contact Forms'],
    color: 'from-blue-500/10 to-indigo-500/10',
    iconColor: 'text-blue-600 bg-blue-50',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Landing Pages',
    desc: 'Focused one-page websites for ads, campaigns, product launches, and lead generation.',
    features: ['Clear CTA', 'Lead Capture', 'Responsive Layout'],
    color: 'from-cyan-500/10 to-teal-500/10',
    iconColor: 'text-cyan-600 bg-cyan-50',
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'E-commerce Websites',
    desc: 'Online stores with product pages, cart, checkout setup, and basic payment/shipping guidance.',
    features: ['Product Setup', 'Checkout Flow', 'Store Pages'],
    color: 'from-green-500/10 to-emerald-500/10',
    iconColor: 'text-green-600 bg-green-50',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Logo & Basic Branding',
    desc: 'Simple brand visuals including logo, color palette, and social media-ready design assets.',
    features: ['Logo Concepts', 'Brand Colors', 'Social Assets'],
    color: 'from-pink-500/10 to-rose-500/10',
    iconColor: 'text-pink-600 bg-pink-50',
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Basic SEO Setup',
    desc: 'Essential on-page SEO setup so your website has proper titles, descriptions, structure, and indexing basics.',
    features: ['Meta Tags', 'Page Structure', 'Google Index Basics'],
    color: 'from-orange-500/10 to-amber-500/10',
    iconColor: 'text-orange-600 bg-orange-50',
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Website Maintenance',
    desc: 'Small updates, bug fixes, content changes, domain/hosting support, and regular website care.',
    features: ['Content Updates', 'Bug Fixes', 'Hosting Help'],
    color: 'from-purple-500/10 to-pink-500/10',
    iconColor: 'text-purple-600 bg-purple-50',
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Domain & Hosting Setup',
    desc: 'Guidance and setup support for domain connection, hosting, SSL, and basic launch configuration.',
    features: ['Domain Setup', 'Hosting Help', 'SSL Guidance'],
    color: 'from-slate-500/10 to-blue-500/10',
    iconColor: 'text-slate-600 bg-slate-50',
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'Google Business Profile Help',
    desc: 'We help businesses set up, optimize, and maintain their Google Business Profile to increase local visibility, attract more customers, and build trust online.',
    features: ['Profile Setup', 'Business Info', 'Local Presence'],
    color: 'from-red-500/10 to-orange-500/10',
    iconColor: 'text-red-600 bg-red-50',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Services() {
  return (
    <div className="w-full bg-background">
      {/* Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-white border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-60"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span className="inline-block text-primary font-bold tracking-wider uppercase text-sm mb-4 bg-primary/10 px-4 py-1.5 rounded-full">What We Do</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-textMain">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Expertise</span>
            </h1>
            <p className="text-xl text-textMuted max-w-2xl mx-auto leading-relaxed">
              Real website and digital setup services for businesses that need a clean, professional online presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-white border border-border rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl hover:border-primary/20 transition-all duration-500 group relative overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-textMain">{service.title}</h3>
                  <p className="text-textMuted leading-relaxed mb-6 text-sm">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((f, fi) => (
                      <span key={fi} className="text-xs font-semibold bg-surface border border-border rounded-full px-3 py-1 text-textMuted">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Stack</span>
          <h2 className="text-4xl md:text-5xl font-black text-textMain mb-4">Built with the Best Tools</h2>
          <p className="text-textMuted text-lg mb-16 max-w-xl mx-auto">We pick technologies based on project needs — not trends.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Figma', 'Vercel', 'GitHub', 'Google Search Console', 'Google Business Profile', 'Domain Setup', 'Hosting Setup'].map((tech) => (
              <span key={tech} className="bg-surface border border-border px-5 py-2.5 rounded-full font-semibold text-textMuted hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Need a Custom Solution?</h2>
          <p className="text-white/80 text-lg mb-10">Every great product starts with a conversation. Let's build yours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl"
          >
            Start a Project <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
