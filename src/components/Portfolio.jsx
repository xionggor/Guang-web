import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import works from '../data/works.js';

const tagLabels = {
  vinyl: 'Vinyl',
  neon: 'Neon',
  decal: 'Decal',
};

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section" id="portfolio">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        Selected Works
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Each piece is handcrafted — from concept to installation
      </motion.p>

      <div className="portfolio-grid">
        {works.map((work, i) => (
          <motion.div
            key={work.id}
            className="portfolio-card"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            onClick={() => setSelected(work)}
          >
            <img
              className="portfolio-card-image"
              src={work.image}
              alt={work.title}
              loading="lazy"
            />
            <div className="portfolio-card-overlay">
              <h3 className="portfolio-card-title">{work.title}</h3>
              <span className={`portfolio-card-tag tag-${work.category}`}>
                {tagLabels[work.category]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selected.image} alt={selected.title} />
              <div className="lightbox-info">
                <span>{selected.title}</span>
                <span>{selected.description}</span>
              </div>
            </motion.div>
            <button
              className="lightbox-close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
