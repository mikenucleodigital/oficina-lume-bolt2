import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  CalendarPlus,
  ClipboardList,
  Inbox,
  TrendingUp,
  Trash2,
  Wrench,
} from 'lucide-react';
import { useBookings } from '@/hooks/useBookings';
import {
  BOOKING_STATUSES,
  STATUS_COLORS,
  STATUS_LABELS,
  type Booking,
  type BookingStatus,
} from '@/data/shop';

const MONTHS_PT = [
  'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
];

export default function AreaCliente() {
  const { bookings, updateStatus, deleteBooking } = useBookings();
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const sorted = useMemo(
    () => [...bookings].sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    [bookings]
  );

  const stats = useMemo(() => {
    const total = bookings.length;
    const pending = bookings.filter((b) => b.status === 'pending').length;
    const confirmed = bookings.filter((b) => b.status === 'confirmed').length;
    const completed = bookings.filter((b) => b.status === 'completed').length;
    return { total, pending, confirmed, completed };
  }, [bookings]);

  const chartData = useMemo(() => {
    const counts = new Array(12).fill(0);
    for (const b of bookings) {
      const month = new Date(b.date).getMonth();
      if (!Number.isNaN(month)) counts[month] += 1;
    }
    return MONTHS_PT.map((m, i) => ({ month: m, marcacoes: counts[i] }));
  }, [bookings]);

  return (
    <>
      <section className="border-b border-stone-200 bg-gradient-to-b from-stone-100 to-stone-50 py-14 lg:py-16 dark:border-stone-800/60 dark:from-stone-900/40 dark:to-stone-950">
        <div className="container-page">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            <ClipboardList className="h-4 w-4" />
            Área Cliente
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-100 text-balance">
            As tuas marcações
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600 dark:text-stone-400">
            Acompanha o estado das tuas reparações, altera o estado ou cancela marcações.
          </p>
        </div>
      </section>

      <section className="container-page py-12 lg:py-16">
        {bookings.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* Table */}
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
              <div className="border-b border-stone-100 px-6 py-4 dark:border-stone-800">
                <h2 className="font-display text-lg font-bold text-stone-900 dark:text-stone-100">
                  Histórico ({sorted.length})
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-stone-50 text-xs uppercase tracking-wider text-stone-500 dark:bg-stone-950/50 dark:text-stone-400">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Serviço</th>
                      <th className="px-6 py-3 font-semibold">Bicicleta</th>
                      <th className="px-6 py-3 font-semibold">Data</th>
                      <th className="px-6 py-3 font-semibold">Estado</th>
                      <th className="px-6 py-3 text-right font-semibold">Ações</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                    {sorted.map((b) => (
                      <tr key={b.id} className="transition hover:bg-stone-50 dark:hover:bg-stone-800/40">
                        <td className="px-6 py-4">
                          <div className="font-medium text-stone-900 dark:text-stone-100">{b.service}</div>
                          <div className="text-xs text-stone-500 dark:text-stone-400">{b.name}</div>
                        </td>
                        <td className="px-6 py-4 text-stone-600 dark:text-stone-300">{b.bikeType}</td>
                        <td className="px-6 py-4 text-stone-600 dark:text-stone-300">
                          {new Date(b.date).toLocaleDateString('pt-PT')}
                        </td>
                        <td className="px-6 py-4">
                          <StatusSelect
                            value={b.status}
                            onChange={(s) => updateStatus(b.id, s)}
                          />
                        </td>
                        <td className="px-6 py-4 text-right">
                          {confirmDelete === b.id ? (
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => {
                                  deleteBooking(b.id);
                                  setConfirmDelete(null);
                                }}
                                className="rounded-lg bg-error-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-error-700"
                              >
                                Eliminar
                              </button>
                              <button
                                onClick={() => setConfirmDelete(null)}
                                className="rounded-lg border border-stone-300 px-3 py-1.5 text-xs font-semibold text-stone-700 transition hover:bg-stone-100 dark:border-stone-700 dark:text-stone-200 dark:hover:bg-stone-800"
                              >
                                Não
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setConfirmDelete(b.id)}
                              className="inline-flex items-center gap-1.5 rounded-lg p-2 text-stone-400 transition hover:bg-error-50 hover:text-error-600 dark:hover:bg-error-950/30 dark:hover:text-error-400"
                              aria-label="Eliminar marcação"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary + chart */}
            <aside className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                <StatCard label="Total" value={stats.total} icon={ClipboardList} color="primary" />
                <StatCard label="Pendentes" value={stats.pending} icon={TrendingUp} color="warning" />
                <StatCard label="Confirmadas" value={stats.confirmed} icon={CalendarPlus} color="secondary" />
                <StatCard label="Concluídas" value={stats.completed} icon={Wrench} color="success" />
              </div>

              <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-stone-900 dark:text-stone-100">
                  Marcações por mês
                </h3>
                <div className="mt-4 h-56">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 4, right: 4, bottom: 0, left: -24 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="text-stone-200 dark:text-stone-800" vertical={false} />
                      <XAxis
                        dataKey="month"
                        tick={{ fontSize: 11, fill: 'currentColor' }}
                        className="text-stone-500 dark:text-stone-400"
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        allowDecimals={false}
                        tick={{ fontSize: 11, fill: 'currentColor' }}
                        className="text-stone-500 dark:text-stone-400"
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        cursor={{ fill: 'rgba(249,122,12,0.08)' }}
                        contentStyle={{ borderRadius: 12, fontSize: 12 }}
                        labelStyle={{ color: 'currentColor' }}
                        formatter={(v) => [`${v} marcação${Number(v) !== 1 ? 'ões' : ''}`, '']}
                      />
                      <Bar dataKey="marcacoes" fill="#f97a0c" radius={[6, 6, 0, 0]} maxBarSize={28} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-900 to-stone-800 p-6 text-white dark:border-stone-800 dark:from-stone-900 dark:to-stone-950">
                <h3 className="font-display text-base font-bold">Nova marcação</h3>
                <p className="mt-1.5 text-sm text-stone-300">
                  Precisas de outra revisão? Marca em menos de um minuto.
                </p>
                <Link
                  to="/marcar"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-600"
                >
                  Marcar agora
                </Link>
              </div>
            </aside>
          </div>
        )}
      </section>
    </>
  );
}

