//styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOut, faTv, faUserFriends, faMoon, faGear, faQuestionCircle, faComments} from '@fortawesome/free-solid-svg-icons';
import './UserMenu.css';

//components
import { useDropdown } from '../hooks/useDropdown.jsx';
import { FriendMenu } from '../modal/friendMenu.jsx'
import { useModal } from '../hooks/useModal.jsx';

//assets
import Yukki from '../../assets/images/profile/yukki.jpg'
import Sheni from '../../assets/images/profile/gena.jpg'
import Gazzard from '../../assets/images/profile/jere.jpg'
import Colithox from '../../assets/images/profile/angel.jpg'

export function UserMenu() {
    const { isOpen, toggleMenu, menuRef } = useDropdown();
    const { modalIsOpen, toggleModal, modalRef } = useModal()

    var friends = [
        {profile: Yukki, userName: 'Yukki' },
        {profile: Sheni, userName: 'Sheni' },
        {profile: Gazzard, userName: 'Gazzard' },
        {profile: Colithox, userName: 'Colithox'}
    ]
    
    return (
        <div className="user-menu" ref={menuRef}>
                <button className="user-button" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faUser} />
                </button>
    
            {isOpen && (
                <div className="user-dropdown">
                    <ul>
                        <li className='menuUserButtonLi'>
                            <button className='menuUserButton'><FontAwesomeIcon className='buttonIcon' icon={faSignOut} />Log In</button>
                            <button className='menuUserButton'><FontAwesomeIcon className='buttonIcon' icon={faTv} />Your channel</button>
                            <button className='menuUserButton' onClick={toggleModal}><FontAwesomeIcon className='buttonIcon' icon={faUserFriends}/>Friends</button>
                                {modalIsOpen && (
                                    <FriendMenu friends={friends} ref={modalRef} />
                                )}
                            <button className='menuUserButton'>
                                <svg className="StudioIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.3 58.04">
                                    <path
                                        className="st0"
                                        d="M94.5,21.24v-.2l2.7-19.8c.1-.9-.9-1.6-1.7-1l-15.8,11.6c-8.3-3.3-18.7-5.2-30-5.2s-21.1,1.8-29.3,5L4.9.24c-.8-.6-1.8,0-1.7,1l2.6,19.1c-3.7,3.6-5.8,7.6-5.8,12,0,14.2,22.3,25.7,49.7,25.7s49.6-11.5,49.6-25.7c0-4.69-1.7-7.7-4.8-11.1ZM34.8,48.44h-9.5c-6.4,0-11.6-5.2-11.6-11.6h9.5c6.4,0,11.6,5.2,11.6,11.6h0ZM85.7,36.84c0,6.4-5.2,11.6-11.6,11.6h-9.5c0-6.4,5.2-11.6,11.6-11.6,0,0,9.5,0,9.5,0Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span>Catube Studio</span></button>
                            <button className='menuUserButton'><FontAwesomeIcon className='buttonIcon' icon={faMoon} />Appearance</button>
                            <button className='menuUserButton'><FontAwesomeIcon className='buttonIcon' icon={faGear} />Settings</button>
                            <button className='menuUserButton'><FontAwesomeIcon className='buttonIcon' icon={faQuestionCircle} />Help</button>
                            <button className='menuUserButton'><FontAwesomeIcon className='buttonIcon' icon={faComments} />Send feedback</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}