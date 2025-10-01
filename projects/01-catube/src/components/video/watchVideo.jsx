import { CatubeSubsCard } from "../user/CatubeSubsCard.jsx"

export function WatchVideo ({thumbnail, title, avatar, userName, description}) {

    return (
        <article className="vv-displayVideo-container">
            <header className="vv-displayVideo-header">
                <img src={thumbnail} alt="thumbnail de prueba" />
                {/* <video className='vv-displayVideo' src={link} controls></video> */}
            </header>
            <div>
                <span className='vv-displayVideo-title'>{title}</span>
                <CatubeSubsCard avatar={avatar} userName={userName} />
            </div>
            <div className="vv-displayVideo-description">{description}</div>
        </article>
    )
}

export default WatchVideo;
