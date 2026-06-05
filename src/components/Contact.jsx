import { motion } from 'framer-motion';

const links = [
  {
    label: 'Instagram',
    icon: '📷',
    href: '#',
    text: '@guang.signs',
  },
  {
    label: 'Email',
    icon: '✉️',
    href: 'mailto:hello@guang.design',
    text: 'hello@guang.design',
  },
  {
    label: 'WeChat',
    icon: '💬',
    href: '#',
    text: 'guang_signs',
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.h2
        className="contact-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        Let's make something together
      </motion.h2>

      <motion.p
        className="contact-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Have a project in mind? I'd love to hear about it.
      </motion.p>

      <motion.div
        className="contact-links"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            className="contact-link"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-icon">{link.icon}</span>
            <span className="contact-link-label">{link.text}</span>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
