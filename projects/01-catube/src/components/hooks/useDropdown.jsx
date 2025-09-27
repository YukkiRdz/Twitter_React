import { useState, useRef, useEffect } from 'react';

export function useDropdown () {
    //Start closed
    const [isOpen, setIsOpen] = useState(false);

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
    return { isOpen, toggleMenu, menuRef };
}
