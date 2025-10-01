//styles
import './friendMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export function FriendMenu ({friends}) {
    return (
        <aside className='friends-sidebar'>
            <header className='friendSidebar-header'>
                <div className='friendSidebar-headerOne'>
                    <div>
                        <h2>Friends</h2>
                    </div>
                    <div className='friendSidebar-status'>
                        <span>Your status</span>
                        <select>
                            <option>Online</option>
                            <option>Offline</option>
                            <option>Occupied</option>
                        </select>
                    </div>
                    <button className='openSearchFriend'>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                
                <div className='friendSidebar-headerTwo hidden'>
                    <button className='back'></button>
                    <input type="text" placeholder='Search friends' />
                </div>
        </header>
        <main>
            {friends.length === 0 ? (
                <p className='noFriendsMessage'>You have no friends added yet</p>
            ) : (
                friends.map((friend, index) => (
                    <div key={index} className='modalFriendCard'>
                        <img src={friend.profile} alt={`${friend.userName}'s profile`} className='FriendImg' />
                        <div className='modalFriendStatus'></div>
                        <p>{friend.userName}</p>
                    </div>
                ))
            )}
        </main>
        </aside>
    )
}