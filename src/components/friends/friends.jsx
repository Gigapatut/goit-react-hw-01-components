import PropTypes from 'prop-types';
import css from './friends.module.css';

export const FriendList = ({ friends }) => {
    return (
    <ul className={css.list}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          {friend.isOnline ? (
            <span className={css.statusGreen}></span>
          ) : (
            <span className={css.statusRed}></span>
          )}
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
