import profile from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './FriendList/friendList';
import { TransactionHistory } from './TransactionHistory/transactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
