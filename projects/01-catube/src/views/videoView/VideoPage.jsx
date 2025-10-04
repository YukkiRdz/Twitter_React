import {useState, useMemo} from 'react'

//Components
import Header from '../../components/header/Header.jsx'
import WatchVideo from '../../components/video/watchVideo.jsx';

//Styles
import './VideoPage.css';

//Assets
import Yukki from '../../assets/images/profile/yukki.jpg'
import Video from '../../assets/videos/channel-video-proof.mp4'
import thumbnail from '../../assets/images/thumbnail/Pinterest Swap Challenge.jpg'
import Gena from '../../assets/images/profile/gena.jpg'
import Jere from '../../assets/images/profile/jere.jpg'


export function VideoPage() {
    const [searchQuery, setSearchQuery] = useState('');

    //esto se reemplaza
    const video = useMemo(() => ({
        url: Video,
        title: 'Pinterest Swap Challenge',
        avatar: Yukki,
        userName: "Yukki",
        description: "esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito, esto es una descripcion de prueba...Repito"
    }), []);

    // const videos = useMemo(
    //     () => [
    //         { id: 1, thumbnail, avatar: Yukki, title:'Pinterest Swap Challenge', userName: "Yukki", description: "esto es una descripcion de prueba. repito esto es una descripcion de prueba" },
    //         { id: 2, thumbnail, avatar: Gena, title:'title 2', userName: "Sheni", description: "esto es una descripcion de prueba. repito esto es una descripcion de prueba" },
    //         { id: 3, thumbnail, avatar: Jere, title:'title 3', userName: "Gazzard", description: "esto es una descripcion de prueba. repito esto es una descripcion de prueba" },
    //         { id: 4, thumbnail, avatar: Yukki, title:'Pinterest Swap Challenge', userName: "Yukki", description: "esto es una descripcion de prueba. repito esto es una descripcion de prueba" },
    //         { id: 5, thumbnail, avatar: Gena, title:'title 2', userName: "Sheni", description: "esto es una descripcion de prueba. repito esto es una descripcion de prueba" },
    //         { id: 6, thumbnail, avatar: Jere, title:'¿Qué pasa si mezclás esto?', userName: "Gazzard", description: "esto es una descripcion de prueba. repito esto es una descripcion de prueba" },
    //         { id: 7, thumbnail, avatar: Yukki, title:'Mini vlog: 1 día en Buenos Aires', userName: "Yukki", description: "esto es una descripcion de prueba. repito esto es una descripcion de prueba" },
    //         { id: 8, thumbnail, avatar: Gena, title:'Cómo se ve el código detrás', userName: "Sheni", description: "esto es una descripcion de prueba. repito esto es una descripcion de prueba" },
    //         { id: 9, thumbnail, avatar: Jere, title:'Este sonido me persigue', userName: "Gazzard", description: "esto es una descripcion de prueba. repito esto es una descripcion de prueba" },
    //         ],
    //         []
    //     );

    return (
        <div className="video-page">
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <main className="main-content-video">
                <WatchVideo {...video} />
            </main>
        </div>
    );
}
