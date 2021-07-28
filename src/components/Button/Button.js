/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Button.module.scss';

const Button = props => {
  return (
    <button type="text" className={styles.button}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
