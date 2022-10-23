import { Avatar, Location, ProfileCard, Tag, UserName } from './Profile.styled';
import { Stats } from './Stats';

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
