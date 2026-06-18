import { motion } from 'framer-motion';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  animate?: boolean;
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  animate = true,
}: SectionTitleProps) {
  const content = (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} mb-14 md:mb-20`}>
      {eyebrow && (
        <p
          className={`text-xs md:text-sm tracking-[0.35em] text-rust font-medium mb-4 ${
            align === 'center' ? 'mx-auto' : ''
          } inline-flex items-center gap-3 before:content-[''] before:w-8 before:h-px before:bg-rust/40 after:content-[''] after:w-8 after:h-px after:bg-rust/40`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl text-canal-deep mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg text-earth-dark/80 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-24 bg-gradient-to-r from-transparent via-rust to-transparent ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {content}
    </motion.div>
  );
}

export default SectionTitle;
