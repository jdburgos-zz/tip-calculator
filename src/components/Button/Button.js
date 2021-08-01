/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Button.module.scss';

const Button = props => {
  return (
    <button type="text" className={styles.button} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
