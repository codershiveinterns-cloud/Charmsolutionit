import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  return (
    <div className="w-full section-padding">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Case <span className="gradient-text">Studies</span></h1>
        <p className="text-xl text-textMuted">
          We only publish real case studies with client permission. This section will be updated when verified project results are available.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-8 md:p-12 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">No fake client stories</h2>
        <p className="text-lg text-textMuted mb-8 leading-relaxed">
          Instead of showing made-up results, we keep this page honest. After completing real projects, we can add verified details, screenshots, and outcomes here.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 text-primary hover:text-primaryHover transition-colors font-medium">
          Discuss Your Project <ArrowRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
}
