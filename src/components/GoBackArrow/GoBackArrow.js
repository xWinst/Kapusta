import { useNavigate } from 'react-router-dom';
import arrow from '../../images/ArrowToGoBack.svg';
import s from '../GoBackArrow/GoBackArrow.module.css';

export default function GoBackArrow() {
    const navigate = useNavigate();
    const goBackButton = () => {
        navigate(-1);
    };

    return (
        <button className={s.goBackButton} type="button" onClick={goBackButton}>
            <img src={arrow} alt="arrow" width={24} height={24}></img>
        </button>
    );
}
