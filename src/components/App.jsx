import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SharedLayout } from 'components';
import {
    Expenses,
    Income,
    Reports,
    PageNotFound,
    BalanceMobileInputPage,
    Home,
} from 'pages';

export const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="income" element={<Income />} />
                    <Route path="reports" element={<Reports />} />
                    <Route
                        path="/expenses-input-mobile"
                        element={<BalanceMobileInputPage />}
                    />
                    <Route
                        path="/incomes-input-mobile"
                        element={<BalanceMobileInputPage />}
                    />
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
