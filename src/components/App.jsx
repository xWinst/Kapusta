import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components';
import { Home, Expenses, Income, Reports, PageNotFound } from 'pages';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="expenses" element={<Expenses />} />
                <Route path="income" element={<Income />} />
                <Route path="reports" element={<Reports />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
};
