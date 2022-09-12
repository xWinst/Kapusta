const TabletChart = () => {
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
    position:'relative',
    background:'#FFFFFF',
    width:704,
    height:422,
    marginRight:'auto',
    marginLeft:'auto',
    marginTop:32,
    borderRadius:30,
    paddingTop:20,
    paddingBottom:20,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  }
  const chartDecorStyle = {
    borderTop: '2px solid #F5F6FB',
    width:635,
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
        <ul style={{position:'absolute',zIndex:1,top:38,right:39,}}>
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
                            el.price / maxExpence * 328,
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

export default TabletChart;
