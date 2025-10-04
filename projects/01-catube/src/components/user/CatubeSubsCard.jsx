//Hooks
import { useState } from "react";
import { useLocation } from 'react-router-dom';

//Styles
import './CatubeSubsCard.css'

export function CatubeSubsCard({ avatar, userName, subscriptions, isFollowing: initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    const { pathname } = useLocation();
    const isVideoPage = pathname.includes('/watch')
    
    //Conditional classes and text
    const cardClassName = isVideoPage
        ? 'ct-subsCard watch'
        : 'ct-subsCard';
    const text = isFollowing
        ? 'Subscribed'
        : 'Subscribe';
    const buttonClassName = isFollowing
        ? 'ct-subsCard-button is-following'
        : 'ct-subsCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing); // Cambia el estado (true/false)
    };

    return (
        <article className={cardClassName}>
            <header className="ct-subsCard-header">
                <img className="ct-subsCard-avatar" src={avatar} alt={`Avatar de ${userName}`}/>
                <div className="ct-subsCard-info">
                <h3 className="ct-subsCard-userName">{userName}</h3>
                <span className="ct-subsCard-infoUserName">{subscriptions}</span>
                </div>
            </header>

            <aside className="ct-subsCard-aside">
                <button className={buttonClassName} onClick={handleClick}>
                <span className="ct-subsCard-text">{text}</span>
                <span className="ct-subsCard-unsubscribe">Unsubscribe</span>
                </button>
            </aside>
        </article>
    );
}
