import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Anchor, Waves, Warehouse, Users, Map, ChevronDown, ArrowRight, Quote } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import OralQuote from '../components/OralQuote';
import type { HomeCard, OralQuote as OralQuoteType } from '../types';

const img = (prompt: string, size = 'landscape_16_9') =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;

const homeCards: HomeCard[] = [
  {
    id: 'dock',
    title: '码头篇',
    subtitle: '船来船往的黄金口岸',
    description: '千年码头，百年号子。码头上的石板，记得每一位船工的脚步。',
    route: '/dock',
    image: img('scenic view of Chinese historic canal dock at golden hour, stone steps, wooden boats, calm water, warm sunset light'),
    accentColor: 'from-canal-deep to-canal-deepLight',
    icon: 'anchor',
  },
  {
    id: 'lock',
    title: '船闸篇',
    subtitle: '河水升降中的智慧与等待',
    description: '一扇闸门，两段水位。开闸关闸之间，船工们紧了紧手中的缆绳。',
    route: '/lock',
    image: img('dramatic Chinese canal lock with boats, water flowing, historic stone architecture, moody lighting'),
    accentColor: 'from-rust-dark to-rust',
    icon: 'waves',
  },
  {
    id: 'granary',
    title: '粮仓篇',
    subtitle: '千里漕运的终点',
    description: '一船船粮食千里而来，一座座粮仓拔地而起，每粒米都是船工的汗水。',
    route: '/granary',
    image: img('grand Chinese granary courtyard, traditional wooden architecture, rows of grain storage, warm sunlight'),
    accentColor: 'from-earth-dark to-earth-light',
    icon: 'warehouse',
  },
  {
    id: 'family',
    title: '船工家庭篇',
    subtitle: '水上人家的悲欢离合',
    description: '一舱老小，随波逐流。船工之家，一半在船上，一半在岸上的等待中。',
    route: '/family',
    image: img('Chinese boat family on traditional canal boat, warm interior, family cooking together, nostalgia'),
    accentColor: 'from-canal-deepLight to-rust',
    icon: 'users',
  },
];

const featuredQuotes: OralQuoteType[] = [
  {
    id: 'fq1',
    content: '我爹扛了一辈子包，肩膀上磨出厚厚的茧。他说，每一包粮食都是庄户人家的血汗，摔了就是丧良心。',
    speaker: '李桂兰',
    identity: '搬运工后代',
    year: '2014年采访',
  },
  {
    id: 'fq2',
    content: '丈夫一走就是几个月，我带着娃在岸上种地，夜里听着河里的船笛声，就知道他回来了没有。那声音，记一辈子。',
    speaker: '张王氏',
    identity: '船工妻子',
    year: '2007年采访',
  },
  {
    id: 'fq3',
    content: '开闸那一瞬间的水声，这辈子忘不了。轰隆隆的，跟打雷似的，水往下游涌。',
    speaker: '赵广福',
    identity: '原闸夫',
    year: '2012年采访',
  },
];

const iconMap: Record<string, typeof Anchor> = {
  anchor: Anchor,
  waves: Waves,
  warehouse: Warehouse,
  users: Users,
};

