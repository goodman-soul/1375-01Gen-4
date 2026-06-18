import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { OralQuote as OralQuoteType } from '../types';

interface OralQuoteProps {
  quote: OralQuoteType;
  index?: number;
}

function OralQuote({ quote, index = 0 }: OralQuoteProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="relative bg-earth-pale/40 border-l-4 border-rust px-7 py-7 md:px-10 md:py-8 rounded-r-lg shadow-sm"
    >
      <Quote
        className="absolute top-5 left-5 w-8 h-8 text-rust/25"
        aria-hidden
      />
      <blockquote className="relative pl-2 md:pl-4">
        <p className="font-serif text-lg md:text-xl text-canal-deepDark leading-[1.9] italic">
          {quote.content}
        </p>
      </blockquote>
      <figcaption className="mt-6 pt-5 border-t border-earth/20 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="text-right md:text-right w-full">
          <p className="font-semibold text-canal-deep">—— {quote.speaker}</p>
          <p className="text-sm text-earth">{quote.identity}</p>
        </div>
        {quote.year && (
          <span className="text-xs tracking-wider text-earth-dark/60 md:text-right">
            {quote.year}
          </span>
        )}
      </figcaption>
    </motion.figure>
  );
}

interface OralQuoteListProps {
  quotes: OralQuoteType[];
}

export function OralQuoteList({ quotes }: OralQuoteListProps) {
  return (
    <div className="space-y-7 md:space-y-8">
      {quotes.map((q, i) => (
        <OralQuote key={q.id} quote={q} index={i} />
      ))}
    </div>
  );
}

export default OralQuote;
