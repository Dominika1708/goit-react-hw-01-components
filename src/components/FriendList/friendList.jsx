import PropTypes from 'prop-types';
import styles from './friendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusclass = isOnline ? styles.online : styles.offline;
  return (
    <li className={styles.item}>
      <span className={statusclass}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export const FriendList = ({ friends }) => (
    <ul className={styles.friend__list}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
