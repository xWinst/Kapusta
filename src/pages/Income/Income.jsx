import { IncomeModule } from 'modules';
import { BalanceForm } from 'components';
const Income = () => {
    return (
        <>
            <div className={s.container}>
                <Link to="/reports">Reports</Link>
                <BalanceForm />
            </div>
            <IncomeModule />
        </>
    );
};

export default Income;
