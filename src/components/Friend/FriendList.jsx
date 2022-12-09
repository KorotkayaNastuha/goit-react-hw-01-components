import PropTypes from 'prop-types';
import css from '../Friend/Friend.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
    return <ul className={css.friendList}>
        {friends.map(friend => (
            <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id}>
            </FriendListItem>
        ))}
    </ul>
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}