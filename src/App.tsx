import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { ToastProvider } from '@/context/ToastContext';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Precos from '@/pages/Precos';
import Marcar from '@/pages/Marcar';
import AreaCliente from '@/pages/AreaCliente';
import Sobre from '@/pages/Sobre';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/precos" element={<Precos />} />
              <Route path="/marcar" element={<Marcar />} />
              <Route path="/area-cliente" element={<AreaCliente />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </ThemeProvider>
  );
}
