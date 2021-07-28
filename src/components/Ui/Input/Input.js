/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
  const errorClass = props.error ? styles.error : '';
  const className = props.className ? props.className : '';
  const classes = `${styles.input} ${className} ${errorClass}`.trim();

  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input onChange={props.onChange} className={classes} ref={ref} {...props.input} />
    </div>
  );
});

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool.isRequired,
  input: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.displayName = 'Input';

export default Input;
