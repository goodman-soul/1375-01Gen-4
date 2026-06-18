import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Waves, ArrowLeft, Map, ArrowUpDown, Droplets } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PhotoGallery from '../components/PhotoGallery';
import { OralQuoteList } from '../components/OralQuote';
import { PlaceGrid } from '../components/PlaceCard';
import { lockData } from '../data/lock';

const heroImg = (
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' +
  encodeURIComponent('epic view of historic Chinese canal lock with water cascading, stone walls, traditional boats, moody overcast sky, cinematic composition') +
  '&image_size=landscape_16_9'
);

function LockPage() {
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
                <Waves className="w-7 h-7 text-paper" />
              </div>
              <p className="text-paper/70 tracking-[0.4em] text-xs">CHAPTER · 02</p>
            </div>
            <h1 className="font-serif font-black text-5xl md:text-7xl text-paper mb-4 drop-shadow-md">
              {lockData.title}
            </h1>
            <p className="text-xl md:text-2xl text-paper/85 font-serif mb-6">
              {lockData.subtitle}
            </p>
            <p className="max-w-2xl text-paper/80 leading-relaxed md:text-lg">
              {lockData.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacer bg-canal-deep text-paper">
        <div className="container max-w-5xl">
          <SectionTitle
            eyebrow="HOW IT WORKS"
            title="船闸原理 · 一水两隔"
            subtitle="关闭下闸、注水、开上闸——千年前的工匠用最简单的原理解决了最大的难题"
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-4">
            {[
              {
                step: '01',
                title: '下游入闸',
                desc: '船只从下游驶入闸室，关闭下闸门，截断下游水流。',
                icon: <Droplets className="w-6 h-6" />,
              },
              {
                step: '02',
                title: '注水齐平',
                desc: '开启进水口向闸室注水，直到水位与上游齐平。',
                icon: <ArrowUpDown className="w-6 h-6" />,
              },
              {
                step: '03',
                title: '开闸放行',
                desc: '开启上闸门，船只平稳驶入上游河道，过闸完成。',
                icon: <Waves className="w-6 h-6" />,
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative bg-paper/5 backdrop-blur-sm border border-paper/10 rounded-xl p-7 hover:bg-paper/10 transition-colors"
              >
                <span className="absolute -top-4 left-7 font-serif font-bold text-5xl text-rust/80">
                  {step.step}
                </span>
                <div className="w-12 h-12 rounded-full bg-rust/80 flex items-center justify-center mb-5 mt-3">
                  {step.icon}
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-paper/75 leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-paper h-px" />

      <section className="section-spacer bg-paper bg-paper-texture">
        <div className="container max-w-4xl">
          <SectionTitle eyebrow="HISTORY" title="等闸的日子" align="left" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-earth-dark/90 leading-[1.95] text-base md:text-lg"
          >
            {lockData.history.split('\n\n').map((p, i) => (
              <p key={i} className="indent-8">{p}</p>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="ink-divider max-w-5xl mx-auto" />

      <section className="section-spacer bg-paper-dark/40">
        <div className="container">
          <SectionTitle eyebrow="PHOTO ARCHIVE" title="旧照片 · 升降之间的身影" />
          <PhotoGallery photos={lockData.photos} />
        </div>
      </section>

      <section className="section-spacer bg-earth-pale/25">
        <div className="container max-w-4xl">
          <SectionTitle eyebrow="ORAL HISTORY" title="闸夫与船工的口述" />
          <OralQuoteList quotes={lockData.quotes} />
        </div>
      </section>

      <section className="section-spacer bg-paper">
        <div className="container">
          <SectionTitle eyebrow="VISIT TODAY" title="今天可以参观的地方" />
          <PlaceGrid places={lockData.places} />
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

export default LockPage;
