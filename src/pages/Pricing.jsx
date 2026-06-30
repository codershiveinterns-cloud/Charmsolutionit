import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Landing Page',
    price: 'Custom',
    period: 'quote after discussion',
    desc: 'For one focused page to promote a service, offer, campaign, or product.',
    features: [
      'One-page responsive design',
      'Clear call-to-action sections',
      'Lead/contact form layout',
      'Basic SEO setup',
      'Domain and hosting guidance',
    ],
    popular: false,
    cta: 'Discuss Landing Page',
    accentColor: 'border-border',
    badgeColor: '',
  },
  {
    name: 'Business Website',
    price: 'Custom',
    period: 'based on scope',
    desc: 'For businesses, service providers, shops, and personal brands that need a complete website.',
    features: [
      'Home, About, Services, Contact pages',
      'Custom service sections',
      'Mobile responsive layout',
      'Basic SEO and page structure',
      'Domain and hosting setup help',
      'Optional logo/basic branding support',
    ],
    popular: true,
    cta: 'Recommended',
    accentColor: 'border-primary',
    badgeColor: 'bg-gradient-to-r from-primary to-secondary',
  },
  {
    name: 'E-commerce Website',
    price: 'Custom',
    period: 'after requirements',
    desc: 'For product-based businesses that need online store pages and checkout setup guidance.',
    features: [
      'Product/category page layout',
      'Cart and checkout guidance',
      'Payment/shipping setup support',
      'Store policy page guidance',
      'Basic SEO setup',
      'Maintenance options',
    ],
    popular: false,
    cta: 'Discuss Store',
    accentColor: 'border-border',
    badgeColor: '',
  },
];

const addons = [
  { name: 'Logo & Basic Branding', price: 'Custom' },
  { name: 'Website Maintenance', price: 'Custom' },
  { name: 'Domain & Hosting Setup', price: 'Custom' },
  { name: 'Google Business Profile Help', price: 'Custom' },
];

export default function Pricing() {
  return (
    <div className="w-full bg-background">
      {/* Hero */}
      <section className="relative pt-20 pb-20 bg-white border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-primary font-bold tracking-wider uppercase text-sm mb-4 bg-primary/10 px-4 py-1.5 rounded-full">Pricing</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-textMain">
              Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Pricing</span>
            </h1>
            <p className="text-xl text-textMuted max-w-2xl mx-auto leading-relaxed">
              Pricing depends on pages, features, content, and timeline. We discuss the scope first, then give a clear custom quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className={`relative bg-white border-2 ${plan.accentColor} rounded-3xl p-8 flex flex-col transition-all duration-300 ${plan.popular ? 'shadow-2xl shadow-primary/10 lg:scale-105 z-10' : 'shadow-sm hover:shadow-md'}`}
              >
                {plan.popular && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${plan.badgeColor} text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1.5`}>
                    <Zap className="w-3.5 h-3.5" /> Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-textMain mb-2">{plan.name}</h3>
                  <p className="text-textMuted text-sm leading-relaxed">{plan.desc}</p>
                </div>
                <div className="mb-8 pb-8 border-b border-border">
                  <span className="text-5xl font-black text-textMain">{plan.price}</span>
                  <span className="text-textMuted ml-2 text-sm">{plan.period}</span>
                </div>
                <ul className="flex flex-col gap-3.5 mb-8 flex-grow">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-textMain">{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3.5 text-center rounded-xl font-bold transition-all duration-300 text-sm ${
                    plan.popular
                      ? 'bg-primary hover:bg-primaryHover text-white shadow-lg shadow-primary/30'
                      : 'bg-surface border border-border text-textMain hover:bg-surfaceHover'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Flexibility</span>
            <h2 className="text-4xl font-black text-textMain mb-4">Add-on Services</h2>
            <p className="text-textMuted text-lg">Customize any package with additional services to fit your exact needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addons.map((addon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between bg-surface border border-border rounded-2xl px-6 py-5 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold text-textMain">{addon.name}</span>
                </div>
                <span className="font-bold text-primary">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee / Note */}
      <section className="py-16 bg-primary/5 border-t border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-black text-textMain mb-3">Not sure which plan is right for you?</h3>
          <p className="text-textMuted mb-8">Book a free 30-minute strategy call. We'll assess your needs and recommend the best fit — no pressure, no commitment.</p>
          <Link to="/contact" className="btn-primary">
            Book a Free Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
