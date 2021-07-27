import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({type, backgroundColor, size, label, ...props}) => {
    return (
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, `storybook-button--${type}`].join(' ')}
            style={backgroundColor && {backgroundColor}}
            {...props}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    type: 'primary',
    size: 'medium',
    onClick: undefined,
};