import React, {useState, useMemo} from 'react'

//Components
import { ChannelList } from '../user/ChannelList.jsx'
import { VideoList } from '../video/VideoList.jsx'
import Header from '../header/Header.jsx'

//Assets
import Angel from '../../assets/images/profile/angel.jpg'
import Yukki from '../../assets/images/profile/yukki.jpg'
import Gena from '../../assets/images/profile/gena.jpg'
import Jere from '../../assets/images/profile/jere.jpg'
import thumbnail from '../../assets/images/thumbnail/Pinterest Swap Challenge.jpg'

export function Search() {
  const [searchQuery, setSearchQuery] = useState('');


  //esto se reemplaza
  const channels = useMemo(
    () => [
      { id: 1, avatar: Angel, userName: "Colithoxz", subscriptions: "3.4M subs" },
      { id: 2, avatar: Gena, userName: "Sheni", subscriptions: "4K subs" },
      { id: 3, avatar: Jere, userName: "Gazzard", subscriptions: "3.4K subs" },
      { id: 4, avatar: Yukki, userName: "yukki", subscriptions: "2 subs" }
    ],
    []
  );

  const videos = useMemo(
    () => [
      { id: 1, thumbnail, avatar: Yukki, title:'Pinterest Swap Challenge', userName: "Yukki", description: "esto es una descripcion de prueba. repito esto es una descripcion de prueba" },
      { id: 2, thumbnail, avatar: Gena, title:'title 2', userName: "Sheni", description: "esto es una descripcion de prueba. repito esto es una descripcion de prueba" },
      { id: 3, thumbnail, avatar: Jere, title:'title 3', userName: "Gazzard", description: "esto es una descripcion de prueba. repito esto es una descripcion de prueba" },
    ],
    []
  );

  // const shorts = useMemo(
  //   () => [
  //     { id: 1, shortThumbnail, avatar: Yukki, title:'Pinterest Swap Challenge', userName: "Yukki" },
  //     { id: 2, shortThumbnail, avatar: Gena, title:'title 2', userName: "Sheni"},
  //     { id: 3, shortThumbnail, avatar: Jere, title:'title 3', userName: "Gazzard"},
  //   ],
  //   []
  // );

  //filtros
  const filteredChannels = channels.filter((ch) => ch.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredVideos = videos.filter((vd) => 
    vd.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vd.userName.toLowerCase().includes((searchQuery.toLowerCase())) ||
    vd.description.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <section className='search-page'>
      <header>
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </header>
      <main className='main-content'>
        <section className='channel-section'>
          <ChannelList channels={filteredChannels} />
        </section>
        <section className='video-section'>
          <VideoList videos={filteredVideos} />
        </section>
      </main>
    </section>
  )
}

export default Search