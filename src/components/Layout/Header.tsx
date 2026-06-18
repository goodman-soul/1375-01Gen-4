import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Waves, Map } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { to: '/', label: '首页', end: true },
  { to: '/dock', label: '码头篇' },
  { to: '/lock', label: '船闸篇' },
  { to: '/granary', label: '粮仓篇' },
  { to: '/family', label: '船工家庭篇' },
  { to: '/routes', label: '游客路线' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-canal-deep/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-rust/90 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <Waves className="w-5 h-5 text-paper" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-serif font-bold text-lg ${scrolled ? 'text-paper' : 'text-paper drop-shadow-md'}`}>
              运河船工故事站
            </span>
            <span className={`text-xs tracking-[0.3em] ${scrolled ? 'text-paper/70' : 'text-paper/70'}`}>
              FLOWING MEMORY
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled ? 'text-paper/80 hover:text-paper' : 'text-paper/90 hover:text-paper'
                } ${isActive ? 'text-paper' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-2 right-2 -bottom-0.5 h-0.5 bg-rust rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Link
            to="/routes"
            className="ml-3 inline-flex items-center gap-2 px-4 py-2 bg-rust text-paper text-sm font-medium rounded-md hover:bg-rust-light transition-all shadow-sm"
          >
            <Map className="w-4 h-4" />
            参观路线
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className={`lg:hidden w-10 h-10 rounded-md flex items-center justify-center ${
            scrolled ? 'text-paper' : 'text-paper'
          }`}
          aria-label="菜单"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-canal-deep/98 backdrop-blur-md border-t border-paper/10"
          >
            <nav className="container py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `px-4 py-3 text-paper rounded-md ${
                      isActive ? 'bg-rust/80 text-paper' : 'hover:bg-paper/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
