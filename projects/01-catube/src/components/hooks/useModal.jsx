// hooks/useModal.jsx
import { useEffect, useRef, useState } from 'react';

export function useModal() {
    const modalRef = useRef(null); //useRef detect clicks off menu
    const [modalIsOpen, setModalIsOpen] = useState(false); //Start closed

    //Toggle dropdown
    const toggleModal = () => setModalIsOpen(prev => !prev);

    //Close on outside click or Escape
    useEffect(() => {
        //Close with click off menu
        const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
        };

        //Close with esc
        const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
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

    return { modalIsOpen, toggleModal, modalRef };
}
