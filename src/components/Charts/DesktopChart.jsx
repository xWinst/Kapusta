const DesktopChart = () => {
    const initialState = [
        {
            name: 'Свинина',
            price: 50,
            id: '1',
        },
        {
            name: 'Говядина',
            price: 45,
            id: '2',
        },
        {
            name: 'Курица',
            price: 30,
            id: '3',
        },
        {
            name: 'Рыба',
            price: 20,
            id: '4',
        },
        {
            name: 'Панини',
            price: 18,
            id: '5',
        },
        {
            name: 'Кофе',
            price: 17,
            id: '6',
        },
        {
            name: 'Спагети',
            price: 15,
            id: '7',
        },
        {
            name: 'Шоколад',
            price: 8,
            id: '8',
        },
        {
            name: 'Маслины',
            price: 5,
            id: '9',
        },
        {
            name: 'Зелень',
            price: 3,
            id: '10',
        },
    ];
     const maxExpence = initialState[0].price;


     const chartListContainerStyle = {
      position:'relative',
      background:'#FFFFFF',
      width:1034,
      height:422,
      marginRight:'auto',
      marginLeft:'auto',
      marginTop:40,
      borderRadius:30,
      paddingTop:20,
      paddingBottom:20,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    }
    const chartDecorStyle = {
      borderTop: '2px solid #F5F6FB',
      width:758,
      height:40,

    }

    const chartListStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'end',
        justifyContent:'center',
        zIndex:2,
    };

    const ChartItemStyle={
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginRight:10,
      zIndex:2,
    }

    return (
        <div style={chartListContainerStyle}>
          <ul style={{position:'absolute',zIndex:1,top:38,right:150,}}>
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
                {initialState.map(el => (
                    <li style={ChartItemStyle} key={el.id}>
                        <span>{el.price}грн</span>
                        <div
                            style={{
                                height:
                                el.price / maxExpence * 328 ,
                                    // el.price > 5000 ? 328 : el.price * 0.065,
                                width: '38px',
                                background:
                                    el.id % 3 === 1 ? '#FF751D' : '#FED9BF',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                            }}
                        ></div>
                        <span>{el.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DesktopChart;
