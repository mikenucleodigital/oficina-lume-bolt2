import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bike, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { SHOP } from '@/data/shop';

const NAV_LINKS = [
  { to: '/', label: 'Início' },
  { to: '/precos', label: 'Preços' },
  { to: '/marcar', label: 'Marcar' },
  { to: '/area-cliente', label: 'Área Cliente' },
  { to: '/sobre', label: 'Sobre' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
      isActive
        ? 'text-primary-600 dark:text-primary-400'
        : 'text-stone-700 dark:text-stone-300'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-stone-200/60 shadow-sm dark:border-stone-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 text-primary-400 transition-transform group-hover:scale-105 dark:bg-stone-100 dark:text-primary-600">
            <Bike className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100">
            {SHOP.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 mx-auto h-0.5 w-4 rounded-full bg-primary-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 dark:border-stone-800 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-100"
            aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <Link
            to="/marcar"
            className="hidden rounded-xl bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 hover:shadow-md sm:block"
          >
            Marcar agora
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 text-stone-700 transition hover:bg-stone-100 md:hidden dark:border-stone-800 dark:text-stone-200 dark:hover:bg-stone-800"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-page flex flex-col gap-1 border-t border-stone-200/60 bg-white py-4 dark:border-stone-800/60 dark:bg-stone-950">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-medium transition ${
                  isActive
                    ? 'bg-primary-50 text-primary-700 dark:bg-primary-950/40 dark:text-primary-400'
                    : 'text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-900'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/marcar"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-xl bg-primary-600 px-4 py-3 text-center text-base font-semibold text-white"
          >
            Marcar agora
          </Link>
        </div>
      </div>
    </header>
  );
}
