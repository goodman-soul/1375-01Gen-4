import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { PhotoItem } from '../types';

interface PhotoGalleryProps {
  photos: PhotoItem[];
  label?: string;
}

function PhotoGallery({ photos, label = '老照片长廊' }: PhotoGalleryProps) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const hasLightbox = lightboxIdx !== null;

  const goPrev = () =>
    setLightboxIdx((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
  const goNext = () =>
    setLightboxIdx((i) => (i === null ? i : (i + 1) % photos.length));

  return (
    <div className="w-full">
      <p className="text-xs tracking-[0.3em] text-earth font-medium mb-5 flex items-center gap-3">
        <span className="w-8 h-px bg-earth/50" />
        {label}
        <span className="w-8 h-px bg-earth/50" />
      </p>

      <div className="scroll-gallery -mx-4 md:-mx-0 flex gap-6 overflow-x-auto pb-8 px-4 md:px-0 md:overflow-x-auto">
        {photos.map((photo, idx) => (
          <motion.figure
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="shrink-0 w-[82%] sm:w-[60%] md:w-[42%] lg:w-[32%] group cursor-pointer"
            onClick={() => setLightboxIdx(idx)}
          >
            <div className="vintage-photo relative">
              <div className="relative overflow-hidden aspect-[4/3] bg-earth-pale/30">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-canal-deep/0 group-hover:bg-canal-deep/20 transition-colors duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-canal-deep/70 text-paper text-xs px-3 py-1.5 rounded">
                    点击查看大图
                  </span>
                </div>
              </div>
              <figcaption className="pt-3 pb-1">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="font-serif font-semibold text-canal-deep text-sm md:text-base truncate">
                    {photo.caption}
                  </p>
                  <span className="text-xs text-earth shrink-0">{photo.year}</span>
                </div>
                {photo.description && (
                  <p className="text-xs text-earth-dark/70 mt-2 line-clamp-2">
                    {photo.description}
                  </p>
                )}
              </figcaption>
            </div>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {hasLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-canal-deepDark/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxIdx(null)}
          >
            <button
              onClick={() => setLightboxIdx(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-paper/10 hover:bg-paper/20 text-paper flex items-center justify-center transition-colors"
              aria-label="关闭"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 w-11 h-11 rounded-full bg-paper/10 hover:bg-paper/20 text-paper flex items-center justify-center transition-colors"
              aria-label="上一张"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 w-11 h-11 rounded-full bg-paper/10 hover:bg-paper/20 text-paper flex items-center justify-center transition-colors"
              aria-label="下一张"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightboxIdx}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[88vh] flex flex-col"
            >
              <div className="vintage-photo">
                <div className="bg-black/10 overflow-hidden">
                  <img
                    src={photos[lightboxIdx].url}
                    alt={photos[lightboxIdx].caption}
                    className="w-full h-auto max-h-[65vh] object-contain"
                  />
                </div>
                <div className="pt-4 pb-2">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-serif font-semibold text-canal-deep text-lg">
                      {photos[lightboxIdx].caption}
                    </p>
                    <span className="text-sm text-earth shrink-0 font-medium">
                      {photos[lightboxIdx].year}
                    </span>
                  </div>
                  {photos[lightboxIdx].description && (
                    <p className="text-sm text-earth-dark/80 mt-2">
                      {photos[lightboxIdx].description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PhotoGallery;
