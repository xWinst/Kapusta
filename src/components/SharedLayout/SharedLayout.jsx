import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Loader } from 'components';

export const SharedLayout = () => {
    const isRefreshingUser = useSelector(state => state.auth.isRefreshingUser);
    return (
        <Container>
            <Header />
            {isRefreshingUser ? (
                <Loader />
            ) : (
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            )}
        </Container>
    );
};

export default SharedLayout;
