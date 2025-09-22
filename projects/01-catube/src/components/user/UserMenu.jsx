import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOut, faUserAstronaut} from '@fortawesome/free-solid-svg-icons';
import './UserMenu.css';

export function UserMenu() {
    //Start closed
    const [isOpen, setIsOpen] = useState(false);
    //Detect cliks off menu
    const menuRef = useRef(null);

    //Toggle dropdown
    const toggleMenu = () => setIsOpen(prev => !prev)

    //Close on outside click or Escape
    useEffect(() => {
        //Close with click off menu
        const handleClickOutside = (e) => {
            //If click off menu, it closes
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        //Close with esc
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
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

    return (
        <div className="user-menu" ref={menuRef}>
                <button className="user-button" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faUser} />
                </button>
    
            {isOpen && (
                <div className="user-dropdown">
                    <ul>
                        <li className='userButtonLi'>
                            <button className='userButton'><FontAwesomeIcon className='buttonIcon' icon={faSignOut} />Log In</button>
                            <button className='userButton'><FontAwesomeIcon className='buttonIcon' icon={faUserAstronaut} />Your channel</button>
                            <button className='userButton'>Friends</button>
                            <button className='userButton'>Catube Studio</button>
                            <button className='userButton'>Appearance</button>
                            <button className='userButton'>Settings</button>
                            <button className='userButton'>Help</button>
                            <button className='userButton'>Send feedback</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}