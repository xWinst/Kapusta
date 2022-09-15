import { useEffect } from 'react';
import s from './DesktopChart.module.css';
import { nanoid } from '@reduxjs/toolkit';

const DesktopChart = ({ objectForChart }) => {
    // Преобразование обькта с обьектами в массив массивов
    let result = Object.entries(objectForChart);

    // Удаление елемента тотал, т.к. он не нужен в графиках
    result.shift();

    // сортировка по убыванию
    result.sort((a, b) => b[1] - a[1]);

    useEffect(() => {
        // eslint-disable-next-line
        result = [];
    }, []);

    const chartListContainerStyle = {
        position: 'relative',
        background: '#FFFFFF',

        height: 422,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 40,
        borderRadius: 30,
        paddingTop: 20,
        paddingBottom: 20,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    };
    const chartDecorStyle = {
        borderTop: '2px solid #F5F6FB',
        width: 758,
        height: 40,
    };

    const chartListStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end',
        justifyContent: 'center',
        zIndex: 2,
    };

    return (
        <div style={chartListContainerStyle}>
            <ul style={{ position: 'absolute', zIndex: 1, top: 40, right: 150 }}>
                <li>
                    <div style={chartDecorStyle}></div>
                </li>
                <li>
                    <div style={chartDecorStyle}></div>
                </li>
                <li>
                    <div style={chartDecorStyle}></div>
                </li>
                <li>
                    <div style={chartDecorStyle}></div>
                </li>
                <li>
                    <div style={chartDecorStyle}></div>
                </li>
                <li>
                    <div style={chartDecorStyle}></div>
                </li>
                <li>
                    <div style={chartDecorStyle}></div>
                </li>
                <li>
                    <div style={chartDecorStyle}></div>
                </li>
                <li>
                    <div style={chartDecorStyle}></div>
                </li>
            </ul>
            <ul style={chartListStyle}>
                {result?.length > 0 ? (
                    result.map((el, index) => (
                        <li className={s.Chart__item} key={nanoid()}>
                            <span className={s.chartItem__text}>{el[1]}грн</span>
                            <div
                                className={s.charts__bar}
                                style={{
                                    height: (el[1] / result[0][1]) * 328,
                                    backgroundColor: index % 3 === 0 ? '#FF751D' : '#FFDAC0',
                                }}
                            ></div>
                            <span className={s.chartItem__text}>{el[0]}</span>
                        </li>
                    ))
                ) : (
                    <li>Please choose category to create chart</li>
                )}
            </ul>
        </div>
    );
};

export default DesktopChart;
