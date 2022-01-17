/** React core **/
import React from 'react';

/** Styles **/
import styles from './Button.module.scss';

type ButtonProps = {
  onClick: () => void;
  text: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
