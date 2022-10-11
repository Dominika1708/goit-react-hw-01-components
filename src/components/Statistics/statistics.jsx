import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const getColor = () =>
  '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

export const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.list}>
      {stats.map(data => (
        <li
          className={styles.item}
          key={data.id}
          style={{ backgroundColor: getColor() }}
        >
          <span className={styles.label}>{data.label}</span>
          <span className={styles.percentage}>{data.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.object.isRequired,
};
