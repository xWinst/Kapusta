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

const Reports = () => {
    const { width } = useWindowDimensions();
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
              {Boolean(width < 768) && <MobileChart/>}
              {Boolean(width >= 768 && width <= 1279) && <TabletChart/>}
             {Boolean(width >= 1280 ) && <DesktopChart/>}
            </div>
        </div>
    );
};

export default Reports;
