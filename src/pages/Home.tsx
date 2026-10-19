import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarCheck,
  Clock,
  Gauge,
  MapPin,
  Quote,
  Sparkles,
  Star,
  Wrench,
} from 'lucide-react';
import { HOW_IT_WORKS, SERVICES, SHOP, TESTIMONIALS } from '@/data/shop';

const ICONS = { wrench: Wrench, gauge: Gauge, sparkles: Sparkles };

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-900 dark:bg-stone-950">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/26729537/pexels-photo-26729537.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Ciclista a pedalar pelas ruas de Lisboa"
            className="h-full w-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-stone-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/60" />
        </div>

        <div className="container-page relative flex min-h-[88vh] flex-col justify-center py-24 lg:min-h-[92vh]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm font-medium text-primary-300 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-400" />
              </span>
              Aberto hoje · Diagnóstico gratuito
            </div>

            <h1
              className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl animate-fade-up"
              style={{ animationDelay: '60ms' }}
            >
              A tua bicicleta merece{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                mãos experientes
              </span>
            </h1>

            <p
              className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300 animate-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              No coração de Lisboa, a {SHOP.name} devolve vida a bicicletas de cidade, estrada,
              BTT e elétricas. Marca online em menos de um minuto.
            </p>

            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up"
              style={{ animationDelay: '180ms' }}
            >
              <Link
                to="/marcar"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/20 transition hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-500/30"
              >
                Marcar revisão
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/precos"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Ver planos
              </Link>
            </div>

            <div
              className="mt-12 grid max-w-lg grid-cols-3 gap-6 animate-fade-up"
              style={{ animationDelay: '240ms' }}
            >
              {[
                { value: '12+', label: 'Anos de ofício' },
                { value: '4.9★', label: 'Avaliação média' },
                { value: '3.000+', label: 'Reparações' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-white sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-stone-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
      </section>

      {/* Service cards */}
      <section className="container-page py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Serviços
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-100 text-balance">
            Tudo o que a tua bicicleta precisa, num só lugar
          </h2>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
            Da revisão completa à personalização estética, tratamos de cada detalhe com precisão
            e cuidado.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <article
                key={service.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl hover:shadow-stone-900/5 animate-fade-up dark:border-stone-800 dark:bg-stone-900 dark:hover:border-primary-700/50 dark:hover:shadow-black/20"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary-500 to-accent-500 transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-950/40 dark:text-primary-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-stone-900 dark:text-stone-100">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-stone-700 dark:text-stone-300">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4 dark:border-stone-800">
                  <span className="inline-flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400">
                    <Clock className="h-4 w-4" />
                    {service.duration}
                  </span>
                  <Link
                    to="/marcar"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition hover:gap-2 dark:text-primary-400"
                  >
                    Marcar
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Como funciona */}
      <section className="relative overflow-hidden border-y border-stone-200 bg-stone-100/50 py-20 lg:py-28 dark:border-stone-800/60 dark:bg-stone-900/30">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="container-page relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              Como funciona
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-100 text-balance">
              Três passos até estares de volta a pedalar
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {HOW_IT_WORKS.map((step, i) => (
              <div
                key={step.step}
                className="relative animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="absolute left-1/2 top-7 hidden h-px w-full bg-gradient-to-r from-primary-300 to-transparent md:block dark:from-primary-700/50" />
                )}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-900 font-display text-lg font-bold text-primary-400 shadow-lg dark:bg-stone-100 dark:text-primary-600">
                  {step.step}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-stone-900 dark:text-stone-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-page py-20 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Testemunhos
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-100 text-balance">
            Quem confia em nós
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-stone-200 bg-white p-7 shadow-sm animate-fade-up dark:border-stone-800 dark:bg-stone-900"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Quote className="h-8 w-8 text-primary-400" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                "{t.quote}"
              </blockquote>
              <div className="mt-5 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-stone-100 pt-5 dark:border-stone-800">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-stone-900 dark:text-stone-100">{t.name}</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-20 lg:pb-28">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 to-stone-800 px-8 py-14 text-center shadow-xl dark:from-stone-900 dark:to-stone-950 sm:px-16 sm:py-20">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="relative">
            <CalendarCheck className="mx-auto h-10 w-10 text-primary-400" />
            <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl text-balance">
              Pronto para levar a tua bicicleta à oficina?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-stone-300">
              Marca online em menos de um minuto. Diagnóstico gratuito e orçamento transparente,
              sem compromisso.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/marcar"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/20 transition hover:bg-primary-600"
              >
                Marcar agora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${SHOP.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
              >
                {SHOP.phone}
              </a>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-stone-400">
              <MapPin className="h-4 w-4" />
              {SHOP.address}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
