import { useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Loader2,
  Phone,
} from 'lucide-react';
import { useToast } from '@/context/ToastContext';
import { useBookings } from '@/hooks/useBookings';
import {
  BIKE_TYPES,
  SERVICE_OPTIONS,
  SHOP,
  type Booking,
} from '@/data/shop';

const today = new Date().toISOString().split('T')[0];

const schema = z.object({
  name: z
    .string()
    .min(3, 'Indica o teu nome completo (pelo menos 3 caracteres).')
    .max(80, 'O nome é demasiado longo.'),
  email: z
    .string()
    .min(1, 'O email é obrigatório.')
    .email('Indica um email válido.'),
  phone: z
    .string()
    .min(9, 'Indica um telefone válido (pelo menos 9 dígitos).')
    .regex(/^[0-9+\s()-]+$/, 'O telefone só pode conter dígitos e caracteres válidos.'),
  bikeType: z.string().min(1, 'Seleciona o tipo de bicicleta.'),
  service: z.string().min(1, 'Seleciona um serviço.'),
  date: z
    .string()
    .min(1, 'Escolhe uma data.')
    .refine((d) => d >= today, 'A data não pode ser no passado.'),
  notes: z.string().max(500, 'As notas não podem exceder 500 caracteres.').optional(),
});

type FormValues = z.infer<typeof schema>;
type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL: FormValues = {
  name: '',
  email: '',
  phone: '',
  bikeType: '',
  service: '',
  date: '',
  notes: '',
};

export default function Marcar() {
  const { notify } = useToast();
  const { addBooking } = useBookings();
  const [values, setValues] = useState<FormValues>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<Booking | null>(null);

  const update = (field: keyof FormValues, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    // Simulate a brief async to give feedback
    await new Promise((r) => setTimeout(r, 600));

    const booking: Booking = {
      id: `lume-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      ...result.data,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    addBooking(booking);
    setSuccess(booking);
    setValues(INITIAL);
    setErrors({});
    setSubmitting(false);
    notify({
      title: 'Marcação registada!',
      description: 'Encontramos a tua marcação na Área de Cliente.',
    });
  };

  if (success) {
    return (
      <section className="container-page flex min-h-[70vh] items-center justify-center py-20">
        <div className="mx-auto max-w-lg text-center animate-scale-in">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-success-100 text-success-600 dark:bg-success-950/40 dark:text-success-400">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-display text-3xl font-bold text-stone-900 dark:text-stone-100">
            Marcação confirmada!
          </h1>
          <p className="mt-3 text-stone-600 dark:text-stone-400">
            Obrigado, {success.name}. Recebemos o teu pedido para{' '}
            <strong className="text-stone-900 dark:text-stone-100">{success.service}</strong> a{' '}
            <strong className="text-stone-900 dark:text-stone-100">
              {new Date(success.date).toLocaleDateString('pt-PT', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
              })}
            </strong>
            . Enviaremos confirmação para {success.email}.
          </p>

          <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 text-left dark:border-stone-800 dark:bg-stone-900">
            <div className="flex items-center gap-2 text-sm font-semibold text-stone-900 dark:text-stone-100">
              <ClipboardList className="h-4 w-4 text-primary-600 dark:text-primary-400" />
              Resumo da marcação
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              {[
                ['Bicicleta', success.bikeType],
                ['Serviço', success.service],
                ['Data', new Date(success.date).toLocaleDateString('pt-PT')],
                ['Contacto', success.phone],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="text-stone-500 dark:text-stone-400">{k}</dt>
                  <dd className="text-right font-medium text-stone-900 dark:text-stone-100">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/area-cliente"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
            >
              Ver na Área de Cliente
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setSuccess(null)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-100 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-800"
            >
              Fazer outra marcação
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="border-b border-stone-200 bg-gradient-to-b from-stone-100 to-stone-50 py-16 lg:py-20 dark:border-stone-800/60 dark:from-stone-900/40 dark:to-stone-950">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            <CalendarDays className="h-4 w-4" />
            Marcação
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-100 text-balance">
            Marca a tua visita
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600 dark:text-stone-400">
            Preenche o formulário e confirma em segundos. Diagnóstico gratuito, sem compromisso.
          </p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm dark:border-stone-800 dark:bg-stone-900"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nome completo" error={errors.name} required>
                <input
                  type="text"
                  value={values.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={inputClass(errors.name)}
                  placeholder="Maria Silva"
                  autoComplete="name"
                />
              </Field>

              <Field label="Email" error={errors.email} required>
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => update('email', e.target.value)}
                  className={inputClass(errors.email)}
                  placeholder="maria@exemplo.pt"
                  autoComplete="email"
                />
              </Field>

              <Field label="Telefone" error={errors.phone} required>
                <input
                  type="tel"
                  value={values.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className={inputClass(errors.phone)}
                  placeholder="+351 912 345 678"
                  autoComplete="tel"
                />
              </Field>

              <Field label="Tipo de bicicleta" error={errors.bikeType} required>
                <select
                  value={values.bikeType}
                  onChange={(e) => update('bikeType', e.target.value)}
                  className={inputClass(errors.bikeType)}
                >
                  <option value="">Seleciona…</option>
                  {BIKE_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Serviço" error={errors.service} required>
                <select
                  value={values.service}
                  onChange={(e) => update('service', e.target.value)}
                  className={inputClass(errors.service)}
                >
                  <option value="">Seleciona…</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Data preferida" error={errors.date} required>
                <input
                  type="date"
                  min={today}
                  value={values.date}
                  onChange={(e) => update('date', e.target.value)}
                  className={inputClass(errors.date)}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Notas (opcional)" error={errors.notes}>
                <textarea
                  value={values.notes}
                  onChange={(e) => update('notes', e.target.value)}
                  rows={4}
                  className={inputClass(errors.notes)}
                  placeholder="Descreve o problema, sintomas ou pedidos especiais…"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/20 transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  A registar…
                </>
              ) : (
                <>
                  Confirmar marcação
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* Side info */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-900 to-stone-800 p-6 text-white dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
              <h3 className="font-display text-lg font-bold">Precisas de ajuda?</h3>
              <p className="mt-2 text-sm text-stone-300">
                Prefere falar com a oficina? Liga-nos durante o horário de atendimento.
              </p>
              <a
                href={`tel:${SHOP.phone.replace(/\s/g, '')}`}
                className="mt-4 inline-flex items-center gap-2 text-base font-semibold text-primary-400 hover:text-primary-300"
              >
                <Phone className="h-4 w-4" />
                {SHOP.phone}
              </a>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                O que levar
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-stone-600 dark:text-stone-400">
                {[
                  'A bicicleta (ou pede recolga)',
                  'Chaves do cadeado, se aplicável',
                  'Descrição do problema, se houver',
                  'Disponibilidade para contacto durante o dia',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-success-600 dark:text-success-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1 text-sm font-medium text-stone-700 dark:text-stone-300">
        {label}
        {required && <span className="text-primary-600 dark:text-primary-400">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs font-medium text-error-600 dark:text-error-400">
          {error}
        </span>
      )}
    </label>
  );
}

function inputClass(error?: string) {
  return `w-full rounded-xl border bg-white px-4 py-3 text-sm text-stone-900 placeholder-stone-400 transition focus:outline-none focus:ring-2 focus:ring-primary-500/40 dark:bg-stone-950 dark:text-stone-100 dark:placeholder-stone-500 ${
    error
      ? 'border-error-300 focus:border-error-500 dark:border-error-700'
      : 'border-stone-300 focus:border-primary-500 dark:border-stone-700'
  }`;
}
