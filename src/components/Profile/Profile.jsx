import { Avatar, Location, ProfileCard, Tag, UserName } from './Profile.styled';
import { Stats } from './Stats';
import PropTypes from 'prop-types';

export const Profile = ({
  userData: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileCard>
      <div>
        <Avatar src={avatar} alt={username} />
        <UserName className="name">{username}</UserName>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </div>
      <Stats stats={stats} />
    </ProfileCard>
  );
};

Profile.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }).isRequired,
};
