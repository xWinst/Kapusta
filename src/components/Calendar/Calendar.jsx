import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import imageCalendar from 'images/calendarNew.svg';
import s from './Calendar.module.css';
import { useState, useEffect } from 'react';

const Calendar = ({ dateHandle }) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => dateHandle(date));

    return (
        <div className={s.calendarWrapper}>
            <img
                className={s.calendarIcon}
                src={imageCalendar}
                alt="Calendar"
            />
            <DatePicker
                maxDate={new Date()}
                selected={date}
                onChange={date => setDate(date)}
                className={s.datePicker}
                dateFormat="dd/MM/yyyy"
            />
        </div>
    );
};

export default Calendar;
