//Hooks
import { useState, useRef, useEffect } from 'react';

//styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import './NotificationMenu.css';

//images
import Gazzard from '../../assets/images/profile/jere.jpg';
import Sheni from '../../assets/images/profile/gena.jpg';
import Colithox from '../../assets/images/profile/angel.jpg';
import Yukki from '../../assets/images/profile/yukki.jpg'


export function NotificationMenu() {
    //Start closed
    const [isOpen, setIsOpen] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, type: 'upload', userName: 'Gazzard' },
        { id: 2, type: 'comment', userName: 'Sheni' },
        { id: 3, type: 'mention', userName: 'Colithox' },
        { id: 4, type: 'upload', userName: 'Yukki' },
        { id: 5, type: 'upload', userName: 'Gazzard' },
        { id: 6, type: 'comment', userName: 'Sheni' },
        { id: 7, type: 'mention', userName: 'Colithox' },
        { id: 8, type: 'upload', userName: 'Yukki' },
        { id: 9, type: 'upload', userName: 'Gazzard' },
        { id: 10, type: 'comment', userName: 'Sheni' },
        { id: 11, type: 'mention', userName: 'Colithox' },
        { id: 12, type: 'upload', userName: 'Yukki' },
        { id: 13, type: 'upload', userName: 'Gazzard' },
        { id: 14, type: 'comment', userName: 'Sheni' },
        { id: 15, type: 'mention', userName: 'Colithox' },
        { id: 16, type: 'upload', userName: 'Yukki' }
    ]);

    //profiles 
    const avatarMap = {
        Gazzard,
        Sheni,
        Colithox,
        Yukki
    };

    //templates for messages
    const getMessage = (type, userName) => {
        const templates = {
            upload: ` ${userName} subió un nuevo video`,
            comment: ` ${userName} comentó en tu canal`,
            mention: ` ${userName} te mencionó en un comentario`
        };
        return templates[type] || `${userName} hizo algo`;
        };

    const menuRef = useRef(null); //useRef detect clicks off menu

    //Toggle dropdown
    const toggleMenu = () => setIsOpen(prev => !prev);

    //Close on outside click or Escape
    useEffect(() => {
        //Close with click off menu
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        //Close with esc
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
                document.activeElement.blur(); //Remove focus from button
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        //Very important clear the eventListener
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    //Mark notification as read
    const markAsRead = (id) => {
        //Delete notification readed by id
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    return (
        <div className="notification-menu" ref={menuRef}>
            <button className="notification-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBell} />
                {/* If there are notifications show the counter in a Badge */}
                {notifications.length > 0 && (<span className="notification-badge">{notifications.length}</span>)}
            </button>

        {isOpen && (
            <div className="notification-dropdown">
                <h3 className='titleNotificationMenu'>Notifications</h3>
                {/* Show a message if there are no notifications */}
                {notifications.length === 0 ? (
                    <p className="notification-empty">You have no notifications.</p>
                ) : (
                        //If there are notifications, show a list
                        <ul>
                            {notifications.map((note) => (
                                <li
                                key={note.id}
                                className="notification-item"
                                onClick={() => markAsRead(note.id)} 
                                >
                                <img src={avatarMap[note.userName]} alt={`${note.userName} avatar`} className="notification-avatar"/>
                                <span>{getMessage(note.type, note.userName)}</span>
                                </li>
                            ))}
                        </ul>
                    )}
            </div>
        )}
        </div>
    );
}