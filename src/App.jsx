import user from 'user';
import data from 'data';
import friends from 'friends';
import transactions from 'transactions';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/friends/friends';
import { TransactionHistory } from 'components/transactions/TransactionHistory';
export const App = () => {
  return (
    <div
      style={{
        paddingTop: '40px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgb(182, 203, 211)',
      }}
    >
      <Profile
        url={user.avatar}
        userName={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
