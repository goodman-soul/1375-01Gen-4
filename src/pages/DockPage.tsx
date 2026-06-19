import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Anchor, ArrowLeft, Map } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PhotoGallery from '../components/PhotoGallery';
import { OralQuoteList } from '../components/OralQuote';
import { PlaceGrid } from '../components/PlaceCard';
import { dockData } from '../data/dock';
import { useConfigStore } from '../hooks/useConfigStore';

const heroImg = (
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' +
  encodeURIComponent('dramatic wide view of Chinese canal dock at sunrise, mist over water, traditional boats, historic stone stairs, cinematic, nostalgic atmosphere') +
  '&image_size=landscape_16_9'
);

function DockPage() {
  const places = useConfigStore((s) => s.getPlaces('dock'));
  return (
    <div>
      <section className="relative h-[70vh] min-h-[520px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container relative pb-16 md:pb-24 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-paper/80 text-sm hover:text-paper mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> 返回首页
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-rust/85 flex items-center justify-center shadow-lg">
                <Anchor className="w-7 h-7 text-paper" />
              </div>
              <p className="text-paper/70 tracking-[0.4em] text-xs">CHAPTER · 01</p>
            </div>
            <h1 className="font-serif font-black text-5xl md:text-7xl text-paper mb-4 drop-shadow-md">
              {dockData.title}
            </h1>
            <p className="text-xl md:text-2xl text-paper/85 font-serif mb-6">
              {dockData.subtitle}
            </p>
            <p className="max-w-2xl text-paper/80 leading-relaxed md:text-lg">
              {dockData.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacer bg-paper bg-paper-texture">
        <div className="container max-w-4xl">
          <SectionTitle
            eyebrow="HISTORICAL BACKGROUND"
            title="码头的黄金年代"
            align="left"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-earth-dark/90 leading-[1.95] text-base md:text-lg"
          >
            {dockData.history.split('\n\n').map((p, i) => (
              <p key={i} className="indent-8">{p}</p>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="ink-divider max-w-5xl mx-auto" />

      <section className="section-spacer bg-paper-dark/40">
        <div className="container">
          <SectionTitle eyebrow="PHOTO ARCHIVE" title="旧照片 · 码头上的岁月" />
          <PhotoGallery photos={dockData.photos} />
        </div>
      </section>

      <section className="section-spacer bg-earth-pale/25">
        <div className="container max-w-4xl">
          <SectionTitle eyebrow="ORAL HISTORY" title="码头人的口述" />
          <OralQuoteList quotes={dockData.quotes} />
        </div>
      </section>

      <section className="section-spacer bg-paper">
        <div className="container">
          <SectionTitle eyebrow="VISIT TODAY" title="今天可以参观的地方" />
          <PlaceGrid places={places} />
          <div className="mt-14 text-center">
            <Link to="/routes" className="btn-primary">
              <Map className="w-5 h-5" />
              前往游客路线页查看详细交通
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DockPage;
