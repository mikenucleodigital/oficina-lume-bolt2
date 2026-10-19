import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown, HelpCircle, Sparkles, X } from 'lucide-react';
import { FAQS, PLANS } from '@/data/shop';

type Cycle = 'monthly' | 'yearly';

export default function Precos() {
  const [cycle, setCycle] = useState<Cycle>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const price = (monthly: number) =>
    cycle === 'yearly' ? Math.round(monthly * 12 * 0.85) : monthly;

  return (
    <>
      {/* Header */}
      <section className="border-b border-stone-200 bg-gradient-to-b from-stone-100 to-stone-50 py-20 lg:py-24 dark:border-stone-800/60 dark:from-stone-900/40 dark:to-stone-950">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            <Sparkles className="h-4 w-4" />
            Planos
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-100 text-balance">
            Preços simples, sem surpresas
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600 dark:text-stone-400">
            Escolhe o plano certo para o teu ritmo de pedal. Sem fidelização, cancela quando
            quiseres.
          </p>

          {/* Toggle */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-stone-200 bg-white p-1.5 shadow-sm dark:border-stone-800 dark:bg-stone-900">
            <button
              onClick={() => setCycle('monthly')}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                cycle === 'monthly'
                  ? 'bg-stone-900 text-white shadow dark:bg-stone-100 dark:text-stone-900'
                  : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setCycle('yearly')}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                cycle === 'yearly'
                  ? 'bg-stone-900 text-white shadow dark:bg-stone-100 dark:text-stone-900'
                  : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100'
              }`}
            >
              Anual
              <span className="rounded-full bg-success-500 px-2 py-0.5 text-xs font-bold text-white">
                −15%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {PLANS.map((plan, i) => (
            <div
              key={plan.id}
              className={`relative flex flex-col overflow-hidden rounded-3xl border p-8 transition-all animate-fade-up ${
                plan.highlighted
                  ? 'border-primary-500 bg-white shadow-2xl shadow-primary-500/10 lg:-mt-4 lg:mb-4 dark:border-primary-600/60 dark:bg-stone-900'
                  : 'border-stone-200 bg-white shadow-sm hover:shadow-lg dark:border-stone-800 dark:bg-stone-900'
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary-500/10 blur-2xl" />
                  <span className="absolute right-6 top-6 rounded-full bg-primary-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Popular
                  </span>
                </>
              )}

              <h3 className="font-display text-2xl font-bold text-stone-900 dark:text-stone-100">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">{plan.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-bold text-stone-900 dark:text-stone-100">
                  {price(plan.monthly)} €
                </span>
                <span className="text-sm text-stone-500 dark:text-stone-400">
                  {cycle === 'yearly' ? '/ano' : '/mês'}
                </span>
              </div>
              {cycle === 'yearly' && (
                <p className="mt-1.5 text-xs text-success-600 dark:text-success-400">
                  Poupa {plan.monthly * 12 - price(plan.monthly)} € por ano
                </p>
              )}

              <Link
                to="/marcar"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/20 hover:bg-primary-700'
                    : 'border border-stone-300 text-stone-800 hover:border-stone-900 hover:bg-stone-900 hover:text-white dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-900'
                }`}
              >
                Começar agora
                <ArrowRight className="h-4 w-4" />
              </Link>

              <ul className="mt-8 space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-stone-700 dark:text-stone-300">
                    <span
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                        plan.highlighted
                          ? 'bg-primary-100 text-primary-700 dark:bg-primary-950/50 dark:text-primary-400'
                          : 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300'
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-stone-500 dark:text-stone-400">
          Precisas de algo personalizado?{' '}
          <a
            href="mailto:ola@oficinalume.pt"
            className="font-semibold text-primary-600 hover:underline dark:text-primary-400"
          >
            Fala connosco
          </a>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-stone-200 bg-stone-100/50 py-20 lg:py-28 dark:border-stone-800/60 dark:bg-stone-900/30">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
              <HelpCircle className="h-4 w-4" />
              Perguntas frequentes
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-100 text-balance">
              Tudo o que precisas de saber
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen
                      ? 'border-primary-300 bg-white dark:border-primary-700/50 dark:bg-stone-900'
                      : 'border-stone-200 bg-white/60 dark:border-stone-800 dark:bg-stone-900/60'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-stone-900 dark:text-stone-100">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-primary-600 transition-transform duration-300 dark:text-primary-400 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-6 py-4 text-sm text-stone-600 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-400">
            <X className="h-4 w-4 text-stone-400" />
            Ainda tens dúvidas?{' '}
            <Link to="/sobre" className="font-semibold text-primary-600 hover:underline dark:text-primary-400">
              Visita a oficina
            </Link>{' '}
            ou envia-nos email.
          </div>
        </div>
      </section>
    </>
  );
}
