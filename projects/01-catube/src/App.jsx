import './components/user/CatubeSubsCard.css'
import './components/video/VideoCard.css'
import { CatubeSubsCard } from './components/user/CatubeSubsCard.jsx'
import { CatubeVideoCard } from './components/video/CatubeVideoCard.jsx'
import Angel from './assets/profile/angel.jpg'
import Yukki from './assets/profile/yukki.jpg'
import Gena from './assets/profile/gena.jpg'
import Jere from './assets/profile/jere.jpg'
import thumbnail from './assets/thumbnail/Pinterest Swap Challenge.jpg'
import Header from './Header.jsx'


function App() {
  return (
    <main className='App'>
      <CatubeSubsCard isFollowing avatar={Angel} userName='Colithoxz' subscriptions='3.4M subs'>
        Colithoxz
      </CatubeSubsCard>
      <CatubeSubsCard isFollowing avatar={Gena} userName='Sheni' subscriptions='4K subs'>
        Sheni
      </CatubeSubsCard>
      <CatubeSubsCard isFollowing avatar={Jere} userName='Gazzard' subscriptions='3.4K subs'>
        Gazzard
      </CatubeSubsCard>
      <CatubeVideoCard thumbnail={thumbnail} avatar={Yukki} title='Pinterest Swap Challenge' userName='Yukki' description='esto es una descripcion de prueba. repito esto es una descripcion de prueba'>
      </CatubeVideoCard>
      <CatubeSubsCard avatar={Yukki} userName='yukki' subscriptions='2 subs'>
        Yukki
      </CatubeSubsCard>
      <CatubeVideoCard thumbnail={thumbnail} avatar={Yukki} title='Pinterest Swap Challenge' userName='Yukki' description='esto es una descripcion de prueba. repito esto es una descripcion de prueba'>
      </CatubeVideoCard>
      <CatubeVideoCard thumbnail={thumbnail} avatar={Yukki} title='Pinterest Swap Challenge' userName='Yukki' description='esto es una descripcion de prueba. repito esto es una descripcion de prueba'>
      </CatubeVideoCard>
      <CatubeVideoCard thumbnail={thumbnail} avatar={Yukki} title='Pinterest Swap Challenge' userName='Yukki' description='esto es una descripcion de prueba. repito esto es una descripcion de prueba'>
      </CatubeVideoCard>
    </main>
  )
}

export default App
