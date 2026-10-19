import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80vh] items-center justify-center py-20">
      <div className="text-center animate-fade-up">
        <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
          <span className="absolute -inset-4 animate-ping rounded-full bg-primary-500/10" />
          <span className="absolute -inset-8 rounded-full bg-primary-500/5" />
          <Compass className="h-12 w-12 text-primary-500 animate-spin-slow" />
        </div>

        <p className="mt-8 font-display text-7xl font-bold text-stone-900 dark:text-stone-100">
          404
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold text-stone-900 dark:text-stone-100">
          Caminho não encontrado
        </h1>
        <p className="mx-auto mt-3 max-w-md text-stone-600 dark:text-stone-400">
          Parece que esta página saiu para um passeio de bicicleta. Verifica o endereço ou volta
          ao início.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            <Home className="h-4 w-4" />
            Voltar ao início
          </Link>
          <Link
            to="/marcar"
            className="inline-flex items-center gap-2 rounded-2xl border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-100 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Marcar revisão
          </Link>
        </div>
      </div>
    </section>
  );
}
