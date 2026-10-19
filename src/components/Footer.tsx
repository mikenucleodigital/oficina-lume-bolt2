import { Link } from 'react-router-dom';
import { Bike, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { HOURS, SHOP } from '@/data/shop';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white dark:border-stone-800/60 dark:bg-stone-950">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-900 text-primary-400 dark:bg-stone-100 dark:text-primary-600">
                <Bike className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold text-stone-900 dark:text-stone-100">
                {SHOP.name}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              Reparação e manutenção de bicicletas no coração de Lisboa. Manutenção honesta, peças
              de qualidade e amor pelo ofício.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { to: '/', label: 'Início' },
                { to: '/precos', label: 'Preços' },
                { to: '/marcar', label: 'Marcar' },
                { to: '/area-cliente', label: 'Área Cliente' },
                { to: '/sobre', label: 'Sobre' },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-stone-600 transition-colors hover:text-primary-600 dark:text-stone-400 dark:hover:text-primary-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100">
              Horários
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {HOURS.map((h) => (
                <li key={h.day} className="flex items-start gap-2.5 text-stone-600 dark:text-stone-400">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                  <span>
                    <span className="block font-medium text-stone-800 dark:text-stone-200">{h.day}</span>
                    <span className="text-stone-500 dark:text-stone-400">{h.time}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li className="flex items-start gap-2.5 text-stone-600 dark:text-stone-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                <span>{SHOP.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${SHOP.phone.replace(/\s/g, '')}`}
                  className="flex items-start gap-2.5 text-stone-600 transition hover:text-primary-600 dark:text-stone-400 dark:hover:text-primary-400"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                  <span>{SHOP.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SHOP.email}`}
                  className="flex items-start gap-2.5 text-stone-600 transition hover:text-primary-600 dark:text-stone-400 dark:hover:text-primary-400"
                >
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                  <span>{SHOP.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-6 text-sm text-stone-500 sm:flex-row dark:border-stone-800/60 dark:text-stone-400">
          <p>
            © {new Date().getFullYear()} {SHOP.name}. Todos os direitos reservados.
          </p>
          <p>Feito em Lisboa, com pedal e chaves.</p>
        </div>
      </div>
    </footer>
  );
}
