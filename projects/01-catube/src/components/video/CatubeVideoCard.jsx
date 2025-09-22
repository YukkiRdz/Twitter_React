import './VideoCard.css'

export function CatubeVideoCard ({thumbnail, avatar, userName, title, description}) {

    return (
        <article className="ct-videoCard">
            <header className="ct-videoCard-header">
                <img className='ct-videoCard-thumbnail' src={thumbnail} alt="thumbnail" />
            </header>
            <div className="ct-videoCard-info">
                <div className="ct-videoCard-infoVideo">
                    <span className="ct-videoCard-title">{title}</span>
                    <span>views + fecha</span>
                </div>
                <div className="ct-videoCard-infoUser">
                    <div className="ct-videoCard-user">
                        <img className='ct-videoCard-avatar' src={avatar} alt="avatar" />
                        <span className="ct-videoCard-infoUserName">{userName}</span>
                    </div>
                    <span className='ct-videoCard-description'>{description}</span>
                </div>
            </div>
        </article>
    )
}