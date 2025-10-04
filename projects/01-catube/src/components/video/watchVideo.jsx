//components
import { CatubeSubsCard } from "../user/CatubeSubsCard.jsx"

//styles
import './WatchVideo.css'
import '../user/CatubeSubsCard.css'

export function WatchVideo ({url, title, avatar, userName, description}) {

    return (
        <article className="vv-displayVideo-container">
            <header className="vv-displayVideo-header"> 
                <video className='vv-displayVideo' src={url} controls></video>
            </header>
            <div>
                <h1 className='vv-displayVideo-title'>{title}</h1>
                <CatubeSubsCard avatar={avatar} userName={userName} subscriptions='2.7M' />
            </div>
            <div className="vv-displayVideo-description">{description}</div>
        </article>
    )
}

export default WatchVideo;
