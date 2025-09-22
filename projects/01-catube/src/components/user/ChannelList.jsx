import {CatubeSubsCard} from './CatubeSubsCard'

export function ChannelList ({channels}){
    return (
        <div className='sr-channelSection'>
            {channels.map((channel) => (
                <CatubeSubsCard
                key={channel.id}
                userName={channel.userName}
                avatar={channel.avatar}
                subscriptions={channel.subscriptions}
                />
            ))}
        </div>
    )
}