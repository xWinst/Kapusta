import { nanoid } from '@reduxjs/toolkit';

const MobileChart = ({ objectForChart }) => {
    // Преобразование обькта с обьектами в массив массивов
    const result = Object.entries(objectForChart);
    // Удаление елемента тотал, т.к. он не нужен в графиках
    const totalElementOfArray = result.shift();

    console.log(totalElementOfArray);
    // сортировка по убыванию
    result.sort((a, b) => b[1] - a[1]);

    const chartListContainerStyle = {
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 29,
    };

    const textStyle = {
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 10,
        lineHeight: 1.1,
        letterSpacing: 0.02,
        color: '#52555F',
        marginBottom: 2,
    };

    return (
        <div style={chartListContainerStyle}>
            <ul>
                {result?.length > 0 ? (
                    result.map(el => (
                        <li key={nanoid()} style={{ paddingBottom: 20 }}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <span style={textStyle}>{el[0]}</span>
                                <span style={textStyle}>{el[1]} грн</span>
                            </div>
                            <div
                                style={{
                                    width: (el[1] / result[0][1]) * 250,
                                    height: '15px',
                                    background: el[1] % 3 === 1 ? '#FF751D' : '#FED9BF',
                                    borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}
                            ></div>
                        </li>
                    ))
                ) : (
                    <li style={{ textAlign: 'center' }}>Please choose category to create chart</li>
                )}
            </ul>
        </div>
    );
};

export default MobileChart;
