/** React core **/
import React from 'react';

/** Styles **/
import styles from './Container.module.scss';

type ContainerProps = {
  className: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  const classes = `${styles.container} ${className || ''}`.trim();

  return <div className={classes}>{children}</div>;
};

export default Container;
