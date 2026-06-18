import { motion } from 'framer-motion';
import { MapPin, Clock, Ticket, Bus, Star } from 'lucide-react';
import type { VisitPlace } from '../types';

interface PlaceCardProps {
  place: VisitPlace;
  index?: number;
}

function PlaceCard({ place, index = 0 }: PlaceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-paper-light rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-earth-pale flex flex-col"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-earth-pale">
        <img
          src={place.coverImage}
          alt={place.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-canal-deepDark/60 via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-5 right-5 font-serif font-bold text-xl md:text-2xl text-paper drop-shadow-md">
          {place.name}
        </h3>
      </div>

      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-rust" />
            <span className="text-earth-dark/90">{place.address}</span>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="w-4 h-4 mt-0.5 shrink-0 text-rust" />
            <span className="text-earth-dark/90">{place.openTime}</span>
          </li>
          {place.ticket && (
            <li className="flex items-start gap-3">
              <Ticket className="w-4 h-4 mt-0.5 shrink-0 text-rust" />
              <span className="text-earth-dark/90">{place.ticket}</span>
            </li>
          )}
          {place.transportTip && (
            <li className="flex items-start gap-3">
              <Bus className="w-4 h-4 mt-0.5 shrink-0 text-rust" />
              <span className="text-earth-dark/90">{place.transportTip}</span>
            </li>
          )}
        </ul>

        <div className="mt-5 pt-5 border-t border-earth/15">
          <p className="text-xs tracking-wider text-earth font-medium mb-3 flex items-center gap-2">
            <Star className="w-3.5 h-3.5" /> 核心看点
          </p>
          <ul className="space-y-2">
            {place.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-canal-deepDark/85">
                <span className="w-1.5 h-1.5 rounded-full bg-rust mt-2 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

interface PlaceGridProps {
  places: VisitPlace[];
}

export function PlaceGrid({ places }: PlaceGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
      {places.map((p, i) => (
        <PlaceCard key={p.id} place={p} index={i} />
      ))}
    </div>
  );
}

export default PlaceCard;
