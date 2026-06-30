import { motion } from 'framer-motion';
import { ShieldCheck, Award, Heart, Sparkles, Target, Zap, ArrowRight, Layers } from 'lucide-react';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  const cardHover = {
    whileHover: { y: -8, transition: { duration: 0.3, ease: 'easeOut' } }
  };

  return (
    <div className="w-full bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 bg-white border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <span className="inline-block text-primary font-bold tracking-wider uppercase text-sm mb-4 bg-primary/10 px-4 py-1.5 rounded-full">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-textMain">
              We Craft Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Masterpieces</span>
            </h1>
            <p className="text-xl text-textMuted max-w-3xl mx-auto leading-relaxed">
              Charm Solution IT is a premium digital agency specializing in high-converting websites, elegant branding, and seamless digital solutions that empower companies to dominate their market space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats / Trust Ribbon */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24">
          {[
            { value: '100%', label: 'Project Delivery' },
            { value: 'Client-Centric', label: 'Our Core Approach' },
            { value: 'Premium Quality', label: 'No Shortcuts Taken' },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <span className="block text-2xl font-black text-textMain bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{stat.value}</span>
              <span className="text-xs font-bold text-textMuted uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Spotlight Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Block for Founder */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square max-w-md mx-auto lg:max-w-none w-full bg-gradient-to-br from-primary to-secondary rounded-3xl p-1 shadow-xl"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-20 rounded-3xl"></div>
              <div className="w-full h-full bg-white rounded-[22px] flex flex-col justify-center p-8 md:p-12 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-secondary/10 rounded-full blur-3xl"></div>
                <Sparkles className="w-12 h-12 text-primary mb-6 animate-pulse" />
                <h3 className="text-3xl font-black text-textMain tracking-tight mb-2">Karan Mittal</h3>
                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-6">Founder & Lead Strategist</p>
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
                <p className="text-textMuted italic text-base leading-relaxed">
                  "Every business deserves an outstanding digital identity. We build websites that don't just look luxury—they behave flawlessly and generate actual results."
                </p>
              </div>
            </motion.div>

            {/* Content Block */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-black text-textMain tracking-tight">
                Meet Our Visionary Founder
              </h2>
              <p className="text-textMuted text-lg leading-relaxed">
                Founded by <strong>Karan Mittal</strong>, Charm Solution IT was born out of a desire to bridge the gap between technical excellence and top-tier visual aesthetics. We noticed that many business websites are either beautiful but broken, or functional but bland.
              </p>
              <p className="text-textMuted text-base leading-relaxed">
                Under Karan's direction, we work closely with small brands and large enterprises alike to ensure their digital storefronts reflect their genuine value. We discuss everything clearly—pages, timelines, scopes, and transparent pricing blueprints—long before coding begins.
              </p>
              
              <div className="pt-4">
                <div className="flex items-center gap-3 bg-white border border-border p-4 rounded-2xl max-w-md">
                  <ShieldCheck className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <p className="text-sm font-semibold text-textMain">100% committed to honest advice & flawless execution.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white border-t border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-textMain mb-4">Values That Define Us</h2>
            <p className="text-textMuted text-lg">The principles driving every line of code, asset layout, and strategy we deliver.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Target className="w-6 h-6 text-primary" />,
                title: 'Absolute Transparency',
                description: 'No surprise bills, no confusing technical jargon. We map timelines and project details transparently right from day one.'
              },
              {
                icon: <Zap className="w-6 h-6 text-secondary" />,
                title: 'High Performance',
                description: 'We optimize every graphic asset, script structure, and layout line to keep your loading speed lightning-fast.'
              },
              {
                icon: <Layers className="w-6 h-6 text-primary" />,
                title: 'Premium Styling',
                description: 'Your business is premium, so your web layout should look immaculate. We balance micro-interactions with pristine minimalism.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={cardHover}
                whileHover="whileHover"
                className="bg-surface border border-border rounded-3xl p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="w-12 h-12 bg-white border border-border rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-black text-textMain mb-3">{value.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-black text-textMain tracking-tight mb-4">
            Want to Collaborate with Karan and the Team?
          </h2>
          <p className="text-textMuted text-lg max-w-xl mx-auto mb-8">
            Let's sketch out your scope clearly and give your enterprise the ultimate premium framework it deserves.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-primary/20 hover:opacity-95 transition-opacity"
          >
            Get in Touch Today <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
