import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

const Button = ({ type, buttonName, title, onClick }) => {
    return (
        <button
            type={type}
            name={buttonName}
            onClick={onClick}
            className={s.Button}
        >
            {title}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired,
    buttonName: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default Button;
