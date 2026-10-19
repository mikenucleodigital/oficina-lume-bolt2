import { useCallback, useEffect, useState } from 'react';
import type { Booking, BookingStatus } from '@/data/shop';

const STORAGE_KEY = 'lume-bookings';

function read(): Booking[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Booking[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function write(bookings: Booking[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  window.dispatchEvent(new CustomEvent('lume-bookings-changed'));
}

export function useBookings() {
  const [bookings, setBookings] = useState<Booking[]>(read);

  useEffect(() => {
    const onChange = () => setBookings(read());
    window.addEventListener('lume-bookings-changed', onChange);
    window.addEventListener('storage', onChange);
    return () => {
      window.removeEventListener('lume-bookings-changed', onChange);
      window.removeEventListener('storage', onChange);
    };
  }, []);

  const addBooking = useCallback((booking: Booking) => {
    const next = [booking, ...read()];
    write(next);
  }, []);

  const updateStatus = useCallback((id: string, status: BookingStatus) => {
    const next = read().map((b) => (b.id === id ? { ...b, status } : b));
    write(next);
  }, []);

  const deleteBooking = useCallback((id: string) => {
    const next = read().filter((b) => b.id !== id);
    write(next);
  }, []);

  return { bookings, addBooking, updateStatus, deleteBooking };
}
