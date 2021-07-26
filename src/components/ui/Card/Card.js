/** React core **/
import React from 'react';
import PropTypes from 'prop-types';

/** Styles **/
import styles from './Card.module.scss';

const Card = props => {
  const backgroundClass = props.background ? `${styles[`card--${props.background}`]}` : '';
  const classes = `${styles.card} ${backgroundClass}`.trim();

  return <div className={classes}>{props.children}</div>;
};

Card.propTypes = {
  children: PropTypes.any,
  background: PropTypes.string,
};

export default Card;
