import { ThreeCircles } from 'react-loader-spinner';

import s from './Loader.module.css';

const Loader = () => {
    return (
        <div className={s.container}>
            <ThreeCircles
                height="250"
                width="250"
                color="#ff751d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
            />
        </div>
    );
};

export default Loader;
