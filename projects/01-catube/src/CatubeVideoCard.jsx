export function CatubeVideoCard ({avatar, userName}) {
    return (
        <article className="ct-videoCard">
            <header className="ct-videoCard-header">
                <img className='ct-videoCard-avatar' src={avatar} alt="thumbnail" />
            </header>
        </article>
    )
}