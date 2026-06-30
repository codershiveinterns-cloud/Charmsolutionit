import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Business Website Demo',
    category: 'Website · Service Provider',
    desc: 'Sample structure for a professional business website with hero section, services, about, contact, and enquiry flow.',
    tags: ['Responsive Pages', 'Contact CTA', 'SEO Basics'],
    gradient: 'from-blue-400 to-indigo-600',
    stat: 'Demo Layout',
    statColor: 'text-blue-600 bg-blue-50',
  },
  {
    title: 'Landing Page Demo',
    category: 'One Page · Lead Generation',
    desc: 'Focused one-page layout for promoting an offer, service, event, campaign, or product with clear CTA sections.',
    tags: ['Lead Form', 'CTA Sections', 'Fast Layout'],
    gradient: 'from-emerald-400 to-teal-600',
    stat: 'Demo Layout',
    statColor: 'text-emerald-600 bg-emerald-50',
  },
  {
    title: 'E-commerce Store Demo',
    category: 'Store · Product Pages',
    desc: 'Starter online store concept with product cards, category sections, checkout guidance, and basic store information.',
    tags: ['Product Setup', 'Store Pages', 'Checkout Flow'],
    gradient: 'from-orange-400 to-red-600',
    stat: 'Demo Layout',
    statColor: 'text-orange-600 bg-orange-50',
  },
  {
    title: 'Restaurant / Cafe Demo',
    category: 'Website · Local Business',
    desc: 'Sample layout for food businesses with menu highlights, location, opening hours, gallery, and contact section.',
    tags: ['Menu Sections', 'Location Info', 'Mobile Friendly'],
    gradient: 'from-rose-400 to-pink-600',
    stat: 'Concept Design',
    statColor: 'text-rose-600 bg-rose-50',
  },
  {
    title: 'Google Business Profile Demo',
    category: 'Local Setup · Profile Help',
    desc: 'Example checklist-style setup for local business visibility, business details, photos, services, and contact information.',
    tags: ['Profile Setup', 'Local Presence', 'Business Info'],
    gradient: 'from-cyan-400 to-sky-600',
    stat: 'Service Demo',
    statColor: 'text-cyan-600 bg-cyan-50',
  },
];

export default function Portfolio() {
  return (
    <div className="w-full bg-background">
      {/* Hero */}
      <section className="relative pt-20 pb-24 overflow-hidden bg-white border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-60"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-primary font-bold tracking-wider uppercase text-sm mb-4 bg-primary/10 px-4 py-1.5 rounded-full">Demo Work</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-textMain">
              Sample <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Work</span>
            </h1>
            <p className="text-xl text-textMuted max-w-2xl mx-auto leading-relaxed">
              Demo layouts that show the type of websites and digital setup work we can create. These are not client projects; real client work will be added only with permission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white border border-border rounded-3xl overflow-hidden group hover:shadow-xl hover:border-primary/20 transition-all duration-500 cursor-pointer"
              >
                {/* Project Visual */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
                  {/* Abstract UI mockup */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-2.5 w-24 bg-white/40 rounded"></div>
                      <div className="h-2.5 w-12 bg-white/30 rounded ml-auto"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 flex-1 bg-white/30 rounded-lg"></div>
                      <div className="h-8 flex-1 bg-white/20 rounded-lg"></div>
                      <div className="h-8 flex-1 bg-white/30 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${project.statColor}`}>{project.stat}</span>
                  <h3 className="text-xl font-bold text-textMain mt-4 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-primary/80 text-xs font-bold uppercase tracking-wider mb-3">{project.category}</p>
                  <p className="text-textMuted text-sm leading-relaxed mb-5">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, ti) => (
                      <span key={ti} className="text-xs font-semibold bg-surface border border-border rounded-full px-3 py-1 text-textMuted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Your Project Could Be Next</h2>
          <p className="text-white/80 text-lg mb-10">We'd love to hear about your idea and show you what's possible.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
