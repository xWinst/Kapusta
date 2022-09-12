import { FlipButtons } from '../FlipButtons/FlipButtons';

import s from './ReportsPeriod.module.css';

const ReportsPeriod = () => {
    return (
        <div className={s.period}>
            <p className={s.period__text}>Current period:</p>
            <FlipButtons>
                <h2 className={s.period__title}>November 2019</h2>
            </FlipButtons>
        </div>
    );
};

export { ReportsPeriod };
