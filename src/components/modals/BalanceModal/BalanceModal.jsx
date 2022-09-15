import s from './BalanceModal.module.css'


const BalanceModal = () => {
  return (
    <div className={s.BalanceModal_container}>

    <div className={s.Balance__modal}>
      <div className={s.triangle}></div>
      <p className={s.Modal__text}>Привет! Для начала работы внеси текущий баланс своего счета!</p>
      <p className={s.Modal__text}>Ты не можешь тратить деньги пока их у тебя нет...</p>
    </div>
    </div>
  );
};

export default BalanceModal;
