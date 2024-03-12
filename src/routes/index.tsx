import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes as RRoutes } from 'react-router-dom';
import { Spinner } from '../components/spinner';
import ErrorBoundary from '../components/error-boundary';
import { ThemeContextProvider } from '../contexts/theme-context';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export default function Routes() {
  const Payment = lazy(() => import('../pages/payment'));
  const PaymentStatus = lazy(() => import('../pages/payment-status'));

  return (
    <Suspense
      fallback={
        <div className='flex h-full w-full items-center justify-center'>
          <Spinner />
        </div>
      }
    >
      <BrowserRouter>
        <ThemeContextProvider>
          <Header />
          <main id='main-content' className='container h-full px-6'>
            <ErrorBoundary>
              <RRoutes>
                <Route path='/payment/:id' element={<Payment />} />
                <Route path='/payment-status/:id' element={<PaymentStatus />} />
              </RRoutes>
            </ErrorBoundary>
          </main>
          <Footer />
        </ThemeContextProvider>
      </BrowserRouter>
    </Suspense>
  );
}
