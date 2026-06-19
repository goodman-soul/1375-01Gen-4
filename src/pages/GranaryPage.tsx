import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Warehouse, ArrowLeft, Map } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PhotoGallery from '../components/PhotoGallery';
import { OralQuoteList } from '../components/OralQuote';
import { PlaceGrid } from '../components/PlaceCard';
import { granaryData } from '../data/granary';
import { useConfigStore } from '../hooks/useConfigStore';

const heroImg = (
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' +
  encodeURIComponent('majestic traditional Chinese granary compound, wooden architecture, large courtyard, warm sunset light, historic storage buildings, cinematic') +
  '&image_size=landscape_16_9'
);

function GranaryPage() {
  const places = useConfigStore((s) => s.getPlaces('granary'));
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
                <Warehouse className="w-7 h-7 text-paper" />
              </div>
              <p className="text-paper/70 tracking-[0.4em] text-xs">CHAPTER · 03</p>
            </div>
            <h1 className="font-serif font-black text-5xl md:text-7xl text-paper mb-4 drop-shadow-md">
              {granaryData.title}
            </h1>
            <p className="text-xl md:text-2xl text-paper/85 font-serif mb-6">
              {granaryData.subtitle}
            </p>
            <p className="max-w-2xl text-paper/80 leading-relaxed md:text-lg">
              {granaryData.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacer bg-paper bg-paper-texture">
        <div className="container max-w-4xl">
          <SectionTitle eyebrow="HISTORICAL BACKGROUND" title="国课所在 · 漕运的终点" align="left" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-earth-dark/90 leading-[1.95] text-base md:text-lg"
          >
            {granaryData.history.split('\n\n').map((p, i) => (
              <p key={i} className="indent-8">{p}</p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-spacer bg-earth-light/15 border-y border-earth/15">
        <div className="container max-w-6xl">
          <SectionTitle
            eyebrow="FEATURES"
            title="粮仓建筑的讲究"
            subtitle="防潮、防火、防鼠——每一处细节都凝聚着古人仓储智慧"
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: '高爽地基',
                desc: '粮仓必建于高地，夯土层厚达数尺，下铺灰炭隔水，木柱架空地面，避免潮气上升侵蚀粮米。',
              },
              {
                title: '透气仓顶',
                desc: '仓顶为重檐悬山式，檐口留有透气孔，内部采用搁楼式通风层，常年保持粮温平衡。',
              },
              {
                title: '封火高墙',
                desc: '仓廪之间以高大的封火墙相隔，间距超三丈，一仓失火不会波及他处，墙外还挖有防火沟渠。',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-paper rounded-xl p-7 shadow-md border border-earth/10 hover:-translate-y-1 transition-transform"
              >
                <div className="w-10 h-10 rounded-md bg-earth/15 flex items-center justify-center mb-4 text-earth font-serif font-bold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-serif font-bold text-xl text-canal-deep mb-3">{item.title}</h3>
                <p className="text-earth-dark/80 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="ink-divider max-w-5xl mx-auto" />

      <section className="section-spacer bg-paper-dark/40">
        <div className="container">
          <SectionTitle eyebrow="PHOTO ARCHIVE" title="旧照片 · 仓廪实而知礼节" />
          <PhotoGallery photos={granaryData.photos} />
        </div>
      </section>

      <section className="section-spacer bg-earth-pale/25">
        <div className="container max-w-4xl">
          <SectionTitle eyebrow="ORAL HISTORY" title="守仓人与搬运工的口述" />
          <OralQuoteList quotes={granaryData.quotes} />
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

export default GranaryPage;
