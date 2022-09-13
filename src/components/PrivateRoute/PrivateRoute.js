import useWindowDimensions from '../../hooks/useWindowDimensions'

import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
    const { width } = useWindowDimensions();

    return <>{Boolean(width < 768) ? <Outlet /> : <Navigate to="/" />}</>;
}
