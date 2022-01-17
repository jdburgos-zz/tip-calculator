/** React core **/
import React, { ForwardedRef } from 'react';

/** Styles **/
import styles from './Input.module.scss';

type InputProps = {
  ref: ForwardedRef<HTMLInputElement>;
  error: boolean;
  className: string;
  label?: string;
  icon?: string;
  input: { id: string; type: string; placeholder?: string };
  onChange: () => void;
};

const Input: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, input, label, icon, onChange }, ref: ForwardedRef<HTMLInputElement>) => {
    const errorClass = error ? styles.error : '';
    const clssName = className || '';
    const classes = `${styles.input} ${clssName} ${errorClass}`.trim();
    const lbl = (
      <label className={styles.input__label} htmlFor={input.id}>
        {label}
      </label>
    );
    const icn = (
      <img
        className={styles.input__icon}
        src={`${process.env.PUBLIC_URL}/images/${icon}.svg`}
        alt={`${icon}`}
      />
    );

    return (
      <div className={styles.input__container}>
        {label && lbl}
        {icon && icn}
        <input onChange={onChange} className={classes} ref={ref} {...input} />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
