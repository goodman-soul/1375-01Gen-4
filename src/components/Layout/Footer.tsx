import { Link } from 'react-router-dom';
import { Waves, Mail, MapPin, BookOpen } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative bg-canal-deep text-paper pt-20 pb-8 mt-10 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-32 bg-wave-pattern bg-[length:1440px_120px] bg-bottom bg-no-repeat opacity-50"
      />
      <div className="container relative">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-paper/10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-rust/90 flex items-center justify-center shadow-md">
                <Waves className="w-5 h-5 text-paper" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl">运河船工故事站</h3>
                <p className="text-xs tracking-[0.3em] text-paper/50 mt-0.5">FLOWING MEMORY</p>
              </div>
            </div>
            <p className="text-sm text-paper/70 leading-relaxed">
              我们致力于记录与保存运河船工的口述历史与生活记忆，
              让那些流淌在河面上的故事不被遗忘。
            </p>
          </div>

          <div>
            <h4 className="font-serif font-bold text-base mb-5 text-paper/90 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-rust" />
              故事篇章
            </h4>
            <ul className="space-y-3 text-sm text-paper/70">
              <li><Link to="/dock" className="hover:text-rust transition-colors">码头篇 · 黄金口岸</Link></li>
              <li><Link to="/lock" className="hover:text-rust transition-colors">船闸篇 · 升降之间</Link></li>
              <li><Link to="/granary" className="hover:text-rust transition-colors">粮仓篇 · 漕运终点</Link></li>
              <li><Link to="/family" className="hover:text-rust transition-colors">船工家庭 · 水上人家</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-base mb-5 text-paper/90 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rust" />
              联系我们
            </h4>
            <ul className="space-y-3 text-sm text-paper/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-rust/80" />
                <span>运河文化保护中心 · 大码头街 12 号</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-rust/80" />
                <a href="mailto:story@canalboat.cn" className="hover:text-rust transition-colors">
                  story@canalboat.cn
                </a>
              </li>
            </ul>
            <Link
              to="/routes"
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-rust text-paper text-sm font-medium rounded-md hover:bg-rust-light transition-all shadow-md"
            >
              <MapPin className="w-4 h-4" />
              查看参观路线
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-paper/50">
          <p>© {new Date().getFullYear()} 运河船工故事站 · 保留所有权利</p>
          <p>本站所有口述历史均经讲述人授权使用 · 未经许可不得转载</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
