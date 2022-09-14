import { nanoid } from '@reduxjs/toolkit';

const TabletChart = ({ objectForChart }) => {
    // Преобразование обькта с обьектами в массив массивов
    const result = Object.entries(objectForChart);
    // Удаление елемента тотал, т.к. он не нужен в графиках
    const totalElementOfArray = result.shift();
    console.log(totalElementOfArray);
    // сортировка по убыванию
    result.sort((a, b) => b[1] - a[1]);

    const chartListContainerStyle = {
        position: 'relative',
        background: '#FFFFFF',
        // width:704,
        height: 422,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 32,
        borderRadius: 30,
        paddingTop: 20,
        paddingBottom: 20,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    };
    const chartDecorStyle = {
        borderTop: '2px solid #F5F6FB',
        width: 570,
        height: 40,
    };

    const chartListStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end',
        justifyContent: 'center',
        zIndex: 2,
    };

    const ChartItemStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        zIndex: 2,
    };

    return (
        <div style={chartListContainerStyle}>
            <ul style={{ position: 'absolute', zIndex: 1, top: 38, right: 39 }}>
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
                    result.map(el => (
                        <li style={ChartItemStyle} key={nanoid()}>
                            <span>{el[1]}грн</span>
                            <div
                                style={{
                                    height: (el[1] / result[0][1]) * 328,
                                    width: '38px',
                                    background: el[1] % 3 === 1 ? '#FF751D' : '#FED9BF',
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                }}
                            ></div>
                            <span>{el[0]}</span>
                        </li>
                    ))
                ) : (
                    <li>Please choose category to create chart</li>
                )}
            </ul>
        </div>
    );
};

export default TabletChart;