function HomePage() {
  return (
    <div className="text-canal-deepDark">
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img('epic panoramic view of Chinese grand canal at dawn, mist rising, traditional wooden boats, distant mountains, cinematic lighting, nostalgic mood', 'landscape_16_9')})`,
          }}
        />
        <div className="absolute inset-0 bg-hero-gradient" />

        <div className="absolute inset-x-0 bottom-0 h-52 bg-wave-pattern bg-[length:1440px_120px] bg-bottom bg-repeat-x opacity-80 animate-wave pointer-events-none"
          style={{ backgroundSize: '200% 100%' }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/3 right-10 lg:right-24 w-28 md:w-40 opacity-70 animate-float-slow"
          aria-hidden
        >
          <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 55 Q50 40 100 50 Q150 60 180 52 L175 58 Q140 68 100 60 Q60 52 25 60 Z" fill="#F5F0E1" opacity="0.7"/>
            <path d="M30 52 Q60 42 100 48 Q140 54 170 50 L168 55 Q135 62 100 56 Q65 50 32 57 Z" fill="#1F3A5F" opacity="0.7"/>
            <path d="M100 18 L100 48" stroke="#8B6914" strokeWidth="2.5"/>
            <path d="M100 20 L140 30 L100 42 Z" fill="#F5F0E1" opacity="0.85"/>
            <path d="M100 20 L62 32 L100 44 Z" fill="#A9442E" opacity="0.8"/>
          </svg>
        </motion.div>

        <div className="container relative pb-24 md:pb-40 pt-48">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-paper/80 text-xs md:text-sm tracking-[0.5em] mb-6"
            >
              FLO WING · MEMO RY
            </motion.p>
            <h1 className="font-serif font-black text-5xl md:text-7xl lg:text-8xl text-paper leading-[1.05] mb-6 tracking-wide drop-shadow-lg">
              <span className="block">运河船工</span>
              <span className="block text-rust-light mt-2">故事站</span>
            </h1>
            <p className="text-paper/85 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              千百年来，运河水流淌不息，船工号子传唱不止。
              我们用旧照片、口述历史与实地探访，
              记录下这段流淌在河面上的生活记忆。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/dock" className="btn-primary text-base px-8 py-4">
                开始阅读故事
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/routes" className="inline-flex items-center gap-2 px-8 py-4 bg-paper/10 backdrop-blur-sm border border-paper/30 text-paper rounded-md hover:bg-paper/20 transition-all text-base">
                <Map className="w-5 h-5" />
                参观路线
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1.2 }}
            className="absolute left-1/2 -translate-x-1/2 bottom-8 md:bottom-16 text-paper/70 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.3em]">向下滚动</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </motion.div>
        </div>
      </section>

      <section className="section-spacer bg-paper bg-paper-texture relative overflow-hidden">
        <div className="container">
          <SectionTitle
            eyebrow="FOUR CHAPTERS"
            title="四章运河故事"
            subtitle="从码头到船闸，从粮仓到船工之家，一段完整的运河船工生活叙事"
          />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {homeCards.map((card, idx) => {
              const Icon = iconMap[card.icon] || Anchor;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.12 }}
                >
                  <Link
                    to={card.route}
                    className="group block relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-earth-pale">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-t ${card.accentColor} opacity-85 mix-blend-multiply`} />
                    <div className="absolute inset-0 p-7 md:p-10 flex flex-col justify-end text-paper">
                      <div className="w-14 h-14 rounded-full bg-paper/15 backdrop-blur-sm flex items-center justify-center mb-5 border border-paper/25 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-xs tracking-[0.4em] text-paper/60">0{idx + 1}</span>
                        <span className="text-sm text-paper/70">{card.subtitle}</span>
                      </div>
                      <h3 className="font-serif font-bold text-3xl md:text-4xl mb-3 drop-shadow-sm">
                        {card.title}
                      </h3>
                      <p className="text-sm md:text-base text-paper/80 leading-relaxed mb-5 max-w-xl">
                        {card.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-paper self-start group-hover:gap-4 transition-all">
                        进入篇章 <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="ink-divider max-w-5xl mx-auto" />

      <section className="section-spacer bg-paper">
        <div className="container">
          <SectionTitle
            eyebrow="ORAL HISTORY"
            title="船工口述 · 精选片段"
            subtitle="来自老船工、搬运工、闸夫与他们后代的真实回忆"
          />

          <div className="grid lg:grid-cols-3 gap-6 md:gap-7">
            {featuredQuotes.map((q, i) => (
              <div key={q.id} className="flex flex-col">
                <OralQuote quote={q} index={i} />
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/family" className="btn-secondary">
              <Quote className="w-5 h-5" />
              阅读更多口述故事
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacer bg-canal-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute top-0 left-0 w-full h-40 bg-wave-pattern bg-[length:1440px_120px] rotate-180" />
        </div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-paper/60 text-xs md:text-sm tracking-[0.5em] mb-6"
            >
              VISIT · THE · CANAL
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif font-bold text-3xl md:text-5xl text-paper mb-6 leading-tight"
            >
              今天，你也可以踏上这段旅程
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-paper/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            >
              我们整理了三条参观路线，涵盖码头、船闸、粮仓与船工村，
              标注了详细的步行时间与公共交通方案，等你来走一走。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/routes" className="btn-primary text-base px-10 py-4 bg-rust hover:bg-rust-light">
                <Map className="w-5 h-5" />
                查看参观路线
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
