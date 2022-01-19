/** Components **/
import Tip from '../Tip/Tip';

/** Styles **/
import styles from './TipList.module.scss';

const tips = [
  { value: 5, type: 'tip' },
  { value: 10, type: 'tip' },
  { value: 15, type: 'tip' },
  { value: 25, type: 'tip' },
  { value: 50, type: 'tip' },
  { value: 0, type: 'custom' },
];

const TipList = () => {
  const tipList = tips.map((tip, index) => <Tip key={index} tip={tip} />);

  return (
    <div className={styles['tip-list__container']}>
      <h3 className={styles['tip-list__title']}>Select Tip %</h3>
      <div className={styles['tip-list']}>{tipList}</div>
    </div>
  );
};

export default TipList;