const COLOR_CLASSES: Record<string, { bg: string; text: string; ring: string }> = {
  primary: {
    bg: 'bg-primary-50 dark:bg-primary-950/40',
    text: 'text-primary-700 dark:text-primary-400',
    ring: 'ring-primary-200 dark:ring-primary-800/40',
  },
  secondary: {
    bg: 'bg-secondary-50 dark:bg-secondary-950/40',
    text: 'text-secondary-700 dark:text-secondary-400',
    ring: 'ring-secondary-200 dark:ring-secondary-800/40',
  },
  success: {
    bg: 'bg-success-50 dark:bg-success-950/40',
    text: 'text-success-700 dark:text-success-400',
    ring: 'ring-success-200 dark:ring-success-800/40',
  },
  warning: {
    bg: 'bg-warning-50 dark:bg-warning-950/40',
    text: 'text-warning-700 dark:text-warning-400',
    ring: 'ring-warning-200 dark:ring-warning-800/40',
  },
  error: {
    bg: 'bg-error-50 dark:bg-error-950/40',
    text: 'text-error-700 dark:text-error-400',
    ring: 'ring-error-200 dark:ring-error-800/40',
  },
};

function StatusBadge({ status }: { status: BookingStatus }) {
  const color = STATUS_COLORS[status];
  const c = COLOR_CLASSES[color];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${c.bg} ${c.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full bg-current`} />
      {STATUS_LABELS[status]}
    </span>
  );
}

function StatusSelect({ value, onChange }: { value: BookingStatus; onChange: (s: BookingStatus) => void }) {
  const color = STATUS_COLORS[value];
  const c = COLOR_CLASSES[color];
  return (
    <div className="relative inline-flex items-center">
      <span className={`pointer-events-none absolute left-2.5 h-1.5 w-1.5 rounded-full bg-current ${c.text}`} />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as BookingStatus)}
        className={`cursor-pointer appearance-none rounded-full py-1 pl-6 pr-7 text-xs font-semibold ${c.bg} ${c.text} ring-1 ${c.ring} transition hover:opacity-80 focus:outline-none focus:ring-2`}
        aria-label="Estado da marcação"
      >
        {BOOKING_STATUSES.map((s) => (
          <option key={s} value={s}>
            {STATUS_LABELS[s]}
          </option>
        ))}
      </select>
      <svg className="pointer-events-none absolute right-2 h-3 w-3 opacity-60" viewBox="0 0 12 12" fill="none">
        <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: number;
  icon: typeof ClipboardList;
  color: string;
}) {
  const c = COLOR_CLASSES[color];
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${c.bg} ${c.text}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="mt-3 font-display text-2xl font-bold text-stone-900 dark:text-stone-100">
        {value}
      </div>
      <div className="text-xs text-stone-500 dark:text-stone-400">{label}</div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="mx-auto max-w-md rounded-3xl border border-dashed border-stone-300 bg-white/60 p-12 text-center dark:border-stone-700 dark:bg-stone-900/40">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-stone-400 dark:bg-stone-800 dark:text-stone-500">
        <Inbox className="h-7 w-7" />
      </div>
      <h2 className="mt-5 font-display text-xl font-bold text-stone-900 dark:text-stone-100">
        Ainda não tens marcações
      </h2>
      <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
        Quando marcares a tua primeira visita, ela aparece aqui com o estado e histórico.
      </p>
      <Link
        to="/marcar"
        className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
      >
        Fazer primeira marcação
      </Link>
    </div>
  );
}
