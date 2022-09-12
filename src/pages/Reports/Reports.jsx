import {
    ButtonBack,
    ReportsPeriod,
    ReportsTotal,
    ReportsCategories,
} from 'components';
import MobileChart from 'components/Charts/MobileChart';
import TabletChart from 'components/Charts/TabletChart';
import DesktopChart from 'components/Charts/DesktopChart';
import useWindowDimensions from 'components/hooks/useWindowDimensions';
import s from './Reports.module.css';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Reports = () => {
    const { width } = useWindowDimensions();

    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }
    return (
        <div className={s.container}>
            <div className={s.reports__nav}>
                <ButtonBack />
                <p>Balance</p>
                <ReportsPeriod />
            </div>
            <ReportsTotal />
            <ReportsCategories />
            <div>
                {Boolean(width < 768) && <MobileChart />}
                {Boolean(width >= 768 && width <= 1279) && <TabletChart />}
                {Boolean(width >= 1280) && <DesktopChart />}
            </div>
        </div>
    );
};

export default Reports;
