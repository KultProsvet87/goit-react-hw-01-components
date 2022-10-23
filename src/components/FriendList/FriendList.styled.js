import styled from 'styled-components';

export const FriendsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const FriendCard = styled.li`
  margin: 5px;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  min-width: 300px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  margin: 0 15px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 20px;
`;
