/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
  const errorClass = props.error ? styles.error : '';
  const className = props.className ? props.className : '';
  const classes = `${styles.input} ${className} ${errorClass}`.trim();
  const label = (
    <label className={styles['input__label']} htmlFor={props.input.id}>
      {props.label}
    </label>
  );
  const icon = (
    <img
      className={styles['input__icon']}
      src={`${process.env.PUBLIC_URL}/images/${props.icon}.svg`}
      alt={`${props.icon}`}
    />
  );

  return (
    <div className={styles['input__container']}>
      {props.label && label}
      {props.icon && icon}
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
  icon: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.displayName = 'Input';

export default Input;
