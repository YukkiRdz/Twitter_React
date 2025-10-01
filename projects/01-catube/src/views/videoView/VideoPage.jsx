import {useState, useMemo} from 'react'

//Components
import Header from '../../components/header/Header.jsx'
import WatchVideo from '../../components/video/watchVideo.jsx';

//Styles
import './VideoPage.css';
import '../../components/user/CatubeSubsCard.css'

//Assets
import Yukki from '../../assets/images/profile/yukki.jpg'
import Video from '../../assets/videos/channel-video-proof.mp4'
import thumnail from '../../assets/images/thumbnail/Pinterest Swap Challenge.jpg'

export function VideoPage() {
    const [searchQuery, setSearchQuery] = useState('');

    //esto se reemplaza
    const video = useMemo(() => ({
        thumnail: thumnail,
        title: 'Pinterest Swap Challenge',
        avatar: Yukki,
        userName: "Yukki",
        description: "esto es una descripcion de prueba..."
    }), []);

    return (
        <div className="video-page">
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <main className="main-content">
                <WatchVideo {...video} />
            </main>
        </div>
    );
}
