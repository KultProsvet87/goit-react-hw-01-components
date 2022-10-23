import userData from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Container } from './Container/Container.styled';

export const App = () => {
  return (
    <div>
      <Container>
        React homework template
        <Profile userData={userData} />
        <Statistics title="Upload stats" statsData={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
};
