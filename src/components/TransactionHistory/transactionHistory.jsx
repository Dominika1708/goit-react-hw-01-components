import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={styles.transaction__history}>
    <thead>
      <tr className={styles.titles}>
        <th className={styles.title}>Type</th>
        <th className={styles.title}>Amount</th>
        <th className={styles.title}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id} className={styles.labels}>
          <td className={styles.label}>{item.type}</td>
          <td className={styles.label}>{item.amount}</td>
          <td className={styles.label}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  item: PropTypes.object,
};
