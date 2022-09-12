const MobileChart = () => {
    const initialState = [
        {
            name: 'Свинина',
            price: 5000,
            id: '1',
        },
        {
            name: 'Говядина',
            price: 4500,
            id: '2',
        },
        {
            name: 'Курица',
            price: 3200,
            id: '3',
        },
        {
            name: 'Рыба',
            price: 2100,
            id: '4',
        },
        {
            name: 'Панини',
            price: 1800,
            id: '5',
        },
        {
            name: 'Кофе',
            price: 1700,
            id: '6',
        },
        {
            name: 'Спагети',
            price: 1500,
            id: '7',
        },
        {
            name: 'Шоколад',
            price: 800,
            id: '8',
        },
        {
            name: 'Маслины',
            price: 500,
            id: '9',
        },
        {
            name: 'Зелень',
            price: 300,
            id: '10',
        },
    ];
    const maxExpence = initialState[0].price;
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
                {initialState &&
                    initialState.map(el => (
                        <li key={el.id} style={{ paddingBottom: 20 }}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <span style={textStyle}>{el.name}</span>
                                <span style={textStyle}>{el.price} грн</span>
                            </div>
                            <div
                                style={{
                                    width:el.price / maxExpence * 270,
                                    height: '15px',
                                    background:
                                        el.id % 3 === 1 ? '#FF751D' : '#FED9BF',
                                    borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                }}
                            ></div>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default MobileChart;
