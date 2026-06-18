import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ArrowLeft, Map, Home, Calendar, Music } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PhotoGallery from '../components/PhotoGallery';
import { OralQuoteList } from '../components/OralQuote';
import { PlaceGrid } from '../components/PlaceCard';
import { familyData } from '../data/family';

const heroImg = (
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' +
  encodeURIComponent('warm intimate scene of Chinese canal boat family, children on wooden deck, mother cooking, father mending net, sunset reflection, nostalgic tender mood') +
  '&image_size=landscape_16_9'
);

function FamilyPage() {
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
                <Users className="w-7 h-7 text-paper" />
              </div>
              <p className="text-paper/70 tracking-[0.4em] text-xs">CHAPTER · 04</p>
            </div>
            <h1 className="font-serif font-black text-5xl md:text-7xl text-paper mb-4 drop-shadow-md">
              {familyData.title}
            </h1>
            <p className="text-xl md:text-2xl text-paper/85 font-serif mb-6">
              {familyData.subtitle}
            </p>
            <p className="max-w-2xl text-paper/80 leading-relaxed md:text-lg">
              {familyData.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacer bg-paper bg-paper-texture">
        <div className="container max-w-4xl">
          <SectionTitle eyebrow="LIFE ON WATER" title="水上人家的生活" align="left" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-earth-dark/90 leading-[1.95] text-base md:text-lg"
          >
            {familyData.history.split('\n\n').map((p, i) => (
              <p key={i} className="indent-8">{p}</p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-spacer bg-canal-deep text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute top-0 left-0 w-full h-40 bg-wave-pattern bg-[length:1440px_120px] rotate-180" />
        </div>
        <div className="container relative max-w-6xl">
          <SectionTitle
            eyebrow="CUSTOMS"
            title="船民习俗 · 水上的烟火"
            subtitle="漂泊的生活中，也有世代相传的礼俗与信仰"
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-4">
            {[
              {
                icon: <Home className="w-6 h-6" />,
                title: '船上的家',
                desc: '货船后舱不过丈许，却是一家老小的起居之所：一张木床、一个小灶、一箱衣服，便是全部家当。',
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: '岁时节令',
                desc: '过年要贴"船头联"，端午祭河神，中秋拜月娘——在船上过的节日，一样不少，只是更简朴。',
              },
              {
                icon: <Music className="w-6 h-6" />,
                title: '号子与渔歌',
                desc: '下锚、撑篙、拉纤，每一种劳作都有专属的号子。那调子从祖辈传到父辈，再传到今天。',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-paper/5 backdrop-blur-sm border border-paper/10 rounded-xl p-7 hover:bg-paper/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-rust/80 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-paper/75 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="ink-divider max-w-5xl mx-auto" />

      <section className="section-spacer bg-paper-dark/40">
        <div className="container">
          <SectionTitle eyebrow="PHOTO ARCHIVE" title="旧照片 · 一家一船一世界" />
          <PhotoGallery photos={familyData.photos} />
        </div>
      </section>

      <section className="section-spacer bg-earth-pale/25">
        <div className="container max-w-4xl">
          <SectionTitle eyebrow="ORAL HISTORY" title="船工与家属的口述" />
          <OralQuoteList quotes={familyData.quotes} />
        </div>
      </section>

      <section className="section-spacer bg-paper">
        <div className="container">
          <SectionTitle eyebrow="VISIT TODAY" title="今天可以参观的地方" />
          <PlaceGrid places={familyData.places} />
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

export default FamilyPage;
