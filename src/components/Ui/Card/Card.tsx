/** React core **/
import React from 'react';

/** Styles **/
import styles from './Card.module.scss';

type CardProps = {
  children: React.ReactNode;
  className: string;
  background?: string;
};

const Card: React.FC<CardProps> = ({ className, background, children }) => {
  const clssName = className || '';
  const backgroundClass = background ? `${styles[`card--${background}`]}` : '';
  const classes = `${styles.card} ${clssName} ${backgroundClass}`.trim();

  return <div className={classes}>{children}</div>;
};

export default Card;
