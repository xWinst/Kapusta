import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SharedLayout, PrivateRoute } from 'components';
import { lazy } from 'react';

const Expenses = lazy(() => import('../../pages/Expenses/Expenses'));
const Income = lazy(() => import('../../pages/Income/Income'));
const Reports = lazy(() => import('../../pages/Reports/Reports'));
const PageNotFound = lazy(() => import('../../pages/PageNotFound/PageNotFound'));
const BalanceMobileInputPage = lazy(() =>
    import('../../pages/BalanceMobileInputPage/BalanceMobileInputPage')
);
const Home = lazy(() => import('../../pages/Home/Home'));

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="income" element={<Income />} />
                    <Route path="reports" element={<Reports />} />

                    <Route element={<PrivateRoute />}>
                        <Route path="/incomes-input-mobile" element={<BalanceMobileInputPage />} />
                    </Route>
                    <Route element={<PrivateRoute />}>
                        <Route path="/expenses-input-mobile" element={<BalanceMobileInputPage />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};
