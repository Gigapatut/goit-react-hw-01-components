import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = (props) => {
  const { url, userName, tag, location, followers, views, likes } = props;
  return (    
    <div className={css.profile}>
      <div className={css.description}>
        <img src={url} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{userName}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
    
  );
}

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
