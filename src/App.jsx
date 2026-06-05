import Hero from './components/Hero.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Contact />
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Guang. Crafted with care.
      </motion.footer>
    </>
  );
}
