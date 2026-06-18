import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Map, ArrowLeft, Clock, Footprints, Bus,
  MapPin, Ticket, ChevronRight, Train, Navigation, Sparkles,
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import tourRoutes, { publicTransit } from '../data/routes';
import type { TourRoute } from '../types';

const heroImg = (
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' +
  encodeURIComponent('aerial view of Chinese grand canal heritage area with walking paths, bridges, historic landmarks, green park, people exploring, sunny day, cinematic') +
  '&image_size=landscape_16_9'
);

const difficultyStyle: Record<TourRoute['difficulty'], string> = {
  '轻松': 'bg-emerald-500/15 text-emerald-700 border-emerald-500/30',
  '适中': 'bg-earth/15 text-earth-dark border-earth/30',
  '较累': 'bg-rust/15 text-rust-dark border-rust/30',
};

function RoutesPage() {
  const [activeRoute, setActiveRoute] = useState<string>(tourRoutes[0].id);
  const selected = tourRoutes.find((r) => r.id === activeRoute) ?? tourRoutes[0];

  return (
    <div>
      <section className="relative h-[60vh] min-h-[440px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container relative pb-14 md:pb-20 pt-40">
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
                <Map className="w-7 h-7 text-paper" />
              </div>
              <p className="text-paper/70 tracking-[0.4em] text-xs">VISIT · GUIDE</p>
            </div>
            <h1 className="font-serif font-black text-5xl md:text-7xl text-paper mb-4 drop-shadow-md">
              游客路线
            </h1>
            <p className="max-w-2xl text-paper/80 md:text-lg leading-relaxed">
              三条精选游览路线，覆盖码头、船闸、粮仓与船工村。
              每一段步行时间、每一班公交都已为你标好。
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacer bg-paper">
        <div className="container">
          <SectionTitle
            eyebrow="CHOOSE A ROUTE"
            title="选择一条适合你的路线"
            subtitle="从半日轻松游到全天深度游，总有一条适合你"
          />

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-14">
            {tourRoutes.map((route, i) => {
              const active = route.id === activeRoute;
              return (
                <motion.button
                  key={route.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onClick={() => setActiveRoute(route.id)}
                  className={`text-left relative rounded-2xl p-6 md:p-7 border-2 transition-all duration-300 overflow-hidden group ${
                    active
                      ? 'bg-canal-deep text-paper border-rust shadow-2xl scale-[1.02]'
                      : 'bg-paper-light text-canal-deepDark border-earth-pale hover:border-earth shadow-md hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs tracking-[0.3em] font-medium ${active ? 'text-rust-light' : 'text-earth'}`}>
                      路线 0{i + 1}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                        active ? 'bg-paper/10 text-paper border-paper/20' : difficultyStyle[route.difficulty]
                      }`}
                    >
                      {route.difficulty}
                    </span>
                  </div>
                  <h3 className={`font-serif font-bold text-xl md:text-2xl mb-3 ${active ? 'text-paper' : 'text-canal-deep'}`}>
                    {route.name}
                  </h3>
                  <div className={`flex flex-wrap gap-4 mb-5 text-sm ${active ? 'text-paper/80' : 'text-earth-dark/80'}`}>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      约 {route.durationHours} 小时
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Footprints className="w-4 h-4" />
                      {route.segments.length} 段步行
                    </span>
                  </div>
                  <ul className={`space-y-1.5 mb-5 ${active ? 'text-paper/75' : 'text-earth-dark/80'}`}>
                    {route.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="text-sm flex items-start gap-2">
                        <Sparkles className={`w-3.5 h-3.5 mt-1 shrink-0 ${active ? 'text-rust-light' : 'text-rust'}`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`inline-flex items-center gap-1 text-sm font-medium ${
                      active ? 'text-rust-light' : 'text-rust group-hover:gap-2 transition-all'
                    }`}
                  >
                    {active ? '当前选择' : '查看此路线'}
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div
            key={selected.id}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-earth/10 bg-gradient-to-br from-paper-light to-paper"
          >
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0">
              <div className="bg-canal-deep text-paper p-8 md:p-10 lg:p-12 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-rust/15 blur-3xl" />
                <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-canal-deepLight/40 blur-3xl" />
                <div className="relative">
                  <p className="text-xs tracking-[0.4em] text-rust-light mb-3">SELECTED ROUTE</p>
                  <h3 className="font-serif font-bold text-3xl md:text-4xl mb-4 leading-tight">
                    {selected.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-8 text-sm text-paper/80">
                    <span className="inline-flex items-center gap-2">
                      <Clock className="w-4 h-4 text-rust-light" />
                      总用时约 <strong className="text-paper">{selected.durationHours}</strong> 小时
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Footprints className="w-4 h-4 text-rust-light" />
                      强度 <strong className="text-paper">{selected.difficulty}</strong>
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-serif font-bold text-base text-paper/90 mb-3 flex items-center gap-2">
                      <Train className="w-4 h-4 text-rust-light" />
                      抵达交通
                    </h4>
                    {selected.transitStart && (
                      <div className="bg-paper/5 rounded-xl p-4 border border-paper/10">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                            selected.transitStart.lineType === 'subway' ? 'bg-blue-500/30' : 'bg-emerald-500/30'
                          }`}>
                            {selected.transitStart.lineType === 'subway'
                              ? <Train className="w-5 h-5" />
                              : <Bus className="w-5 h-5" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-baseline justify-between gap-3">
                              <p className="font-semibold">{selected.transitStart.lineName}</p>
                              {selected.transitStart.fare && (
                                <span className="text-xs text-paper/60">
                                  <Ticket className="w-3.5 h-3.5 inline mr-1" />
                                  {selected.transitStart.fare}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-paper/75 mt-1">
                              <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-rust-light" />
                              {selected.transitStart.stationName} 下车
                            </p>
                            <p className="text-xs text-paper/60 mt-1">
                              <Navigation className="w-3 h-3 inline mr-1" />
                              下车后步行 {selected.transitStart.transferWalkMinutes} 分钟至起点
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    {selected.transitEnd && (
                      <div className="bg-paper/5 rounded-xl p-4 border border-paper/10">
                        <p className="text-xs text-paper/50 mb-2 tracking-wider">返程参考</p>
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                            selected.transitEnd.lineType === 'subway' ? 'bg-blue-500/30' : 'bg-emerald-500/30'
                          }`}>
                            {selected.transitEnd.lineType === 'subway'
                              ? <Train className="w-5 h-5" />
                              : <Bus className="w-5 h-5" />}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold">{selected.transitEnd.lineName}</p>
                            <p className="text-sm text-paper/75 mt-1">
                              <MapPin className="w-3.5 h-3.5 inline mr-1.5 text-rust-light" />
                              {selected.transitEnd.stationName}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 lg:p-12">
                <h4 className="font-serif font-bold text-2xl text-canal-deep mb-7 flex items-center gap-2">
                  <Footprints className="w-5 h-5 text-rust" />
                  步行路线时间轴
                </h4>
                <ol className="relative pl-2">
                  {selected.segments.map((seg, i) => (
                    <motion.li
                      key={seg.order}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative pb-10 last:pb-0"
                    >
                      <div className="absolute left-3 top-1 bottom-0 w-px bg-gradient-to-b from-rust via-earth/60 to-earth/20 last:from-rust last:to-rust/20" />
                      <div className="relative flex gap-5">
                        <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center shadow-md z-10 ${
                          i === 0 ? 'bg-rust text-paper' : 'bg-paper border-2 border-earth/40 text-earth-dark'
                        }`}>
                          <span className="text-xs font-bold">{i === 0 ? '起' : seg.order}</span>
                        </div>
                        <div className="flex-1 pt-0.5">
                          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-1.5">
                            <p className="font-serif font-bold text-lg text-canal-deep">
                              {seg.from}
                              <ChevronRight className="w-4 h-4 inline mx-1.5 text-earth" />
                              {seg.to}
                            </p>
                            <span className="inline-flex items-center gap-1 text-sm font-medium text-rust bg-rust/10 px-2.5 py-1 rounded-full">
                              <Clock className="w-3.5 h-3.5" />
                              步行 {seg.walkMinutes} 分钟
                            </span>
                          </div>
                          <p className="text-sm text-earth-dark/85 leading-relaxed">
                            {seg.description}
                          </p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ol>

                <div className="mt-8 pt-6 border-t border-earth/20">
                  <div className="flex items-start gap-3 p-4 bg-earth-pale/40 rounded-xl">
                    <Sparkles className="w-5 h-5 text-rust shrink-0 mt-0.5" />
                    <div className="text-sm text-earth-dark/90">
                      <p className="font-semibold mb-1">温馨提示</p>
                      <p className="leading-relaxed">
                        建议上午 9 点左右出发，带好水与遮阳帽。
                        各景点间的步道均已铺设完毕，沿途设休息座椅与指示牌。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacer bg-earth-pale/25">
        <div className="container">
          <SectionTitle
            eyebrow="PUBLIC TRANSIT"
            title="公共交通一览"
            subtitle="除自驾外，地铁与公交都能方便抵达各个景点"
          />

          <div className="overflow-hidden rounded-2xl shadow-xl bg-paper border border-earth/10">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[640px]">
                <thead className="bg-canal-deep text-paper">
                  <tr>
                    <th className="px-6 py-4 text-xs tracking-[0.2em] font-medium">类型</th>
                    <th className="px-6 py-4 text-xs tracking-[0.2em] font-medium">线路名称</th>
                    <th className="px-6 py-4 text-xs tracking-[0.2em] font-medium">站点</th>
                    <th className="px-6 py-4 text-xs tracking-[0.2em] font-medium">可前往景点</th>
                    <th className="px-6 py-4 text-xs tracking-[0.2em] font-medium">下车后步行</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-earth/15">
                  {publicTransit.map((line) =>
                    line.stations.map((station, sIdx) => (
                      <motion.tr
                        key={`${line.name}-${station.name}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="hover:bg-earth-pale/30 transition-colors"
                      >
                        {sIdx === 0 && (
                          <>
                            <td
                              rowSpan={line.stations.length}
                              className="px-6 py-5 align-middle border-r border-earth/10"
                            >
                              <span
                                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                                  line.type === 'subway'
                                    ? 'bg-blue-500/10 text-blue-700 border border-blue-500/20'
                                    : 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/20'
                                }`}
                              >
                                {line.type === 'subway' ? (
                                  <><Train className="w-3.5 h-3.5" /> 地铁</>
                                ) : (
                                  <><Bus className="w-3.5 h-3.5" /> 公交</>
                                )}
                              </span>
                            </td>
                            <td
                              rowSpan={line.stations.length}
                              className="px-6 py-5 align-middle border-r border-earth/10"
                            >
                              <p className="font-serif font-bold text-lg text-canal-deep">{line.name}</p>
                              <p className="text-xs text-earth-dark/60 mt-1 leading-relaxed">
                                {line.description}
                              </p>
                            </td>
                          </>
                        )}
                        <td className="px-6 py-5 align-middle">
                          <p className="font-semibold text-canal-deep flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-rust shrink-0" />
                            {station.name}
                          </p>
                        </td>
                        <td className="px-6 py-5 align-middle">
                          <ul className="space-y-1">
                            {station.destinations.map((d) => (
                              <li key={d} className="text-sm text-earth-dark/90 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-rust mt-2 shrink-0" />
                                {d}
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="px-6 py-5 align-middle">
                          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-earth-dark bg-earth/10 px-3 py-1.5 rounded-full">
                            <Footprints className="w-3.5 h-3.5 text-earth" />
                            {station.walkMinutes} 分钟
                          </span>
                        </td>
                      </motion.tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacer bg-paper">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.4em] text-rust font-medium mb-4">EXPLORE · THE · STORIES</p>
              <h3 className="font-serif font-bold text-3xl md:text-4xl text-canal-deep mb-5 leading-tight">
                踏上路线之前，先读一读他们的故事
              </h3>
              <p className="text-earth-dark/80 md:text-lg mb-10 leading-relaxed">
                每一段路都有故事，每一处景点都藏着船工们的回忆。
                走之前，先了解他们曾经的生活。
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/dock" className="btn-primary">
                  从码头开始阅读
                </Link>
                <Link to="/family" className="btn-secondary">
                  船工家庭的故事
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RoutesPage;
