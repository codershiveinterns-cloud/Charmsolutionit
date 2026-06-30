import { motion } from 'framer-motion';
import { Calendar, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'Top 5 Automation Tools for Modern Startups',
    category: 'Automation',
    date: 'Jun 2026',
    excerpt: 'A practical guide to choosing automation tools for forms, email, project tracking, CRM tasks, and simple business workflows.',
    points: ['Workflow mapping', 'Email automation', 'Task management'],
  },
  {
    title: 'How to Choose Hosting for a Business Website',
    category: 'Hosting',
    date: 'Jun 2026',
    excerpt: 'Understand the basics of shared hosting, managed hosting, static hosting, SSL, backups, and what to check before launching a website.',
    points: ['Hosting types', 'SSL basics', 'Backup planning'],
  },
  {
    title: 'Basic SEO Checklist Before Publishing a Website',
    category: 'SEO',
    date: 'Jun 2026',
    excerpt: 'A beginner-friendly checklist covering page titles, meta descriptions, headings, mobile layout, speed, indexing, and local search basics.',
    points: ['Meta setup', 'Page structure', 'Indexing basics'],
  },
  {
    title: 'Landing Page vs Business Website: What Do You Need?',
    category: 'Web Strategy',
    date: 'Jun 2026',
    excerpt: 'Compare when to use a focused landing page and when to build a complete business website with service pages and contact flow.',
    points: ['Use cases', 'Page structure', 'Lead capture'],
  },
  {
    title: 'Google Business Profile Setup for Local Visibility',
    category: 'Local Presence',
    date: 'Jun 2026',
    excerpt: 'Learn what details to prepare for a Google Business Profile, including categories, services, photos, location, contact information, and updates.',
    points: ['Business info', 'Service categories', 'Profile updates'],
  },
];

export default function Blog() {
  return (
    <div className="w-full bg-background">
      <section className="relative pt-20 pb-24 overflow-hidden bg-white border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0 opacity-60"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block text-primary font-bold tracking-wider uppercase text-sm mb-4 bg-primary/10 px-4 py-1.5 rounded-full">Blog</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-textMain">
              Website & Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Guides</span>
            </h1>
            <p className="text-xl text-textMuted max-w-3xl mx-auto leading-relaxed">
              Practical articles about websites, hosting, SEO, automation, local business setup, and digital workflows. These resources help visitors compare tools and understand what they need before starting a project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white border border-border rounded-3xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-500"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="text-primary text-sm font-bold tracking-wider uppercase">{post.category}</span>
                  <div className="flex items-center gap-2 text-textMuted text-sm">
                    <Calendar className="w-4 h-4" /> {post.date}
                  </div>
                </div>
                <h2 className="text-2xl font-black text-textMain mb-4">{post.title}</h2>
                <p className="text-textMuted leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.points.map((point) => (
                    <span key={point} className="text-xs font-semibold bg-surface border border-border rounded-full px-3 py-1 text-textMuted">
                      {point}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary hover:text-primaryHover font-semibold transition-colors">
                  Ask about this topic <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-surface border border-border rounded-3xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-textMain mb-3">Affiliate and recommendation disclosure</h2>
                <p className="text-textMuted leading-relaxed mb-4">
                  Some future articles may include tool recommendations, comparisons, or affiliate links. If affiliate links are used, we may earn a commission at no extra cost to you. Recommendations should still be based on practical fit, features, ease of use, and project needs.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-textMuted">
                  <BookOpen className="w-4 h-4" /> More detailed tutorials and comparisons can be expanded over time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
