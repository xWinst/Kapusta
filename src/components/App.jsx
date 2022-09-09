import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Expenses, Income, Reports, PageNotFound } from 'pages';
import { Header, Loader } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="income" element={<Income />} />
            <Route path="reports" element={<Reports />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
