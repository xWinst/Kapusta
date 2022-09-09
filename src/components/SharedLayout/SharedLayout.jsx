import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Loader } from 'components';

export const SharedLayout = () => {
    return (
        <Container>
            <Header />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default SharedLayout;
