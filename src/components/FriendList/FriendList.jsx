import {
  Avatar,
  FriendCard,
  FriendsList,
  Status,
  Name,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <FriendCard key={id}>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt={name} />
            <Name>{name}</Name>
          </FriendCard>
        );
      })}
    </FriendsList>
  );
};
