import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle, Clock, Mail, MapPin, MessageSquare, Send, Sparkles, UserRound, Zap } from 'lucide-react';

const contactEmail = 'support@charmsolutionit.com';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7 }
};

const projectTypes = [
  'Business Website',
  'Landing Page',
  'E-commerce Setup',
  'Branding & UI Design',
  'Website Maintenance',
  'Google Business Profile'
];

const contactCards = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Email Us',
    value: contactEmail,
    description: 'Share your project details anytime.',
    href: `mailto:${contactEmail}`
  },
  {
    icon: <UserRound className="w-5 h-5" />,
    title: 'Founder',
    value: 'Karan Mittal',
    description: 'Founder & Lead Strategist',
    href: `mailto:${contactEmail}`
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: 'Company Address',
    value: '68 02-01 Circular Road, Singapore 049422',
    description: 'Charm Solution IT global contact location.',
    href: 'https://maps.google.com/?q=68%2002-01%20Circular%20Road%2C%20Singapore%20049422'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: projectTypes[0],
    budget: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`New project enquiry from ${formData.name || 'website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'Not shared'}\n` +
      `Project Type: ${formData.projectType}\n` +
      `Budget / Timeline: ${formData.budget || 'Not shared'}\n\n` +
      `Project Details:\n${formData.message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 lg:pt-28 lg:pb-24 bg-white overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none z-0"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[520px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none z-0"></div>
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute top-36 -right-28 w-[480px] h-[480px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div {...fadeIn} className="text-center max-w-5xl mx-auto">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-border text-primary text-sm font-bold mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-secondary" /> Premium Contact Experience
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.05] text-textMain">
              Let’s Build Your <br className="hidden md:block" />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl rounded-full"></span>
                <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Digital Presence
                </span>
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-textMuted mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              Tell us about your website, branding, SEO, or launch support needs. Founder Karan Mittal and the Charm Solution IT team will help you shape a clear, premium project plan.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-textMuted">
              {['Clear Scope', 'Premium Design', 'Fast Response'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-full">
                  <CheckCircle className="w-4 h-4 text-green-500" /> {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {contactCards.map((card) => (
              <motion.a
                key={card.title}
                href={card.href}
                target={card.title === 'Company Address' ? '_blank' : undefined}
                rel={card.title === 'Company Address' ? 'noreferrer' : undefined}
                variants={fadeIn}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group bg-white border border-border rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <p className="text-xs font-black tracking-widest uppercase text-textMuted mb-2">{card.title}</p>
                <h3 className="text-lg font-black text-textMain leading-snug mb-2">{card.value}</h3>
                <p className="text-sm text-textMuted leading-relaxed">{card.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[520px] h-[520px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-start">
            {/* Founder / Process Panel */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 lg:sticky lg:top-28"
            >
              <div className="bg-gradient-to-br from-primary to-secondary rounded-[2rem] p-1 shadow-2xl shadow-primary/15">
                <div className="bg-white rounded-[1.75rem] p-8 md:p-10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
                  <div className="absolute -right-12 -top-12 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <span className="text-primary font-black tracking-widest uppercase text-xs">Founder Led Communication</span>
                    <h2 className="text-3xl md:text-4xl font-black text-textMain tracking-tight mt-3 mb-5">
                      Speak directly with Karan Mittal’s team.
                    </h2>
                    <p className="text-textMuted leading-relaxed mb-8">
                      We keep the first conversation simple: your business goal, pages required, design direction, timeline, and the cleanest launch plan for your budget.
                    </p>

                    <div className="space-y-4">
                      {[
                        { icon: <MessageSquare className="w-5 h-5" />, title: 'Share your requirements', text: 'Tell us what you want to build and what outcome matters most.' },
                        { icon: <Zap className="w-5 h-5" />, title: 'Get a clear roadmap', text: 'We outline pages, features, timeline, and next steps before work begins.' },
                        { icon: <Clock className="w-5 h-5" />, title: 'Quick follow-up', text: 'We aim to reply with practical guidance as soon as possible.' }
                      ].map((step) => (
                        <div key={step.title} className="flex gap-4 bg-surface border border-border rounded-2xl p-4">
                          <div className="w-10 h-10 bg-white border border-border text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="font-black text-textMain mb-1">{step.title}</h3>
                            <p className="text-sm text-textMuted leading-relaxed">{step.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface border border-border rounded-3xl p-6">
                <p className="text-sm font-bold text-textMain mb-2">Office Address</p>
                <p className="text-textMuted leading-relaxed">68 02-01 Circular Road, Singapore 049422</p>
              </div>
            </motion.div>

            {/* Form Panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-surface border border-border rounded-[2rem] p-6 md:p-8 shadow-xl shadow-black/5"
            >
              <div className="bg-white border border-border rounded-[1.5rem] p-6 md:p-8">
                <div className="mb-8">
                  <span className="text-primary font-black tracking-widest uppercase text-xs">Start a Project</span>
                  <h2 className="text-3xl md:text-4xl font-black text-textMain mt-3 mb-3">Send your enquiry</h2>
                  <p className="text-textMuted leading-relaxed">
                    Fill this out and your email app will open with all details ready to send to {contactEmail}.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="text-sm font-bold text-textMain mb-2 block">Your Name</span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-textMain outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-bold text-textMain mb-2 block">Email Address</span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-textMain outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <label className="block">
                      <span className="text-sm font-bold text-textMain mb-2 block">Company / Brand</span>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your business name"
                        className="w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-textMain outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-bold text-textMain mb-2 block">Project Type</span>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-textMain outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-bold text-textMain mb-2 block">Budget / Timeline</span>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="Example: Need launch in 2 weeks / fixed budget"
                      className="w-full rounded-2xl border border-border bg-surface px-4 py-3.5 text-textMain outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-bold text-textMain mb-2 block">Project Details</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us about your pages, design style, features, and business goal..."
                      className="w-full resize-none rounded-2xl border border-border bg-surface px-4 py-3.5 text-textMain outline-none transition-all focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
                    ></textarea>
                  </label>

                  <button type="submit" className="btn-primary w-full text-lg py-4 shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:shadow-[0_0_40px_rgba(79,70,229,0.5)]">
                    Send Enquiry <Send className="w-5 h-5" />
                  </button>

                  <p className="text-xs text-textMuted leading-relaxed text-center">
                    No sensitive passwords or payment details please. Your message will be sent through your email provider.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready for a premium website?</h2>
          <p className="text-white/80 text-lg mb-10">Send your idea today and we’ll help convert it into a clear digital plan.</p>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl"
          >
            Email Founder’s Team <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
