import {CatubeVideoCard} from './CatubeVideoCard'
import './VideoList.css'

export function VideoList({videos}) {
    return (
        <div className='sr-videosSection'>
            {videos.map((video) => (
                <CatubeVideoCard 
                key={video.id}
                thumbnail={video.thumbnail}
                title={video.title}
                avatar={video.avatar}
                userName={video.userName}
                description={video.description}
                />
            ))}
        </div>
    )
}