import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SharedLayout, PrivateRoute } from 'components';
import {
    Expenses,
    Income,
    Reports,
    PageNotFound,
    BalanceMobileInputPage,
    Home,
} from 'pages';

export const App = () => {
    // console.log(process.env.CLIENT_ID);
    return (
        <>
            {/* <Loader /> */}
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="income" element={<Income />} />
                    <Route path="reports" element={<Reports />} />

                    <Route element={<PrivateRoute />}>
                        <Route
                            path="/incomes-input-mobile"
                            element={<BalanceMobileInputPage />}
                        />
                    </Route>
                    <Route element={<PrivateRoute />}>
                        <Route
                            path="/expenses-input-mobile"
                            element={<BalanceMobileInputPage />}
                        />
                    </Route>
                    {/* <Route
                        path="/expenses-input-mobile"
                        element={<BalanceMobileInputPage />}
                    /> */}
                    {/* <Route
                        path="/incomes-input-mobile"
                        element={<BalanceMobileInputPage />}
                    /> */}
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
