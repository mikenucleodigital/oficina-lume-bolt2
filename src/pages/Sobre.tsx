import { Link } from 'react-router-dom';
import { ArrowRight, Bike, Clock, MapPin, Target, Users, Wrench } from 'lucide-react';
import { HOURS, SHOP, TEAM } from '@/data/shop';

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-stone-200 bg-gradient-to-b from-stone-100 to-stone-50 py-16 lg:py-20 dark:border-stone-800/60 dark:from-stone-900/40 dark:to-stone-950">
        <div className="container-page max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            <Users className="h-4 w-4" />
            Sobre nós
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-100 text-balance">
            Uma oficina com alma, no coração de Lisboa
          </h1>
          <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
            A {SHOP.name} nasceu em 2013 de uma paixão simples: devolver às bicicletas o seu melhor
            desempenho e dar a cada ciclista a confiança para pedalar mais longe.
          </p>
        </div>
      </section>

      {/* Story + image */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              A nossa história
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              De garagem improvisada a oficina de referência
            </h2>
            <div className="mt-5 space-y-4 text-stone-600 dark:text-stone-400">
              <p>
                Tudo começou quando a Marta, cansada de ver bicicletas boas a serem descartadas por
                falhas reparáveis, abriu as portas de uma pequena garagem na Lapa. Em poucos meses,
                a fila de vizinhos à espera de reparação tornou evidente que Lisboa precisava de
                uma oficina diferente.
              </p>
              <p>
                Hoje, a {SHOP.name} é uma equipa de três pessoas apaixonadas, com mais de 3.000
                reparações feitas e uma promessa simples: diagnóstico honesto, peças de qualidade
                e trabalho que dura.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: '12', label: 'Anos de ofício', icon: Wrench },
                { value: '3k+', label: 'Reparações', icon: Bike },
                { value: '3', label: 'Mecânicos', icon: Users },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-stone-200 bg-white p-4 text-center dark:border-stone-800 dark:bg-stone-900"
                >
                  <s.icon className="mx-auto h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div className="mt-2 font-display text-2xl font-bold text-stone-900 dark:text-stone-100">
                    {s.value}
                  </div>
                  <div className="text-xs text-stone-500 dark:text-stone-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.pexels.com/photos/13122870/pexels-photo-13122870.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Mecânico a trabalhar numa corrente de bicicleta"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur dark:bg-stone-900/90">
              <p className="font-display text-sm font-bold text-stone-900 dark:text-stone-100">
                A oficina
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400">{SHOP.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-stone-200 bg-stone-100/50 py-16 lg:py-20 dark:border-stone-800/60 dark:bg-stone-900/30">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              <Target className="h-4 w-4" />
              O que nos move
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 text-balance">
              Três princípios que guiam cada reparação
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Transparência',
                desc: 'Relatório fotográfico e orçamento claro antes de qualquer trabalho. Sem surpresas na fatura.',
              },
              {
                title: 'Durabilidade',
                desc: 'Usamos peças de qualidade e técnicas que resistem a milhares de quilómetros, não a semanas.',
              },
              {
                title: 'Comunidade',
                desc: 'Apoiamos clubes locais, eventos de ciclismo urbano e iniciativas de mobilidade sustentável.',
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-stone-200 bg-white p-7 dark:border-stone-800 dark:bg-stone-900"
              >
                <h3 className="font-display text-xl font-bold text-stone-900 dark:text-stone-100">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-page py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Equipa
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-100 text-balance">
            As mãos por trás da oficina
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TEAM.map((m, i) => (
            <article
              key={m.name}
              className="group rounded-3xl border border-stone-200 bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-xl dark:border-stone-800 dark:bg-stone-900 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 font-display text-xl font-bold text-white shadow-lg shadow-primary-500/20">
                {m.initials}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-stone-900 dark:text-stone-100">
                {m.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                {m.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {m.bio}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                <Wrench className="h-3 w-3" />
                {m.specialty}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Map + hours */}
      <section className="border-t border-stone-200 bg-stone-100/50 py-16 lg:py-24 dark:border-stone-800/60 dark:bg-stone-900/30">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              <MapPin className="h-4 w-4" />
              Onde estamos
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-100 text-balance">
              Visita-nos na Lapa
            </h2>
            <p className="mt-4 text-stone-600 dark:text-stone-400">
              {SHOP.address}
            </p>
            <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
              A 5 minutos a pé do Museu Nacional de Arte Antiga. Estacionamento para bicicletas
              à porta.
            </p>

            <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                <h3 className="font-display text-base font-bold text-stone-900 dark:text-stone-100">
                  Horários
                </h3>
              </div>
              <ul className="mt-4 space-y-3">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex items-center justify-between border-b border-stone-100 pb-3 text-sm last:border-0 last:pb-0 dark:border-stone-800">
                    <span className="font-medium text-stone-800 dark:text-stone-200">{h.day}</span>
                    <span className="text-stone-600 dark:text-stone-400">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/marcar"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
            >
              Marcar visita
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Map placeholder */}
          <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 dark:border-stone-800 dark:bg-stone-800">
            <div className="absolute inset-0 bg-grid opacity-70" />
            <div className="relative flex min-h-[360px] flex-col items-center justify-center p-8 text-center">
              <div className="relative">
                <span className="absolute -inset-6 animate-ping rounded-full bg-primary-500/20" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white shadow-xl">
                  <MapPin className="h-7 w-7" />
                </div>
              </div>
              <h3 className="mt-6 font-display text-lg font-bold text-stone-900 dark:text-stone-100">
                {SHOP.name}
              </h3>
              <p className="mt-1 max-w-xs text-sm text-stone-600 dark:text-stone-400">
                {SHOP.address}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  SHOP.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:underline dark:text-primary-400"
              >
                Abrir no Google Maps
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
